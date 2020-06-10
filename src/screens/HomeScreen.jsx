import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import {Text, ListItem} from 'react-native-elements'
import { useSelector } from 'react-redux'

export default (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: 'Champions',
    })
  }, [])

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Champion', {champion: item})}>
      <ListItem 
        title={item.name}
        leftAvatar={{source: {uri: item.imageURL}}}
        bottomDivider
        topDivider
        chevron
      />
    </TouchableOpacity>
  )

  const champions = useSelector((state) => state.champions)
  return (
    <View>
      <FlatList 
        data={champions}
        keyExtractor={champion => champion.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
