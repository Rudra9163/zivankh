import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen: React.FC = () => {
  return (
    <LinearGradient colors={["#FBFEFF", "#ECFBFE"]} style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.leftSection}>
          <Image
            source={require("../assets/images/mobileui/Group 8.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.rightSection}>
          <Image
            source={require("../assets/images/mobileui/Frame 6.png")}
            style={styles.logo2}
          />
          <TouchableOpacity style={styles.backBtn}>
            <View style={styles.backTextContainer}>
              <Ionicons
                name="arrow-back"
                size={12}
                color="#ffffff"
                style={styles.icon}
              />
              <Text style={styles.backLabel}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.greetingText}>
        Hi, Abc patient, Let’s get started — I’m here to listen and help you
        feel better!
      </Text>
      <Image
        source={require("../assets/images/mobileui/Frame 4.png")}
        style={styles.medicalReport}
      />
      <Image
        source={require("../assets/images/mobileui/Frame 5.png")}
        style={styles.talktoImg}
      />
      <Image
        source={require("../assets/images/mobileui/image 6.png")}
        style={styles.doctorImg}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 107,
  },
  leftSection: {
    justifyContent: "flex-start",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  logo: {
    width: 50,
    height: 45,
  },
  logo2: {
    width: 100,
    height: 45,
    resizeMode: "contain",
  },
  backBtn: {
    backgroundColor: "#B5E3E7",
    paddingHorizontal: 5.5,
    paddingVertical: 5,
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 0.5,
  },
  backTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 4,
  },
  backLabel: {
    fontSize: 12,
    color: "#ffffff",
  },
  greetingText: {
    textAlign: "center",
    fontSize: 12,
    paddingTop: 97,
    paddingHorizontal: 30,
    paddingBottom: 45,
  },
  medicalReport: {
    width: "73%",
    height: 40,
  },
  talktoImg: {
    width: "65%",
    height: 40,
    marginTop: 10,
    marginBottom: 75,
  },
 doctorImg: {
  width: "90%",
  height: 384,
  resizeMode: "contain",
  alignSelf: "center", 
},
});

export default WelcomeScreen;
