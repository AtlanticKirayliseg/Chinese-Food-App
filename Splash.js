import React, { Component } from 'react';
import {  View, StyleSheet, ImageBackground } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown'

class SplashScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'App Loading Please Wait',
  };
  render() {
    return (
        <View style={styles.container}>
          <ImageBackground  source={require('./timer.png')}
          style={styles.icon}
        >
   <TimerCountdown
            initialSecondsRemaining={400}
            onTick={() => console.log('tick')}
            onTimeElapsed={() => this.props.navigation.navigate('Welcome')}
            allowFontScaling={true}
            style={{ fontSize: 100 }}
        />
      
        </ImageBackground >
      </View>
    );
  }
}
export default SplashScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
    icon:{
    flex:1,
    width: '100%', 
    height: '100%',
  },

});