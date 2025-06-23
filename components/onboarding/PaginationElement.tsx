import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, {
  SharedValue as ReanimatedSharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  length: number;
  x: ReanimatedSharedValue<number>;
};

const PaginationComponent = ({
  index,
  x,
  SCREEN_WIDTH,
}: {
  index: number;
  x: ReanimatedSharedValue<number>;
  SCREEN_WIDTH: number;
}) => {
  const itemRnStyle = useAnimatedStyle(() => {
    const width = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [8, 24, 8],
      "clamp"
    );

    const bgColor = interpolateColor(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      ["#D1D8DD", "#FF4A26", "#D1D8DD"]
    );

    return {
      width,
      backgroundColor: bgColor,
    };
  }, [x, SCREEN_WIDTH, index]);
  return <Animated.View style={[styles.itemStyle, itemRnStyle]} />;
};

const PaginationElement = ({ length, x }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => {
        const key = `pagination-dot-${index}`;
        return (
          <PaginationComponent
            index={index}
            x={x}
            SCREEN_WIDTH={SCREEN_WIDTH}
            key={key}
          />
        );
      })}
    </View>
  );
};

export default PaginationElement;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemStyle: {
    width: 35,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
