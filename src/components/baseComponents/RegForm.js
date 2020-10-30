import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import validator from 'validator';

const RegForm = () => {
    const [username, setUsername] = useState({ username: '', isValid: undefined });
    const [email, setEmail] = useState({ email: '', isValid: undefined });
    const [password, setPassword] = useState({ password: '', isValid: undefined });



    const onUserTextChange = (text) => {
        const valid = validator.isAlphanumeric(text);
        setUsername({ username: text, isValid: valid })
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

    const submit = () => {
        if(username.isValid && password.isValid && email.isValid){
            console.log({username: username.username, password: password.password, email: email.email, })
        }
    }

    return <Form style={styles.regForm}>
        <Text style={styles.header}>Register</Text>

        <Item style={styles.item} success={username.isValid} error={username.isValid !== undefined && !username.isValid ? true : false}>
            <Input style={styles.textInput} placeholder="Your name..." underlineColorAndroid={'transparent'} placeholderTextColor='#999999'
                onChangeText={onUserTextChange} />
        </Item>

        <Item style={styles.item} success={email.isValid} error={email.isValid !== undefined && !email.isValid ? true : false}>
            <Input style={styles.textInput} placeholder="Your Email..."
                underlineColorAndroid={'transparent'} placeholderTextColor='#999999'
                onChangeText={onEmailTextChange} />
        </Item>

        <Item style={styles.item} success={password.isValid} error={password.isValid !== undefined && !password.isValid ? true : false}>
            <Input style={styles.textInput} placeholder="Your Password..."
                underlineColorAndroid={'transparent'} secureTextEntry={true} placeholderTextColor='#999999' 
                onChangeText={onPaasswordTextChange}/>
        </Item>


        <TouchableOpacity style={styles.button} onPress={() => submit()}>
            <Text style={styles.btnText}>Sign up</Text>
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
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default RegForm;