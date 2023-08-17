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
import fontFamily from "../constants/Constant"
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "../utils/Size";

const ButtonFullColored = (props) => {
  // Render ======================================================================================
  return (
    <View>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>{props.textOnBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    btnView: {
        backgroundColor: colors.PrimaryColor,
        borderColor: colors.PrimaryColor,
        borderWidth: responsiveScreenWidth(0.5),
        width: "85%",
        justifyContent: "center",
        alignSelf: "center",
        height: responsiveScreenWidth(12),
        borderRadius: responsiveScreenWidth(3),
        marginTop: responsiveScreenWidth(4),
      },
      btnText: {
        color: colors.WHITE,
        // fontWeight: "bold",
        fontSize: responsiveScreenFontSize(2),
        fontFamily:fontFamily.boldFont,
        alignSelf: "center",
      }, 
});

export default ButtonFullColored;
