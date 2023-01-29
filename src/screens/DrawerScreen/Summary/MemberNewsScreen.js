import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from "react-native";
// Custom ======================================================================================
import TopHeaderView from "../../../component/Header";
import colors from "../../../res/colors/colors";
import images from "../../../res/imageConstant/images";
import strings from "../../../res/strings/strings";
import { responsiveScreenHeight, responsiveScreenWidth,responsiveScreenFontSize } from "../../../utils/Size";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerActions } from "@react-navigation/native";

const MemberNewsScreen = ({ navigation }) => {
  // UseEffect ======================================================================================

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <TopHeaderView
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
        headerText={strings.MemberNews}
      />
      <View style={styles.container}>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
});

export default MemberNewsScreen;