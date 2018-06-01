$(function(){
	 $(".req_send").click(function(){
        // 檢查標題
        if (!$('.req_name').val() ) {  
          alert('姓名不能空白');
          return false;
        } else if (!$('.req_phone').val() ) {
          alert('電話號碼不能空白');
          return false;
        } else if (!$('.req_msg').val() ) {
          alert('留言不能空白');
          return false;
        } else{
            checkPass();
        } 
    });

    //E-MAIL格式檢查 
    $("body").on("change", ".req_mail", function (){
        var mail_content = $(".req_mail");
        $Emailchecking=IsEmail($(".req_mail").val());
        if($Emailchecking==false){
            alert("請填寫正確的E-MAIL格式");
            mail_content.val("");
            $(".req_mail").blur(); //離開焦點
        }
    });

    function IsEmail(email) { 
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            return false;
        }else{
            return true;
        }
    }



    function checkPass(){
        var psd1=document.getElementById("txb_Password12").value;
        var psd2=document.getElementById("txb_Password22").value;
        if(psd1!=psd2){
            alert("密碼不一致，請重新輸入");
            // document.getElementById("ContentPlaceHolder2_txb_Password1").value="";
            // document.getElementById("ContentPlaceHolder2_txb_Password2").value="";
            return false;
        } else{
            alert("密碼修改成功，可使用新密碼登入!");
            return true;}
    }
});