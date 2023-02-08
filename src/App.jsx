import { useEffect, useState } from 'react'
import { api } from './components/services/api';
import { Header } from './components/Header/index.jsx';
import { ProductList } from './components/ProductsList';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { CartProduct } from './components/CartProduct';
import styled from 'styled-components';
import { StyledDiv } from './App.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  const [produtos, setProdutos] = useState([])
  const [search, setSearch] = useState('');
  const [currentSale, setCurrentSale] = useState([])


  const handleClick = (addProduto) => {
    const arrayFind = currentSale.find((item) => {
      return item.id === addProduto.id
    })
    if (!arrayFind) {
      setCurrentSale([...currentSale, addProduto])
      toast.success("Adicionado com sucesso!")



    } else {
      toast.error("Já existe no carrinho!")


    }
  }

  useEffect(() => {
    async function ShowProducts() {

      try {
        const response = await api.get("/products");
        setProdutos(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    ShowProducts();
  }, [])






  return (



    <StyledDiv >

      <Header currentSale={currentSale} setcurrenSale={setCurrentSale} produtos={produtos} setSearch={setSearch} />
      <main className='mainPrincipal'>
        <ProductList handleClick={handleClick} produtos={produtos} search={search} />
        <Cart currentSale={currentSale} setcurrenSale={setCurrentSale} />


      </main>
      <ToastContainer />



    </StyledDiv>
  )
}

export default App
