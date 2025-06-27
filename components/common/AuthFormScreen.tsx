import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import GoBack from "@/components/common/GoBack";
import Button from "@/components/ui/Button";
import { Colors } from "@/constants/Colors";
import RegisterPrompt from "../RegisterPrompt";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onGoBack: () => void;
  onContinue: () => void;
  buttonTitle?: string;
  containerStyle?: ViewStyle;
  showRegisterPrompt?: boolean;
  onRegisterPress?: () => void;
  actionText?: string;
  messageText?: string;
  actionTextStyle?: TextStyle;
  messageTextStyle?: TextStyle;
};

const AuthFormScreen = ({
  title,
  subtitle,
  children,
  onGoBack,
  onContinue,
  buttonTitle = "Continue",
  containerStyle,
  showRegisterPrompt = false,
  onRegisterPress,
  actionText,
  messageText,
  actionTextStyle,
  messageTextStyle,
}: Props) => {
  return (
    <ScreenWrapper>
      <GoBack onPress={onGoBack} />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={[{ marginVertical: 32 }, containerStyle]}>{children}</View>
      <Button onPress={onContinue} btnTitle={buttonTitle} />
      {showRegisterPrompt && onRegisterPress && (
        <RegisterPrompt
          containerStyle={{ paddingTop: 32 }}
          onPress={onRegisterPress}
          messageTextStyle={messageTextStyle}
          actionText={actionText}
          actionTextStyle={actionTextStyle}
          messageText={messageText}
        />
      )}
    </ScreenWrapper>
  );
};

export default AuthFormScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#000",
    lineHeight: 32,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "PlusJakartaSans_500Medium",
    color: Colors.grayScale,
    lineHeight: 22,
    marginTop: 12,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
