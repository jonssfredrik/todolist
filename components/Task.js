import React from "react";
import { Text, View } from "react-native";
import CheckIcon from "../icons/CheckIcon";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Task({ item, lastItem }) {
  const circleClasses = item.completed
    ? "border-[#9CA3AF] bg-[#9CA3AF] border"
    : "border-[#877ABA] border-2";

  return (
    <StyledView
      className={`flex ${
        lastItem ? "border-none" : "border-b border-[#EEEFF2]"
      }`}
    >
      <StyledView className="flex flex-row gap-2 items-center">
        <StyledView
          className={`rounded-full h-[18px] w-[18px] flex justify-center items-center ${circleClasses}`}
        >
          {item.completed ? <CheckIcon /> : null}
        </StyledView>

        <StyledView className={`grow ${item.completed ? "py-3" : "py-5"}`}>
          <StyledText
            className={
              item.completed
                ? "color-[#9CA3AF] line-through text-base"
                : "text-base"
            }
          >
            {item.text}
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
