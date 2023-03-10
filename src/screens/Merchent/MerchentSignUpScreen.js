import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
// Library ======================================================================================
import { Dropdown } from "react-native-element-dropdown";
// Custom ======================================================================================
import colors from "../../res/colors/colors";
import images from "../../res/imageConstant/images";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "../../utils/Size";
import strings from "../../res/strings/strings";
import axios from "axios";
import { BaseURL, EndPoint } from "../../api/ApiConstant";

const genderList = [
  { label: "Female", value: "Female" },
  { label: "Male", value: "Male" },
];
const MerchentSignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [confirmEmailErr, setConfirmEmailErr] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [genderErr, setGenderErr] = useState(false);
  const [phoneNumberErr, setPhoneNumberErr] = useState(false);
  const [matchPasswordErr, setMatchPasswordErr] = useState(false);
  const [matchEmailErr, setMatchEmailErr] = useState(false);

  // ==========================================Api Call================
  const validationForm = () => {
    var regexEmail = "/^[w-.]+@([w-]+.)+[w-]{2,4}$/";
    var regexPassword =
      "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/";
    if (firstName === "") {
      setFirstNameErr(true);
    } else if (lastName === "") {
      setLastNameErr(true);
    } else if (gender === "") {
      setGenderErr(true);
    } else if (email === "" || !regexEmail.test(email)) {
      setEmailErr(true);
    } else if (confirmEmail === "" || !regexEmail.test(confirmEmail)) {
      setConfirmEmailErr(true);
    } else if (confirmEmail !== email) {
      setMatchEmailErr(true);
    } else if (password === "" || !regexPassword.test(password)) {
      setPasswordErr(true);
    } else if (confirmPassword === "" || !regexPassword.test(confirmPassword)) {
      setConfirmPasswordErr(true);
    } else if (confirmPassword !== password) {
      setMatchPasswordErr(true);
    } else if (phoneNumber === "") {
      setPhoneNumberErr(true);
    } else {
      setUserDetail();
    }
  };
  const setUserDetail = async () => {
    try {
      var data = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
        password: password,
      };
      navigation.navigate("MerchentSignUpAddressScreen", { details: data });
    } catch (e) {
      console.log(e);
    }
  };
  // ==========================================Render Call================
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.loginText}>{strings.PersonalDetail}</Text>
            <View style={styles.mainview}>
              <TextInput
                value={firstName}
                onChangeText={(firstName) => {
                  setFirstName(firstName);
                  setFirstNameErr(false);
                }}
                placeholder={strings.EnterFname}
                style={styles.textInputstyle}
              />
              {firstNameErr ? (
                <Text style={styles.starText}>{strings.EnterFnameErr}</Text>
              ) : null}
              <TextInput
                value={lastName}
                onChangeText={(lastName) => {
                  setLastName(lastName);
                  setLastNameErr(false);
                }}
                placeholder={strings.EnterLname}
                style={styles.textInputstyle}
              />
              {lastNameErr ? (
                <Text style={styles.starText}>{strings.EnterLnameErr}</Text>
              ) : null}
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={genderList}
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"Select gender here"}
                value={gender}
                onChange={(item) => {
                  setGender(item.value);
                  setGenderErr(false);
                }}
              />
              {genderErr ? (
                <Text style={styles.starText}>{strings.EnterGenderErr}</Text>
              ) : null}
              <TextInput
                value={email}
                onChangeText={(email) => {
                  setEmail(email);
                  setEmailErr(false);
                }}
                keyboardType="email-address"
                placeholder={strings.EnterEmail}
                style={styles.textInputstyle}
              />
              {emailErr ? (
                <Text style={styles.starText}>{strings.EnterEmailErr}</Text>
              ) : null}
              <TextInput
                value={confirmEmail}
                onChangeText={(confirmEmail) => {
                  setConfirmEmail(confirmEmail);
                  setConfirmEmailErr(false);
                }}
                keyboardType="email-address"
                placeholder={strings.EnterConfirmEmail}
                style={styles.textInputstyle}
              />
              {confirmEmailErr ? (
                <Text style={styles.starText}>
                  {strings.EnterConfirmEmailErr}
                </Text>
              ) : null}
              {!confirmEmailErr & matchEmailErr ? (
                <Text style={styles.starText}>
                  {strings.EnterMatchEmailErr}
                </Text>
              ) : null}
              <TextInput
                value={password}
                onChangeText={(password) => {
                  setPassword(password);
                  setPasswordErr(false);
                }}
                placeholder={strings.EnterPassword}
                style={styles.textInputstyle}
              />
              {passwordErr ? (
                <Text style={styles.starText}>{strings.EnterPasswordErr}</Text>
              ) : null}
              <TextInput
                value={confirmPassword}
                onChangeText={(confirmPassword) => {
                  setConfirmPassword(confirmPassword);
                  setConfirmPasswordErr(false);
                }}
                placeholder={strings.EnterConfirmPassword}
                style={styles.textInputstyle}
              />
              {confirmPasswordErr ? (
                <Text style={styles.starText}>
                  {strings.EnterConfirmPasswordErr}
                </Text>
              ) : null}
              {!confirmPasswordErr & matchPasswordErr ? (
                <Text style={styles.starText}>
                  {strings.EnterMatchPasswordErr}
                </Text>
              ) : null}
              <TextInput
                value={phoneNumber}
                onChangeText={(phoneNumber) => {
                  setPhoneNumber(phoneNumber);
                  setPasswordErr(false);
                }}
                keyboardType="number-pad"
                placeholder={strings.EnterPhoneNumber}
                style={styles.textInputstyle}
              />
              {phoneNumberErr ? (
                <Text style={styles.starText}>
                  {strings.EnterPhoneNumberErr}
                </Text>
              ) : null}
            </View>
            <TouchableOpacity
              onPress={() => {
                // validationForm();
                navigation.navigate("MerchentSignUpAddressScreen")
              }}
              style={styles.loginBtn}
            >
              <Text
                style={[
                  styles.loginText,
                  {
                    color: colors.WHITE,
                    fontSize: responsiveScreenFontSize(2),
                    marginTop: 0,
                  },
                ]}
              >
                {strings.Continue}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  loginText: {
    fontSize: responsiveScreenFontSize(3),
    color: colors.BLACK,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: responsiveScreenWidth(5),
  },
  starText: {
    fontSize: responsiveScreenFontSize(1.8),
    color: colors.RED,
    fontWeight: "400",
  },
  textInputstyle: {
    backgroundColor: colors.white,
    borderColor: colors.BLACK,
    borderWidth: responsiveScreenWidth(0.2),
    fontSize: responsiveScreenFontSize(2),
    width: "100%",
    alignSelf: "center",
    margin: responsiveScreenWidth(3),
    marginTop: responsiveScreenWidth(4),
  },
  loginBtn: {
    width: "75%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: responsiveScreenWidth(1),
    height: responsiveScreenWidth(12),
    backgroundColor: colors.BLUETEXT,
    marginTop: responsiveScreenWidth(5),
    marginBottom: responsiveScreenWidth(5),
  },
  mainview: {
    width: "75%",
    alignSelf: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: responsiveScreenFontSize(1.6),
    color: colors.BLACK,
    fontWeight: "600",
  },

  dropdown: {
    height: responsiveScreenWidth(12),
    borderRadius: responsiveScreenWidth(1),
    borderColor: colors.BLACK,
    borderWidth: responsiveScreenWidth(0.1),
    backgroundColor: colors.white,
    marginTop: responsiveScreenWidth(4),
    width: "100%",
    alignSelf: "center",
    paddingStart: responsiveScreenWidth(1),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  imageicon: {
    height: responsiveScreenWidth(20),
    width: responsiveScreenWidth(50),
    justifyContent: "center",
    alignSelf: "center",
    margin: responsiveScreenWidth(5),
  },
});

export default MerchentSignUpScreen;
