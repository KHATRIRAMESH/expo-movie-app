import { icons } from "@/constants/icons";
import { forwardRef } from "react";
import { View, Text, Image, TextInput, TextInputProps } from "react-native";

type SearchBarProps = TextInputProps & {
  placeHolder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchBar = forwardRef<TextInput, SearchBarProps>(
  ({ placeHolder, onPress, value, onChangeText }, ref) => {
    return (
      <View className="flex-row items-center  bg-dark-200 rounded-full px-5 py-4">
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor="#ab8bff"
        />
        <TextInput
          onPress={onPress}
          placeholder={placeHolder}
          value={value}
          ref={ref}
          onChangeText={onChangeText}
          placeholderTextColor="#a8b5db"
          className="flex-1 ml-2 text-white "
        />
      </View>
    );
  }
);
export default SearchBar;
