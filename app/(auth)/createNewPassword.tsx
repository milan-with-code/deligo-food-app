import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthFormScreen from "@/components/common/AuthFormScreen";
import { useRouter } from "expo-router";
import TextInputs from "@/components/ui/TextInputs";
import ResetPasswordSuccessModal from "@/components/modals/ResetPasswordSuccessModal";

interface CreateNewPasswordProps {}

const createNewPassword: React.FC<CreateNewPasswordProps> = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const handleGoBack = () => router.back();
  const handleForgotPassword = () => {
    setIsModalVisible(true);
  };
  return (
    <>
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
      <ResetPasswordSuccessModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default createNewPassword;
