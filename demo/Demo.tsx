import React, { useState } from 'react';
import usePxDrag from '../src/hooks/usePxDrag';
import PxDragItem from '../src';
import './style.less';

export default () => {
    const [data, setData] = useState(
        Array(10)
            .fill(null)
            .map((_, index) => index)
    );

    const { pxDragProps } = usePxDrag<number>({
        data,
        onDataChange: newData => setData(newData),
    });

    return (
        <div className="contianer">
            {data.map((item, index) => {
                return (
                    <PxDragItem
                        key={item}
                        index={index}
                        dropClassName="drop-item"
                        {...pxDragProps}
                    >
                        <div className="item">{item}</div>
                    </PxDragItem>
                );
            })}
        </div>
    );
};
