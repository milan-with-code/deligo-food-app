import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "@/components/ScreenWrapper";
import GoBack from "@/components/common/GoBack";
import TextInputs from "@/components/ui/TextInputs";
import Button from "@/components/ui/Button";
import RegisterPrompt from "@/components/RegisterPrompt";

import GoogleSymbol from "../../assets/images/google-symbol.svg";
import AppleSymbol from "../../assets/images/apple-symbol.svg";
import { Colors } from "@/constants/Colors";

const Login = () => {
  const router = useRouter();

  const handleGoBack = () => router.back();
  const handleSignIn = () => {};
  const handleGoogleLogin = () => {};
  const handleAppleLogin = () => {};
  const handleForgotPassword = () => router.push("/(auth)/forgotPassword");
  const handleRegister = () => router.push("/(auth)/register");

  return (
    <ScreenWrapper>
      <GoBack onPress={handleGoBack} title="Sign In" />

      <View style={styles.formContainer}>
        <TextInputs
          placeholder="Enter your email address"
          label="Email Address"
        />
        <TextInputs
          placeholder="Enter your password"
          label="Password"
          eyeVisible
          containerStyle={styles.passwordInput}
        />

        <View style={styles.optionsRow}>
          <Text style={styles.grayText}>Remember Me</Text>
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.errorText}>Forgot Password</Text>
          </Pressable>
        </View>
      </View>

      <Button btnTitle="Sign In" onPress={handleSignIn} />

      <Text style={styles.orText}>Or continue with</Text>

      <View>
        <Pressable style={styles.socialButton} onPress={handleGoogleLogin}>
          <GoogleSymbol />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </Pressable>

        <Pressable
          style={[styles.socialButton, styles.appleButton]}
          onPress={handleAppleLogin}
        >
          <AppleSymbol />
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </Pressable>
      </View>

      <RegisterPrompt
        messageText="Don’t have an account? "
        actionText="Register"
        onPress={handleRegister}
        containerStyle={styles.registerPrompt}
        messageTextStyle={styles.additionalGrayText}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 32,
  },
  passwordInput: {
    paddingTop: 16,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
  },
  grayText: {
    color: Colors.grayScale,
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  errorText: {
    color: Colors.alertError,
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  orText: {
    paddingVertical: 32,
    textAlign: "center",
    color: Colors.additionalGray,
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  socialButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 24,
    gap: 12,
    paddingVertical: 16,
  },
  appleButton: {
    marginTop: 16,
  },
  socialButtonText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  registerPrompt: {
    paddingTop: 66,
  },
  additionalGrayText: {
    color: Colors.additionalGray,
  },
});

export default Login;
