import React, {Component} from 'react'
import { IndexList } from '../../../components/IndexList';

class _IntentionScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '意向',
    }
  }

  constructor(props) {
    super(props)

    this.iconsViews = [
      {
        icon: require('../../../assets/images/intention/ic_intent_nmsg.png'),
        key: '新消息',
        bgColor:'#8754A1',
        onPress: () => {
          this.props.navigation.navigate('IntentionNewMsgScreen')
        },
      },
      {
        icon: require('../../../assets/images/intention/ic_intent_uaudit.png'),
        key: '待审批',
        bgColor:'#1685A9',
        onPress: async () => {
          this.props.navigation.navigate('IntentionUnderAuditList')
        },
      },
      {
        icon: require('../../../assets/images/intention/ic_intent_list.png'),
        key: '意向列表',
        bgColor:'#ED5736',
        onPress: () => {
          this.props.navigation.navigate('IntensionList', { navigation: this.props.navigation })
        },
      },
    ]

  }
  render() {
    return (
      <IndexList iconsViews={this.iconsViews}/>
    )
  }
}

export const IntentionScreen = _IntentionScreen
