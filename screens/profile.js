import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import {authAction, logoutUser} from '../redux/actions/auth_action';

import AsyncStorage from '@react-native-community/async-storage';

import Fontisto from 'react-native-vector-icons/Fontisto';

function Profile(props) {
  const logutAccount = () => {
    AsyncStorage.removeItem('token');
    props.logoutUser();
    props.authAction();
  };

  const {userState} = props.authReducer;
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.containerPicProfile}>
        <Image
          resizeMode={'contain'}
          style={styles.picProfile}
          source={{uri: 'https://i.imgur.com/woAAzCF.jpg'}}
          //   source={require('../img/dumbsound.png')}
        />
      </View>
      {/* Content Profile */}
      <View style={styles.containerContent}>
        <ScrollView style={styles.scrolViewStyle}>
          {/* Child contet row */}
          {/* fullName */}
          <View style={styles.contentRow}>
            {/* Container icon */}
            <View style={styles.contentIcon}>
              <Fontisto name="person" color="red" size={48} />
            </View>
            {/* Child content column */}
            <View style={styles.contentColum}>
              {/* text content dan info content */}
              {/* Content */}
              <View>
                <Text style={styles.content}>{userState.fullName}</Text>
              </View>
              {/* Content Info */}
              <View>
                <Text style={styles.contentInfo}>Full Name</Text>
              </View>
            </View>
          </View>
          {/* email */}
          <View style={styles.contentRow}>
            {/* Container icon */}
            <View style={styles.contentIcon}>
              <Fontisto name="email" color="red" size={48} />
            </View>
            {/* Child content column */}
            <View style={styles.contentColum}>
              {/* text content dan info content */}
              {/* Content */}
              <View>
                <Text style={styles.content}>{userState.email}</Text>
              </View>
              {/* Content Info */}
              <View>
                <Text style={styles.contentInfo}>Email</Text>
              </View>
            </View>
          </View>
          {/* Status */}
          <View style={styles.contentRow}>
            {/* Container icon */}
            <View style={styles.contentIcon}>
              <Fontisto name="checkbox-active" color="red" size={48} />
            </View>
            {/* Child content column */}
            <View style={styles.contentColum}>
              {/* text content dan info content */}
              {/* Content */}
              <View>
                <Text style={styles.content}>
                  {userState.subscribe ? 'Active' : 'Not Active'}
                </Text>
              </View>
              {/* Content Info */}
              <View>
                <Text style={styles.contentInfo}>Status</Text>
              </View>
            </View>
          </View>
          {/* Gender */}
          <View style={styles.contentRow}>
            {/* Container icon */}
            <View style={styles.contentIcon}>
              <Fontisto name="transgender" color="red" size={48} />
            </View>
            {/* Child content column */}
            <View style={styles.contentColum}>
              {/* text content dan info content */}
              {/* Content */}
              <View>
                <Text style={styles.content}>{userState.gender}</Text>
              </View>
              {/* Content Info */}
              <View>
                <Text style={styles.contentInfo}>Gender</Text>
              </View>
            </View>
          </View>
          {/* Phone */}
          <View style={styles.contentRow}>
            {/* Container icon */}
            <View style={styles.contentIcon}>
              <Fontisto name="phone" color="red" size={48} />
            </View>
            {/* Child content column */}
            <View style={styles.contentColum}>
              {/* text content dan info content */}
              {/* Content */}
              <View>
                <Text style={styles.content}>{userState.phone}</Text>
              </View>
              {/* Content Info */}
              <View>
                <Text style={styles.contentInfo}>Phone Number</Text>
              </View>
            </View>
          </View>
          {/* Address */}
          <View style={styles.contentRow}>
            {/* Container icon */}
            <View style={styles.contentIcon}>
              <Fontisto name="map" color="red" size={48} />
            </View>
            {/* Child content column */}
            <View style={styles.contentColum}>
              {/* text content dan info content */}
              {/* Content */}
              <View>
                <Text style={styles.content}>{userState.address}</Text>
              </View>
              {/* Content Info */}
              <View>
                <Text style={styles.contentInfo}>Address</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.warperButton}>
          <TouchableOpacity
            onPress={logutAccount}
            style={styles.buttonRegister}>
            <Text style={styles.textButton}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  scrolViewStyle: {
    width: '100%',
    // backgroundColor: 'gray',
  },
  containerPicProfile: {
    flex: 1 / 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picProfile: {
    height: '100%',
    width: '100%',
    borderRadius: 400 / 2,
  },
  containerContent: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'green',
  },
  contentRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  contentColum: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 10,
  },
  contentIcon: {
    flex: 1 / 7,
  },
  content: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  contentInfo: {
    color: '#8A8C90',
    fontSize: 12,
  },
  buttonContainer: {
    flex: 1 / 8,
    width: '100%',
    height: 50,
  },
  warperButton: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'purple',
    width: '100%',
    height: '100%',
  },
  buttonRegister: {
    width: '100%',
    height: 50,
    backgroundColor: '#ee4622',
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer,
  };
};

export default connect(
  mapStateToProps,
  {logoutUser, authAction},
)(Profile);
