import React, { useContext, useState } from 'react'
import {Text, StyleSheet, View, TextInput} from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return (
        <View style={styles.form}>
            <Text style={styles.text}>Name:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Inform the Name"
                placeholderTextColor="grey"
                value={user.name}
            />
            <Text style={styles.text}>Email:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Inform the Email"
                placeholderTextColor="grey"
                value={user.email}
            />
            <Text style={styles.text}>Avatar Url:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Inform the Avatar Url"
                placeholderTextColor="grey"
                textColor="black"
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'black',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        marginBottom: 10,
        color: 'black',
    },
    form: {
        padding: 12
    }
});