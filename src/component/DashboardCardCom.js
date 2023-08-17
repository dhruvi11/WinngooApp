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
import { onPress } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";

const DashboardCardCom = (props) => {
  // Render ======================================================================================
  return (
      <TouchableOpacity onPress={()=>{props.onCardPress()}} style={[styles.mainView,{backgroundColor:props.backgroundColor}]}>
        <Image
          source={props.images}
          resizeMode="contain"
          style={[styles.imageicon,props.imageiconStyle]}
        />
        <Text style={styles.textStyle}>{props.text}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: responsiveScreenWidth(40),
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
    justifyContent:"center",
    alignItems:"center",
    height: responsiveScreenWidth(45),
  },
  textStyle:{
    fontSize:responsiveScreenFontSize(1.8),
    color:colors.BLACK,
    // fontWeight:"bold",
    fontFamily:fontFamily.boldFont,
    textAlign:"center",
    justifyContent:"center",
    width:responsiveScreenWidth(33),
    padding:responsiveScreenWidth(1),
    height:responsiveScreenWidth(12),
    borderRadius:8,
    marginTop:responsiveScreenWidth(4),
    backgroundColor:colors.white,
  },
  imageicon:{
    height:responsiveScreenWidth(18),
    width:responsiveScreenWidth(15),
    alignSelf:"center"
  }
});

export default DashboardCardCom;
