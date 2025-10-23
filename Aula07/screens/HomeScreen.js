import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

export default function HomeScreen() {
    // Dados mockados de produtos
    const products = [
        { id: '1', name: 'Notebook Dell', price: 3499.99, category: 'Eletrônicos' },
        { id: '2', name: 'Smartphone Samsung', price: 1999.99, category: 'Eletrônicos' },
        { id: '3', name: 'Tênis Nike', price: 399.99, category: 'Calçados' },
        { id: '4', name: 'Camiseta Adidas', price: 89.99, category: 'Vestuário' },
        { id: '5', name: 'Cafeteira Elétrica', price: 199.99, category: 'Eletrodomésticos' },
        { id: '6', name: 'Headphone JBL', price: 299.99, category: 'Eletrônicos' },
        { id: '7', name: 'Monitor LG', price: 899.99, category: 'Eletrônicos' },
        { id: '8', name: 'Calça Jeans Levi\'s', price: 199.99, category: 'Vestuário' },
        { id: '9', name: 'Air Fryer', price: 399.99, category: 'Eletrodomésticos' },
        { id: '10', name: 'Mouse Gamer', price: 149.99, category: 'Eletrônicos' },
    ];

    return (
        <View style={styles.container}>
            <ProductList products={products} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
});