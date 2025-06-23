import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

type Props = {
  item: { text: string; image: ImageURISource; description: string };
};

const ListItem = ({ item }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <View style={{ height: 442 }}>
        <Image
          source={item.image}
          style={{ height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={[styles.textItem]}>{item.text}</Text>
        <Text style={[styles.textDescription]}>{item.description}</Text>
      </View>
    </View>
  );
};

export default React.memo(ListItem);

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
  },
  textItem: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#000",
    textAlign: "center",
  },
  textDescription: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PlusJakartaSans_400Regular",
    color: Colors.grayScale,
    marginTop: 8,
  },
});
