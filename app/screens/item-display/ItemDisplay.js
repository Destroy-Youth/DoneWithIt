import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import RandomImage from '../../components/random-image/RandomImage'

function ItemDisplay() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <View style={styles.delete}></View>
        <View style={styles.close}></View>
      </View>
      <View style={styles.image}>
        <RandomImage size="medium" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000',
    flex: 1,
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  close: {
    backgroundColor: 'cyan',
    width: 100,
    height: 70,
    margin: 10,
  },
  delete: {
    backgroundColor: 'tomato',
    width: 100,
    height: 70,
    margin: 10,
  },
  image: {
    flex: 4,
    overflow: 'hidden',
    marginBottom: 30,
  },
})

export default ItemDisplay
