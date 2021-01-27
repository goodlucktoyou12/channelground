import mongoose from "mongoose";
const BuySchema = new mongoose.Schema({//amount, imp_uid, merchant_uid, status
    amount: {
        type: Number
    },
    imp_uid:{
        type: String
    },
    merchant_uid: {
        type: String
    }
    
});

const model = mongoose.model("Buy", BuySchema);
export default model;