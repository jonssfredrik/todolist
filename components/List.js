import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import StarIcon from "../icons/StarIcon";

const StyledView = styled(View);
const StyledText = styled(Text);

const defaultStyles =
  "h-[100px] flex flex-column gap-y-1 rounded-xl pt-[12px] pb-[14px] px-[14px] min-w-[170px] flex-grow justify-center";

const variantStyles = {
  1: "bg-[#877ABA]",
  2: "bg-[#7A94BA]",
  3: "bg-[#7ABAAE]",
  4: "bg-[#D68E66]",
};

export default function Task({ list, isLastChild, isActive, changeActiveList }) {
  return (
    <TouchableOpacity
      onPress={() => changeActiveList(list.id)}
      className={[
        defaultStyles,
        variantStyles[list.theme],
        isLastChild ? "mr-0" : "mr-2",
        isActive ? "opacity-100 " : "opacity-70",
      ].join(" ")}
    >
      <React.Fragment>
        {list.favorite ? (
          <StyledView className="absolute right-[5px] top-[5px]">
            <StarIcon />
          </StyledView>
        ) : null}

        <StyledText className={`${isActive ? "color-[#fff] " : "color-[#444]"} text-lg mb-0 leading-5 opacity-100`}>
          {list.name}
        </StyledText>

        <StyledText className={`${isActive ? "color-[#fff] " : "color-[#444]"} text-base opacity-[0.8]`}>
          {nonCompletedItemsLeft(list.items)} todos kvar
        </StyledText>
      </React.Fragment>
    </TouchableOpacity>
  );
}

function nonCompletedItemsLeft(items) {
  return items.filter((item) => !item.completed).length;
}
