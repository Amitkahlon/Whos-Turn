import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import Simplebtn from '../../components/baseComponents/Simplebtn';
import RegisterForm from '../../components/medComponents/RegisterForm'

const RegisterScreen = () => {

    return <Container style={styles.container}>
        <RegisterForm />
    </Container>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingHorizontal: 60
    }
});

export default RegisterScreen;