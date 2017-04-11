import {createApiAction} from '../../reduxHelper/actionHelper'

export const alertAction = createApiAction('alert', {
    url: 'http://112.74.125.179/bingo/product/pengchuan',
    method: 'jsonp'
});
