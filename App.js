import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import { styled} from 'nativewind';

import Bottomsheet from './components/Bottomsheet';
import TopBar from './components/TopBar';
import Groups from './components/Groups';
import Lists from './components/Lists';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('screen'));

  const handleIsOpen = (val) => setIsOpen(val);
  const contentHeightDiffers = isOpen ? 590 : 209;
  const contentHeight = Math.ceil(screenDimensions.height - contentHeightDiffers);

  useEffect(() => {
    const updateScreenDimensions = () => {
      setScreenDimensions(Dimensions.get('screen'));
    };

    Dimensions.addEventListener('change', updateScreenDimensions);
  }, []);

  return (
    <StyledView className="flex-1 bg-[#fff]">
      {/* TopBar */}
      <TopBar />

      {/* Main */}
      <StyledView className={`pb-[100px]`} style={{height: contentHeight}}>

        {/* Groups */}
        <Groups />

        {/* Content */}
        <StyledView className="mt-3 px-5">
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>

              {/* Unfinished todos */}
              <StyledView>
                <Lists done={false} />
              </StyledView>

              {/* Section title */}
              <StyledView className="mt-5 mb-4">
                <StyledText className="color-[#111827] font-bold">Avklarade</StyledText>
              </StyledView>
              
              {/* Finished todos */}
              <StyledView className="mb-5">
                <Lists done={true} />
              </StyledView>

            </ScrollView>
          </SafeAreaView>
        </StyledView>
      </StyledView>

      {/* Bottomsheet */}
      <Bottomsheet handleisopen = {handleIsOpen} isOpen={isOpen}/>

    </StyledView>
  );

}
