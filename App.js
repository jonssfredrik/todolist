import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { styled } from "nativewind";

import Bottomsheet from "./components/Bottomsheet";
import TopBar from "./components/TopBar";
import Groups from "./components/Groups";
import Lists from "./components/Lists";

import todoItems from "./items.json";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get("screen")
  );

  const handleIsOpen = (val) => setIsOpen(val);
  const contentHeightDiffers = isOpen ? 590 : 209;
  const contentHeight = Math.ceil(
    screenDimensions.height - contentHeightDiffers
  );

  useEffect(() => {
    const updateScreenDimensions = () => {
      setScreenDimensions(Dimensions.get("screen"));
    };

    Dimensions.addEventListener("change", updateScreenDimensions);
  }, []);

  const activeItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  return (
    <StyledView className="flex-1 bg-[#fff]">
      <TopBar />

      <StyledView className={`pb-[100px]`} style={{ height: contentHeight }}>
        <Groups />

        <StyledView className="mt-3 px-5">
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <StyledView>
                <Lists items={activeItems} />
              </StyledView>

              <StyledView className="mt-5 mb-4">
                <StyledText className="color-[#111827] font-bold">
                  Avklarade
                </StyledText>
              </StyledView>

              <StyledView className="mb-5">
                <Lists items={completedItems} />
              </StyledView>
            </ScrollView>
          </SafeAreaView>
        </StyledView>
      </StyledView>

      <Bottomsheet handleisopen={handleIsOpen} isOpen={isOpen} />
    </StyledView>
  );
}
