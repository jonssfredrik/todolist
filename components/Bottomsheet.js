import React, { useState, useRef  } from 'react';
import { Text, View, TextInput, onChangeText} from 'react-native';
import { styled} from 'nativewind';

import Reaccuring from './Reaccuring';

const StyledView = styled(View)
const StyledText = styled(Text)


export default function Bottomsheed( {handleisopen, isOpen } ) {
    const [inputText, setInputText] = useState('');

    const updateIsOpen = (val) => {
      handleisopen(val);
    }

    const textInputRef = useRef(null);

    const removeFocus = () => {
      textInputRef.current.blur();
    }

    const clearInput = () => {
      textInputRef.current.clear();
    }

    const onFocus = () => {
      updateIsOpen(true);
    }

    const onBlur = () => {
      updateIsOpen(false);
      clearInput();
    }
    
    const submitInput = () => {
      clearInput();
      console.log(inputText);
    }
    
    const closeBottomsheet = () => {
      updateIsOpen(false);
      removeFocus();
    }

    const handleReaccuringOnPress = (text) => {
      setInputText(text);
      submitInput();
    }

    const reaccuringItems = [
      {
          'id': 1,
          'name': 'Drickaaa',
      },
      {
          'id': 2,
          'name': 'Snus',
      },
      {
          'id': 3,
          'name': 'Vegoburgare',
      },
      {
          'id': 4,
          'name': 'Creme fraiche',
      }
  ]

    return (
      <StyledView className={`absolute bottom-0 left-0 right-0 h-[${isOpen ? '203px' : '86px'}] ${isOpen ? 'pt-6' : '0px'} flex justify-center bg-[#fff] border border-[#EEEFF2] border-b-0 rounded-tl-[24px] rounded-tr-[24px] shadow-2xl`}>
        <StyledView className="absolute top-[8px] left-[50%] h-[6px] w-[32px] bg-[#EEEFF2] rounded ml"></StyledView>

        {isOpen &&
          <StyledView className={"overflow-hidden px-5 z-20 h-[118px]"}>

              <StyledView className="flex flex-row justify-between items-center border-[#EEEFF2] border-b h-[50px]" >
                <StyledText className="color-[#111827] text-lg">Lägg till ny todo</StyledText>
                <StyledText onPress={closeBottomsheet} className="color-[#699CF4] text-base" >Avbryt</StyledText>
              </StyledView>

              <StyledView className="flex flex-row h-[39px] mt-7">

                {reaccuringItems.map((item, index) => (
                  <StyledView className="flex" key={index}>
                    <Reaccuring text={item.name} />
                  </StyledView>
                ))}

            </StyledView>

          </StyledView>
        }

        <StyledView className="flex justify-center border-b border-[#EEEFF2] px-5">

          <TextInput ref={textInputRef} style={{ height: 58, borderWidth: 0, marginTop: -0}} placeholder="Lägg till ny todo" keyboardType="url" returnKeyType="go" onChangeText={text => setInputText(text)} onBlur={onBlur} onFocus={onFocus} onSubmitEditing={submitInput} blurOnSubmit={false}/>

        </StyledView>
      </StyledView>
    );

}
