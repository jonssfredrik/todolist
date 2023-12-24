import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

import DotsVertical from "../icons/DotsVertical";
import CloseIcon from "../icons/CloseIcon";
import LogoDark from "../icons/LogoDark";

const StyledView = styled(View);

export default function Task(props) {
  return (
    <SafeAreaView className="px-5">
      <StyledView className="h-[74px] flex flex-row items-center">
        {/* Left */}
        <StyledView className="basis-1/4">
          <CloseIcon />
        </StyledView>

        {/* Middle */}
        <StyledView className="basis-2/4 items-center">
          <LogoDark />
        </StyledView>

        {/* Right */}
        <StyledView className="basis-1/4 items-end">
          <DotsVertical />
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
}
