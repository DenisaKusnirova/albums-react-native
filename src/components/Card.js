import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
    // props.children- renders any component that we pass to the Card component
    return (
        <View style={styles.cotainerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    cotainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadow: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export default Card