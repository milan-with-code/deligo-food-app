import { View, Text, Modal, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Button from "../ui/Button";
import SuccessSymbol from "../../assets/images/success-symbol.svg";

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
          <View style={{ marginTop: 30 }}>
            <Text style={styles.title}>You have logged in successfully 🎉</Text>
            <Text style={styles.message}>
              Welcome back! You're now signed in.
            </Text>
            <Button btnTitle="Continue" onPress={handlePressContinue} />
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
