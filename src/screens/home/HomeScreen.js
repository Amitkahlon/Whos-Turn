import React, { useState } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body, Left, Title, Right, Subtitle, List } from 'native-base';
import { StyleSheet } from "react-native";


const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            name: "לעשות כלים",
            isDone: false
        },
        {
            id: 1,
            name: "Do coffee",
            isDone: false
        },
        {
            id: 2,
            name: "לקנות מצרכים",
            isDone: false
        },
        {
            id: 4,
            name: "Do dishes",
            isDone: false
        },
        {
            id: 5,
            name: "Do coffee",
            isDone: false
        },
        {
            id: 6,
            name: "לקנות מצרכים",
            isDone: false
        },
    ])

    const RenderListItem = item => {
        return <ListItem button={true} onPress={() => navigation.navigate('Task', item.id)}>
            <CheckBox checked={item.isDone} color="green" />
            <Body>
                <Text>{item.name}</Text>
            </Body>
        </ListItem>
    }

    return <Container>
        <Container>
            {/* TODAYS TASKS */}
            {tasks.length !== 0 ? (
                <>
                    <Text style={styles.title}>Today's Tasks</Text>
                    <List dataArray={tasks} keyExtractor={task => task.id.toString()} renderRow={task => RenderListItem(task)}>
                    </List>
                </>
            ) : (
                    undefined
                )}

            {/* Tommorow Tasks */}
            {tasks.length !== 0 ? (
                <>
                    <Text style={styles.title}>Tommrow's Tasks</Text>
                    <List dataArray={tasks} keyExtractor={task => task.id.toString()} renderRow={task => RenderListItem(task)}>
                    </List>
                </>
            ) : (
                    undefined
                )}

            {tasks.length == 0 ? (
                <>
                    {/* <Container style={{ justifyContent: 'center' }}> */}
                        <Text style={styles.note}>Horray! you dont have any tasks</Text>
                        <Text style={styles.yet}>yet.</Text>
                    {/* </Container> */}
                </>
            ) : (
                    undefined
                )}
        </Container>
    </Container >

}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    note: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#b3b3b3',
        marginTop: 65
    },
    yet: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#b3b3b3',
        marginTop: 40
    }
});

export default HomeScreen;