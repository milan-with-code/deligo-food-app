import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  btnTitle: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  btnTitle = "Sign Up",
  disabled,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, containerStyle]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.mainPrimary,
    borderRadius: 24,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaSans_600SemiBold",
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});
