import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import StarIcon from "../icons/StarIcon";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function List({
  list,
  isLastChild,
  isActive,
  changeActiveList,
}) {
  return (
    <TouchableOpacity
      onPress={() => changeActiveList(list.id)}
      className={buildClasses(list.theme, isActive, isLastChild)}
    >
      {list.favorite ? (
        <StyledView className="absolute right-1 top-1">
          <StarIcon />
        </StyledView>
      ) : null}

      <StyledText
        className={`${
          isActive ? "color-[#fff] " : "color-[#444]"
        } text-lg mb-0 leading-5`}
      >
        {list.name}
      </StyledText>

      <StyledText
        className={`${
          isActive ? "color-[#fff] " : "color-[#444]"
        } text-base opacity-80`}
      >
        {todosLeftText(list.items)}
      </StyledText>
    </TouchableOpacity>
  );
}

function todosLeftText(items) {
  const itemsLeft = items.filter((item) => !item.completed).length;

  if (itemsLeft === 1) return `${itemsLeft} todo kvar`;

  return `${itemsLeft} todos kvar`;
}

const variantStyles = {
  1: "bg-[#877ABA]",
  2: "bg-[#7A94BA]",
  3: "bg-[#7ABAAE]",
  4: "bg-[#D68E66]",
};

function buildClasses(theme, isActive, isLast) {
  return [
    "h-[100px] flex flex-column gap-y-1 rounded-xl pt-3 pb-3.5 px-3.5 min-w-[170px] flex-grow justify-center ",
    isActive ? "opacity-100 " : "opacity-70 ",
    isLast ? "mr-0 " : "mr-2 ",
    variantStyles[theme],
  ].join("");
}
