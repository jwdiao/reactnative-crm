import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import {StyleSheet} from "react-native"
import {BackImage} from '../../../components/BackImage'
import {CommonStyles, DIMENSION_RATIO, FONT_SIZE_12} from '../../../utils/constants'

class _IntentionNewMsg extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      headerBackImage: <BackImage />,
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
            <Image style={styles.headerLeftImage} source={require('../../../assets/images/intention/ic_intent_add.png')}/>
          </View>
        </TouchableOpacity>
      ),
    }
  }

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>new msg</Text>
      </View>
    )
  }
}

export const IntentionNewMsg = _IntentionNewMsg


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