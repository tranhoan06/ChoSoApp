import { React, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import HeaderAccount from "../HeaderAccount";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonView from "../dungchung/btn";
import TTinfoUser from "../dungchung/TTinfroUser";

const infoUser = ({ navigation }) => {
  const replaceNav = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderAccount style={{ position: "relative" }} />
      <View style={styles.back}>
        <Ionicons
          onPress={replaceNav}
          style={styles.icon}
          name="arrow-back"
          color="#FFFFFF"
          size={24}
        />
        <Text style={styles.backText}>Thông tin cá nhân</Text>
      </View>

      <TTinfoUser />

      <ButtonView />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    // position: 'relative',
  },

  back: {
    position: "absolute",
    top: 50,
    left: 20,
    flexDirection: "row",
    height: "100%",
  },

  backText: {
    fontSize: 24,
    color: "#FFFFFF",
    marginLeft: 30,
    marginBottom: 25,
  },

  icon: {
    position: "absolute",
    top: 6,
  },

  content: {
    margin: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 10,
  },

  contentTitle: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 20,
    color: "#060A0E",
    marginBottom: 13,
  },

  contentDetails: {
    borderTopWidth: 1,
    borderTopColor: "#CACCCD",
    width: "100%",
  },

  contentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
    width: "100%",
  },

  textBtn: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default infoUser;
