import React, { useState } from 'react'
import {Text, StyleSheet} from 'react-native'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        <Text style={styles.text}>{user.id}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'black',
    },
});