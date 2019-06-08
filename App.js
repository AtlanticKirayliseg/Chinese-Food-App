import React, { Component } from 'react';
import WelcomeScreen from  './Welcome.js'
import HomeScreen from  './Home.js'
import ContactScreen from  './ContactUs.js'
import SplashScreen from  './Splash.js'
import { StackNavigator } from 'react-navigation';
import AboutUsScreen from './AboutUs.js';
import RegionSzechuan from './Szechuan.js'
import RegionHunan from './Hunan.js'
import RegionDimsum from './Dimsum.js'
export default class App extends Component {
  render() {
    return <RootStack  />;
  }
}

const RootStack = StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Home: {
      screen: HomeScreen,
    },
     Contact: {
      screen: ContactScreen,
    },
    Splash: {
      screen: SplashScreen,
    },
    About: {
      screen: AboutUsScreen,

    },
    Szechuan:{
      screen: RegionSzechuan
    },
      Hunan:{
      screen: RegionHunan
    },
    Dimsum:{
      screen: RegionDimsum

    },
  },
  {
    initialRouteName: 'Splash',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#A0006',
      },
      headerTintColor: '#F6F300',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);




