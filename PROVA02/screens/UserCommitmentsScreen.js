import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function UserCommitmentsScreen() {
  const compromissos = [
    { id: '1', hora: '09h30', descricao: 'Reunião "Daily"' },
    { id: '2', hora: '14h00', descricao: 'Reunião com cliente Carros & Carros' },
    { id: '3', hora: '16h30', descricao: 'Prazo final Projeto X' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.hora}>{item.hora}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus compromissos</Text>
      <Text style={styles.subtitle}>Amanda Alves de Souza</Text>
      <Text style={styles.subtitle}>Engenharia de Software</Text>
      <FlatList
        data={compromissos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  lista: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  hora: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007AFF',
  },
  descricao: {
    fontSize: 14,
    color: '#333',
  },
});
