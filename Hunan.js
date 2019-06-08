import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

class Header extends React.Component {

  render() {
    return (
      <View style={{alignItems: 'center',justifyContent: 'center',flexDirection:'row'}} >
        <Image
          source={('./OneChina.jpg')}
          style={{ height: 50, width: 200, resizeMode:"contain" }}
        />
      
      <Text style={{fontSize:20}}>
        Hunan Food
      </Text>
      </View>
    );
  }
}

class RegionHunan extends React.Component {
  static navigationOptions = {
    headerTitle:  <Header/>,
     
    textColor:"#FF0000"
  };
  render() {
    return (
      <View style={{ flex: .75, alignItems: 'center', justifyContent: 'center' }}>
      <Text> 
      Hunan food is categorized as being very mild compared to others. Many different types of noddle dishes are prominent in the region.
      
      </Text>
       <FlatList
/>

      </View>
    );
  }
}

export default RegionHunan;