import React from 'react'

import {
View,
Text,
Button,
SafeAreaView


} from 'react-native'

function App()
{
  const handlePress =() => false
  return(
    <SafeAreaView>
    <View>
      <Text> Hello! My name is Hari</Text>
      <Button 
           title="Click me!"
           onPress={handlePress}
           color="red"/>
    </View>
  </SafeAreaView> 
  )
}

export default App;

