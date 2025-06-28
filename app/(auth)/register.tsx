import GoBack from "@/components/common/GoBack";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { Colors } from "@/constants/Colors";
import TextInputs from "@/components/ui/TextInputs";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Button } from "@/~/components/ui/button";
import { Text } from "@/~/components/ui/text";

const Register = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <ScreenWrapper>
      <GoBack onPress={handleGoBack} title="Sign Up" />
      <View style={{ marginVertical: 32, alignItems: "center" }}>
        <Text
          style={{
            color: "black",
            fontFamily: "PlusJakartaSans_700Bold",
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0.5,
          }}
        >
          Complete your account
        </Text>
        <Text
          style={{
            paddingTop: 8,
            color: Colors.nevada,
            fontFamily: "PlusJakartaSans_700Medium",
            fontSize: 14,
            lineHeight: 22,
            letterSpacing: 0.5,
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet
        </Text>
      </View>

      <View>
        <TextInputs label="First Name" />
        <TextInputs
          label="Last Name"
          containerStyle={{ paddingVertical: 16 }}
        />
        <TextInputs label="E-mail" />
        <TextInputs
          label="Password"
          containerStyle={{ paddingVertical: 16 }}
          eyeVisible
        />
        <TextInputs label="Confirm Password" eyeVisible />
      </View>

      <Button onPress={() => router.replace("/(auth)/otp")} className="my-6">
        <Text>Sign Up</Text>
      </Button>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "PlusJakartaSans_600SemiBold",
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.5,
            color: Colors.nevada,
          }}
        >
          Already have an account?{" "}
        </Text>
        <Pressable onPress={() => router.replace("/(auth)/index")}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "PlusJakartaSans_600SemiBold",
              fontSize: 16,
              lineHeight: 24,
              letterSpacing: 0.5,
              color: Colors.mainPrimary,
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default Register;
