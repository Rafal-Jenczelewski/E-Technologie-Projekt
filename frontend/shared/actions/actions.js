import {fetchMarkers, fetchPolylines} from '../utils/requests'

export function getMarkers() {
    return dispatch => {
        return fetchMarkers().then(res => {
            dispatch({
                type: 'GET_MARKERS',
                payload: res
            })
        })
    }
}

export function getRoutes() {
    return dispatch => {
        return fetchPolylines().then(res => {
            dispatch({
                type: 'GET_ROUTES',
                payload: res
            })
        })
    }
}
