import React, { useCallback } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  SharedValue as ReanimatedSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Props = {
  currentIndex: ReanimatedSharedValue<number>;
  length: number;
  flatListRef: React.RefObject<any>;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = ({ currentIndex, length, flatListRef }: Props) => {
  const isLast = currentIndex.value === length - 1;

  const rnBtnStyle = useAnimatedStyle(() => ({
    width: "50%",
    height: 56,
  }));

  const getStartedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(currentIndex.value === length - 1 ? 1 : 0, {
      duration: 300,
    }),
    transform: [
      {
        translateX: withTiming(currentIndex.value === length - 1 ? 0 : 100, {
          duration: 300,
        }),
      },
    ],
  }));

  const continueStyle = useAnimatedStyle(() => ({
    opacity: withTiming(currentIndex.value !== length - 1 ? 1 : 0, {
      duration: 300,
    }),
    transform: [
      {
        translateX: withTiming(currentIndex.value !== length - 1 ? 0 : 100, {
          duration: 300,
        }),
      },
    ],
  }));

  const onPress = useCallback(() => {
    if (!isLast) {
      flatListRef?.current?.scrollToIndex({
        index: currentIndex.value + 1,
      });
    }
  }, [currentIndex, flatListRef, isLast]);

  return (
    <AnimatedPressable style={[styles.container, rnBtnStyle]} onPress={onPress}>
      <Animated.Text style={[styles.textStyle, getStartedStyle]}>
        Get Started
      </Animated.Text>
      <Animated.Text style={[styles.textStyle, continueStyle]}>
        Continue
      </Animated.Text>
    </AnimatedPressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF4A26",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  textStyle: {
    color: "white",
    position: "absolute",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "PlusJakartaSans_600SemiBold",
  },
});
