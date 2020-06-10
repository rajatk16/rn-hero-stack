import React from 'react'
import Spacer from '../components/Spacer'
import { Image } from 'react-native-elements'
import { View, StyleSheet, FlatList } from 'react-native'
import CustomText from '../components/CustomText'

export default (props) => {
  props.navigation.setOptions({
    headerTitle: props.route.params.champion.name,
    headerTitleAlign: 'center',
  })

  const setBackgroundColor = (championClass) => {
    switch (championClass) {
      case 'Science':
        return '#138D75'
      case 'Skill':
        return '#DE3105'
      case 'Cosmic':
        return '#2E86C1'
      case 'Mutant':
        return '#F1C40F'
      case 'Tech':
        return '#153360'
      case 'Mystic':
        return '#6C3483'
      default:
        return '#273746'
    }
  }
  const champion = props.route.params.champion
  return (
    <View
      style={{ backgroundColor: setBackgroundColor(champion.class), flex: 1 }}
    >
      <Spacer style={styles.imageContainer}>
        <Image
          source={{ uri: champion.imageURL }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </Spacer>
      <CustomText
        text={`Basic Info`}
        style={{ fontSize: 20, textAlign: 'center' }}
      />
      <Spacer>
        <CustomText text={`Real Name: ${champion.realName}`} />
        <CustomText
          text={`Affiliations: ${
            typeof champion.affiliation === 'string'
              ? champion.affiliation
              : champion.affiliation.join(', ')
          }`}
        />
        <CustomText text={`Base: ${champion.base}`} />
        <CustomText
          text={`Citizenship: ${
            typeof champion.citizenship === 'string'
              ? champion.citizenship
              : champion.citizenship.join(', ')
          }`}
        />
        <CustomText
          text={`Occupation: ${
            typeof champion.occupation === 'string'
              ? champion.occupation
              : champion.occupation.join(', ')
          }`}
        />
        <CustomText text={`Species: ${champion.origin}`} />
      </Spacer>
      <CustomText text={`Bio`} style={{ fontSize: 20, textAlign: 'center' }} />
      <Spacer>
        <CustomText text={champion.bio} />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
})
