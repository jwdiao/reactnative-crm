/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {
  View,
  Image,
  Text,
  StatusBar,
  Platform
} from 'react-native'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'

import {CommonStyles, DIMENSION_RATIO, FONT_SIZE_12, FONT_SIZE_14} from './utils/constants'

import {
  VisitingScreen,
  IntentionScreen,
  IntentionNewMsg,
  ReportScreen,
  DeliverScreen,
  PreferenceScreen
} from './containers/App'
import IconWithBadge from "./components/TabIconWithBadge";
import configureStore from "./redux/configureStore";

const navigationOptionsMainStyle = {
  headerBackTitle: null,
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#fff'
  },
  headerTransparent: true,
}

const VisitingStack = createStackNavigator({
  VisitingHomeScreen: {
    screen: VisitingScreen,
    navigationOptions: () => ({
      title: '拜访',
      ...navigationOptionsMainStyle,
      headerBackground: <HeaderBackgroundView/>
    }),
  }
})

const IntentionStack = createStackNavigator({
  IntentionHomeScreen: {
    screen: IntentionScreen,
    navigationOptions: () => ({
      title: '意向',
      ...navigationOptionsMainStyle,
      headerBackground: <HeaderBackgroundView/>
    }),
  },
  IntentionNewMsgScreen: {
    screen: IntentionNewMsg,
    navigationOptions: () => ({
      title: '新消息',
      ...navigationOptionsMainStyle,
      headerBackground: <HeaderBackgroundView/>
    }),
  },
},
{
  initialRouteName: 'IntentionHomeScreen',
})

const ReportStack = createStackNavigator({
  ReportHomeScreen: {
    screen: ReportScreen,
    navigationOptions: () => ({
      title: '报表',
      ...navigationOptionsMainStyle,
      headerBackground: <HeaderBackgroundView/>
    }),
  }
})

const DeliverStack = createStackNavigator({
  DeliverHomeScreen: {
    screen: DeliverScreen,
    navigationOptions: () => ({
      title: '交付',
      ...navigationOptionsMainStyle,
      headerBackground: <HeaderBackgroundView/>
    }),
  }
})

const PreferenceStack = createStackNavigator({
  PreferenceHomeScreen: {
    screen: PreferenceScreen,
    navigationOptions: () => ({
      title: '我',
      ...navigationOptionsMainStyle,
      headerBackground: <HeaderBackgroundView/>
    }),
  }
})

const AppNavigator = createBottomTabNavigator(
  {
    VisitingTab: {
      screen: VisitingStack
    },
    IntentionTab: {
      screen: IntentionStack
    },
    ReportTab: {
      screen: ReportStack
    },
    DeliverTab: {
      screen: DeliverStack
    },
    PreferenceTab: {
      screen: PreferenceStack
    }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state
        let iconImage
        if (routeName === 'VisitingTab') {
          iconImage = focused
            ? require('./assets/images/tabs/ic_tab_visiting_pressed.png')
            : require('./assets/images/tabs/ic_tab_visiting_unpressed.png')
        } else if (routeName === 'IntentionTab') {
          iconImage = focused
            ? require('./assets/images/tabs/ic_tab_intention_unpressed.png')
            : require('./assets/images/tabs/ic_tab_intention_unpressed.png')
        } else if (routeName === 'ReportTab') {
          iconImage = focused
            ? require('./assets/images/tabs/ic_tab_report.png')
            : require('./assets/images/tabs/ic_tab_report.png')
        } else if (routeName === 'DeliverTab') {
          iconImage = focused
            ? require('./assets/images/tabs/ic_tab_deliver_pressed.png')
            : require('./assets/images/tabs/ic_tab_deliver_unpressed.png')
        } else if (routeName === 'PreferenceTab') {
          iconImage = focused
            ? require('./assets/images/tabs/ic_tab_preference_unpressed.png')
            : require('./assets/images/tabs/ic_tab_preference_unpressed.png')
        }
        return (
          <IconWithBadge
            routeName={routeName}
            iconImage={iconImage}
            badgeCount={2}
          />
        )
      },
      tabBarLabel: ({focused, tintColor}) => {
        const {routeName} = navigation.state
        let tabTitleText
        if (routeName === 'VisitingTab') {
          tabTitleText = '拜访'
        } else if (routeName === 'IntentionTab') {
          tabTitleText = '意向'
        } else if (routeName === 'ReportTab') {
          tabTitleText = '报表'
        } else if (routeName === 'DeliverTab') {
          tabTitleText = '交付'
        } else if (routeName === 'PreferenceTab') {
          tabTitleText = '我'
        }
        return (
          <Text style={focused ? CommonStyles.iconPressedTextStyle : CommonStyles.iconUnpressedTextStyle}>
            {tabTitleText}
          </Text>
        )
      },
    }),
    tabBarOptions: {
      style: {
        height: 50 * DIMENSION_RATIO
      },
      allowFontScaling: false,
      activeTintColor: '#262D84',
      inactiveTintColor: '#686868',
    },
  }
)

const HeaderBackgroundView = () => {
  return (
    <LinearGradient
      style={{height: ( Platform.OS === 'android' ? 46 : 84 ) * DIMENSION_RATIO}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#1C3988', '#28B5C3']}/>
  )
}

const AppContainer = createAppContainer(AppNavigator)

const store = configureStore()

export const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#1C3988'}
                   translucent={false}
                   hidden={false}
                   animated={true}/>
        <AppContainer/>
      </View>
    </Provider>
  )
}

