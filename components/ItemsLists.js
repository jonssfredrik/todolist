import React from "react";
import { View } from "react-native";
import { styled } from "nativewind";

import Item from "./Item";

const StyledView = styled(View);

export default function ItemsLists({ items }) {
  return (
    <StyledView className="flex px-3.5 border-solid border-2 border-[#EEEFF2] rounded-xl">
      <StyledView className="flex">
        {items.map((item, index) => (
          <StyledView className="flex" key={item.id}>
            <Item
              item={item}
              lastItem={index === items.length - 1 ? true : false}
            />
          </StyledView>
        ))}
      </StyledView>
    </StyledView>
  );
}
