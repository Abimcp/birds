const db = connect("mongodb://localhost:27017/")


db.birds.drop()
db.ornithologist.drop()

// name colour where number

db.birds.insertMany([
    { name: "Red Kite", colour: "Red",location: "Cotswolds", number: 3},
    { name: "Bird Big", colour: "Yellow",location: "Sesame Street", number: 1},
    { name: "Pigeons", colour: "Grey",location: "On the Roof", number: 10},
    { name: "Tweetie Pie", colour: "Yellow",location: "Television", number: 1},
    { name: "Angry Birds", colour: "Black",location: "Phones", number: 17 },
    { name: "Non Ravens", colour: "Not Black", location: "Everywhere & Nowhere", number: 3},
    { name: "Buckbeck", colour: "Silver", location: "The Forbidden Forest", number: 1 },
    { name: "Starling", colour: "Black with Metallic Sheen",location: "In the Late Summer Sky", number: 500 },
    { name: "Seagulls", colour: "White", location: "Near Your Food", number: 50},
    { name: "Zazu", colour: "Blue", location: "The Pride Lands", number: 1 }
])

db.ornithologist.insertMany([
    { name: 'Cerise' },
    { name: 'Abi' },
    { name: 'Jasmin' },
    { name: 'David Attenborough' }
])