import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Modal,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';

function Initial(props) {
  // hook, di dalem value usesate adalah data di dalam data register
  const [dataRegister, setdataRegister] = React.useState({gender: 'Male'});
  // extract value object dala data register
  const {email, password, fullName, gender, phone, address} = dataRegister;
  // data dalam objek state data register berubah
  const onChangeText = (text, name) => {
    setdataRegister({...dataRegister, [name]: text});
    console.log(dataRegister);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode={'contain'}
            style={styles.imageLogo}
            source={require('../img/dumbsound.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <ScrollView style={styles.scrolViewStyle}>
            <View style={styles.inputContainer2}>
              <Text style={styles.title}>Lots of music.</Text>
              <Text style={styles.title}>All free to listen.</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.warperButton}>
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={() => props.navigation.navigate('Register')}>
              <Text style={styles.textButton}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.warperButton}>
            <TouchableOpacity
              style={styles.buttonRegister2}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.textButton2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
  },
  scrolViewStyle: {
    width: '100%',
    // backgroundColor: 'gray',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'green',
    width: '85%',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoContainer: {
    flex: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  imageLogo: {
    maxWidth: '50%',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  inputContainer2: {
    width: '100%',
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  inputStyle: {
    color: 'white',
    height: 70,
    backgroundColor: '#4C4C4C',
    fontWeight: 'bold',
    borderRadius: 5,
    width: '100%',
    borderWidth: 2,
    borderColor: '#C5C5C5',
    marginTop: 50,
    paddingLeft: 10,
  },
  containerDropdown: {
    width: '100%',
  },
  bottomContainer: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'cyan',
  },
  warperButton: {
    flex: 1,
    justifyContent: 'center',
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
  buttonRegister2: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton2: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  warperTextBottom: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#B1B1B1',
    // backgroundColor: 'green',
  },
  textBottom1: {
    color: '#b1b1b1',
    fontSize: 18,
  },
  textBottom2: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttomDetailTextContainer: {
    flexDirection: 'row',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    marginTop: 10,
    height: 60,
    backgroundColor: '#4C4C4C',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 5,
    color: '#B9B9B9',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    marginTop: 10,
    height: 60,
    backgroundColor: '#4C4C4C',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#C5C5C5',
    borderRadius: 5,
    color: '#B9B9B9',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 25,
    right: 15,
  },
});

export default connect(
  null,
  null,
)(Initial);
