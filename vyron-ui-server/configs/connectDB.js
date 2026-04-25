import dns from "node:dns";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dnsServers = process.env.DNS_SERVERS?.split(",").map((server) => server.trim()).filter(Boolean) || ["8.8.8.8", "1.1.1.1"];
        dns.setServers(dnsServers);
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected", mongoose.connection.host)
    } catch (error) {
        console.log("DB error", error)
        throw error
    }
}
export default connectDB
