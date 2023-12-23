import React from 'react';
import { Text, View } from 'react-native';
import CheckIcon from '../icons/CheckIcon';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Task( props ) {

    const uniqKey           = props.id;
    const lastChildClass    = props.lastChild ? 'border-0' : '';

    const rowClasses        = 'flex border-b border-[#EEEFF2] ' + lastChildClass;
    const circleClasses     = props.done ? 'border-[#9CA3AF] bg-[#9CA3AF] border' : 'border-[#877ABA] border-2';
    const checkIcon         = props.done ? <CheckIcon /> : '';
    const rowPadding        = props.done ? 'py-3' : 'py-5';
    const textDecoration    = props.done ? 'color-[#9CA3AF] line-through text-base' : 'text-base';
    
    return (
        <StyledView key={"1"+uniqKey} className={rowClasses}>
            <StyledView className="flex flex-row gap-2 items-center">

                <StyledView className={`rounded-full h-[18px] w-[18px] flex justify-center items-center ${circleClasses}`}>
                    {checkIcon}
                </StyledView>

                <StyledView className={`grow ${rowPadding}`}>
                    <StyledText className={textDecoration}>
                        {props.text}
                    </StyledText>
                </StyledView>

            </StyledView>
        </StyledView>
    );
}
