//FIREBASE
import * as firebase from 'firebase';
//REACT 
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
// UI COMPONENTS
import Colors from './constants/Colors'
// SCREENS
import LoadingScreen from './screens/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import ProgramScreen from './screens/ProgramScreen';

var firebaseConfig = {
  apiKey: "AIzaSyBbRuR9JTQ8vIuBatqdWkdqIRV1AFiVu8w",
  authDomain: "dna-love-v1.firebaseapp.com",
  databaseURL: "https://dna-love-v1.firebaseio.com",
  projectId: "dna-love-v1",
  storageBucket: "dna-love-v1.appspot.com",
  messagingSenderId: "289579321708",
  appId: "1:289579321708:web:eceaac6d2830b091350b49"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor:
    Platform.OS === 'android' ?  'white' :Colors.primary ,

};

const HomeStack =createStackNavigator({
  Home: HomeScreen
}, {
  navigationOptions: {
    drawerIcon: drawerConfig => <Ionicons name={Platform.OS ==='android' ? 'md-create' : 'ios-create'} size={23} color={drawerConfig.tintColor}/>
  },
  defaultNavigationOptions: defaultStackNavOptions});

const MenuStack = createStackNavigator({
  Menu: {
    screen: MenuScreen
  },
  Programs: ProgramScreen
}, {
  navigationOptions: {
    drawerIcon: drawerConfig => <Ionicons name={Platform.OS ==='android' ? 'md-list' : 'ios-list'} size={23} color={drawerConfig.tintColor}/>
  },
  defaultNavigationOptions: defaultStackNavOptions});


const AppStack = createDrawerNavigator({
   Menu: MenuStack,
   Home: HomeStack 
  }, {
  contentOptions: {
    activeTintColor: Colors.primary
  }
});




const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen  
}, {defaultNavigationOptions: defaultStackNavOptions});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack 
    },{
      initialRouteName: 'Loading'
    }
  )
);
