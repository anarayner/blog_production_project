import { useTranslation } from 'react-i18next';
import { FC, ReactNode, useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [reducerKey in StateSchemaKey]?: Reducer;
}

type ReducerListEntry =[StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
    const { t } = useTranslation();
    const {
        reducers,
        removeAfterUnmount,
        children,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]) => {
            store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${reducerKey} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey, reducer]) => {
                    store.reducerManager.remove(reducerKey as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};
