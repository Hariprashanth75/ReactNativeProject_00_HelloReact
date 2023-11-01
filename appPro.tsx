import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme()
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.whiteText}> Hello!</Text>
        </View>
            
    )
    

}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }

})

export default AppPro 