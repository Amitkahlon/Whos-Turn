import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'old-native-base';
import {NameForm} from '_organisms';

const NameScreen = ({navigation}) => {

    return <Container style={styles.container}>
        <NameForm navigation={navigation}/>
    </Container>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
    }
});

export default NameScreen;