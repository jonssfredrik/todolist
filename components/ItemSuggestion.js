import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function ItemSuggestion({ item, addSuggestedItem }) {
  return (
    <TouchableOpacity onPress={() => addSuggestedItem(item)}>
      <StyledView className="flex justify-center h-[32px] px-4 mr-2 bg-[#F9FAFB] border border-[#EEEFF2] rounded-full">
        <StyledText className="color-[#6B7280] text-sm">{item}</StyledText>
      </StyledView>
    </TouchableOpacity>
  );
}
