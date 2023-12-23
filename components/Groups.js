import React from 'react';
import { View, SafeAreaView, ScrollView, } from 'react-native';
import { styled } from 'nativewind';

import List from './List';

const StyledView = styled(View)
export default function Task( props ) {

    const Lists = [
        {
            'id': 1,
            'name': 'Inköpslista',
            'theme': 1,
            'itemsLeft': 6,
            'fav': true,
        },
        {
            'id': 2,
            'name': 'Inför resan',
            'theme': 2,
            'itemsLeft': 4,
            'fav': true,
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
    
    return (
        <StyledView>
            <SafeAreaView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="pb-2 ml-5 mr-5">
                    <StyledView className="color-[#6B7280] flex flex-row justify-start items-start mt-1">
                    {Lists.map((list, i) => (
                        <List 
                            id={list.id} 
                            name={list.name}
                            theme={list.theme}
                            itemsLeft={list.itemsLeft}
                            fav={list.fav}
                            done={false}
                            lastChild={(i === Lists.length -1) ? true : false}
                            current={(i === 0) ? true : false}
                        />
                    ))}
                    </StyledView>
                </ScrollView>
            </SafeAreaView>
        </StyledView>
    );
}