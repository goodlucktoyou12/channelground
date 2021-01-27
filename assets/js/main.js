import "../scss/styles.scss";
import { api } from "./api";
import "./VideoPlayer";
import "./buyCoin";
import "./transferCoin";


(async () => {
  const response = await api.getLoggedUser();
  const loggedUserId = response.data._id;

})();

var IMP = window.IMP; // 생략가능
IMP.init('imp82779040'); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용