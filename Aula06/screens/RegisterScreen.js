import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [errors, setErrors] = useState({});
    
    const navigation = useNavigation();

    const validateForm = () => {
        const newErrors = {};

        // Validação do nome
        if (!nome.trim()) {
            newErrors.nome = 'Nome é obrigatório';
        }

        // Validação do email
        if (!email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email inválido';
        }

        // Validação da senha
        if (!senha) {
            newErrors.senha = 'Senha é obrigatória';
        }

        // Validação da confirmação de senha
        if (senha !== confirmarSenha) {
            newErrors.confirmarSenha = 'As senhas não conferem';
        }

        // Validação do telefone
        if (!telefone.trim()) {
            newErrors.telefone = 'Telefone é obrigatório';
        } else if (!/^\d+$/.test(telefone)) {
            newErrors.telefone = 'Telefone deve conter apenas números';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = () => {
        if (validateForm()) {
            navigation.navigate('Success', {
                userData: {
                    nome,
                    email,
                    telefone
                }
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            
            <TextInput
                style={[styles.input, errors.nome && styles.inputError]}
                placeholder="Nome completo"
                value={nome}
                onChangeText={setNome}
            />
            {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}
            
            <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            
            <TextInput
                style={[styles.input, errors.senha && styles.inputError]}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
            
            <TextInput
                style={[styles.input, errors.confirmarSenha && styles.inputError]}
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
            />
            {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}
            
            <TextInput
                style={[styles.input, errors.telefone && styles.inputError]}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="numeric"
            />
            {errors.telefone && <Text style={styles.errorText}>{errors.telefone}</Text>}
            
            <TouchableOpacity 
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff',
        alignItems: 'center', // Centraliza os elementos horizontalmente
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        width: '80%', // Reduz a largura para 80% da tela
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
        width: '80%', // Alinha as mensagens de erro com os inputs
    },
    button: {
        backgroundColor: 'purple', // Mudando a cor do botão para rosa
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        width: '80%', // Mantém a largura consistente com os inputs
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});