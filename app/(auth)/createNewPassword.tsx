import { View, Text } from "react-native";
import React from "react";
import AuthFormScreen from "@/components/common/AuthFormScreen";
import { useRouter } from "expo-router";
import TextInputs from "@/components/ui/TextInputs";

interface CreateNewPasswordProps {}

const createNewPassword: React.FC<CreateNewPasswordProps> = ({}) => {
  const router = useRouter();
  const handleGoBack = () => router.back();
  const handleForgotPassword = () => {};
  return (
    <AuthFormScreen
      title="Create a
New Password"
      subtitle="Enter your new password"
      onGoBack={handleGoBack}
      onContinue={handleForgotPassword}
      buttonTitle="Continue"
    >
      <TextInputs
        label="New Password"
        placeholder="Enter new password"
        eyeVisible
      />
      <TextInputs
        label="Confirm Password"
        placeholder="Confirm your password"
        containerStyle={{ paddingTop: 24 }}
        eyeVisible
      />
    </AuthFormScreen>
  );
};

export default createNewPassword;
