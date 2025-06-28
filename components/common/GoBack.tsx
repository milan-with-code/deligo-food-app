import React from "react";
import { GestureResponderEvent, View } from "react-native";
import { Text } from "@/~/components/ui/text";
import { Button } from "@/~/components/ui/button";
import { ArrowLeft } from "lucide-react-native";

type GoBackProps = {
  onPress: (event: GestureResponderEvent) => void;
  style?: string;
  title?: string;
};

const GoBack: React.FC<GoBackProps> = ({ onPress, style, title }) => {
  return (
    <View className="flex-row items-center justify-between py-3">
      <Button
        onPress={onPress}
        variant={"icon"}
        size={"icon"}
        className={` ${style || ""}`}
      >
        <ArrowLeft size={24} color="black" />
      </Button>

      {title && (
        <Text className="text-lg text-center flex-1 font-jakartaSemiBold">
          {title}
        </Text>
      )}
    </View>
  );
};

export default GoBack;
