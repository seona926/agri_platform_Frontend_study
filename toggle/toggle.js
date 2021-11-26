$(document).on('click', '.toggleBG', function () {
    var toggleBG = $(this);
    var toggleFG = $(this).find('.toggleFG');
    var left = toggleFG.css('left');
    if(left == '15px') {
        toggleBG.css('background', '#CCCCCC');
        toggleActionStart(toggleFG, 'TO_LEFT');
        console.log("off")
    }else if(left == '-5px') {
        toggleBG.css('background', '#4B48FD');
        toggleActionStart(toggleFG, 'TO_RIGHT');
        console.log("on")
    }
});
 
// 토글 버튼 이동 모션 함수
function toggleActionStart(toggleBtn, LR) {
    // 0.01초 단위로 실행
    var intervalID = setInterval(
        function() {
            // 버튼 이동
            var left = parseInt(toggleBtn.css('left'));
            left += (LR == 'TO_RIGHT') ? 5 : -5;
            if(left >= -5 && left <= 15) {
                left += 'px';
                toggleBtn.css('left', left);
            }
        }, 10);
    setTimeout(function(){
        clearInterval(intervalID);
    }, 201);
}
