// Content adalah routing content utama aplikasi
import React from 'react';

import {StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TrackPlayer from 'react-native-track-player';

import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../home';
import Profile from '../profile';
import Search from '../search';
import Upgrade from '../upgrade';

TrackPlayer.setupPlayer().then(async () => {
  // Adds a track to the queue
});
const Tab = createBottomTabNavigator();

function Content(props) {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={tabStyleOption}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => (
                <AntDesign name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({color, size}) => (
                <AntDesign name="search1" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Upgrade"
            component={Upgrade}
            options={{
              tabBarIcon: ({color, size}) => (
                <SimpleLineIcons name="cup" color={color} size={size} />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="face-profile"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
const tabStyleOption = {
  labelStyle: {
    fontSize: 12,
  },
  tabStyle: {},
  style: {
    backgroundColor: '#3A3A3A',
    borderTopWidth: 0,
  },
  activeTintColor: 'red',
  showIcon: true,
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {},
)(Content);
