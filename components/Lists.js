import * as React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { styled } from "nativewind";
import List from "./List";

const StyledView = styled(View);

export default function Lists({ lists, activeListId, changeActiveList }) {
  return (
    <StyledView>
      <SafeAreaView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="pb-2 ml-5 mr-5">
          <StyledView className="color-[#6B7280] flex flex-row justify-start items-start mt-1">
            {lists.map((list, i) => (
              <List
                key={list.id}
                list={list}
                isLastChild={i === lists.length - 1 ? true : false}
                isActive={activeListId === list.id}
                changeActiveList={changeActiveList}
              />
            ))}
          </StyledView>
        </ScrollView>
      </SafeAreaView>
    </StyledView>
  );
}
