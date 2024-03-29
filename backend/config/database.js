import mongoose from "mongoose";

export const connectDatabase = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then((c) => {
			console.log(`MongoDB connected to: ${c.connection.host}`);
		})
		.catch((c) => {
			console.log(c);
		});
};
