//////////////////// frontend ///////////////////////

const phoneNumber = document.getElementsByClassName('input_1')[0];
const phoneClickBtn = document.getElementsByClassName('click')[0];
const phoneSaveBtn = document.getElementsByClassName('save-btn1')[0];

const address = document.getElementsByClassName('input_2')[0];
const addressClickBtn = document.getElementsByClassName('click2')[0];
const addressSaveBtn = document.getElementsByClassName('save-btn2')[0];

const foundation = document.getElementsByClassName('input')[0];
const foundationClickBtn = document.getElementsByClassName('click3')[0];
const foundationSaveBtn = document.getElementsByClassName('save-btn3')[0];

function modifyPhoneNumber() {
  phoneNumber.innerHTML = `<input id="phone-input" placeholder="전화번호를 입력해주세요"></input>`;
  phoneClickBtn.style.visibility = 'hidden';
  phoneSaveBtn.style.display = 'block';
}

function modifyAddress() {
  address.innerHTML = `<input id="address-input" placeholder="주소를 입력해주세요"></input>`;
  addressClickBtn.style.visibility = 'hidden';
  addressSaveBtn.style.display = 'block';
}

function modifyFoundation() {

  foundation.innerHTML = `<input id="foundation-input" placeholder="YYYY-MM-DD" autocomplete="off"></input>`
  foundationClickBtn.style.visibility = "hidden";
  foundationSaveBtn.style.display = "block";

  $("#foundation-input").datepicker({
    dateFormat: 'yy-mm-dd' //달력 날짜 형태
    , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서
    , changeYear: true //option값 년 선택 가능
    , changeMonth: true //option값  월 선택 가능                
    , buttonText: "선택" //버튼 호버 텍스트              
    , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
    , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
    , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
    , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'] //달력의 요일 텍스트
    , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 Tooltip
    , minDate: "-30Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    , maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
  });
}

function savePhoneNumber() {
  let newPhoneNumber = document.getElementById('phone-input').value;
  phoneNumber.innerHTML = `${newPhoneNumber}`;

  phoneClickBtn.style.visibility = 'visible';
  phoneSaveBtn.style.display = 'none';
}

function saveAddress() {
  let newAddress = document.getElementById('address-input').value;
  address.innerHTML = `${newAddress}`;

  addressClickBtn.style.visibility = 'visible';
  addressSaveBtn.style.display = 'none';
}

function saveFoundation() {
  let newFoundation = document.getElementById('foundation-input').value;
  foundation.innerHTML = `${newFoundation}`;

  foundationClickBtn.style.visibility = 'visible';
  foundationSaveBtn.style.display = 'none';
}

function toggle(element) {
  console.log(element.checked);
}

// $('.popup_close2').on('click', function () {
//   $('#pop_body').hide();
// });

// $('.popup_close3').on('click', function () {
//   $('#pop_body').hide();
// });

// $(document).ready(function () {
//   $('.a_wrap >li').click(function () {
//     $('.none > dd').hide();
//     $('.a_wrap > li > a').hide();
//     $('.none > border_bottom').hide();
//     $(this).children('.sub').stop().slideDown(400);
//   });
// });
