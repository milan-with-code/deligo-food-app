import { View, TouchableOpacity, ViewStyle } from "react-native";
import React, { useState } from "react";
import { Input } from "@/~/components/ui/input";
import { Label } from "@/~/components/ui/label";
import { Eye, EyeOff } from "lucide-react-native";

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
  const [secure, setSecure] = useState<boolean>(false);
  const handlePasswordVisibility = () => {
    setSecure(!secure);
  };
  return (
    <View style={containerStyle}>
      {label && (
        <Label className="leading-5 tracking-wider mb-2 text-grayScale">
          {label}
        </Label>
      )}
      <View>
        <Input
          secureTextEntry={secure}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />

        {eyeVisible && (
          <TouchableOpacity
            onPress={handlePasswordVisibility}
            className="absolute top-1/2 right-4 -translate-y-3"
          >
            {secure ? (
              <EyeOff size={24} color="#9CA4AB" />
            ) : (
              <Eye size={24} color="#9CA4AB" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputs;
