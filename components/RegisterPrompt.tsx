import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import { Colors } from "@/constants/Colors";

type RegisterPromptProps = {
  containerStyle?: ViewStyle;
  onPress: (event: GestureResponderEvent) => void;
  messageText?: string;
  actionText?: string;
  messageTextStyle?: TextStyle;
  actionTextStyle?: TextStyle;
};

const RegisterPrompt: React.FC<RegisterPromptProps> = ({
  containerStyle,
  onPress,
  messageText = "Don’t have an account? ",
  actionText = "Sign Up",
  messageTextStyle,
  actionTextStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, messageTextStyle]}>{messageText}</Text>
      <Pressable onPress={onPress}>
        <Text
          style={[styles.text, { color: Colors.mainPrimary }, actionTextStyle]}
        >
          {actionText}
        </Text>
      </Pressable>
    </View>
  );
};

export default RegisterPrompt;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans_600SemiBold",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
