import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {connect} from 'react-redux';

function Search() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
});

export default Search;
