import React, {Component} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import {StyleSheet} from "react-native"
import styled from 'styled-components/native'
import {
  CommonStyles,
  DIMENSION_RATIO,
  FONT_SIZE_24
} from "../utils/constants"
import { MultiClickedFreeTouchableOpacity } from '../components/MultiClickedFreeTouchableOpacity'

class _IndexList extends Component {
  constructor(props) {
    super(props);
    this.iconsViews = props.iconsViews;

  }
  render() {
    return (
      <RootView>
        {/* 图标导航信息布局 */}
        <MarginTopView>
          <View style={styles.iconsBarView}>
            {
              this.iconsViews.map(i => (
                <MultiClickedFreeTouchableOpacity
                  key={i.key}
                  style={{ flex:1, flexDirection: 'row', marginLeft:25, marginTop:20}}
                  onPress={i.onPress}
                >
                  <View style={{...styles.imageWrapper, backgroundColor:i.bgColor}}>
                    <Image resizeMode='contain' style={{width: 30, height:30,}}  source={i.icon} />
                  </View>
                  <Text style={styles.labelText}>{i.key}</Text>
                </MultiClickedFreeTouchableOpacity>
                ))
            }
          </View>
        </MarginTopView>
      </RootView>
    )
  }
}

export const IndexList = _IndexList;

const styles = StyleSheet.create({
  iconsBarView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingVertical:60*DIMENSION_RATIO,
    backgroundColor: 'white',
  },
  imageWrapper: { 
    width:64,
    height:64,
    borderRadius:32,
    alignItems: 'center',
    justifyContent:'center',
  },
  labelText: {
    fontSize: FONT_SIZE_24, 
    alignSelf:'center', 
    marginLeft:10,
    color:'#000',
    fontWeight:'bold'
  }
});

const RootView = styled.ScrollView`
  flex: 1;
`
const MarginTopView = styled.View`
  margin-bottom: 10;
`