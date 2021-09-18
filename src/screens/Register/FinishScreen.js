import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'old-native-base';
import { RegisterOutro } from '_organisms';


const FinishScreen = () => {

    return <Container style={styles.container}>
        <RegisterOutro />
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

export default FinishScreen;