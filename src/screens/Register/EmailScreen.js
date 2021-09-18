import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'old-native-base';
import {EmailForm} from '_organisms';

const EmailScreen = ({navigation}) => {

    return <Container style={styles.container}>
        <EmailForm navigation={navigation} />
    </Container>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
    }
});

export default EmailScreen;