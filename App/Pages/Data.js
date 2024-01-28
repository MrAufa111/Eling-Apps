import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation,faClipboardList, faListAlt, faBullhorn, faBell, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Colors from '../Shared/Colors'

const DataScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
    navigation.navigate('Login');
  };
  const toggleBack = ()=> {
    console.log('Tombol Kembali Ke Home Ditekan');
    navigation.navigate('Home');
  
  }
  

  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <View style={styles.containerDashboard}>  
      <View style={styles.container}>
      <TouchableOpacity onPress={toggleBack}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} style={styles.BackIcon} iconPosition="top"/>
      </TouchableOpacity>
    </View>
      </View>  
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    marginTop:33,
    backgroundColor: '#2405A1',
  },
  username:{
    fontSize:20,
    color:Colors.white,
    marginBottom:30,
  },
  containerDashboard:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    marginTop: 5,
  },
  BackIcon:{
    color:Colors.darkBlue,
    marginTop: 5,
    marginBottom: 90,
   alignItems: 'flex-end',
  },
});

export default DataScreen;
