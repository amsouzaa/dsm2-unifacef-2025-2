import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default function TeamCommitmentsScreen() {
  const compromissos = [
    {
      title: 'Amanda Alves de Souza',
      data: [
        { id: '1', hora: '09h30', descricao: 'Reunião "Daily"' },
        { id: '2', hora: '14h00', descricao: 'Reunião com cliente Carros & Carros' },
        { id: '3', hora: '16h30', descricao: 'Prazo final Projeto X' },
      ],
    },
    {
      title: 'Jurema (chefa)',
      data: [
        { id: '4', hora: '09h30', descricao: 'Reunião "Daily"' },
        { id: '5', hora: '12h00', descricao: 'Almoço com a diretoria' },
        { id: '6', hora: '15h00', descricao: 'Saída viagem' },
      ],
    },
    {
      title: 'Aderbal',
      data: [
        { id: '7', hora: '09h30', descricao: 'Reunião "Daily"' },
        { id: '8', hora: '13h30', descricao: 'Visita técnica Uni-FACEF' },
        { id: '9', hora: '16h30', descricao: 'Prazo final Projeto X' },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.hora}>{item.hora}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Compromissos da equipe</Text>
      <Text style={styles.subtitle}>Amanda Alves de Souza</Text>
      <Text style={styles.subtitle}>Engenharia de Software</Text>
      <SectionList
        sections={compromissos}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 5,
    color: '#333',
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
    borderLeftColor: '#34C759',
  },
  hora: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#34C759',
  },
  descricao: {
    fontSize: 14,
    color: '#333',
  },
});
