import React from 'react';
import './style.less';
export declare type PxDragItemType = {
    children: React.ReactNode;
    dropClassName: string;
    index: number;
    onDataChange: (dragIndex: number, dropIndex: number) => void;
};
declare const _default: ({ onDataChange, index, dropClassName, children, }: PxDragItemType) => JSX.Element;
export default _default;
