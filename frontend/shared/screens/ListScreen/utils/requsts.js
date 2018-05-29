const api = "http://10.0.2.2:4567/";
import store from '../../../store/store'

function getUserToken() {
    return store.getState().userInfo.userInfo;
}

function getUserID() {
    return store.getState().userInfo.userID
}

function getUserName() {
    return store.getState().userInfo.name
}

function getHeaders() {
    return {
        'USER_TOKEN': getUserToken()
    };
}

export function changeIsPublic(id, isPublic) {
    return fetch(api + "changeStatus", {
        method: 'put',
        headers: getHeaders(),
        body: JSON.stringify({
            id: id,
            isPublic: isPublic,
            userID: getUserID()
        })
    })
}

export function getComments(id) {
    // return fetch(api + '/getComments?id=' + id)
    //     .then(res => res.json());

    return Promise.resolve([
        {
            id: 1,
            author: "Rafał Jenczelewski",
            content: "Wow, that's really cool, 5/5"
        },
        {
            id: 2,
            author: "Jadwiga Raczko",
            content: "Nah, not worth it"
        }
    ])
}

export function fetchAddComment(comment) {
    return fetch(api + "/addComment", {
        method: 'post',
        body: JSON.stringify(Object.assign({}, comment, {
            authorId: getUserName()
        })),
        headers: getHeaders()
    })
}