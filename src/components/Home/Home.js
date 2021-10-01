import React from 'react';
import styled from 'styled-components';
import Product from '../Product/Product';
import allProducts from '../../ProductsData/productData.json'


const Home = () => {
    const products = allProducts;
    return (
        <Container>
            {
                products.map( pd => <Product product={pd} key={pd.id}></Product>)
            }
        </Container>
    );
};
export default Home;

const Container = styled.div`
    height: 100vh;
`