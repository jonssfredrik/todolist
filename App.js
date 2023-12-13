import React, { useState } from 'react';
import { Text, View, TextInput} from 'react-native';
import Task from './components/Task';
import List from './components/List';
import { styled, Transition } from 'nativewind';
import LogoDark from './icons/LogoDark';
import CloseIcon from './icons/CloseIcon';
import DotsVertical from './icons/DotsVertical';
import StarIcon from './icons/StarIcon';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function App() {

  const tasks = [
    {
      'id': 1,
      'text': 'Smör'
    },
    {
      'id': 2,
      'text': 'Dricka'
    },
    {
      'id': 3,
      'text': 'Chips'
    },
    {
      'id': 4,
      'text': 'Bröd'
    }
  ];

  const tasksDone = [
    {
      'id': 1,
      'text': 'Gurka'
    },
    {
      'id': 1,
      'text': 'Kaviar'
    }
  ]

  const Lists = [
    {
      'id': 1,
      'name': 'Inköpslista',
      'theme': 1,
      'itemsLeft': 6,
      'fav': true
    },
    {
      'id': 2,
      'name': 'Inför resan',
      'theme': 2,
      'itemsLeft': 4,
      'fav': false,
    },
    {
      'id': 3,
      'name': 'Fixa på bilen',
      'theme': 3,
      'itemsLeft': 3,
      'fav': false
    },
    {
      'id': 4,
      'name': 'Att göra',
      'theme': 4,
      'itemsLeft': 12,
      'fav': false
    }
  ]

  const animate = () => {

      const elem = getElementById('suggestions');

      
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledView className="flex-1 bg-[#fff] px-5">
      <StyledView className="h-[44px]"></StyledView>

      {/* --- TopBar --- */}
      <StyledView className="h-[74px] flex flex-row items-center">

        {/* Left */}
        <StyledView className="basis-1/4">
          
        </StyledView>

        {/* Middle */}
        <StyledView className="basis-2/4 items-center">
          <LogoDark />
        </StyledView>

        {/* Right */}
        <StyledView className="basis-1/4 items-end">
          <DotsVertical />
        </StyledView>
      </StyledView>
      {/* --- TopBar End --- */}

      {/* --- Content ---- */}
      <StyledView className="flex gap-10">

        {/* Grupper */}
        <StyledView className="">
          <StyledView className="color-[#6B7280] flex flex-row justify-start items-start mt-1">

            {Lists.map((list, i) => (
                <List 
                  id={list.id} 
                  name={list.name}
                  theme={list.theme}
                  itemsLeft={list.itemsLeft}
                  fav={list.fav}
                  lastChild={(i === Lists.length -1) ? true : false} 
                  />
            ))}

          </StyledView>
        </StyledView>

        {/* Lista */}
        <StyledView className="flex px-3.5 border-solid border-2 border-[#EEEFF2] rounded-xl">
          <StyledView className="flex">

              {tasks.map((task, index) => (
                  <Task 
                    id={task.id} 
                    text={task.text}
                    done={false}
                    lastChild={(index === tasks.length -1) ? true : false} 
                    />
              ))}

          </StyledView>
        </StyledView>
        
        {/* Section */}
        <StyledView>
          {/* Title */}
          <StyledView className="mb-4">
            <StyledText className="color-[#111827] font-bold">Avklarade</StyledText>
          </StyledView>

          {/* Lista */}
          <StyledView className="flex px-3.5 border-solid border-2 border-[#EEEFF2] rounded-xl">
            <StyledView className="flex">

                {tasksDone.map((task, index) => (
                    <Task 
                      index={task.index} 
                      text={task.text}
                      done={true}
                      lastChild={(index === tasksDone.length -1) ? true : false} 
                      />
                ))}

            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
      {/* --- Content End ---- */}

      {/* --- Footer ---- */}
      <StyledView className="absolute bottom-0 left-0 right-0 flex justify-center bg-[#fff] pt-6 border border-[#EEEFF2] border-b-0 rounded-tl-[24px] rounded-tr-[24px] shadow-2xl">
        <StyledView className="absolute top-[8px] left-[50%] h-[6px] w-[32px] bg-[#EEEFF2] rounded ml"></StyledView>
          
        {/* <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}

        <StyledView className="overflow-hidden px-5" style={{height:118}} id="suggestions">

            <StyledView className="flex flex-row justify-between items-center border-[#EEEFF2] border-b h-[50px]">
              <StyledText className="color-[#111827] text-lg">Lägg till ny todo</StyledText>
              <StyledText className="color-[#699CF4] text-base">Avbryt</StyledText>
            </StyledView>

            <StyledView className="flex flex-row h-[39px] mt-7">

              <StyledView className="flex justify-center h-[32px] px-4 mr-2 bg-[#F9FAFB] border border-[#EEEFF2] rounded-full">
                <StyledText className="color-[#6B7280] text-sm">Dricka</StyledText>
              </StyledView>

              <StyledView className="flex justify-center h-[32px] px-4 mr-2 bg-[#F9FAFB] border border-[#EEEFF2] rounded-full">
                <StyledText className="color-[#6B7280] text-sm">Snus</StyledText>
              </StyledView>
              
              <StyledView className="flex justify-center h-[32px] px-4 mr-2 bg-[#F9FAFB] border border-[#EEEFF2] rounded-full">
                <StyledText className="color-[#6B7280] text-sm">Vegoburgare</StyledText>
              </StyledView>
              
              <StyledView className="flex justify-center h-[32px] px-4 mr-2 bg-[#F9FAFB] border border-[#EEEFF2] rounded-full">
                <StyledText className="color-[#6B7280] text-sm">Creme fraiche</StyledText>
              </StyledView>

          </StyledView>

        </StyledView>

        {/* </Transition> */}

        <StyledView className="z-10 flex h-[58px] justify-center border-b border-[#EEEFF2] px-5">

          {/* <StyledText className="color-[#9CA3AF] text-base">Lägg till ny todo</StyledText> */}
          <TextInput style={{ height: 58, borderWidth: 0, }} placeholder="Lägg till ny todo" />

        </StyledView>
      </StyledView>

    </StyledView>
  );

}


