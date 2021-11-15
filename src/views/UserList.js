import React, { useContext } from 'react'
import {Text, StyleSheet, FlatList, View, Alert} from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {
    const {state} = useContext(UsersContext)
    
    function confirmUserDeletion(user){
        Alert.alert('Delete User', 'Do you want delete this user?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete ', + user.id)
                }
            },
            {
                text: 'Não'
            },
        ])
    }
    
    function getUserItem({item: user}){
        return (
            <ListItem.Swipeable 
                leftContent={
                    <Button
                        onPress={()=> props.navigation.navigate('UserForm', user)}
                        title="edit"
                        icon={{ name: 'edit', color: 'orange' }}
                        buttonStyle={{ minHeight: '100%' }}
                    />
                }
                rightContent={
                    <Button
                        onPress={() => confirmUserDeletion(user)}
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
                data={state.users}
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