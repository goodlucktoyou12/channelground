$("#buyCoin").click(() => {
    if(Number($("#coin").val())>=100){
        IMP.request_pay({
            pay_method : 'card',
            merchant_uid : 'merchant_' + new Date().getTime(),
            name : '퍼니 KR 충전',
            amount : Number($("#coin").val()),
            buyer_email : $("#email").val(),//이메일
            buyer_name : $("#name").val(),//이름
            buyer_tel : $("#phone").val(),//전화번호
            m_redirect_url : 'http://localhost:4000/payments/complete'//리다이렉트
        }, async (rsp) => {
            if ( rsp.success ) {
                var msg = '결제가 완료되었습니다.\n';
                // msg += '고유ID : ' + rsp.imp_uid;
                // msg += '상점 거래ID : ' + rsp.merchant_uid;
                // msg += '결제 금액 : ' + rsp.paid_amount;
                // msg += '카드 승인번호 : ' + rsp.apply_num;
                window.location.href = "/payments/complete?imp_uid="+rsp.imp_uid+"&merchant_uid="+rsp.merchant_uid;
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
        });
    }else{
        alert("100원 부터 충전이 가능합니다");
    }
});