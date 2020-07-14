import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Logging from './pages/loggin/Loggin'
import ItemDisplay from './pages/item-display/ItemDisplay'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ItemDisplay />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
})
