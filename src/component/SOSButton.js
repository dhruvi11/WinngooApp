import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
// Custom ======================================================================================
import colors from "../res/colors/colors";
import images from "../res/imageConstant/images";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "../utils/Size";

const SOSButton = (props) => {
  // Render ======================================================================================
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.onPress();
        }}
        style={[styles.loginBtn, props.loginBtn]}
      >
        <Image source={images.SOSBtn} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    bottom: -60,
    position: "absolute",
    alignSelf: "center",
  },
  imageStyle: {
    height: responsiveScreenWidth(50),
    width: responsiveScreenWidth(50),
    alignSelf: "center",
    marginEnd: responsiveScreenWidth(2),
    // tintColor:colors.WHITE
  },
});

export default SOSButton;
