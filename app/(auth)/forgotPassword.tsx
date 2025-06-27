import React from "react";
import { useRouter } from "expo-router";
import TextInputs from "@/components/ui/TextInputs";
import AuthFormScreen from "@/components/common/AuthFormScreen";

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({}) => {
  const router = useRouter();
  const handleGoBack = () => router.back();
  const handleForgotPassword = () => {};
  return (
    <AuthFormScreen
      title="Forgot Password"
      subtitle="Recover your account password"
      onGoBack={handleGoBack}
      onContinue={handleForgotPassword}
      buttonTitle="Continue"
    >
      <TextInputs label="E-mail" placeholder="Enter your email" />
    </AuthFormScreen>
  );
};

export default ForgotPassword;
