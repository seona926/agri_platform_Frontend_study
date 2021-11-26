/////////////// frontend //////////////////

function checkBlankFirstPage() {
    console.log($("#selectEmail option:selected").text())
    if ($("#str_email01").val() == "" || $("#selectEmail option:selected").text() == "직접선택") {
      alert("이메일 주소를 올바르게 입력해주세요.")
      return false;
    } else {
      checkPassword();
    }
  }
  
  function checkPassword(){
    var pw = $("#password").val();
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  
    if(pw.length < 8){
      alert("비밀번호를 8자리 이상으로 입력해주세요.");
      return false;
    }else if(pw.search(/\s/) != -1){
      alert("비밀번호는 공백 없이 입력해주세요.");
      return false;
    }else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
      alert("비밀번호는 영문, 숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
      return false;
    }else {
      $(".submit").click(function () {
        $("#container_22").show();
        $("#container_2").hide();
      }); 
    }
  }