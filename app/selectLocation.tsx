import { View } from "react-native";
import React, { useState } from "react";
import { Text } from "@/~/components/ui/text";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Label } from "@/~/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/~/components/ui/select";
import SelectLocationModal from "@/components/modals/SelectLocationModal";

interface SelectLocationProps {}
const SelectLocation: React.FC<SelectLocationProps> = ({}) => {
  const [isOpenLocationModal, setIsOpenLocationModal] = useState(true);
  return (
    <>
      <ScreenWrapper>
        <View className="my-8">
          <Text className="text-2xl font-jakartaBold mb-3 text-center">
            Select your Location
          </Text>
        </View>
        <View>
          <Label className="leading-5 tracking-wider mb-2 text-grayScale">
            Location
          </Label>
          <Select onOpenChange={() => setIsOpenLocationModal(true)}>
            <SelectTrigger className="w-full ">
              <SelectValue
                className="text-grayScale text-base font-jakartaMedium py-1"
                placeholder="Select a fruit"
              />
            </SelectTrigger>
          </Select>
        </View>
      </ScreenWrapper>
      <SelectLocationModal
        visible={isOpenLocationModal}
        onClose={() => setIsOpenLocationModal(false)}
      />
    </>
  );
};

export default SelectLocation;
