import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Back',
    headerTitleStyle:{color:'#FE3FFF'},
  };

  render() {
    return (
      <View style={{ flex: 2.1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pick a Region</Text>
         <Button
          title="Szechuan"
          onPress={() => this.props.navigation.navigate('Szechuan')}
        />
        <Button
          title="Contact Us"
          onPress={() => this.props.navigation.navigate('Contact')}
        />
        <Button
          title="About Us"
          onPress={() => this.props.navigation.navigate('About')}
        /> 
         <Button
          title="Guangdong/Dim Sum Cuisine"
          onPress={() => this.props.navigation.navigate('Dimsum')}
        /> 
         <Button
          title="Hunan Cuisine"
          onPress={() => this.props.navigation.navigate('Hunan')}
        /> 
       
      
      </View>
    );
  }
  
}
export default HomeScreen;