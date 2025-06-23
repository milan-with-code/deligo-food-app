import Button from "@/components/onboarding/Button";
import ListItem from "@/components/onboarding/ListItem";
import PaginationElement from "@/components/onboarding/PaginationElement";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import {
  ImageURISource,
  ListRenderItem,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type PageItem = { text: string; image: ImageURISource; description: string };

const pages: PageItem[] = [
  {
    text: "Fast, reliable food delivery, every time",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem.",
    image: require("../../assets/images/onboardingOne.png"),
  },
  {
    text: "Satisfy your cravings with quick delivery",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem.",
    image: require("../../assets/images/onboardingTwo.png"),
  },
  {
    text: "Hungry? We bring food to you",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem.",
    image: require("../../assets/images/onboardingThree.png"),
  },
];

export default function OnBoarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const statusBarHeight =
    Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 24 : 0;

  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<Animated.FlatList<PageItem>>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const index = viewableItems[0]?.index ?? 0;
      flatListIndex.value = index;
    },
    []
  );

  const renderItem: ListRenderItem<PageItem> = useCallback(
    ({ item }) => <ListItem item={item} />,
    []
  );

  const animatedTextStyle = useAnimatedStyle(() => {
    const isVisible = flatListIndex.value === pages.length - 1;
    return {
      opacity: withTiming(isVisible ? 1 : 0, { duration: 500 }),
      transform: [
        {
          translateY: withTiming(isVisible ? 0 : 20, { duration: 500 }),
        },
      ],
    };
  }, []);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: statusBarHeight }]}>
      <Animated.FlatList
        ref={flatListRef}
        data={pages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        onViewableItemsChanged={onViewableItemsChanged}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        windowSize={2}
      />

      <View style={[styles.absoluteBottom, { bottom: insets.bottom }]}>
        <View style={styles.bottomContainer}>
          <PaginationElement length={pages.length} x={x} />
          <Button
            currentIndex={flatListIndex}
            length={pages.length}
            flatListRef={flatListRef}
          />
        </View>

        <Animated.View style={[styles.registerContainer, animatedTextStyle]}>
          <Animated.Text style={styles.registerText}>
            Don’t have an account?{" "}
          </Animated.Text>
          <Pressable onPress={() => router.replace("/auth/sign-up")}>
            <Text style={[styles.registerText, { color: Colors.mainPrimary }]}>
              Register
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  absoluteBottom: {
    width: "100%",
    position: "absolute",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  registerContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    color: "#000",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "PlusJakartaSans_600SemiBold",
    letterSpacing: 0.5,
  },
});
