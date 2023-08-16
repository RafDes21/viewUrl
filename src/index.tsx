import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const url = 'https://www.youtube.com/';
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <WebView source={{ uri: url }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});