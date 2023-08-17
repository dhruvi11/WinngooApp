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
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
// Custom ======================================================================================
import colors from "../res/colors/colors";
import images from "../res/imageConstant/images";
import fontFamily from "../constants/Constant"
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "../utils/Size";

const ProfileHeader = (props) => {
  const navigation = useNavigation();
  // Render ======================================================================================
  return (
    // <SafeAreaView styles={styles.container}>
      <View style={styles.container}>
         <TouchableOpacity onPress={()=>props.goBackClick()}>

        <Image style={styles.HamburgerIcon} source={images.backHeader} />
         </TouchableOpacity>
        <Text style={styles.headerText}>{props.title}</Text>
        <TouchableOpacity onPress={()=>props.editClick()}>

        <Image style={styles.profileIcon} source={images.edit} />
        </TouchableOpacity>
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: responsiveScreenWidth(18),
    backgroundColor: colors.WHITE,
    flexDirection: "row",
    paddingStart: responsiveScreenWidth(4),
  },
  HamburgerIcon: {
    height: responsiveScreenWidth(22),
    width: responsiveScreenWidth(22),
    alignSelf: "center",
    tintColor: colors.TOGGLEBLUE,
    marginTop: responsiveScreenWidth(-2),
  },
  profileIcon: {
    height: responsiveScreenWidth(5),
    width: responsiveScreenWidth(5),
    alignSelf: "center",
    tintColor: colors.TOGGLEBLUE,
    marginTop: responsiveScreenWidth(5),
  },
  headerText: {
    fontSize: responsiveScreenFontSize(2.5),
    color: colors.BLACK,
    // fontWeight: "600",
    fontFamily:fontFamily.semiBoldFont,
    alignSelf:"center",
    marginStart:responsiveScreenWidth(16),
    marginTop:responsiveScreenWidth(-2),
    width:responsiveScreenWidth(45)
  },
});

export default ProfileHeader;
