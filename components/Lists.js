import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";

import Task from "./Task";

const StyledView = styled(View);

export default function Lists({ items }) {
  return (
    <StyledView className="flex px-3.5 border-solid border-2 border-[#EEEFF2] rounded-xl">
      <StyledView className="flex">
        {items.map((item, index) => (
          <StyledView className="flex" key={item.id}>
            <Task
              item={item}
              lastItem={index === items.length - 1 ? true : false}
            />
          </StyledView>
        ))}
      </StyledView>
    </StyledView>
  );
}
