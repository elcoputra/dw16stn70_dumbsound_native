/* eslint-disable react-hooks/exhaustive-deps */
// Data music yang sedang di play saya kirim lewat props ke music player props, biar simple,
// music player track tidak usah pake redux, callbacknya sudah mewakili data object music yang sedang di mainkan
import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ScrollView,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import TrackPlayer from 'react-native-track-player';

import {getDataSongsAction} from '../redux/actions/song_actions';
import {getDataArtistsAction} from '../redux/actions/artist_action';
import MusicPlayer from '../components/musicPlayer';

function Home(props) {
  const [trackObjectState, settrackObjectState] = React.useState({play: false});

  useEffect(() => {
    props.getDataSongsAction();
    props.getDataArtistsAction();
  }, []);

  const addMusic = async (id, thumbnailLink, musicLink, title, artist) => {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: id,
      url: musicLink,
      title: title,
      artist: artist,
      artwork: thumbnailLink,
    });
    await TrackPlayer.play();
    let trackId = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackId);
    settrackObjectState({...trackObject, play: true});
    console.log(trackObjectState);
  };

  const {songs} = props.getDataSongsReducer;
  const {artistData} = props.getDataArtistReducer;
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <ImageBackground
          style={styles.header}
          source={{uri: 'https://i.imgur.com/KSpMGVE.png'}}>
          <View style={styles.containerTextHeader}>
            <Text style={styles.textHeader}>Connect on DumbSound</Text>
            <Text style={styles.textHeader2}>
              Discovery, Stream, and share a constantly expanding mix of music
              from emerging and major artists around the world
            </Text>
          </View>
        </ImageBackground>
        {/* MUSIC LIST TITLE */}
        <View style={styles.containerTitle}>
          <Text style={styles.titleListCard}>Music List</Text>
        </View>
        {/* CARD MUSIC */}
        <View style={styles.listCard}>
          <ScrollView>
            <FlatList
              style={styles.flatList}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={songs}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      addMusic(
                        item.id,
                        item.thumbnailLink,
                        item.musicLink,
                        item.title,
                        item.artist.name,
                      )
                    }>
                    <View style={styles.containerCard}>
                      <View style={styles.containerImageCard}>
                        <Image
                          style={styles.containerImageCard}
                          source={{uri: item.thumbnailLink}}
                        />
                      </View>
                      <View style={styles.containerTitleCard}>
                        <Text style={styles.containerTitleText}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
        {/* ARTIST LIST TITLE */}
        <View style={styles.containerTitle}>
          <Text style={styles.titleListCard}>Artist List</Text>
        </View>
        {/* CARD ARTIST */}
        <View style={styles.listCard}>
          <ScrollView>
            <FlatList
              style={styles.flatList}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={artistData}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.containerCard}>
                      <View style={styles.containerImageCard}>
                        <Image
                          id="imageHeader"
                          style={styles.containerImageCard}
                          source={{uri: item.pic}}
                        />
                      </View>
                      <View style={styles.containerTitleCard}>
                        <Text style={styles.containerTitleText}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => `key-${item.id}`}
            />
          </ScrollView>
        </View>
      </ScrollView>
      {/* Saya kirim data dari player yang sedang di mainkan lewat props */}
      <MusicPlayer trackObject={trackObjectState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  header: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(22, 22, 22, 0.60)',
  },
  titleListCard: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerTitle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  flatList: {
    paddingLeft: 10,
  },
  containerCard: {
    borderRadius: 3,
    height: 200,
    width: 150,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  containerImageCard: {
    borderRadius: 3,
    height: 150,
    width: 150,
    backgroundColor: '#7c7f81',
  },
  containerTitleCard: {
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    maxHeight: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
  },
  containerTitleText: {
    marginTop: 5,
    color: '#ababab',
  },
  textHeader: {
    fontSize: 24,
    color: 'white',
  },
  textHeader2: {
    color: 'white',
    textAlign: 'center',
    width: '80%',
  },
});

const mapStateToProps = state => {
  return {
    getDataSongsReducer: state.getDataSongsReducer,
    getDataArtistReducer: state.getDataArtistReducer,
  };
};

export default connect(
  mapStateToProps,
  {getDataSongsAction, getDataArtistsAction},
)(Home);
