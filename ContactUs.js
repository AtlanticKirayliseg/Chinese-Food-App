import React from 'react';
import { View, Text, Image } from 'react-native';

class MyHeader extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center',justifyContent: 'center',flexDirection:'row'}} >
        <Image
          source={('./OneChina.jpg')}
          style={{ height: 50, width: 200, resizeMode:"contain" }}
        />
      
      <Text style={{fontSize:20}}>
        Contact Us
      </Text>
      </View>
    );
  }
}

class ContactUsScreen extends React.Component {
  static navigationOptions = {
    headerTitle:  <MyHeader/>,
     
    textColor:"#FF0000"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Email Unavailable at this time, please contact local Confucius Inst. for Food Knowledge</Text>
      </View>
    );
  }
}

export default ContactUsScreen;


