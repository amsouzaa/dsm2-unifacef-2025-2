import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>
      <Text style={styles.subtitle}>Amanda Alves de Souza</Text>
      <Text style={styles.subtitle}>Engenharia de Software</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Meus compromissos"
          onPress={() => navigation.navigate('UserCommitments')}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Compromissos da equipe"
          onPress={() => navigation.navigate('TeamCommitments')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 15,
  },
});
