import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';
import { Constants } from 'expo';

class WelcomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Enter China',
  };
  render() {
    return (
        <View style={styles.container}>
          <ImageBackground  source={require('./OneChina.gif')}
          style={styles.icon}
        >
        <View style={styles.mycontent}>
        <Text style={styles.title}> China </Text>
        <Button
          title="Explore the regions of China"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
      
        </ImageBackground >
      </View>
    );
  }
}
export default WelcomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40592f',
  },
    mycontent: {
    alignItems: 'center',
    justifyContent: 'center',
   fontSize:89,
    paddingTop:150,
     backgroundColor:'none'
  },
    icon:{
    flex:1,
    width: '100%', 
    height: '100%',
  },
  title:{
    textAlign: 'center',
    fontSize:70,
    color:'#8888FF',
    marginBottom:50,
    fontWeight:'bold',
  },
});