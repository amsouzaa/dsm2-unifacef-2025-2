import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SuccessScreen({ route }) {
    const { userData } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro Realizado!</Text>
            
            <View style={styles.dataContainer}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{userData.nome}</Text>
                
                <Text style={styles.label}>E-mail:</Text>
                <Text style={styles.value}>{userData.email}</Text>
                
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.value}>{userData.telefone}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    dataContainer: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
});