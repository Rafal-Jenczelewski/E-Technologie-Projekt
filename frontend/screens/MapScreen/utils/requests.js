const api = "http://10.0.2.2:4567/";

export function fetchAddMarker(marker) {
    return fetch(api + "addMarker", {
        method: "POST",
        body: JSON.stringify(marker)
    }).then(res => res.json());

    // return Promise.resolve({
    //     status: 200,
    //     id: ((Math.random() * 100) + 1)
    // })
}

export function fetchAddRoute(route) {
    return fetch(api + "addRoute", {
        method: "POST",
        body: JSON.stringify(route)
    })

    // return Promise.resolve({
    //     status: 200,
    //     id: ((Math.random() * 100) + 1)
    // })
}