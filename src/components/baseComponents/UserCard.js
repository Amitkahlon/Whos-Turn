import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native';

const UserCard = ({ user }) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: user.image_uri }} />
        <Text style={styles.name}>{user.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        alignItems: 'center',
    },
    image: {
        width: 85,
        height: 70,
        borderRadius: 4,
        margin: 5,
        borderRadius: 40        
},
    name: {
    fontSize: 12,
}
});

export default UserCard;