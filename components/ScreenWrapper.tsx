import React from "react";
import { View, ViewStyle } from "react-native";
import Constants from "expo-constants";

type ScreenWrapperProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  contentStyle,
}) => {
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff" }, style]}>
      <View
        style={[
          {
            paddingHorizontal: 24,
            marginTop: Constants.statusBarHeight + 16,
          },
          contentStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default ScreenWrapper;
