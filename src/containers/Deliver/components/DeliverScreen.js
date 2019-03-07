import React, {Component} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import {StyleSheet} from "react-native"
import {CommonStyles} from "../../../utils/constants"

class _DeliverScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state

    return {
      title: '交付',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          交付页面
        </Text>
      </View>
    )
  }
}

export const DeliverScreen = _DeliverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
