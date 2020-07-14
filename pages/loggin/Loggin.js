import React from 'react'
import { StyleSheet, View } from 'react-native'
import RandomImage from '../../components/random-image/RandomImage'

function Loggin() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <RandomImage />
      </View>
      <View style={styles.access}></View>

      <View style={styles.register}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  image: {
    flex: 8,
  },
  access: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  register: {
    flex: 1,
    backgroundColor: 'tomato',
  },
})

export default Loggin
