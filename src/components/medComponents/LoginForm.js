import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import validator from 'validator';
import jsonServer from "../../api/jsonServer";

import { useSelector, useDispatch } from 'react-redux';
import { userConnect } from "../../../stateManagment/actions/actions";


const LoginForm = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const [email, setEmail] = useState({ email: '', isValid: undefined });
    const [password, setPassword] = useState({ password: '', isValid: undefined });

    const validateAndSetEmail = (email) => {
        const valid = validator.isEmail(email);
        setEmail({ email, isValid: valid })
    }

    const onPaasswordTextChange = (password) => {
        let valid;
        valid = validator.isLength(password, { min: 6, max: 16 })
        setPassword({ password, isValid: valid })
    }

    const submit = async () => {
        dispatch(userConnect({
            userName: "AmitKahlon"
        }))
        //attempt_login logic
        // if (password.isValid && email.isValid) {
        //     const userInput = { email: email.email, password: password.password };
        //     const searchString = `?email=${userInput.email}`
        //     const result = await jsonServer.get(`/users${searchString}`).catch(err => {
        //         console.log("error occured")
        //         console.log(err);
        //     })

        //     const userFromDatabase = result.data[0];

        //     if (result.status === 200 && userFromDatabase.password === userInput.password) {
        //         delete userInput.password;
        //         dispatch(userConnect(userInput));
        //     } else {
        //         //wrong email and password
        //     }
        // }
    }

    return <Form style={styles.signForm}>
        <Text style={styles.header}>Sign In</Text>
        <Item floatingLabel style={styles.item} success={email.isValid} error={email.isValid !== undefined && !email.isValid ? true : false}>
            <Label style={styles.label}>Email</Label>
            <Input style={styles.textInput} underlineColorAndroid={'transparent'} placeholderTextColor='#e6e6e6'
                onChangeText={validateAndSetEmail} />
        </Item>

        <Item floatingLabel style={styles.item} success={password.isValid} error={password.isValid !== undefined && !password.isValid ? true : false}>
            <Label style={styles.label}>Password</Label>
            <Input style={styles.textInput} underlineColorAndroid={'transparent'} placeholderTextColor='#999999'
                onChangeText={onPaasswordTextChange} last secureTextEntry />
        </Item>
        <Button style={styles.signBtn} onPress={submit} block primary>
            <Text style={styles.textBtn}>Sign In</Text>
        </Button>

        <Text style={styles.note}>Doesn't have an account yet?</Text>

        <Button rounded style={styles.register} onPress={() => navigation.navigate('Signup')}>
            <Text>Register</Text>
        </Button>

    </Form>
}

const styles = StyleSheet.create({
    signForm: {
        alignSelf: 'stretch'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#fff',
        paddingBottom: 10,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
    },
    item: {
    },
    label: {
        color: '#e6e6e6'
    },
    signBtn: {
        marginTop: 30,
    },
    textBtn: {
        fontSize: 30,
    },
    note: {
        marginTop: 10,
        color: '#fff',
        textAlign: 'center'
    },
    register: {
        alignSelf: 'center',
        marginTop: 15
    }
});

export default LoginForm;