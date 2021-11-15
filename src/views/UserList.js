import { getActionFromState } from '@react-navigation/core'
import React from 'react'
import {Text, StyleSheet, FlatList, View} from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function getUserItem({item: user}){
        return (
            <ListItem.Swipeable 
                leftContent={
                    <Button
                        onPress={()=> props.navigation.navigate('UserForm')}
                        title="edit"
                        icon={{ name: 'edit', color: 'orange' }}
                        buttonStyle={{ minHeight: '100%' }}
                    />
                }
                rightContent={
                    <Button
                        title="Delete"
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                }
                bottomDivider 
            >
                <Avatar source={{uri: user.avatarUrl}} />
                <View>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle> 
                </View>
            </ListItem.Swipeable>
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
    rowFlexStart: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    rowFlexEnd:{
        flexDirection: "row",
        justifyContent: 'flex-end'
    }
});