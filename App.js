import React from 'react';
import { Text, View, Button} from 'react-native';
import { styled } from 'nativewind';
import { StatusBar } from 'expo-status-bar';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function App() {

  const test = () => {
    console.log("Clicked!");
  }
  
  return (
    <StyledView className="flex-1 bg-[#fff] px-5">

      <StatusBar style="dark"/>
      <StyledView className="h-[41px]"></StyledView>

      <StyledView className="mt-[100px]">
        <Button title="Click me!" onClick={() => test()} />
      </StyledView>
      
    </StyledView>
  );

}
