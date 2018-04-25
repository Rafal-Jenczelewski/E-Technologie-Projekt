import {fetchAddMarker, fetchAddRoute} from '../utils/requests'


export function addMarker(marker) {
    return dispatch => {
        return fetchAddMarker().then(res => {
            dispatch({
                type: 'ADD_MARKER',
                payload: Object.assign({}, marker, {id: res.id})
            })
        })
    }
}

export function addRoute(route) {
    return dispatch => {
        return fetchAddRoute().then(res => {
            dispatch({
                type: 'ADD_ROUTE',
                payload: Object.assign({}, route, {id: res.id})
            })
        })
    }
}