import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import GoBack from "@/components/common/GoBack";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Button from "@/components/ui/Button";

const OTP = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <ScreenWrapper>
      <GoBack onPress={handleGoBack} />
      <View style={{ marginTop: 32, alignItems: "center" }}>
        <Text
          style={{
            color: "black",
            fontFamily: "PlusJakartaSans_700Bold",
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0.5,
          }}
        >
          Enter OTP
        </Text>
        <Text
          style={{
            paddingTop: 8,
            color: Colors.nevada,
            fontFamily: "PlusJakartaSans_700Medium",
            fontSize: 14,
            lineHeight: 22,
            letterSpacing: 0.5,
            textAlign: "center",
          }}
        >
          We have just sent you 4 digit code via your email example@gmail.com
        </Text>
      </View>
      <View style={{ marginVertical: 40 }}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          style={styles.otpBox}
        />
      </View>
      <Button
        onPress={() => router.replace("/(auth)/otp")}
        btnTitle="Sign Up"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "PlusJakartaSans_600SemiBold",
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.5,
            color: Colors.nevada,
          }}
        >
          Didn’t receive code?{" "}
        </Text>
        <Pressable onPress={() => router.replace("/(auth)/index")}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "PlusJakartaSans_600SemiBold",
              fontSize: 16,
              lineHeight: 24,
              letterSpacing: 0.5,
              color: Colors.mainPrimary,
            }}
          >
            Resend Code
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default OTP;

const styles = StyleSheet.create({
  otpBox: {
    width: 56,
    height: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FF4A26",
    borderRadius: 24,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.5,
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#000",
  },
});
