import React, { useState } from 'react';
import { IItem } from './index';
import Item from './Item';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [name, setName] = useState('');
    if (props.sorting === 'DESC') {
        props.initialData.sort((a, b) => b.id - a.id);
    } else {
        props.initialData.sort((a, b) => a.id - b.id);
    }
    return (
        <div>
            {props.initialData.map((item) => (
                <Item key={item.id} id={item.id} name={item.name} />
            ))}
        </div>
    );
}
