import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Simplebtn from '../components/baseComponents/Simplebtn';

const SignupScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return <View style={styles.page}>
        <View style={styles.formContainer}>
            <Text style={styles.logo}>Sign up</Text>
            <Text style={styles.text}>Username</Text>
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
            <Simplebtn title="Sign In" onPress={() => console.log({username, password, email})} />
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
        width: 300,
        height: 500,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
    text: {
        height: 30,
        fontWeight: 'bold'
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
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 10,
        borderWidth: 1
    },
    signBtn: {

    }
});

export default SignupScreen;