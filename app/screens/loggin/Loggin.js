import React from 'react'
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native'
import RandomImage from '../../components/random-image/RandomImage'
import icon from './../../assets/icon.png'
import background from './../../assets/logging_background.jpg'
import Colors from '../../config/colors'

function Loggin() {
  return (
    <ImageBackground style={styles.container} source={background}>
      <View style={styles.logoContainer}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.slogan}>Just leave!</Text>
      </View>
      <View style={styles.access}></View>
      <View style={styles.register}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  access: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.primary,
  },
  register: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.secundary,
  },
  icon: {
    height: 70,
    width: 70,
  },
  slogan: {
    color: '#ffff',
    fontSize: 35,
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
})

export default Loggin
