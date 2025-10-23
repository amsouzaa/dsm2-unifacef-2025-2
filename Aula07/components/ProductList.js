import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
    const renderItem = ({ item }) => (
        <ProductCard product={item} />
    );

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 16,
    },
});