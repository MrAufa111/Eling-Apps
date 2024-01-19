import React , { useState }from 'react';
import { Button } from '@rneui/themed';
import { View, Text, StyleSheet, Image,Dimensions,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTriangleExclamation,faClipboardList, faListAlt, faBullhorn, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import AppHeader from '../Componens/AppHeader';
import Colors from '../Shared/Colors'

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Tambahkan logika logout sesuai kebutuhan Anda
    console.log('Logout pressed');
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
      <View style={styles.row}>
      
        <Image style={styles.image} source={require('./../Assets/Images/Profile.png')}/>
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
              title="Notifikasi"
              icon={<FontAwesomeIcon icon={faBell} size={70} />} 
              buttonStyle= {styles.buttonMenu}
              titleStyle={styles.buttonText}
              iconPosition="top"
            />
            <Button 
              title="Profile"
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
        <View style={styles.ButtonDarurat}>
          <TouchableOpacity style={styles.modalButton} onPress={toggleEmer}>
            <Text style={{fontSize:25, color:Colors.red}}>Tekan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={{fontSize:25}}>Batal</Text>
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

  modalButton: {
    flex: 1, 
    backgroundColor: 'lightblue', 
    padding: 10,
    height: windowHeight *0.06,
    borderRadius: 15,
    marginHorizontal: 5, 
    alignItems: 'center',
  },
  
  modalContent: {
    backgroundColor: Colors.red,
    alignItems: 'center',
    borderRadius: 35,
    height: windowHeight* 0.35

  },
  buttonText:{
    marginTop:10,
    color:Colors.black,
  },
  buttonMenu:{
    margin:10,
    width:windowWidth * 0.4,
    height:windowHeight * 0.2,
    borderRadius:20,
    backgroundColor:'#E9E9E9'
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
    backgroundColor: Colors.darkBlue,
    
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
    marginBottom:15,
  },
  containerDashboard:{
    alignItems:'center',
    color:Colors.white,
    backgroundColor:Colors.white,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  button: {
    alignItems:'center',
    backgroundColor: Colors.red,
    width: windowWidth * 0.9, 
    height:windowHeight* 0.11,
    borderRadius: 30,
    marginTop:15,
    marginBottom: 10, 
  },

});

export default HomeScreen;
