import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Subtitle, List, ListItem, Thumbnail } from 'native-base';
import {UserCard} from '_atoms';

const GroupScreen = () => {
const [participants, setParticipants] = useState([
    {
        id: 0,
        name: 'Amit Kahlon',
        image_uri: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
        id: 1,
        name: 'Amit Kahlon',
        image_uri: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
        id: 2,
        name: 'Amit Kahlon',
        image_uri: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
        id: 3,
        name: 'Amit Kahlon',
        image_uri: 'https://www.w3schools.com/howto/img_avatar.png',
    },
])

    return <Container>
        <Text style={styles.title}>Participants</Text>


        <List horizontal={true} dataArray={participants} keyExtractor={user => user.id.toString()}
            renderRow={user => {
                return <ListItem>
                    <UserCard user={user}/>
                </ListItem>
            }}>
        </List>
    </Container>

}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        textAlign: 'center'
    }
});

export default GroupScreen;