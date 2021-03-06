import React, { Component, PropTypes } from 'react'
import { PixelRatio, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'

const styles = StyleSheet.create({
  row: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  rowText: {
    fontSize: 16,
  },
})

export class HomeRow extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    item: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    this.props.onPress(this.props.item)
  }

  render() {
    const { item } = this.props
    return (
      <TouchableNativeFeedback
        onPress={this.onPress}
      >
        <View style={styles.row}>
          <Text style={styles.rowText}>
            {item}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
