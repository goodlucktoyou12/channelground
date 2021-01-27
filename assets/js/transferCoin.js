import axios from "axios";
$("#transferCoin").click(async () => {
    if(typeof Number($("#coin").val()) === "number" && $("#bank").val() != "" && $("#bankAddr").val() != "" && $("#bankName").val() != "" && $("#bankPnumber").val() != ""  ) {
        let response = await axios({
            url: "/payments/transfer",
            method: "POST",
            data: {
                amount: Number($("#coin").val()),
                bank: $("#bank").val(),
                bankAddr: $("#bankAddr").val(),
                bankName: $("#bankName").val(),
                bankPnumber: $("#bankPnumber").val(),
            }
        });
        let msg="";
        console.log(response.status);
        if(response.status === 200) {
            msg=response.data.user.name+"님이 "+Number($("#coin").val())+" KR을 환전 신청했습니다\n나의 채널 - KR 환전 목록에서 확인 가능합니다."
        }else if(response.status === 230){
            msg="KR 이 부족합니다."
        }
        alert(msg);
    }else{
        alert("하나 이상의 입력란이 비어있거나, 올바른 값이 입력되지 않았습니다.\n입력란을 확인해주세요.")
    }
});