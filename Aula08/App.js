
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = ImagePicker.useMediaLibraryPermissions();
  const [imageUri, setImageUri] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Solicita permissões quando o app inicia (apenas se necessário)
    (async () => {
      try {
        if (!cameraPermission?.granted) {
          await requestCameraPermission();
        }
        if (!mediaPermission?.granted) {
          await requestMediaPermission();
        }
      } catch (e) {
        setError('Erro ao solicitar permissões');
        console.warn(e);
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      if (!mediaPermission?.granted) {
        const res = await requestMediaPermission();
        if (!res.granted) {
          Alert.alert('Permissão necessária', 'Permissão para acessar a galeria é necessária.');
          return;
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.7,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (e) {
      console.warn(e);
      setError('Erro ao selecionar imagem');
    }
  };

  const takePhoto = async () => {
    try {
      if (Platform.OS === 'web') {
        Alert.alert('Não disponível', 'A captura de câmera costuma não funcionar no web. Use um dispositivo físico ou Expo Go.');
        return;
      }

      if (!cameraPermission?.granted) {
        const res = await requestCameraPermission();
        if (!res.granted) {
          Alert.alert('Permissão necessária', 'Permissão para usar a câmera é necessária.');
          return;
        }
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.7,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (e) {
      console.warn(e);
      setError('Erro ao capturar foto');
    }
  };

  const clearImage = () => {
    setImageUri(null);
    setError(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Acesso à Câmera e Galeria</Text>

      <Text style={styles.statusText}>
        {cameraPermission?.granted ? 'Permissão de câmera: OK' : 'Permissão de câmera: Pendente'}
      </Text>
      <Text style={styles.statusText}>
        {mediaPermission?.granted ? 'Permissão de galeria: OK' : 'Permissão de galeria: Pendente'}
      </Text>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Abrir Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>Abrir Câmera</Text>
        </TouchableOpacity>
      </View>

      {imageUri ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: imageUri }} style={styles.preview} />
          <Text style={styles.uriText}>{imageUri}</Text>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearImage}>
            <Text style={styles.buttonText}>Remover Imagem</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.hint}>Nenhuma imagem selecionada</Text>
      )}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  statusText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 12,
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    marginHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  previewContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  preview: {
    width: 300,
    height: 300,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  uriText: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  hint: {
    marginTop: 24,
    color: '#666',
  },
  errorText: {
    marginTop: 12,
    color: 'red',
  },
  clearButton: {
    backgroundColor: '#ff2d55',
    marginTop: 10,
  },
});
