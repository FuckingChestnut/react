import { createApiAction, createNormalAction } from '../../reduxHelper/actionHelper';

export const fetchInformation = createNormalAction('fetchInformation');

export const fetchClassList = createApiAction('fetchClassList', {
    url: '/classList',
    method: 'get',
});

export const fetchClassDetail = createApiAction('fetchClassDetail', {
    url: '/classDetail',
    method: 'get',
});
