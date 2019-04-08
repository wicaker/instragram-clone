import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';

import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      tabBarOptions: {
        style: {
          ...Platform.select({
            android: {
              backgroudColor: 'white'
            }
          })
        }
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true
    }
  })

const AppContainer = createAppContainer(AppTabNavigator);

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name='camera' style={{ paddingLeft: 10 }} />,
    title: 'Instagram',
    headerRight: <Icon style={{ paddingRight: 10 }} name='send' />
  }
  render() {
    return (
      <AppContainer />
    )
  }
}

export default MainScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});