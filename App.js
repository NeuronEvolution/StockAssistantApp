import React from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <WebView
                source={{uri:'http://localhost:3004?fromOrigin=111'}}
                style={{width:'100%',height:'100%',backgroundColor:'red'}}/>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
