import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TextInput as RNTextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import VerificationSuccessModal from "@/components/modals/VerificationSuccessModal";
import AuthFormScreen from "@/components/common/AuthFormScreen";

const OTP = () => {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<RNTextInput | null>>([]);
  const [isOpenVerifyModal, setIsOpenVerifyModal] = useState(false);

  const handleChange = (value: string, index: number) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code) {
      setIsOpenVerifyModal(true);
      setOtp([]);
    }
  };

  const handleGoBack = () => router.back();

  const onClose = useCallback(() => {
    setIsOpenVerifyModal(false);
  }, []);

  const handlePressContinue = useCallback(() => {
    console.log("continue next screen");
    setIsOpenVerifyModal(false);
  }, []);

  const handleResend = useCallback(() => {
    console.log("Resending code...");
  }, []);

  return (
    <>
      <AuthFormScreen
        title="Enter OTP"
        subtitle="We have just sent you 4 digit code via your email example@gmail.com"
        onGoBack={handleGoBack}
        onContinue={handleSubmit}
        buttonTitle="Continue"
        showRegisterPrompt
        actionText="Resend Code"
        messageText="Didn’t receive code? "
        onRegisterPress={handleResend}
        messageTextStyle={{ color: Colors.additionalGray }}
        containerStyle={styles.footer}
      >
        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputsRef.current[index] = ref;
              }}
              style={styles.otpBox}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              autoFocus={index === 0}
              cursorColor={Colors.mainPrimary}
            />
          ))}
        </View>
      </AuthFormScreen>
      <VerificationSuccessModal
        visible={isOpenVerifyModal}
        handlePressContinue={handlePressContinue}
        onClose={onClose}
      />
    </>
  );
};

export default OTP;

const styles = StyleSheet.create({
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 24,
  },
  otpBox: {
    flex: 1,
    height: 56,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF4A26",
    borderRadius: 24,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#000",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
});
