import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
// Custom ======================================================================================
import colors from '../res/colors/colors';
import images from '../res/imageConstant/images';
import {responsiveScreenHeight, responsiveScreenWidth} from '../utils/Size';

const SplashScreen = ({navigation}) => {
  // UseEffect ======================================================================================
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate("MemberLoginScreen")
    }, 3000); 
  });

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={images.LogoIcon}
          resizeMode="contain"
          style={styles.imageicon}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageicon:{
    height: responsiveScreenWidth(30),
    width: responsiveScreenWidth(50),
    justifyContent: 'center',
    alignSelf: 'center',
  }
});

export default SplashScreen;
