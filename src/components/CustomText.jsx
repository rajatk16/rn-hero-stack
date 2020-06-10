import React from 'react'
import { Text } from 'react-native-elements'

export default (props) => {
  return (
    <>
      <Text {...props}>{props.text}</Text>
    </>
  )
}
