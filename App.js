import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Logging from './app/screens/loggin/Loggin'
import ItemDisplay from './app/screens/item-display/ItemDisplay'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Logging />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
})
