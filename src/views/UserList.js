import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default props => {
    return (
        <Text style={styles.text}>UserList</Text>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'black',
    },
});