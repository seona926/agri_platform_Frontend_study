var ref = [
    {key:1, name:'데이터1'},
    {key:2, name:'데이터2'},
    {key:3, name:'자바스크립트'},
    {key:4, name:'Json'},
];

var isComplete = false;  //autoMaker 자식이 선택 되었는지 여부
$('#search_area').keyup(function(){
    var txt = $(this).val();
    if(txt != ''){  //빈줄이 들어오면
        $('#autoMaker').children().remove();

        ref.forEach(function(arg){
            if(arg.name.indexOf(txt) > -1 ){
                $('#autoMaker').append(
                    $('<div>').text(arg.name).attr({'key':arg.key})
                );		
            }
        });
        $('#autoMaker').children().each(function(){
            $(this).click(function(){
                $('#search_area').val($(this).text());
                $('#insert_target').val("key : "+$(this).attr('key')+ ", data : " + $(this).text());
                $('#autoMaker').children().remove();	
                isComplete = true;
            });
        });			
    } else {
        $('#autoMaker').children().remove();
    }  
});
$('#search_area').keydown(function(event){
    if(isComplete) {  //autoMaker 자식이 선택 되었으면 초기화
        $('#insert_target').val('')	
    }
})

List = [
    "종로2가사거리",
    "창경궁.서울대학교병원",
    "명륜3가.성대입구",
    "종로2가.삼일교",
    "혜화동로터리.여운형활동터",
    "서대문역사거리",
    "서울역사박물관.경희궁앞",
    "서울역사박물관.경희궁앞",
    "광화문",
    "광화문",
    "종로1가",
    "종로1가",
    "종로2가",
    "종로2가",
    "종로3가.탑골공원",
    "종로3가.탑골공원",
    "종로4가.종묘",
    "종로4가.종묘",
    "종로5가.광장시장",
    "종로5가.광장시장",
    "종로6가.동대문종합시장",
    "종로6가.동대문종합시장",
    "동대문역.흥인지문",
    "동대문(흥인지문)",
    "동묘앞",
    "동묘앞",
    "경기상고",
    "신교동",
    "경기상고",
    "경복고교",
    "청운중학교",
    "자하문고개.윤동주문학관",
    "자하문고개.윤동주문학관",
    "청운중학교",
    "경복고교",
    "통인시장종로구보건소",
    "통인시장종로구보건소",
    "효자동",
    "사직단.어린이도서관",
    "사직동주민센터",
    "경복궁역",
    "경복궁역",
    "경복궁",
    "KT광화문지사",
    "광화문",
    "서울역사박물관.경교장.강북삼성병원",
    "광화문.금호아시아나본관앞",
    "광화문",
    "세종문화회관",
    "서울지방경찰청.경복궁역",
    "사직단",
    "광화문광화문빌딩",
    "덕성여중고",
    "안국역.종로경찰서.인사동",
    "국민은행세검정지점",
    "세검정초등학교",
    "세검정.상명대",
    "상명대입구.석파랑",
    "하림각",
    "자하문터널입구.석파정",
    "부암동주민센터.무계원",
    "부암동주민센터.무계원",
    "자하문터널입구.석파정",
    "하림각",
    "상명대입구.세검정교회",
    "세검정.상명대",
    "세검정초등학교",
    "국민은행세검정지점",
    "승가사입구",
    "구기동현대빌라",
    "구기터널.삼성출판박물관",
    "구기터널.삼성출판박물관",
    "구기동",
    "구기동",
    "승가사입구",
    "갑을씨티텔앞",
    "평창파출소",
    "평창동주민센터",
    "일성아파트",
    "롯데아파트",
    "롯데아파트",
    "벽산평창힐스아파트",
    "예능교회",
    "서울예술고등학교.평창동주민센터",
    "화정박물관",
    "강북삼성병원",
    "독립문역.서대문형무소역사관",
    "서대문.서울시교육청",
    "서대문역사거리.적십자병원",
    "독립문",
    "창덕궁.서울돈화문국악당",
    "무교동",
    "청계1가.광교",
    "청계2가.수표교",
    "청계4가.세운교",
    "청계5가.광장시장",
    "원남동",
    "창덕궁.우리소리박물관",
    "안국역.종로경찰서.인사동",
    "조계사",
    // ... 10891개 데이터 생략
]