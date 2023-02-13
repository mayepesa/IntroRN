import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
  },
});
