import "dotenv/config";
import prisma from "./config/db.js";
import app from "./app.js";

prisma.$connect().then(() => app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
}));

