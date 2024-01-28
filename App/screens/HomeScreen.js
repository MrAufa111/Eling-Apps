// ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Home"
        onPress={(handleProfile) => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ProfileScreen;
