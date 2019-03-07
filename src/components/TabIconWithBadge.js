import {Image, Text, View} from "react-native";
import {DIMENSION_RATIO, FONT_SIZE_10} from "../utils/constants";
import React from "react";

export default class IconWithBadge extends React.Component {
  render() {
    const {routeName, iconImage, badgeCount} = this.props;
    return (
      <View style={{margin: 5}}>
        <Image
          resizeMode="contain"
          style={{
            width: routeName === 'ReportTab' ? 50 * DIMENSION_RATIO : 18 * DIMENSION_RATIO,
            height: routeName === 'ReportTab' ? 50 * DIMENSION_RATIO : 18 * DIMENSION_RATIO,
            marginTop: routeName === 'ReportTab' ? -24 * DIMENSION_RATIO : 0,
          }}
          source={iconImage}
        />
        {badgeCount > 0 && routeName === 'VisitingTab' && (
          <View style={{
            position: 'absolute',
            right: -16,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 7,
            width: 14,
            height: 14,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{color: 'white', fontSize: FONT_SIZE_10, fontWeight: 'bold'}}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}