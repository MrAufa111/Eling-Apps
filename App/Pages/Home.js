import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation,faClipboardList, faListAlt, faBullhorn, faBell, faUser, faTableCells, faTableList, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Bottom from '../Componens/Bottom';
import Colors from '../Shared/Colors'

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
    navigation.navigate('Login');
  };
  const handleProfile = ()=> {
    console.log('Tombol Profile Di tekan');
    navigation.navigate('Profile');
  };
  const handleData = ()=> {
    console.log('Tombol Data Warga Di tekan');
    navigation.navigate('Data');
  };
  const toggleEmer = ()=> {
    console.log('Tombol Telah DI tekan');
    setModalVisible(!isModalVisible);
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  

  return (
    <View style={styles.container}>
      <AppHeader onLogoutPress={handleLogout} />
      <Bottom />
      <View style={styles.row}>
      
        <Image style={styles.image} source={require('./../Assets/Images/k.png')}/>
        <Text style={styles.username}>Hi Username</Text>
      </View>
      <View style={styles.containerDashboard}>  
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <FontAwesomeIcon style={{ marginTop: 10 }} icon={faTriangleExclamation} size={70} color='#FFD43B' />
      </TouchableOpacity>

        <Text style={styles.textdarurat}>Tombol Darurat</Text>
        <View style={styles.Menu}>
          <View style={styles.Menurow}>
            <Button 
              title="Data Warga"
              onPress={handleData}
              icon={<FontAwesomeIcon icon={faListAlt} size={70} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
            <Button 
              title="Pengumuman"
              icon={<FontAwesomeIcon icon={faBullhorn} size={70} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
          </View>
          <View style={styles.Menurow}>
            <Button 
              title="Ronda"
              icon={<FontAwesomeIcon icon={faShieldHalved} size={70} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
            <Button 
              title="Go to Profile"
              onPress={handleProfile}
              icon={<FontAwesomeIcon icon={faUser} size={70} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
          </View>
     
        </View>
        <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5} 
        >
        <View style={styles.modalContent}>
        <FontAwesomeIcon style={{marginTop:20}} icon={faTriangleExclamation} size={150} color='#FFD43B' />
        <Text style={styles.textmodal}>Anda Yakin?</Text>
        <View style={styles.ButtonDarurat }>
          <TouchableOpacity style={styles.modalButton} onPress={toggleEmer}>
            <Text style={{fontSize:25, color:Colors.red }}>TEKAN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={{fontSize:25}}>BATAL</Text>
          </TouchableOpacity>
        </View>
        </View>

      </Modal>
        
      </View>
      
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  ButtonDarurat:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 30, 
  },
  textmodal:{
    color:Colors.white,
    fontSize:25,
    marginBottom:7,
    marginTop:2,
    alignItems: 'center',
  },
  modalButton: {
    flex: 1, 
    backgroundColor: 'white', 
    padding: 5,
    height: windowHeight *0.05,
    borderRadius: 10,
    marginHorizontal: 16, 
    marginTop: 1,
    alignItems: 'center', 
  },
  
  modalContent: {
    backgroundColor: Colors.red,
    alignItems: 'center',
    borderRadius: 20,
    height: windowHeight* 0.35

  },
  buttonText:{
    marginTop:8,
    color:Colors.black,
    fontWeight: 'regular',
    
  },
  buttonMenu:{
    margin:10,
    width:windowWidth * 0.4,
    height:windowHeight * 0.2,
    borderRadius:20,
    backgroundColor:'#F5F7F8',
  },
  Menu:{
    alignItems:'center',
    height: windowHeight * 1
  },
  Menurow:{
    flexDirection: 'row',
    
  },
  container: {
    marginTop:33,
    backgroundColor: '#0F2167',
    
  },
  row:{
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    marginTop:30,
    width: windowWidth * 0.21,
    height:windowHeight* 0.10,
    resizeMode: 'contain',
    marginBottom:20,
  },
  textdarurat:{
    color:Colors.red, 
    fontSize:15,
    marginBottom:30,
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
    borderTopLeftRadius:50,
    borderTopRightRadius:30
  },
  button: {
    alignItems:'center',
    backgroundColor: Colors.red,
    width: windowWidth * 0.9, 
    height:windowHeight* 0.11,
    borderRadius: 20,
    marginTop:15,
    marginBottom: 10, 
  },

});

export default HomeScreen;
