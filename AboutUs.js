import React from 'react';
import { View, Text, Image } from 'react-native';

class Header extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center',justifyContent: 'center',flexDirection:'row'}} >
        <Image
          source={require('./OneChina.jpg')}
          style={{ height: 50, width: 50, resizeMode:"contain" }}
        />
      
      <Text style={{fontSize:20}}>
        Contact Us
      </Text>
      </View>
    );
  }
}

class AboutUsScreen extends React.Component {
  static navigationOptions = {

    headerTitle:  <Header/>,
     
    textColor:"#FF0000"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This Application is designed to showcase some of China's key food regions.
        These regions include but are not limited to Hunan, Sichuan, and Guangdong 
        </Text>
      </View>
    );
  }
}

export default AboutUsScreen;


