import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import validator from 'validator';
import jsonServer from "../../api/jsonServer";
import { useNavigation } from '@react-navigation/native';

const RegForm = () => {
    const navigation = useNavigation();
    const [name, setName] = useState({ name: '', isValid: undefined });
    const [email, setEmail] = useState({ email: '', isValid: undefined });
    const [password, setPassword] = useState({ password: '', isValid: undefined });

    const onNameTextChange = (text) => {
        const valid = validator.isAlphanumeric(text);
        setName({ name: text, isValid: valid })
    }

    const onEmailTextChange = (text) => {
        const valid = validator.isEmail(text);
        setEmail({ email: text, isValid: valid })
    }

    const onPaasswordTextChange = (text) => {
        let valid;
        valid = validator.isLength(text, { min: 6, max: 16 })
        setPassword({ password: text, isValid: valid })
    }

    const submit = async () => {
        if (name.isValid && password.isValid && email.isValid) {
            const newUser = { name: name.name, password: password.password, email: email.email, }
            const result = await jsonServer.post(`/users`, newUser).catch(err => {
                console.log(err);
            })

            if (result.status === 201) {
                navigation.navigate('SignIn', { registeredUser: { email: newUser.email, password: newUser.password } })
            }
        }
    }

    return <Form style={styles.regForm}>
        <Text style={styles.header}>Register</Text>

        <Item style={styles.item} success={name.isValid} error={name.isValid !== undefined && !name.isValid ? true : false}>
            <Input style={styles.textInput} placeholder="Your name..." underlineColorAndroid={'transparent'} placeholderTextColor='#999999'
                onChangeText={onNameTextChange} />
        </Item>

        <Item style={styles.item} success={email.isValid} error={email.isValid !== undefined && !email.isValid ? true : false}>
            <Input style={styles.textInput} placeholder="Your Email..."
                underlineColorAndroid={'transparent'} placeholderTextColor='#999999'
                onChangeText={onEmailTextChange} />
        </Item>

        <Item style={styles.item} success={password.isValid} error={password.isValid !== undefined && !password.isValid ? true : false}>
            <Input style={styles.textInput} placeholder="Your Password..."
                underlineColorAndroid={'transparent'} secureTextEntry={true} placeholderTextColor='#999999'
                onChangeText={onPaasswordTextChange} />
        </Item>

        <TouchableOpacity style={styles.button} onPress={submit}>
            <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
    </Form>
}

const styles = StyleSheet.create({
    regForm: {
        alignSelf: 'stretch'
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 30,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    item: {
        marginVertical: 15
    },
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        color: '#fff',
    },
    button: {
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btnText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default RegForm;