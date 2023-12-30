import React from "react";
import { Text, View } from "react-native";
import CheckIcon from "../icons/CheckIcon";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Item({ item, isLastItem }) {
  const { completed } = item;

  if (completed) return <CompletedItem item={item} isLast={isLastItem} />;

  return <UnCompletedItem item={item} isLast={isLastItem} />;
}

function UnCompletedItem({ item, isLast }) {
  return (
    <StyledView
      className={`flex ${isLast ? "border-none" : "border-b border-[#EEEFF2]"}`}
    >
      <StyledView className="flex flex-row gap-2 items-center">
        <StyledView
          className={`rounded-full h-4 w-4 border-[#877ABA] border-2`}
        ></StyledView>

        <StyledView className="grow py-5">
          <StyledText className="text-base">{item.text}</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}

function CompletedItem({ item, isLast }) {
  return (
    <StyledView
      className={`flex ${isLast ? "border-none" : "border-b border-[#EEEFF2]"}`}
    >
      <StyledView className="flex flex-row gap-2 items-center">
        <StyledView
          className={`rounded-full h-4 w-4 flex justify-center items-center border-[#9CA3AF] bg-[#9CA3AF] border`}
        >
          <CheckIcon />
        </StyledView>

        <StyledView className="grow py-3">
          <StyledText className="color-[#9CA3AF] line-through text-base">
            {item.text}
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
