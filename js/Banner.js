/* @flow */

import React from 'react';

import { Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Banner = ({ navigation, label }) => {
  return (
  <SafeAreaView
    style={styles.bannerContainer}
    forceInset={{ top: 'always' }}
  >
    <View style={styles.banner}>
      {/* <Image source={require('./assets/NavLogo.png')} style={styles.image} /> */}
        <FontAwesomeIcon
          name={'bars'}
          size={26}
          style={styles.bannerIcon}
          onPress={ () => navigation.navigate('DrawerToggle') }
        />
      <Text style={styles.title}>{label}</Text>
    </View>
  </SafeAreaView>
  )
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#32aeca',
    paddingTop: 0,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    margin: 8,
  },
  bannerIcon: {
    color: '#fff',
    margin: 8,
  },
});
