import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import TrackPlayer from 'react-native-track-player';

// Creates the player
TrackPlayer.setupPlayer().then(async () => {
  // Adds a track to the queue
  await TrackPlayer.add({
    id: 'trackId',
    url: 'https://gdurl.com/P1bZ',
    title: 'Track Title',
    artist: 'Track Artist',
    artwork: 'https://kpopchart.net/wp-content/uploads/2019/07/BLACKPINK-1.jpg',
  });

  // Starts playing it
  TrackPlayer.play();
});

function ContentRoute() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#4c4c4c',
  },
});

export default ContentRoute;
