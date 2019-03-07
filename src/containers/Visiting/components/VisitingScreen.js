import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import {StyleSheet} from "react-native"
import {CommonStyles, DIMENSION_RATIO, FONT_SIZE_12} from '../../../utils/constants'

class _VisitingScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerLeft: null,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
          <View style={{
            alignItems: 'center',
            padding: 15
          }}>
            {/*<Text style={{*/}
              {/*color: '#fff',*/}
              {/*fontSize: FONT_SIZE_12*/}
            {/*}}>添加</Text>*/}
            <Image style={styles.headerLeftImage} source={require('../../../assets/images/screens/ic_visiting_screen_profile.png')}/>
          </View>
        </TouchableOpacity>
      ),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          拜访页面
        </Text>
      </View>
    )
  }
}

export const VisitingScreen = _VisitingScreen

const styles = StyleSheet.create({
  headerLeftImage: {
    width: 24 * DIMENSION_RATIO,
    height: 20 * DIMENSION_RATIO,
    resizeMode:'contain',
  },

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
