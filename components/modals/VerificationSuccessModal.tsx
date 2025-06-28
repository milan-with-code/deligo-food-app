import { View, Modal, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import SuccessSymbol from "../../assets/images/success-symbol.svg";
import { Button } from "@/~/components/ui/button";
import { Text } from "@/~/components/ui/text";

interface VerificationSuccessModalProps {
  visible: boolean;
  onClose: () => void;
  handlePressContinue: () => void;
}

const VerificationSuccessModal: React.FC<VerificationSuccessModalProps> = ({
  visible,
  onClose,
  handlePressContinue,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <SuccessSymbol />
          <View className="mt-7 w-full">
            <Text style={styles.title}>You have logged in successfully 🎉</Text>
            <Text style={styles.message}>
              Welcome back! You're now signed in.
            </Text>
            <Button onPress={handlePressContinue}>
              <Text>Continue</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VerificationSuccessModal;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "PlusJakartaSans_700Bold",
    lineHeight: 32,
    letterSpacing: 0.5,
    marginBottom: 12,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    fontFamily: "PlusJakartaSans_500Medium",
    marginBottom: 30,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: Colors.additionalGray,
    textAlign: "center",
  },
});
