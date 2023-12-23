import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';

import Task from './Task';

const StyledView = styled(View)

export default function Lists( props ) {

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
        },
        {
          'id': 5,
          'text': 'Kaviar'
        },
        {
          'id': 6,
          'text': 'Ost'
        },
        {
          'id': 7,
          'text': 'Skinka'
        }
    ];
    
    const tasksDone = [
      {
          'id': 8,
          'text': 'Gurka'
      },
      {
          'id': 9,
          'text': 'Sallad'
      },
      {
          'id': 10,
          'text': 'Rödlök'
      },
      {
          'id': 11,
          'text': 'Fetaost'
      },
      {
          'id': 12,
          'text': 'Tomater'
      },
      {
          'id': 13,
          'text': 'Rödlök'
      },
      {
          'id': 14,
          'text': 'Fetaost'
      },
      {
          'id': 15,
          'text': 'Tomater'
      }
    ]

    const listItems = props.done ? tasksDone : tasks;
    
    return (
        <StyledView className="flex px-3.5 border-solid border-2 border-[#EEEFF2] rounded-xl">
            <StyledView className="flex">
                {listItems.map((item, index) => (
                  <StyledView className="flex" key={index}>
                    <Task
                      id={item.id}
                      text={item.text}
                      done={props.done}
                      lastChild={(index === listItems.length -1) ? true : false} 
                    />
                  </StyledView>
                ))}
            </StyledView>
        </StyledView>
    );
}
