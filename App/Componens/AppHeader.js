import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Colors from '../Shared/Colors';

const AppHeader = ({ onLogoutPress }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./../Assets/Images/Logo.png')} style={styles.logo} />

      <TouchableOpacity onPress={onLogoutPress}>
        <FontAwesomeIcon icon={faSignOutAlt} size={24} style={styles.logoutIcon} />
      </TouchableOpacity>
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.white, 
  },
  logo: {
    width: 35,
    height: 35,
  },
  logoutIcon: {
    color: Colors.navy, 
  },
});

export default AppHeader;
