import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'old-native-base';
import {PasswordForm} from '_organisms';

const PasswordScreen = ({navigation}) => {
    return <Container style={styles.container}>
        <PasswordForm navigation={navigation}/>
    </Container>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
    }
});

export default PasswordScreen;