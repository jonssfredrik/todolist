// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import StarIcon from '../icons/StarIcon';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Task( props ) {

    const variantStyles = {
        1: "bg-[#877ABA]",
        2: "bg-[#7A94BA]",
        3: "bg-[#7ABAAE]",
        4: "bg-[#D68E66]",
    };

    return (
        <StyledView className={`h-[100px] flex flex-column gap-y-1 rounded-xl pt-[12px] pb-[14px] px-[14px] min-w-[170px] flex-grow justify-center ${variantStyles[ props.theme ]} ${props.lastChild ? 'mr-0' : 'mr-2'}`} >
            {props.fav &&
                <StyledView className="absolute right-[5px] top-[5px]"><StarIcon /></StyledView>
            }
            <StyledText className="color-[#fff] text-lg mb-0 leading-5 ">{props.name}</StyledText>
            <StyledText className="color-[#fff] text-base opacity-[0.8]">{props.itemsLeft} todos kvar</StyledText>
        </StyledView>
    );

}
