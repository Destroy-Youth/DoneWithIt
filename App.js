import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
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
  },
})
