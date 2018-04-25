

export function fetchAddMarker() {
    return Promise.resolve({
        status: 200,
        id: ((Math.random() * 100) + 1)
    })
}

export function fetchAddRoute() {
    return Promise.resolve({
        status: 200,
        id: ((Math.random() * 100) + 1)
    })
}