import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

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

class RegionDimsum extends React.Component {
  static navigationOptions = {
    headerTitle:  <MyHeader/>,
     
    textColor:"#FF0000"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple',
      textColor: 'white',}}> 
      <ImageBackground 
      source={require('./Chinafood.jpg')}style={styles.icon}>
    <Text>Food Regions of China </Text>
    
  </ImageBackground>
   <View style={{ flex: 5.75, alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple',
      textColor: 'white',}}> 
        <Text>Dimsum food is often categorized based on whether it is from the south of the country or from Taiwan, Beijing, elsewhere. Generally, these are the breakdowns of the differnet food regions.
       
       </Text>
        </View>
      </View>
    );
  }
}

export default RegionDimsum;

const styles = StyleSheet.create({
    icon:{
    flex:.1,
    width: '50%', 
    height: '50%',
  },
});