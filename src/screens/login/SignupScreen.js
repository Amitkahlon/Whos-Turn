import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import Simplebtn from '../../components/baseComponents/Simplebtn';
import RegForm from '../../components/medComponents/RegForm'

const SignupScreen = () => {

    return <Container style={styles.container}>
        <RegForm />
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

export default SignupScreen;