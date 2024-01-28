// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DataScreen = ({ navigation }) => {
  return (
    <View style={styless.container}>
      <Text>Data Screen</Text>
      <Button
        title="Go to Data"
        onPress={(handleData) => navigation.navigate('Data')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default HomeScreen;
