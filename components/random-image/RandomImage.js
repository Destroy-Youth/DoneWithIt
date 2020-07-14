import { useDimensions } from '@react-native-community/hooks'
import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const RandomImage = () => {
  const { window } = useDimensions()
  return (
    <View>
      <Image
        source={{
          uri: `https://picsum.photos/${window.width}/${window.height}`,
          width: window.width,
          height: window.height,
        }}
      />
    </View>
  )
}

export default RandomImage

const styles = StyleSheet.create({})
