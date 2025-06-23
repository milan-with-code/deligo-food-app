import React from "react";
import {
  Pressable,
  GestureResponderEvent,
  ViewStyle,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type GoBackProps = {
  onPress: (event: GestureResponderEvent) => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor?: string;
  style?: ViewStyle;
  title?: string;
};

const GoBack: React.FC<GoBackProps> = ({
  onPress,
  iconName = "arrow-back",
  iconSize = 24,
  iconColor = "black",
  style,
  title,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={onPress} style={[styles.button, style]}>
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      </Pressable>

      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  button: {
    backgroundColor: "#EBEBEB",
    borderRadius: 100,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    flex: 1,
    fontFamily: "PlusJakartaSans_600SemiBold",
  },
});
