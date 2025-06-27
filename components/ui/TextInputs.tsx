import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

type TextInputProps = {
  label?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  value?: string;
  containerStyle?: ViewStyle;
  eyeVisible?: boolean;
};

const TextInputs: React.FC<TextInputProps> = ({
  label,
  onChangeText,
  placeholder = "Enter text",
  value,
  containerStyle,
  eyeVisible,
}) => {
  const [secure, setSecure] = useState<boolean>(true);
  const handlePasswordVisibility = () => {
    setSecure(!secure);
  };
  return (
    <View style={containerStyle}>
      {label && (
        <Text
          style={{
            color: Colors.grayScale,
            fontFamily: "PlusJakartaSans_400Regular",
            fontSize: 12,
            lineHeight: 22,
            letterSpacing: 0.5,
            marginBottom: 8,
          }}
        >
          {label}
        </Text>
      )}
      <View>
        <TextInput
          secureTextEntry={secure}
          onChangeText={onChangeText}
          value={value}
          style={{
            position: "relative",
            height: 56,
            borderWidth: 1,
            borderColor: "#E3E7EC",
            borderRadius: 24,
            paddingHorizontal: 16,
            fontSize: 16,
            lineHeight: 24,
            color: "black",
            fontFamily: "PlusJakartaSans_500Medium",
          }}
          placeholderTextColor="#9CA4AB"
          placeholder={placeholder}
        />
        {eyeVisible && (
          <TouchableOpacity
            onPress={handlePasswordVisibility}
            style={{
              position: "absolute",
              top: "50%",
              right: 16,
              transform: [{ translateY: -10 }],
            }}
          >
            <Ionicons
              name={secure ? "eye" : "eye-off-sharp"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputs;
