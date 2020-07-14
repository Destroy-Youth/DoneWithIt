import { useDimensions } from '@react-native-community/hooks'
import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const RandomImage = (size) => {
  const { window } = useDimensions()

  let divisor

  const getDivisor = (s) => {
    switch (size) {
      case 'complete':
        divisor = 1
        break
      case 'medium':
        divisor = '2'
        break
      case 'small':
        divisor = 3
        break
      default:
        divisor = 1
        break
    }

    return divisor
  }

  getDivisor(size)

  return (
    <View style={styles.Image}>
      <Image
        source={{
          uri: `https://picsum.photos/${window.width / divisor}/${
            window.height / divisor
          }`,
          width: window.width / divisor,
          height: window.height / divisor,
        }}
      />
    </View>
  )
}

export default RandomImage

const styles = StyleSheet.create({
  Image: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
  },
})
