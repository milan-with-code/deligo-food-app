import { View, StatusBar, Dimensions } from "react-native";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/~/components/ui/dialog";
import { Button } from "@/~/components/ui/button";
import { Search, X } from "lucide-react-native";
import { Text } from "@/~/components/ui/text";
import { Input } from "@/~/components/ui/input";
import { Checkbox } from "@/~/components/ui/checkbox";

interface SelectLocationModalProps {
  visible: boolean;
  onClose: () => void;
}

const SelectLocationModal: React.FC<SelectLocationModalProps> = ({
  visible = false,
  onClose,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <StatusBar hidden />
      <Dialog open={visible} onOpenChange={(isOpen) => !isOpen && onClose?.()}>
        <DialogContent
          style={{
            flex: 1,
            width: Dimensions.get("screen").width,
            paddingTop: 32,
          }}
          showCloseIcon={false}
        >
          <View className="flex-row justify-between items-center mb-6">
            <Button onPress={onClose} variant="icon" size="icon">
              <X />
            </Button>

            <Text className="text-xl font-jakartaBold leading-6 tracking-wider">
              Select a Location
            </Text>

            <View style={{ width: 36 }} />
          </View>

          <View className="relative w-full">
            <Input
              className="pl-10 pr-4"
              placeholder="Search your location..."
            />
            <Search
              size={18}
              color="#9CA4AB"
              style={{
                position: "absolute",
                left: 10,
                top: 18,
              }}
            />
          </View>

          <View
            className="flex-row items-center justify-between"
            style={{
              paddingBottom: 16,
              borderBottomColor: "#E3E7EC",
              borderBottomWidth: 1,
            }}
          >
            <Text className="text-base font-jakartaSemiBold leading-6 tracking-wider">
              Fairbanks, Alaska
            </Text>
            <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
          </View>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SelectLocationModal;
