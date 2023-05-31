// import mongoose from "mongoose";
// const connectDB = async () => {
//     try {
//       mongoose.connect(process.env.URI, {
//         dbName: process.env.dbName,
//       });
//       console.log("connected to the db");
//     } catch (err) {
//       console.log(err);
//     }
//   };
// export default connectDB
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      dbName: process.env.dbName,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    // Handle the error appropriately (e.g., throw an error, exit the process)
    // Example: throw new Error("Failed to connect to the database");
  }
};

export default connectDB;
