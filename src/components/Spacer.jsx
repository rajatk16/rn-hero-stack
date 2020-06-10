import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View} from 'react-native'


const Spacer = (props) => {
  return (
    <View style={{...styles.containerStyle, ...props.style}}>
      {props.children}
    </View>
  )
}

Spacer.propTypes = {
  style: PropTypes.object
}

export default Spacer

const styles = StyleSheet.create({
  containerStyle: {
    margin: 20
  }
})