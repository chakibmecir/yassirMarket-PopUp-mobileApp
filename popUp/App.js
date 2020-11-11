import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
import Swiper from 'react-native-swiper'

const FadeInView = (props) => {
  state = {
    fadeAnimation: new Animated.Value(0)
  };
  
    

  React.useEffect(() => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 4000,
      useNativeDriver: false,
    }).start();
  },)

  fadeOut = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  

  

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: this.state.fadeAnimation  ,        
      }}
    >
      <TouchableOpacity style={styles.closePop} onPress={this.fadeOut}> 
      <Ionicons name="md-close-circle" size={32} color="#FFF"  />
      </TouchableOpacity>
      
      <CountDown
        until={100000}
        onFinish={() => alert('finished')}
        size={30}
        digitStyle={{backgroundColor: '#8611d4'}}
        digitTxtStyle={{color: '#FFF'}}
      />
      {props.children}
    </Animated.View>
  );
}


export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF'}}>
      <FadeInView style={{flex:1, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)',alignItems: 'center', justifyContent: 'center',}}>
        <View style={{height: 490, width: 350, backgroundColor: '#FFF', borderRadius:8,marginTop:10, }}>
        <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
        <Image
        style={styles.tinyLogo}
        source={require('./assets/ipad.jpg')}
      />
          <Text style={styles.oldPrice}>1000DZD</Text>
          <Text style={styles.newPrice}>1500DZD</Text>
          <View style={styles.offerBtn}>
            <Text style={styles.offerBtnText}>Voir L'offre</Text>
            </View>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Produit 2</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Produit 3</Text>
        </View>
      </Swiper>
        </View>
      </FadeInView>
    </View>
  )
}



const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius:8,
  },
  oldPrice: {
    color: 'lightgray',
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  offerBtn: {
      height: 40,
      width: 160,
      borderRadius:8,
      backgroundColor: '#8611d4',
      color: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
  },
  offerBtnText:{
    color: '#FFF',
    fontSize: 16,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  closePop:{
    position: 'absolute',
    top: 35,
    right: 10,
  }
})