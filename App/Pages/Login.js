import React, { useState } from 'react';
import { Input, Button, colors } from 'react-native-elements';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TextInput, Dimensions  } from 'react-native';
import Colors from '../Shared/Colors';


const MyForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={styles.card}>
        <View style={styles.rowr}>
        <Image style={styles.image} source={require('./../Assets/Images/Logo.png')} />
        <Text style={styles.textContent}>E-Ling</Text>
        <Text style={styles.textInfo}>Silahkan Gunakan Akun Anda Untuk Login</Text>
        <View style={styles.inputContainer2}>
          <Text style={styles.NIK}>NIK</Text>
          <Input
            placeholder="Masukan NIK"
            onChangeText={(text) => setUsername(text)}
            value={username}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
          />
          <Text style={styles.NIK}>Password</Text>
          <Input
            placeholder="Masukan Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
          />
        </View>
        <Button
          title="Login"
          onPress={handleLogin}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
        </View>
      </View>
      </View>
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    borderStyle:'solid',
    backgroundColor:Colors.darkBlue,
    height: windowHeight * 1.5,
    width: windowWidth * 1,
 
  },
  rowr:{
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius:20,
    height: windowHeight * 0.9,
  },
  row:{
    marginTop:2,
    justifyContent:'center',
    alignItems: 'center',
  },
  inputContainer2:{
    alignItems:'center',
  },
  card:{
    borderRadius:4,
    marginTop:50,
   
  },
  image: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.3, 
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: Colors.lightGray,
    textShadowRadius:1,
    color: Colors.darkBlue
  },
  textInfo:{
    fontSize:15,
    color: Colors.gray,
    marginBottom:20,
  },
  inputContainer: {
    borderColor:Colors.darkBlue,
    backgroundColor: Colors.lightGrayy,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    width: windowHeight * 0.4,
  },
  inputText: {
    fontSize: 15,
    padding: 10,
  },
  button: {
    backgroundColor: Colors.darkBlue,
    width: windowWidth * 0.4, 
    height:windowHeight* 0.06,
    borderRadius: 22,
    marginTop:15,
    marginBottom: 10, 
  },
  buttonText: {
    textAlign: 'center',
  },
  NIK:{
    fontSize:18,
    fontWeight: 'bold',
    marginBottom:2,
  },
  
  
});

export default MyForm;
