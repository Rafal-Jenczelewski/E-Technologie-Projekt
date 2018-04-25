export function fetchMarkers() {
    return Promise.resolve({
        markers: [{
            coordinate: {
                latitude: 51.10782452,
                longitude: 17.03812
            },
            id: 1,
            name: "A nice place",
            owned: false,
            description: "Czesc, jestem jebanym opisem wszystkiego, elo.",
            isPublic: true
        }, {
            coordinate: {
                latitude: 51.10782452,
                longitude: 17.01212
            },
            id: 2,
            name: "Take her here",
            owned: true,
            description: "Czesc, jestem jebanym opisem wszystkiego, elo.",
            isPublic: true
        }, {
            coordinate: {
                latitude: 51.10782452,
                longitude: 17.034512
            },
            id: 3,
            name: "Big fucking tree",
            owned: true,
            description: "Czesc, jestem jebanym opisem wszystkiego, elo.",
            isPublic: false
        }, {
            coordinate: {
                latitude: 51.10782452,
                longitude: 17.023812
            },
            id: 4,
            name: "Nice!",
            owned: false,
            description: "Czesc, jestem jebanym opisem wszystkiego, elo.",
            isPublic: true
        }, {
            coordinate: {
                latitude: 51.10782452,
                longitude: 17.0812
            },
            id: 5,
            name: "You should see that",
            owned: false,
            description: "Czesc, jestem jebanym opisem wszystkiego, elo.",
            isPublic: true
        }
        ]
    })
}

export function fetchPolylines() {
    return Promise.resolve({
        routes: [
            {
                coordinates: [
                    {
                        latitude: 51.21782452,
                        longitude: 17.303812
                    },
                    {
                        latitude: 51.10452,
                        longitude: 17.4403812
                    }
                ],
                id: 6,
                name: "Go for a walk",
                owned: false,
                description: "Czesc, jestem jebanym opisem wszystkiego, elo.",
                isPublic: true
            }
        ]
    })
}