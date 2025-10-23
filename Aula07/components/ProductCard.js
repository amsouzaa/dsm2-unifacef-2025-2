import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductCard({ product }) {
    // Função para formatar o preço em reais
    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        <View style={styles.card}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>
            <View style={styles.categoryContainer}>
                <Text style={styles.category}>{product.category}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#2ecc71',
        marginBottom: 5,
    },
    categoryContainer: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    category: {
        fontSize: 14,
        color: '#666',
    },
});