import * as React from "react";
import { Text, View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { styled } from "nativewind";

import Bottomsheet from "./components/Bottomsheet";
import TopBar from "./components/TopBar";
import Groups from "./components/Groups";
import Lists from "./components/Lists";

import dummyLists from "./lists.json";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [screenDimensions, setScreenDimensions] = React.useState(Dimensions.get("screen"));
  const [lists, _setList] = React.useState(dummyLists);
  const [activeListId, setActiveListId] = React.useState(1);
  const contentHeightDiffers = isOpen ? 590 : 209;
  const contentHeight = Math.ceil(screenDimensions.height - contentHeightDiffers);

  const handleIsOpen = (val) => setIsOpen(val);
  const changeActiveList = (id) => {
    console.log("changeActibveList");
    setActiveListId(id);
  };

  React.useEffect(() => {
    const updateScreenDimensions = () => {
      setScreenDimensions(Dimensions.get("screen"));
    };

    Dimensions.addEventListener("change", updateScreenDimensions);
  }, []);

  const activeItems = lists.find((list) => list.id == activeListId).items?.filter((item) => !item.completed);
  const completedItems = lists.find((list) => list.id == activeListId).items?.filter((item) => item.completed);

  return (
    <StyledView className="flex-1 bg-white">
      <TopBar />

      <StyledView className="pb-[100px]" style={{ height: contentHeight }}>
        <Groups lists={lists} activeListId={activeListId} changeActiveList={changeActiveList} />

        <StyledView className="mt-3 mb-8 px-5">
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <StyledView>
                <Lists items={activeItems} />
              </StyledView>

              {completedItems.length > 0 ? (
                <React.Fragment>
                  <StyledView className="mt-5 mb-4">
                    <StyledText className="color-[#111827] font-bold">Avklarade</StyledText>
                  </StyledView>

                  <StyledView className="mb-5">
                    <Lists items={completedItems} />
                  </StyledView>
                </React.Fragment>
              ) : null}
            </ScrollView>
          </SafeAreaView>
        </StyledView>
      </StyledView>

      <Bottomsheet handleisopen={handleIsOpen} isOpen={isOpen} />
    </StyledView>
  );
}
