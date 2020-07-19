import React from 'react'
import { View, StyleSheet } from 'react-native'
import RandomImage from '../../components/random-image/RandomImage'

function ItemDisplay() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.group}>
          <View style={styles.delete}></View>
          <View style={styles.close}></View>
        </View>
        <View style={styles.image}>
          <RandomImage size="medium" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000',
  },
  group: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  close: {
    backgroundColor: 'cyan',
    width: 100,
    height: 70,
    margin: 20,
  },
  delete: {
    backgroundColor: 'tomato',
    width: 100,
    height: 70,
    margin: 20,
  },
  image: {
    flex: 4,
    overflow: 'hidden',
    marginBottom: 30,
  },
})

export default ItemDisplay
