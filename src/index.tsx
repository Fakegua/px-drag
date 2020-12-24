import React from 'react';
import { useDrag, useDrop } from 'ahooks';
import classnames from 'classnames';
import './style.less';

export type PxDragItemType = {
    children: React.ReactNode;
    dropClassName: string;
    index: number;
    onDataChange: (dragIndex: number, dropIndex: number) => void;
};

export default ({
    onDataChange,
    index,
    dropClassName,
    children,
}: PxDragItemType) => {
    const [dropProps, { isHovering }] = useDrop({
        onDom: (dragIndex, e) => {
            onDataChange(dragIndex, index);
        },
    });

    const dragProps = useDrag();

    return (
        <div
            {...dragProps(index)}
            {...dropProps}
            className={classnames('px-drag-item', {
                [dropClassName]: isHovering,
            })}
        >
            {children}
        </div>
    );
};
