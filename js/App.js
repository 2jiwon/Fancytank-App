import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { baseUrl } from '../app';
import FileBrowser from './FileBrowser';
import SimpleStack from './SimpleStack';

const HomeFileBrowserScreen = ({ navigation }) => (
  <FileBrowser
    bannerLabel="Home"
    navigation={navigation}
    baseUrl={baseUrl}
    apiUrl={'api/app/files'}
    remainUrl={''}
  />
);

const FilesFileBrowserScreen = ({ navigation }) => (
  <FileBrowser
    bannerLabel="FancyTank"
    navigation={navigation}
    baseUrl={baseUrl}
    apiUrl={'api/app/files'}
    remainUrl={''}
  />
);

const MainApp = DrawerNavigator(
  {
    HomeFileBrowser: {
      screen: HomeFileBrowserScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor, focused }) => (
          <MaterialCommunityIcons
            name={ 'home' }
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    FilesFileBrowser: {
      screen: FilesFileBrowserScreen,
      navigationOptions: {
        drawerLabel: 'Files',
        drawerIcon: ({ tintColor, focused }) => (
          <MaterialCommunityIcons
            name={ 'home' }
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    OldHome: {
      screen: SimpleStack,
      navigationOptions: {
        drawerLabel: 'Old Home',
      },
    },
  },
);

export default class App extends React.Component {
  render() {
    return (
      <MainApp />
    );
  }
}
