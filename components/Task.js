// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import CheckIcon from '../icons/CheckIcon';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Task( props ) {

    if(props.done) {
        return (
            <StyledView key={"done_"+props.index + props.text} className={`flex border-[#EEEFF2] ${props.lastChild ? '' : 'border-b'}`}>
                <StyledView className="flex flex-row gap-2 items-center">

                    <StyledView className="border rounded-full border-[#9CA3AF] bg-[#9CA3AF] h-[18px] w-[18px] flex justify-center items-center">
                        <CheckIcon />
                    </StyledView>

                    <StyledView className="grow py-3">
                        <StyledText className="color-[#9CA3AF] line-through text-base">
                            {props.text}
                        </StyledText>
                    </StyledView>

                </StyledView>
            </StyledView>
        );
    }

    return (
        <StyledView key={"undone_"+props.index + props.text} className={`flex border-[#EEEFF2] ${props.lastChild ? '' : 'border-b'}`}>
            <StyledView className="flex flex-row gap-2 items-center">

                <StyledView className="border-2 rounded-full border-[#877ABA] h-[18px] w-[18px] flex justify-center items-center">

                </StyledView>

                <StyledView className="grow py-5">
                    <StyledText className="text-base">
                        {props.text}
                    </StyledText>
                </StyledView>

            </StyledView>
        </StyledView>
    );

}
