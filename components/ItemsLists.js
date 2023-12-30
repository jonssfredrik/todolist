import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";

import Item from "./Item";

const StyledView = styled(View);

export default function ItemsLists({ items }) {
  return (
    <StyledView className="flex px-3.5 border-solid border-2 border-[#EEEFF2] rounded-xl">
      {items.map((item, index) => (
        <Item
          item={item}
          isLastItem={index === items.length - 1 ? true : false}
          key={item.id}
        />
      ))}
    </StyledView>
  );
}
