import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';
import * as firebase from 'firebase';


export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;
        
        this.setState({email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi {this.state.email}</Text>

                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Home',  
        headerLeft: () => 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item 
                title="Menu" 
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
                />
            </HeaderButtons>
       // headerRight: () => (
       //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
       //     <Item 
       //       title="Cart" 
       //       iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
       //       onPress={() => {
       //         navData.navigation.navigate('Cart');
       //       }}
       //     />
       //   </HeaderButtons>
       // )
    }
  };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});