import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    elevation: 10,
  },
  headerText: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
  },
  menuButton: {
    color: '#FFF',
  },
})

export class HomeHeader extends Component {
  static propTypes = {
    openMenu: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    this.props.openMenu()
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableHighlight
          underlayColor="#333"
          onPress={this.openMenu}
        >
          <Icon
            name="navicon"
            size={50}
            style={styles.menuButton}
          />
        </TouchableHighlight>

        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    )
  }
}
