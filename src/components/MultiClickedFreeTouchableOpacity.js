/**
 * 公用按键组件，防止重复点击
 *
 * */
import React from 'react'
import { TouchableOpacity } from 'react-native'

export class MultiClickedFreeTouchableOpacity extends React.Component {
  render() {
    return (
      <TouchableOpacity {...this.props} onPress={() => this.debouncePress(this.props.onPress)}>
        {this.props.children}
      </TouchableOpacity>
    )
  }

  debouncePress = (onPress) => {
    // console.log('debouncePress called')
    const clickTime = Date.now()
    if (!this.lastClickTime ||
      Math.abs(this.lastClickTime - clickTime) > 1000) {
      // console.log('debouncePress called 1')
      this.lastClickTime = clickTime
      if (onPress) {
        onPress()
      }
    }
  }
}
