/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import TrackPlayer from 'react-native-track-player';

import {connect} from 'react-redux';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function MusicPlayer(props) {
  const [data, setData] = React.useState({isPlay: false});
  const [prevData, setPrevData] = React.useState(null);

  if (props !== prevData) {
    if (props.trackObject.play) {
      setData({...data, isPlay: true});
    }
    setPrevData(props);
  }

  const stopMusic = async () => {
    await TrackPlayer.reset();
    setData({...data, isPlay: false});
  };

  const playOrStopMusic = async () => {
    if (data.isPlay === false) {
      await TrackPlayer.play();
      setData({...data, isPlay: true});
    } else {
      setData({...data, isPlay: false});
      await TrackPlayer.pause();
    }
  };

  const {trackObject} = props;

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.containerArt}>
          <Image
            style={styles.art}
            source={{uri: trackObject.artwork}}
            //   source={require('../img/dumbsound.png')}
          />
        </View>
        <View style={styles.containerNameSong}>
          <Text style={styles.nameSong}>
            {trackObject.title ? trackObject.title : 'Chose song'}
          </Text>
        </View>
        {/* <View style={styles.containerPrev}>
          <TouchableOpacity onPress={stopMusic}>
            <SimpleLineIcons name="control-start" size={24} color="white" />
          </TouchableOpacity>
        </View> */}
        <View style={styles.containerPlay}>
          <TouchableOpacity onPress={playOrStopMusic}>
            {data.isPlay === false ? (
              <SimpleLineIcons name="control-play" size={24} color="white" />
            ) : (
              <SimpleLineIcons name="control-pause" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.containerStop}>
          <TouchableOpacity onPress={stopMusic}>
            <FontAwesome5 name="stop" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.containerNext}>
          <TouchableOpacity onPress={addMusic}>
            <SimpleLineIcons name="control-end" size={24} color="white" />
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#4c4c4c',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  containerArt: {
    flex: 1 / 5,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  art: {
    height: '90%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerNameSong: {
    flex: 1 / 1.4,
    paddingLeft: 10,
  },
  nameSong: {
    color: 'white',
    fontSize: 15,
  },
  // containerPrev: {
  //   flex: 1 / 8,
  // },
  containerStop: {
    flex: 1 / 8,
  },
  containerPlay: {
    flex: 1 / 8,
    marginLeft: 10,
  },
  containerNext: {
    flex: 1 / 8,
    marginLeft: 10,
  },
});
// const mapStateToProps = state => {
//   return {
//     getDetailSongReducer: state.getDetailSongReducer,
//     authReducer: state.authReducer,
//   };
// };
// export default connect(
//   mapStateToProps,
//   {},
// )(MusicPlayer);
export default MusicPlayer;
