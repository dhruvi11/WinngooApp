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

const Header = (props) => {
  // Function=================================================================================
  const TopHeaderView = () => {
    return (
      <View style={styles.headerstyle}>
        <TouchableOpacity
          onPress={() => {
            props.onPress();
          }}
          style={{ marginTop: responsiveScreenWidth(1) }}
        >
          <Image
            source={images.HamburgerIcon}
            resizeMode="contain"
            style={styles.HamburgerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.onPress1();
          }}
          style={{ marginTop: responsiveScreenWidth(1) }}
        >
          <Image
            source={images.ProfileIcon}
            resizeMode="contain"
            style={styles.ProfileIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  // Render ======================================================================================
  return <TopHeaderView />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
  },
  HamburgerIcon: {
    height: responsiveScreenWidth(5),
    width: responsiveScreenWidth(5),
    alignSelf: "center",
    tintColor: colors.TOGGLEBLUE,
    marginTop: responsiveScreenWidth(0),
  },
  ProfileIcon: {
    height: responsiveScreenWidth(7),
    width: responsiveScreenWidth(7),
    alignSelf: "center",
    marginTop: responsiveScreenWidth(1),
  },
  headerstyle: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenWidth(16),
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    backgroundColor: colors.WHITE,
    paddingStart: responsiveScreenWidth(6),
    paddingEnd: responsiveScreenWidth(6),
  },
});

export default Header;