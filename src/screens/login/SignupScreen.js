import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Simplebtn from '../../components/baseComponents/Simplebtn'

const SignupScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return <View style={styles.page}>
        <View style={styles.formContainer}>
            <Text style={styles.logo}>Sign up</Text>
            <Text style={styles.text}>User</Text>
            <TextInput
                style={styles.input}
                placeholder="Username..."
                placeholderTextColor="#003f5c"
                value={username}
                onChangeText={setUsername}
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="Password..."
                placeholderTextColor="#003f5c"
                value={password}
                onChangeText={setPassword}
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email..."
                placeholderTextColor="#003f5c"
                value={email}
                onChangeText={setEmail}
            />
            <Simplebtn title="SignUp" onPress={() => console.log({ username, password, email })} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: "85%",
        height: "80%",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
    text: {
        height: "6%",
        fontWeight: 'bold',
        width: "100%",
        textAlign: "center"
    },
    logo: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        marginBottom: 30,
    },
    input: {
        width: "80%",
        height: "8%",
        marginBottom: 20,
        justifyContent: "center",
        padding: 10,
        borderWidth: 1
    }
});

export default SignupScreen;