// const { init } = require("../dbInit");
// const { ObjectId } = require("mongodb");

// class Ornithologist {
//   constructor(data) {
//     this.id = data.id;
//     this.name = data.colour;
//     this.location = data.location;
//     this.number = data.number;
//   }
//   static get all() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await init();
//         const birdsData = await db.collection("birds").find().toArray();
//         const birds = birdsData.map((d) => new Bird({ ...d, id: d._id }));
//         resolve(birds);
//       } catch (err) {
//         console.log(err);
//         reject("Error retrieving BIRDS ");
//       }
//     });
//   }
//   static findById(id) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await init();
//         let birdsData = await db
//           .collection("birds")
//           .find({ _id: ObjectId(id) })
//           .toArray();
//         let birds = new Bird({ ...birdsData[0], id: birdData[0]._id });
//         resolve(birds);
//       } catch (err) {
//         reject("Bird not found");
//       }
//     });
//   }
//   static create(name, age) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await init();
//         let birdsData = await db.collection("birds").insertOne({ name, age });
//         let newBird = new Bird(birdsData.ops[0]);
//         resolve(newBird);
//       } catch (err) {
//         reject("Error creating bird");
//       }
//     });
//   }
//   update() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await init();
//         let updatedBirdData = await db
//           .collection("birds")
//           .findOneAndUpdate(
//             { _id: ObjectId(this.id) },
//             { $inc: { number: 1 } },
//             { returnOriginal: false }
//           );
//         let updatedBird = new Dog(updatedBirdData.value);
//         resolve(updatedBird);
//       } catch (err) {
//         reject("Error updating Birds");
//       }
//     });
//   }

//   destroy() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await init();
//         await db.collection("birds").deleteOne({ _id: ObjectId(this.id) });
//         resolve("Bird was deleted");
//       } catch (err) {
//         reject("Bird could not be deleted");
//       }
//     });
//   }
// }
