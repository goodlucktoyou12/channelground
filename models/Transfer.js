import mongoose from "mongoose";
const TransferSchema = new mongoose.Schema({//amount, imp_uid, merchant_uid, status
    who: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    amount: {
        type: Number
    },
    bank: {
        type: String
    },
    bankAddr: {
        type: String
    },
    bankName: {
        type: String
    },
    bankPnumber: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Transfer", TransferSchema);
export default model;