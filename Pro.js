import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './App/Pages/Home';
import ProfileScreen from './App/Pages/Profile';

const Stack = createNativeStackNavigator();

const Profile = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Profile"
          component={MyProfile}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Profile;
