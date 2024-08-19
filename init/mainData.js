const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
}

main()
.then(() =>{
    console.log("Connection Successful");
})
.catch((err) => {
    console.log(err);
})

const initDB  = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "66b779f451286a52bcb26f34"}));
    await Listing.insertMany(initData.data);
    console.log("Data was Initialized");
};

initDB();