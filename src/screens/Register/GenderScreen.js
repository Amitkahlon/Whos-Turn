import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'old-native-base';
import {GenderForm} from '_organisms';

const GenderScreen = ({navigation}) => {
    return <Container style={styles.container}>
        <GenderForm navigation={navigation}/>
    </Container>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
    }
});

export default GenderScreen;