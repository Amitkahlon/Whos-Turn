import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'old-native-base';
import {DateOfBirthForm} from '_organisms';
import { Text } from 'native-base';

const DateOfBirthScreen = ({ navigation }) => {
    return <Container style={styles.container}>
        <DateOfBirthForm navigation={navigation} />
    </Container>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f'
    }
});

export default DateOfBirthScreen;