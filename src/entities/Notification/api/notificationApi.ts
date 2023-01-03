import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notification';

export const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotification: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationQuery;
