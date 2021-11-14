import React from 'react'
import {Text, StyleSheet, FlatList, View} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function getUserItem({item: user}){
        return (
            <ListItem bottomDivider onPress={()=> props.navigation.navigate('UserForm')}>
                <Avatar source={{uri: user.avatarUrl}} />
                <View>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle> 
                </View>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'black',
    },
});