import React, { useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Subtitle, List, ListItem, Thumbnail, InputGroup, Input } from 'old-native-base';
import { StyleSheet } from 'react-native';


const GroupsScreen = ({ navigation }) => {
    const [groups, setGroups] = useState([
        {
            id: 0,
            avatarUri: "https://pitotihome.co.il/f-users/user_202022/website_202527/images/img_4270_2.jpg",
            name: "Kahlon's House",
            description: "All house chores at Kahlon's house",
            participantes: 3
        },
        {
            id: 1,
            avatarUri: "https://market.marmelada.co.il/images/thumbnails/750/500/2952472.jpg",
            name: "Levi's House",
            description: "All house chores at Levi's house",
            participantes: 2
        },
    ]);

    const [searchValue, setSearchValue] = useState("");

    const RenderListItem = item => {
        return <ListItem thumbnail >
            <Left>
                <Thumbnail square source={{ uri: item.avatarUri }} />
            </Left>
            <Body>
                <Text>{item.name}</Text>
                <Text note numberOfLines={1}>{item.description}</Text>
                <Text note numberOfLines={1} style={{fontWeight: 'bold'}}>{`Members: ${item.participantes}`}</Text>
            </Body>
            <Right>
                <Button transparent onPress={() => navigation.navigate('Group', item.id)}>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    }

    return <Container>
        <InputGroup>
            <Icon name='ios-search' />
            <Input placeholder='Search' value={searchValue} onChangeText={setSearchValue} />
            <Button transparent onPress={() => console.log(searchValue)}>
                <Text>Search</Text>
            </Button>
        </InputGroup>

        <List dataArray={groups} keyExtractor={(group) => group.id.toString()} renderRow={(group) => RenderListItem(group)}>
        </List>
    </Container>
}

const styles = StyleSheet.create({

});

export default GroupsScreen;