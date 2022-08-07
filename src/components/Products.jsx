import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../lib/requestMethods";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  //consts
  //states
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);
  //effects
  useEffect(()=>{
    const getProducts = async () => {
      try {
        const res = cat ? await publicRequest.get(`/products?category=${cat}`) : await publicRequest.get(`/products?category`) ;
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  },[cat])
  
  useEffect(()=>{
    cat && setFilteredProducts(products.filter(
      (item) => Object.entries(filters).every(([key,value]) => item[key].includes(value))
    ))
  },[products,cat,filters])

  useEffect(() => {
    if(sort === 'newest'){
      setFilteredProducts(prev => [...prev].sort((a,b) => a.createdAt - b.createdAt))
    }else if(sort === 'asc'){
      setFilteredProducts(prev => [...prev].sort((a,b) => a.price - b.price))
    }else if(sort === 'desc'){
      setFilteredProducts(prev => [...prev].sort((a,b) => b.price - a.price))
    }
  },[sort])
  //handlers
  return (
    <Container>
      {
        cat ? 
          filteredProducts.map((item) => (
            <Product item={item} key={item._id} />
          ))
        :
          products.map((item) => (
            <Product item={item} key={item._id} />
          ))
      }
      
    </Container>
  );
};

export default Products;
