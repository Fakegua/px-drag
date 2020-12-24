import { cloneDeep, drop } from 'lodash';
import { PxDragItemType } from '..';

export type UsePxDragDataType<T = any> = {
    data: T[];
    onDataChange: (newData: UsePxDragDataType<T>['data']) => void;
};

function usePxDrag<T = any>({ data, onDataChange }: UsePxDragDataType<T>) {
    const hadnleDataChange: PxDragItemType['onDataChange'] = (
        dragIndex,
        dropIndex
    ) => {
        try {
            const newData = cloneDeep(data);
            const item = newData.splice(dragIndex, 1)[0];
            newData.splice(dropIndex, 0, item);
            onDataChange(newData);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        data,
        pxDragProps: {
            onDataChange: hadnleDataChange,
        },
    };
}

export default usePxDrag;
