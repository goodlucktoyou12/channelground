import routes from "../routes";
import Transfer from "../models/Transfer";
import User from "../models/User";
import Buy from "../models/Buy";
import { Iamporter } from "iamporter"

// const iamporter = new Iamporter();

// For Production
const iamporter = new Iamporter({
  apiKey: '5188598336774814',
  secret: 'svu0fjQMtIC4Gup06cKA3U0S7ID5O29hxDhMW8zqRbvxFUxL6iladm3l4GqSIzagdr39ACArN5Zt0wf6'
});
//http://localhost:4000/payments/complete?imp_uid=imp_542978097874&merchant_uid=merchant_1584545978061
export const paymentComplete = (req, res) => {
    const impUid = req.param("imp_uid");
    const merchantUid = req.param("merchant_uid");

    let result;

    console.log(impUid);
    console.log(merchantUid);

    iamporter.findByMerchantUid(merchantUid)
        .then(async (value) => {
            console.log(value);
            result=value;
            //res.send(200, {result: result})
            let { amount, imp_uid, merchant_uid, status } = value.data;
            if(status === 'paid'){// 결제 금액은 amount
                //db 조회, 결제 내역 없으면 유저 코인 부여
                const ifPaid = await Buy.findOne({imp_uid: imp_uid, merchant_uid: merchant_uid});
                if(!ifPaid){
                    //코인 부여
                    User.findOne({_id: req.user.id}, async function(err, user){
                        user.coin = user.coin + amount;
                        const newPaid = await Buy.create({
                            imp_uid: imp_uid,
                            merchant_uid: merchant_uid,
                            amount: amount
                        });
                        newPaid.save();
                        user.save();
                    });
                    res.status(200);
                    res.redirect(routes.coin);
                }else{
                    res.status(400);
                    res.redirect(routes.coin);
                }
                //이미 있는 내역이면 이미 처리된 결제 내역입니다
            }else{
                res.status(400);
                res.redirect(routes.coin);
            }
        })
}

export const paymentTransfer = async (req, res) => {
    //post 받아서 amount 만큼 코인 감소 및 디비 저장, 개인 출금 내역으로도 저장
    const {
        body: { amount, bank, bankAddr,bankName,bankPnumber }
    } = req;
    let user = req.user;
    try{
        if(user.coin >= amount){
            const newTransfer = await Transfer.create({
                who: user.id,
                amount: amount,
                bank : bank,
                bankAddr: bankAddr,
                bankName:bankName,
                bankPnumber:bankPnumber
                
            });
            newTransfer.save();
            User.findOne({_id: req.user.id}, function(err, user){
                user.transferList.push(newTransfer.id);
                user.coin = user.coin - amount;
                user.save();
                res.json({user});
                res.status(200);
            });
            return;
        }else{
            res.status(230);
            return;
        }
    }catch(err){
        console.log(err);
        res.json(err);
        res.status(400);
        return;
    }
}