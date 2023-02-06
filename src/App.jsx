import { useEffect, useState } from 'react'
import './App.css'
import { api } from './components/services/api';
import { Header } from './components/Header/index.jsx';
import { ProductList } from './components/ProductsList';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { CartProduct } from './components/CartProduct';
import styled from 'styled-components';

function App() {

  const [produtos, setProdutos] = useState([])

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

  // handleClick(props){
  //   return <CartProduct/>
  // }



 

  return (
    
    

    <div >

      <Header/>
      <main className='mainPrincipal'>
        <ProductList produtos= {produtos}/>
        <Cart/>
        {/* <CartProduct/> */}


      </main>
      

    
    </div>
  )
}

export default App
