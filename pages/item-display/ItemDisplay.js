import React from 'react'
import { View, StyleSheet } from 'react-native'
import RandomImage from '../../components/random-image/RandomImage'

function ItemDisplay() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsGroup}>
        <View style={styles.delete}></View>
        <View style={styles.close}></View>
      </View>
      <View style={styles.image}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 4,
    margin: '3rem',
    marginBottom: '3rem',
  },
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  close: {
    backgroundColor: 'tomato',
    width: '4rem',
    height: '4rem',
    margin: '1rem',
  },
  delete: {
    backgroundColor: '#00CED1',
    width: '4rem',
    height: '4rem',
    margin: '1rem',
  },
})

export default ItemDisplay
