import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Video } from 'expo-av';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/UI/MainButton';

const ProgramScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.content}> 
            
            <View style={styles.imageContainer}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: '100%', height: '100%' }}
                />
            </View>

            <View style={styles.controls}>
                <MainButton onPress={() => {}}>
                    <Text>Button_1</Text>
                </MainButton>
                
                <MainButton onPress={() => {}}>
                    <Text>Button_2</Text>
                </MainButton>
            </View>

            <Text style={{padding: 10}}>{selectedCategory.title} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        </View>
    )
};

ProgramScreen.navigationOptions = navigationData => {
    //<Ionicons name="md-remove" size={24} color="white" />
    //<Ionicons name="md-add" size={24} color="white" />


    const catId = navigationData.navigation.getParam('categoryId');
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  
    return {
      headerTitle: selectedCategory.title
    };
  };

const styles = StyleSheet.create({
    content: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: 13,
        borderWidth: 3,
        borderColor: Colors.primary,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
  },
});

export default ProgramScreen;