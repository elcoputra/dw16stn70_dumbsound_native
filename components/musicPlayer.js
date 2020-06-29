import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import TrackPlayer from 'react-native-track-player';

import {connect} from 'react-redux';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

TrackPlayer.setupPlayer().then(async () => {
  // Adds a track to the queue
  await TrackPlayer.add({
    id: '1111',
    url: 'https://gdurl.com/2D1k',
    title: 'Mikazuki',
    artist: 'Sayuri',
    artwork:
      'https://upload.wikimedia.org/wikipedia/en/f/f4/Mikazuki_no_Koukai_-_Sayuri_Reguler_Edition.jpg',
  });

  await TrackPlayer.play();
});

function MusicPlayer(props) {
  const [data, setData] = React.useState({isPlay: false});

  const playOrStopMusic = async () => {
    if (data.isPlay === false) {
      await TrackPlayer.play();
      setData({...data, isPlay: true});
    } else {
      setData({...data, isPlay: false});
      await TrackPlayer.pause();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.containerArt}>
          <Image
            resizeMode={'contain'}
            style={styles.art}
            source={{uri: 'https://i.imgur.com/woAAzCF.jpg'}}
            //   source={require('../img/dumbsound.png')}
          />
        </View>
        <View style={styles.containerNameSong}>
          <Text style={styles.nameSong}>Balack Pink</Text>
        </View>
        <View style={styles.containerPrev}>
          <TouchableOpacity>
            <SimpleLineIcons name="control-start" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerPlay}>
          <TouchableOpacity onPress={playOrStopMusic}>
            {data.isPlay ? (
              <SimpleLineIcons name="control-play" size={24} color="white" />
            ) : (
              <SimpleLineIcons name="control-pause" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.containerNext}>
          <TouchableOpacity>
            <SimpleLineIcons name="control-end" size={24} color="white" />
          </TouchableOpacity>
        </View>
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
  containerPrev: {
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
const mapStateToProps = state => {
  return {
    getDetailSongReducer: state.getDetailSongReducer,
    authReducer: state.authReducer,
  };
};
export default connect(
  mapStateToProps,
  {},
)(MusicPlayer);
