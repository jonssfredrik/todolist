import * as React from "react";
import { Text, View, TextInput } from "react-native";
import { styled } from "nativewind";

import ItemSuggestion from "./ItemSuggestion";

const StyledView = styled(View);
const StyledText = styled(Text);

const SUGGESTED_ITEMS = ["Dricka", "Snus", "Vegoburgare", "Creme fraiche"];

export default function Bottomsheet({ handleIsOpen, isOpen }) {
  const [inputText, setInputText] = React.useState("");
  const textInputRef = React.useRef(null);

  const removeFocus = () => {
    textInputRef.current.blur();
  };

  const clearInput = () => {
    textInputRef.current.clear();
  };

  const onFocus = () => {
    handleIsOpen(true);
  };

  const onBlur = () => {
    handleIsOpen(false);
    clearInput();
  };

  const submitInput = () => {
    clearInput();
    console.log(inputText);
  };

  const closeBottomsheet = () => {
    handleIsOpen(false);
    removeFocus();
  };

  const addSuggestedItem = (item) => {
    setInputText(item);
    submitInput();
  };

  return (
    <StyledView
      className={`z-50 absolute bottom-0 left-0 right-0 h-[${
        isOpen ? "203px pt-6" : "86px 0px"
      }] flex justify-center bg-white border border-[#EEEFF2] border-b-0 rounded-t-3xl shadow-2xl`}
    >
      <StyledView className="absolute top-2 left-1/2 h-[6px] w-8 bg-[#EEEFF2] rounded"></StyledView>

      {isOpen && (
        <StyledView className={"overflow-hidden px-5 z-20 h-[118px]"}>
          <StyledView className="flex flex-row justify-between items-center border-[#EEEFF2] border-b h-[50px]">
            <StyledText className="color-[#111827] text-lg">
              Lägg till ny todo
            </StyledText>
            <StyledText
              onPress={closeBottomsheet}
              className="color-[#699CF4] text-base"
            >
              Avbryt
            </StyledText>
          </StyledView>

          <StyledView className="flex flex-row h-[39px] mt-7">
            {SUGGESTED_ITEMS.map((item, index) => (
              <StyledView className="flex" key={index}>
                <ItemSuggestion
                  item={item}
                  addSuggestedItem={addSuggestedItem}
                />
              </StyledView>
            ))}
          </StyledView>
        </StyledView>
      )}

      <StyledView className="flex justify-center border-b border-[#EEEFF2] px-5">
        <TextInput
          ref={textInputRef}
          style={{ height: 58, borderWidth: 0, marginTop: -0 }}
          placeholder="Lägg till ny todo"
          keyboardType="url"
          returnKeyType="go"
          onChangeText={(text) => setInputText(text)}
          onBlur={onBlur}
          onFocus={onFocus}
          onSubmitEditing={submitInput}
          blurOnSubmit={false}
        />
      </StyledView>
    </StyledView>
  );
}
