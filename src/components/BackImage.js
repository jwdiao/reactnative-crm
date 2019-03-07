
import React, {Component} from 'react'
import {
    Image,
} from 'react-native'
import {StyleSheet} from "react-native"
import {DIMENSION_RATIO} from '../utils/constants'
class _BackImage extends Component {
    render() {
      return (
        <Image
          source={require('../assets/images/commons/ic_comm_back.png')}
          style={styles.headerLeftImage}
        />
      );
    }
}
export const BackImage = _BackImage;

const styles = StyleSheet.create({
    headerLeftImage: {
      width: 24 * DIMENSION_RATIO,
      height: 20 * DIMENSION_RATIO,
      resizeMode:'contain',
    },
  });