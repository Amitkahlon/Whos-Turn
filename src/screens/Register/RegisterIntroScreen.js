import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'old-native-base';
import {RegisterIntro} from '_organisms';


const RegisterIntroScreen = ({ navigation }) => {

    return <Container style={styles.container}>
        <RegisterIntro navigation={navigation}/>
    </Container>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#36485f',
    }
});

export default RegisterIntroScreen;