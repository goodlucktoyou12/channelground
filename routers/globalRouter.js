import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { 
    coin,
    coins,
    getJoin, 
    getLogin, 
    getNoti,
    logout,
    me,
    postJoin,
    postLogin,
    transfer
} from "../controllers/userController";
import { paymentComplete, paymentTransfer } from "../controllers/paymentController";
import User from "../models/User"
import Video from "../models/Video"
import Transfer from "../models/Transfer"
import { onlyPrivate, onlyPublic } from "../middlewares";






const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
  
// globalRouter.get("/mailtest", mailTest);
  



globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
  
globalRouter.get(routes.home, home);



globalRouter.get(routes.search, search);



globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.coin, coin);
globalRouter.get(routes.coins, coins);
  
globalRouter.get(routes.me, me);
  

    
globalRouter.get(routes.paymentComplete, paymentComplete);
globalRouter.post(routes.paymentTransfer, paymentTransfer);
globalRouter.get(routes.paymentList, transfer);
  
globalRouter.get(routes.noti, getNoti);



globalRouter.get("/reset", async(req, res) => {
    try{
      await User.deleteMany({});
      await Video.deleteMany({});
      await Transfer.deleteMany({});
      res.status(200);
      res.end();
    }catch(e){
      console.log(e);
      res.status(400);
      res.end();
    }
});
  
// import User from "../models/User";
// import Notice from "../models/Notice";
// globalRouter.get("/testNotice", async (req, res) => {
//   console.log(req.user.id);
//   let u = await User.findOne({_id: req.user.id});
//   if(u != null){
//     let newNotice = await Notice.create({
//       title: "테스트 알림"
//     });
//     newNotice.save();
//     await u.notices.push(newNotice.id);
//     u.save();
//     res.send(200,"a");
//     return;
//   }
//   res.send(400,"b");
// });
  
export default globalRouter;