import React, { useState } from 'react';

const Item = (props: { name: string; id: number }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(props.name);
    const [editName, setEditName] = useState(props.name);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setName(editName);
            setIsEdit(false);
        } else if (e.key === 'Escape') setIsEdit(false);
    };

    if (!isEdit) return <div onClick={() => setIsEdit(true)}>{name}</div>;
    else
        return (
            <input
                type="text"
                onKeyDown={handleKeyDown}
                defaultValue={name}
                onChange={(e) => setEditName(e.target.value)}
            />
        );
};

export default Item;
