const { init } = require("../dbInit");
const { ObjectId } = require("mongodb");

class Bird {
  constructor(data) {
    this.id = data.id;
    this.colour = data.colour;
    this.location = data.location;
    this.number = data.number;
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const birdsData = await db.collection("birds").find().toArray();
        const birds = birdsData.map((d) => new Bird({ ...d, id: d._id }));
        resolve(birds);
      } catch (err) {
        console.log(err);
        reject("Error retrieving BIRDS ");
      }
    });
  }
}

module.exports = Bird;
