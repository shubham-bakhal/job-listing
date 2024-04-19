import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log(`Connected to Db and listening to port ${process.env.PORT}`);
  })
  .catch((err: Error) => console.log(err.message));

mongoose.set("sanitizeFilter", true);
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to db");
});

mongoose.connection.on("error", (err: Error) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected.");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
