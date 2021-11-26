///////////////////////////////////frontEnd////////////////////////////////////////

///////////// 검색어 입력시 서치바에 open 클래스를 추가, 포커스 아웃시 open 클래스 삭제

const srcBar = document.getElementById('autoComplete');

// document.addEventListener('keyup', logKey);
// function logKey(e) {
//   let input = srcBar.value;

//   const aElement = document.getElementById('item-wrap');
//   const firstItem = document.getElementsByClassName('item-desc');

//   if (input.length == 0) {
//     srcBar.classList.remove('open');
//   } else if (aElement) {
//     console.log('it runs');
//     srcBar.classList.add('open');
//   }
// }

//////////////// autocomplete version - 1 ////////////////

// 보류 : 관심상품 DB와 연결되어야 관심상품 기능 처리 가능
// List = [
//   "토마토(11111)",
//   "토마토쥬스(12222)",
//   "토마토케챱(13333)",
//   "토란(14444)",
// ];

// $(function () {
//   //화면 로딩후 시작
//   $('#searchInput')
//     .autocomplete({
//       //오토 컴플릿트 시작
//       source: List, // source는 data.js파일 내부의 List 배열
//       focus: function (event, ui) {
//         // 방향키로 자동완성단어 선택 가능하게 만들어줌
//         return false;
//       },
//       minLength: 1, // 최소 글자수
//       delay: 100, //autocomplete 딜레이 시간(ms)
//       //disabled: true, //자동완성 기능 끄기
//     })
//     .data('ui-autocomplete')._renderItem = function (ul, item) {
//     return $('<li></li>')
//       .append(
//         `<a class="autocomplete-list">
//           <div id="item-wrap" class="item-wrap">
//             <span class="item-label">${item.label}</span><br />
//             <span class="item-desc first">연 평균 수입량 : 15,000t</span>
//             <span class="item-desc"> 연 수입금액 : $ 202,550</span>
//             <span class="item-desc">현지 가격(Kg) : $ 0.60 ~ 1.84</span>
//             <span class="item-desc last">수입 업체 수 : 238개 </span>
//           </div>

//           <button class="favorite">
//             <svg class="favorite-svg favorite-off" onclick="favorite()" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z"
//                 fill="#BABABA"
//               />
//               <path
//                 d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z"
//                 fill="#BABABA"
//               />
//             </svg>
//           </button>

//         </a>`
//       )
//       .appendTo(ul);
//   };
// });

//////////////// autocomplete version - 2 ////////////////

const likeOff =
  'M91.6668 38.5006L61.7085 35.9173L50.0002 8.33398L38.2918 35.959L8.3335 38.5006L31.0835 58.209L24.2502 87.5006L50.0002 71.959L75.7502 87.5006L68.9585 58.209L91.6668 38.5006ZM50.0002 64.1673L34.3335 73.6256L38.5002 55.7923L24.6668 43.7923L42.9168 42.209L50.0002 25.4173L57.1252 42.2507L75.3752 43.834L61.5418 55.834L65.7085 73.6673L50.0002 64.1673Z" fill="#000000';
const likeOn = 'M50.0002 71.959L75.7502 87.5006L68.9168 58.209L91.6668 38.5006L61.7085 35.959L50.0002 8.33398L38.2918 35.959L8.3335 38.5006L31.0835 58.209L24.2502 87.5006L50.0002 71.959Z" fill="#383838';

const autoCompleteJS = new autoComplete({
  data: {
    // src: ["토마토", "토마토주스", "토마토케챱", "꿀토마토", "망고주스", "키위주스"],
    src: [
      {
        name: '토마토',
        enName: 'tomato',
        hscode: '060582',
        category: 'Fresh',
        volume: 15000,
        yearDollar: 202550,
        dollarMin: 0.6,
        dollarMax: 1.84,
        importCompany: 238,
        like: false,
      },
      {
        name: '토마토즙',
        enName: 'tomatoJuice',
        hscode: '060583',
        category: '가공품',
        volume: 15000,
        yearDollar: 202550,
        dollarMin: 0.6,
        dollarMax: 1.84,
        importCompany: 238,
        like: true,
      },
      {
        name: '토마토케찹',
        enName: 'tomatoSouce',
        hscode: '060584',
        category: '가공품',
        volume: 15000,
        yearDollar: 202550,
        dollarMin: 0.6,
        dollarMax: 1.84,
        importCompany: 238,
        like: false,
      },
    ],
    keys: ['name', 'hscode', 'enName'],
  },
  resultsList: {
    element: (list, data) => {
      const info = document.createElement('p');
      if (data.results.length > 0) {
        info.innerHTML = `<strong>${data.matches.length}</strong>개의 결과`;
        searchBar.id = 'autoCompleteOn';
      } else {
        info.innerHTML = '검색 결과가 없습니다.';
        searchBar.id = 'autoCompleteOn';
      }
      list.prepend(info);
    },
    noResults: true,
    tabSelect: true,
  },
  resultItem: {
    element: (item, data) => {
      // item.style = "display: flex; justify-content: space-between; align-items: center;";
      item.innerHTML = `
                <div class="productName">
                    ${exp == 0 ? data.match : data.value.name}(${exp == 1 ? data.match : data.value.hscode}) / ${data.value.category}
                </div>
                <div class="productInfo">
                    <span class="infoContents1">연 평균 수입량 : ${data.value.volume}t</span> | 
                    <span class="infoContents">연 수입금액 : $ ${data.value.yearDollar}</span> | 
                    <span class="infoContents">현지 가격(kg) : $ ${data.value.dollarMin} ~ ${data.value.dollarMax}</span> | 
                    <span class="infoContents">수입 업체 수 : ${data.value.importCompany}개</span>
                </div>
                    <a class="like" href="#" onclick="{like('${data.value.hscode}', ${data.value.like})}">
                    <svg width="35" height="35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id=${data.value.hscode} d="${data.value.like ? likeOn : likeOff}"/>
                </a>
            `;
    },
    highlight: true,
  },
  events: {
    input: {
      focus: () => {
        if (autoCompleteJS.input.value.length) autoCompleteJS.start();
      },
    },
  },
});

const searchBar = document.getElementsByClassName('searchInp')[0];
const searchButton = document.getElementById('btn_src');

autoCompleteJS.input.addEventListener('selection', function (event) {
  const feedback = event.detail;
  const selection = feedback.selection.value.name;
  // const selection = `${feedback.selection.value.name}(${feedback.selection.value.hscode})`;

  if (!liked) autoCompleteJS.input.value = selection;
  liked = false;
  searchBar.id = 'autoComplete';
  searchBar.style.opacity = 1;
});

['focus', 'blur'].forEach((eventType) => {
  autoCompleteJS.input.addEventListener(eventType, () => {
    if (eventType === 'blur') {
      searchBar.id = 'autoComplete';
      // searchBar.style.opacity = 0.5;
      searchButton.style.opacity = 0.8;
    } else if (eventType === 'focus') {
      searchBar.style.opacity = 1;
      searchButton.style.opacity = 1;
    }
  });
});

let exp;
$('.searchInp').on('propertychange change keyup paste input', () => {
  let inpValue = $('.searchInp').val();
  if (inpValue.length < 1) searchBar.id = 'autoComplete';

  const krExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
  const numExp = /^[0-9]+$/;
  // const enExp = /^[a-z|A-Z]+$/;

  if (krExp.test(inpValue)) exp = 0;
  else if (numExp.test(inpValue)) exp = 1;
  // else if (enExp.test(inpValue)) exp = 2;
});

function onClick() {
  let searchValue = document.getElementsByClassName('searchInp')[0].value;
  console.log(searchValue);
}

let liked = false;
function like(hscode, like) {
  liked = true;

  if (like) $('.modalContent').text('관심품목 해제');
  else $('.modalContent').text('관심품목 등록');

  $('#modal').show();
  setTimeout(() => {
    $('#modal').hide();
  }, 1000);
  // hscode로 디비 셀렉해서 like t/f 변환
  // if (like) like = false;
  // else like = true;
}

////////////////// 관심상품 ///////////////////

let searchFavoriteStatus = 0;

function favorite() {
  let favoriteBtn = document.getElementsByClassName('favorite');
  let favoriteSvg = document.getElementsByClassName('favorite-svg');
  // let favoriteOffIndex = Array.from(favoriteOff).indexOf(event.target);
  // let favoriteBtnIndex = Array.from(favoriteBtn).indexOf(event.target);

  for (let i = 0; i < favoriteBtn.length; i++) {
    console.log('favoriteSvg[i] classList: ', favoriteSvg[i].classList);

    favoriteBtn[i].onclick = function (target) {
      if (favoriteSvg[i].classList.contains('favorite-off')) {
        favoriteBtn[i].innerHTML = `<svg class="favorite-svg favorite-on" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#383838"/>
        <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#383838"/>
        </svg>`;
      } else {
        favoriteSvg[i].innerHTML = `<svg class="favorite-svg favorite-off" onclick="favorite()" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z" fill="#BABABA"/>
        <path d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z" fill="#BABABA"/>
        </svg>`;
        $('.modalContent').text('관심품목 해제');
      }
    };
  }

  // if (searchFavoriteStatus === 0) {
  //   console.log(e.target)
  //   e.target.innerHTML = `<svg class="favorite-icon" onclick="favorite()" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#383838"/>
  //   <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#383838"/>
  //   </svg>`;

  //   console.log("clicked");

  //   searchFavoriteStatus = 1;

  // } else if (searchFavoriteStatus === 1) {
  //   e.target.innerHTML = `<svg class="favorite-icon" onclick="favorite()" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path
  //       d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z"
  //       fill="#BABABA"
  //     />
  //     <path
  //       d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z"
  //       fill="#BABABA"
  //     />
  //   </svg>`;

  //   console.log("clicked");

  //   searchFavoriteStatus = 0;
  // }
}

//////////////// 본 페이지에서 관심상품 추가 /////////////////
const mainFavoriteIcon = document.querySelector('#main-star');
let favoriteStatus = 1;

function mainFavorite() {
  let mainFavoriteOff = document.getElementsByClassName('main-favorite-off')[0];
  console.log('favorite status:', favoriteStatus);

  if (favoriteStatus === 0) {
    console.log('favorite is on');

    mainFavoriteIcon.innerHTML = `<svg class="main-favorite-on star" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#4B48FD    "/>
    <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#4B48FD"/>
    </svg>`;

    favoriteStatus = 1;
    addFavorite();
  } else if (favoriteStatus === 1) {
    console.log('favorite is off');

    mainFavoriteIcon.innerHTML = `<svg class="main-favorite-off star" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z" fill="#BABABA"/>
      <path d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z" fill="#BABABA"/>
    </svg>`;

    favoriteStatus = 0;
    removeFavorite();
  }
}

function addFavorite() {
  const addFavorite = document.getElementById("add-favorite-container")

  addFavorite.style.display = "block";

  setTimeout(() => {
    addFavorite.style.display = "none"
  }, 2000);
}

function removeFavorite() {
  const removeFavorite = document.getElementById("remove-favorite-container")

  removeFavorite.style.display = "block";

  setTimeout(() => {
    removeFavorite.style.display = "none"
  }, 2000);
}

/////////////////// search bar API ////////////////////

// 데이터베이스에 없는 검색어를 입력했을 경우 -> 팝업
// API 연결
//  - 데이터베이스에 있는 검색어를 입력하고 서치버튼을 눌렀을 경우 (또는 enter입력)
//  - 자동완성된 리스트를 클릭했을 경우 (또는 enter)

// 데이터베이스에 있는 검색어 중
// 한글이 포함되었는지 체크
const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

// 영어가 포함되었는지 체크
const english = /^[a-zA-Z]*$/;

// 숫자가 포함되었는지 체크
const number = /^[0-9]+$/;

const searchSubmitBtn = document.getElementsByClassName('btn_src')[0];

function search() {
  const userInput = srcBar.value;
  if (number.test(userInput)) {
    searchHscode(userInput);
  } else if (english.test(userInput)) {
    searchEnglish(userInput);
  } else if (korean.test(userInput)) {
    searchKorean(userInput);
  } else console.log('user input 인식 불가');
}

function searchHscode(hscode) {
  $.ajax({
    url: 'https://fooda.citylabsdev.com/search/hscode?hscode=' + hscode,
    method: 'GET', // HTTP 요청 메소드(GET, POST 등)
    success: function (result) {
      if (result) {
        console.log('성공');
      } else {
        console.log('실패');
      }
    },
  }) // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    .always(function (xhr, status) {
      console.log('요청이 완료되었습니다!');
    });
}

function searchEnglish(englishName) {
  $.ajax({
    url: 'https://fooda.citylabsdev.com/search/krproductname?krproductname=' + englishName,
    method: 'GET', // HTTP 요청 메소드(GET, POST 등)
    success: function (result) {
      if (result) {
        console.log('성공');
      } else {
        console.log('실패');
      }
    },
  }) // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    .always(function (xhr, status) {
      console.log('요청이 완료되었습니다!');
    });
}

function searchKorean(koreanName) {
  $.ajax({
    url: 'https://fooda.citylabsdev.com/search/productname?productname=' + koreanName,
    method: 'GET', // HTTP 요청 메소드(GET, POST 등)
    success: function (result) {
      if (result) {
        console.log('성공');
      } else {
        console.log('실패');
      }
    },
  }) // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    .always(function (xhr, status) {
      console.log('요청이 완료되었습니다!');
    });
}

///////////////// donut chart /////////////////////

//-------------------------------수입업체 세부정보 1------------------------------------
makeImportProductDonutChart();
function makeImportProductDonutChart() {
  // set the dimensions and margins of the graph
  var width = 250;
  height = 110;
  margin = 7;

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin;

  // append the svg object to the div called 'my_dataviz'
  var svg = d3
    .select('#import_product_donut')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  // d3.select("#my_dataviz").attr("align","right");

  // Create dummy data - 데이터 크기순으로 정렬한 후 첫번째 index 2개만 biggestarc 적용하면 될듯
  var data = [
    { name: '미국', import: 40 },
    { name: '베트남', import: 15 },
    { name: '중국', import: 30 },
    { name: '인도네시아', import: 22 },
    { name: '말레이시아', import: 17 },
  ];

  var sortedData = data.sort(function (a, b) {
    return b.import - a.import;
  });

  console.log(sortedData);

  // set the color scale
  var color = d3.scaleOrdinal(['#9848FD', '#3DC282', '#3CC1EB', '#487BFD', '#6148FD']);

  // Compute the position of each group on the pie:
  var pie = d3
    .pie()
    .sort(null) // Do not sort group by size
    .value(function (d) {
      console.log(d);
      return d.value.import;
    });

  var data_ready = pie(d3.entries(sortedData));

  // The arc generator
  var arc = d3
    .arc()
    .innerRadius(radius * 0.32) // This is the size of the donut hole
    .outerRadius(radius * 0.65);

  var biggestarc = d3
    .arc()
    .innerRadius(radius * 0.32) // This is the size of the donut hole
    .outerRadius(radius * 0.75);

  // Another arc that won't be drawn. Just for labels positioning
  var outerArc = d3
    .arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

  // 툴팁
  var tooltip = d3.select('body').append('div').attr('class', 'tooltip');

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', function (d) {
      if (d.data.key == 0) {
        return biggestarc(d);
      } else {
        return arc(d);
      }
    })
    .attr('fill', function (d) {
      return color(d.data.key);
    })
    .attr('stroke', function (d) {
      return color(d.data.key);
    })
    .style('stroke-width', '1px')
    .attr('text-anchor', 'end');

  svg
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', function (d) {
      return arc(d);
    })
    .attr('fill', function (d) {
      return color(d.data.key);
    })
    .attr('stroke', function (d) {
      return color(d.data.key);
    })
    .style('stroke-width', '1px')
    .attr('text-anchor', 'end')
    .on('mouseout', function (d) {
      console.log('mouseout');
      d3.select(this).transition().duration(200).attr('d', arc);
      tooltip.style('visibility', 'hidden');
    })
    .on('mousemove', function (d) {
      d3.select(this).transition().duration(100).attr('d', biggestarc);
      tooltip
        .attr('class', 'tooltip-data')
        .style('visibility', 'visible')
        .style('position', 'absolute')
        .style('left', d3.event.pageX + 'px')
        .style('top', d3.event.pageY + 'px')
        .attr('dy', '0em')
        .text('line1');

      d3.select(this).append('text').attr('dy', '1em').text('line2');
      // .text(d.data.value.name  + d.data.value.import + '%')
    });

  // Add the polylines between chart and labels:
  svg
    .selectAll('allPolylines')
    .data(data_ready)
    .enter()
    .append('polyline')
    .attr('stroke', function (d) {
      if (d.data.key == 0 || d.data.key == 1) {
        // index가 0이나 1일 경우만 polyline 그려줌
        return color(d.data.key);
      }
    })
    .style('fill', 'none')
    .style('opacity', 1)
    .style('stroke-width', 2)
    .attr('points', function (d) {
      var posA = arc.centroid(d); // line insertion in the slice
      var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
      var posC = outerArc.centroid(d); // Label position = almost the same as posB
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius * 2.25 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      return [posA, posB, posC];
    });

  // Add the polylines between chart and labels:
  svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
    .text(function (d) {
      console.log(d.data.value.name);
      if (d.data.key == 0 || d.data.key == 1) {
        return d.data.value.name;
      }
    })
    .attr('transform', function (d) {
      var pos = outerArc.centroid(d);
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos[0] = radius * 1.75 * (midangle < Math.PI ? 1 : -1);
      return 'translate(' + pos + ')';
    })
    .attr('dy', '-0.5em')
    .style('text-anchor', function (d) {
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle < Math.PI ? 'start' : 'end';
    })
    .style('fill', function (d) {
      return color(d.data.key);
    })
    .append('circle');

  svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
    .text(function (d) {
      console.log(d.data.key);
      if (d.data.key == 0 || d.data.key == 1) {
        return d.data.value.import + '%';
      }
    })
    .attr('transform', function (d) {
      var pos2 = outerArc.centroid(d);
      var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos2[0] = radius * 1.75 * (midangle2 < Math.PI ? 1 : -1);
      return 'translate(' + pos2 + ')';
    })
    .attr('dy', '1.2em')
    .style('text-anchor', function (d) {
      var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle2 < Math.PI ? 'start' : 'end';
    })
    .style('fill', function (d) {
      return color(d.data.key);
    });

  var slices = svg.selectAll('allSlices');
}

//-------------------------------수입업체 세부정보 2------------------------------------
makeImportCountryDonutChart();
function makeImportCountryDonutChart() {
  // set the dimensions and margins of the graph
  var width = 250;
  height = 110;
  margin = 7;

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin;

  // append the svg object to the div called 'my_dataviz'
  var svg = d3
    .select('#import_country_donut')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  // d3.select("#my_dataviz").attr("align","right");

  // Create dummy data - 데이터 크기순으로 정렬한 후 첫번째 index 2개만 biggestarc 적용하면 될듯
  var data = [
    { name: '미국', import: 40 },
    { name: '베트남', import: 15 },
    { name: '중국', import: 30 },
    { name: '인도네시아', import: 22 },
    { name: '말레이시아', import: 17 },
  ];

  var sortedData = data.sort(function (a, b) {
    return b.import - a.import;
  });

  console.log(sortedData);

  // set the color scale
  var color = d3.scaleOrdinal(['#9848FD', '#3DC282', '#3CC1EB', '#487BFD', '#6148FD']);

  // Compute the position of each group on the pie:
  var pie = d3
    .pie()
    .sort(null) // Do not sort group by size
    .value(function (d) {
      console.log(d);
      return d.value.import;
    });

  var data_ready = pie(d3.entries(sortedData));

  // The arc generator
  var arc = d3
    .arc()
    .innerRadius(radius * 0.32) // This is the size of the donut hole
    .outerRadius(radius * 0.65);

  var biggestarc = d3
    .arc()
    .innerRadius(radius * 0.32) // This is the size of the donut hole
    .outerRadius(radius * 0.75);

  // Another arc that won't be drawn. Just for labels positioning
  var outerArc = d3
    .arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

  // 툴팁
  var tooltip = d3.select('body').append('div').attr('class', 'tooltip');

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', function (d) {
      if (d.data.key == 0) {
        return biggestarc(d);
      } else {
        return arc(d);
      }
    })
    .attr('fill', function (d) {
      return color(d.data.key);
    })
    .attr('stroke', function (d) {
      return color(d.data.key);
    })
    .style('stroke-width', '1px')
    .attr('text-anchor', 'end');

  svg
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', function (d) {
      return arc(d);
    })
    .attr('fill', function (d) {
      return color(d.data.key);
    })
    .attr('stroke', function (d) {
      return color(d.data.key);
    })
    .style('stroke-width', '1px')
    .attr('text-anchor', 'end')
    .on('mouseout', function (d) {
      console.log('mouseout');
      d3.select(this).transition().duration(200).attr('d', arc);
      tooltip.style('visibility', 'hidden');
    })
    .on('mousemove', function (d) {
      d3.select(this).transition().duration(100).attr('d', biggestarc);
      tooltip
        .attr('class', 'tooltip-data')
        .style('visibility', 'visible')
        .style('position', 'absolute')
        .style('left', d3.event.pageX + 'px')
        .style('top', d3.event.pageY + 'px')
        .attr('dy', '0em')
        .text('line1');

      d3.select(this).append('text').attr('dy', '1em').text('line2');
      // .text(d.data.value.name  + d.data.value.import + '%')
    });

  // Add the polylines between chart and labels:
  svg
    .selectAll('allPolylines')
    .data(data_ready)
    .enter()
    .append('polyline')
    .attr('stroke', function (d) {
      if (d.data.key == 0 || d.data.key == 1) {
        // index가 0이나 1일 경우만 polyline 그려줌
        return color(d.data.key);
      }
    })
    .style('fill', 'none')
    .style('opacity', 1)
    .style('stroke-width', 2)
    .attr('points', function (d) {
      var posA = arc.centroid(d); // line insertion in the slice
      var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
      var posC = outerArc.centroid(d); // Label position = almost the same as posB
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
      posC[0] = radius * 2.25 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
      return [posA, posB, posC];
    });

  // Add the polylines between chart and labels:
  svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
    .text(function (d) {
      console.log(d.data.value.name);
      if (d.data.key == 0 || d.data.key == 1) {
        return d.data.value.name;
      }
    })
    .attr('transform', function (d) {
      var pos = outerArc.centroid(d);
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos[0] = radius * 1.75 * (midangle < Math.PI ? 1 : -1);
      return 'translate(' + pos + ')';
    })
    .attr('dy', '-0.5em')
    .style('text-anchor', function (d) {
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle < Math.PI ? 'start' : 'end';
    })
    .style('fill', function (d) {
      return color(d.data.key);
    })
    .append('circle');

  svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
    .text(function (d) {
      console.log(d.data.key);
      if (d.data.key == 0 || d.data.key == 1) {
        return d.data.value.import + '%';
      }
    })
    .attr('transform', function (d) {
      var pos2 = outerArc.centroid(d);
      var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2;
      pos2[0] = radius * 1.75 * (midangle2 < Math.PI ? 1 : -1);
      return 'translate(' + pos2 + ')';
    })
    .attr('dy', '1.2em')
    .style('text-anchor', function (d) {
      var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return midangle2 < Math.PI ? 'start' : 'end';
    })
    .style('fill', function (d) {
      return color(d.data.key);
    });

  var slices = svg.selectAll('allSlices');
}

//------------------ 국가별 점유율 donut chart ---------------------

// set the dimensions and margins of the graph
var width = 255;
height = 130;
margin = 7;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3
  .select('#country_donut')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

// d3.select("#my_dataviz").attr("align","right");

// Create dummy data - 데이터 크기순으로 정렬한 후 첫번째 index 2개만 biggestarc 적용하면 될듯
var data = [
  { name: '미국', import: 40 },
  { name: '베트남', import: 15 },
  { name: '중국', import: 30 },
  { name: '인도네시아', import: 22 },
  { name: '말레이시아', import: 17 },
];

var sortedData = data.sort(function (a, b) {
  return b.import - a.import;
});

console.log(sortedData);

// set the color scale
var color = d3.scaleOrdinal(['#9848FD', '#3DC282', '#3CC1EB', '#487BFD', '#6148FD']);

// Compute the position of each group on the pie:
var pie = d3
  .pie()
  .sort(null) // Do not sort group by size
  .value(function (d) {
    console.log(d);
    return d.value.import;
  });

var data_ready = pie(d3.entries(sortedData));

// The arc generator
var arc = d3
  .arc()
  .innerRadius(radius * 0.32) // This is the size of the donut hole
  .outerRadius(radius * 0.65);

var biggestarc = d3
  .arc()
  .innerRadius(radius * 0.32) // This is the size of the donut hole
  .outerRadius(radius * 0.75);

// Another arc that won't be drawn. Just for labels positioning
var outerArc = d3
  .arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9);

// 툴팁
var tooltip = d3.select('body').append('div').attr('class', 'tooltip');

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', function (d) {
    if (d.data.key == 0) {
      return biggestarc(d);
    } else {
      return arc(d);
    }
  })
  .attr('fill', function (d) {
    return color(d.data.key);
  })
  .attr('stroke', function (d) {
    return color(d.data.key);
  })
  .style('stroke-width', '1px')
  .attr('text-anchor', 'end');

svg
  .selectAll('allSlices')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', function (d) {
    return arc(d);
  })
  .attr('fill', function (d) {
    return color(d.data.key);
  })
  .attr('stroke', function (d) {
    return color(d.data.key);
  })
  .style('stroke-width', '1px')
  .attr('text-anchor', 'end')
  .on('mouseout', function (d) {
    console.log('mouseout');
    d3.select(this).transition().duration(200).attr('d', arc);
    tooltip.style('visibility', 'hidden');
  })
  .on('mousemove', function (d) {
    d3.select(this).transition().duration(100).attr('d', biggestarc);
    tooltip
      .attr('class', 'tooltip-data')
      .style('visibility', 'visible')
      .style('position', 'absolute')
      .style('left', d3.event.pageX + 'px')
      .style('top', d3.event.pageY + 'px')
      .attr('dy', '0em')
      .text('line1');

    d3.select(this).append('text').attr('dy', '1em').text('line2');
    // .text(d.data.value.name  + d.data.value.import + '%')
  });

// Add the polylines between chart and labels:
svg
  .selectAll('allPolylines')
  .data(data_ready)
  .enter()
  .append('polyline')
  .attr('stroke', function (d) {
    if (d.data.key == 0 || d.data.key == 1) {
      // index가 0이나 1일 경우만 polyline 그려줌
      return color(d.data.key);
    }
  })
  .style('fill', 'none')
  .style('opacity', 1)
  .style('stroke-width', 2)
  .attr('points', function (d) {
    var posA = arc.centroid(d); // line insertion in the slice
    var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
    var posC = outerArc.centroid(d); // Label position = almost the same as posB
    var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
    posC[0] = radius * 2.25 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
    return [posA, posB, posC];
  });

// Add the polylines between chart and labels:
svg
  .selectAll('allLabels')
  .data(data_ready)
  .enter()
  .append('text')
  .text(function (d) {
    console.log(d.data.value.name);
    if (d.data.key == 0 || d.data.key == 1) {
      return d.data.value.name;
    }
  })
  .attr('transform', function (d) {
    var pos = outerArc.centroid(d);
    var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
    pos[0] = radius * 1.75 * (midangle < Math.PI ? 1 : -1);
    return 'translate(' + pos + ')';
  })
  .attr('dy', '-0.5em')
  .style('text-anchor', function (d) {
    var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
    return midangle < Math.PI ? 'start' : 'end';
  })
  .style('fill', function (d) {
    return color(d.data.key);
  })
  .append('circle');

svg
  .selectAll('allLabels')
  .data(data_ready)
  .enter()
  .append('text')
  .text(function (d) {
    console.log(d.data.key);
    if (d.data.key == 0 || d.data.key == 1) {
      return d.data.value.import + '%';
    }
  })
  .attr('transform', function (d) {
    var pos2 = outerArc.centroid(d);
    var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2;
    pos2[0] = radius * 1.75 * (midangle2 < Math.PI ? 1 : -1);
    return 'translate(' + pos2 + ')';
  })
  .attr('dy', '1.2em')
  .style('text-anchor', function (d) {
    var midangle2 = d.startAngle + (d.endAngle - d.startAngle) / 2;
    return midangle2 < Math.PI ? 'start' : 'end';
  })
  .style('fill', function (d) {
    return color(d.data.key);
  });

var slices = svg.selectAll('allSlices');

/////////////// 현지 가격 추이 Line chart ///////////////
makePriceLineChart();

function makePriceLineChart() {
  let ctx_price_line_chart = document.getElementById('price_line_chart').getContext('2d');

  var chart = new Chart(ctx_price_line_chart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['2018', '2019', '2020'],
      datasets: [
        {
          label: 'Income',
          backgroundColor: '#ffffff',
          borderColor: '#4B48FD',
          data: [12000, 29000, 15000],
          pointBorderColor: '#000',
          pointBackgroundColor: 'rgba(255,255,255,0)',
          pointBorderWidth: 0,
          pointHoverRadius: 8,
          // pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 4,
          pointRadius: 1,
          borderWidth: 3,
          pointHitRadius: 16,
          fill: false,
          tension: 0,
          pointBorderColor: '#4B48FD',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 8,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
      ],
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: false,
      responsive: false,
      tooltips: {
        backgroundColor: '#fff',
        displayColors: true,
        titleFontColor: '#000',
        bodyFontColor: '#000',
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        xAxes: {
          ticks: {
            display: true,
            padding: 2,
            min: 2000,
          },
          gridLines: {
            display: false,
            drawBorder: true,
          },
          grid: {
            drawBorder: true,
            color: '#ffffff',
            borderWidth: 2,
            borderColor: '#383838',
          },
        },
        yAxes: {
          ticks: {
            display: true,
            padding: 40,
            stepSize: (c) => (Math.max(...c.chart.data.datasets[0].data) - Math.min(...c.chart.data.datasets[0].data)) / 2,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          grid: {
            drawBorder: false,
            color: '#ffffff',
          },
        },
      },
    },
  });
}

/////////////// 최근 3년 연매출 line chart /////////////////
makeSalesLineChart();

function makeSalesLineChart() {
  let ctx_sales_line_chart = document.getElementById('sales_line_chart').getContext('2d');

  var chart = new Chart(ctx_sales_line_chart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['2018', '2019', '2020'],
      datasets: [
        {
          label: 'Income',
          backgroundColor: '#ffffff',
          borderColor: '#4B48FD',
          data: [12000, 29000, 15000],
          pointBorderColor: '#000',
          pointBackgroundColor: 'rgba(255,255,255,0)',
          pointBorderWidth: 0,
          pointHoverRadius: 8,
          // pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 4,
          pointRadius: 1,
          borderWidth: 3,
          pointHitRadius: 16,
          fill: false,
          tension: 0,
          pointBorderColor: '#4B48FD',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 8,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
      ],
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: false,
      responsive: false,
      tooltips: {
        backgroundColor: '#fff',
        displayColors: true,
        titleFontColor: '#000',
        bodyFontColor: '#000',
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        xAxes: {
          ticks: {
            display: true,
            padding: 2,
            min: 2000,
          },
          gridLines: {
            display: false,
            drawBorder: true,
          },
          grid: {
            drawBorder: true,
            color: '#ffffff',
            borderWidth: 2,
            borderColor: '#383838',
          },
        },
        yAxes: {
          ticks: {
            display: true,
            padding: 40,
            stepSize: (c) => (Math.max(...c.chart.data.datasets[0].data) - Math.min(...c.chart.data.datasets[0].data)) / 2,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          grid: {
            drawBorder: false,
            color: '#ffffff',
          },
        },
      },
    },
  });
}

////////////// 월별 거래빈도 line chart ///////////////
makeTransactionLineChart();

function makeTransactionLineChart() {
  let ctx = document.getElementById('transaction_line_chart').getContext('2d');

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          label: 'Income',
          backgroundColor: '#ffffff',
          borderColor: '#4B48FD',
          data: [8000, 900, 7000, 6000, 4000, 6500, 7500, 3200, 4500, 4000, 7000, 2000],
          pointBorderColor: '#000',
          pointBackgroundColor: 'rgba(255,255,255,0)',
          pointBorderWidth: 0,
          pointHoverRadius: 8,
          // pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 4,
          pointRadius: 1,
          borderWidth: 3,
          pointHitRadius: 16,
          fill: false,
          tension: 0,
          pointBorderColor: '#4B48FD',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 8,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
      ],
    },

    // Configuration options go here
    options: {
      tension: 0.4,
      tooltips: {
        backgroundColor: '#fff',
        displayColors: true,
        titleFontColor: '#000',
        bodyFontColor: '#000',
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            display: true,
          },
          gridLines: {
            display: false,
            drawBorder: true,
          },
          grid: {
            drawBorder: true,
            color: '#ffffff',
            borderWidth: 2,
            borderColor: '#383838',
          },
        },
        y: {
          ticks: {
            display: true,
            stepSize: 1000,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          grid: {
            drawBorder: false,
            color: '#ffffff',
          },
        },
      },
    },
  });
}

////////////// bar chart //////////////////

drawBarChart();
function drawBarChart() {
  const labels2 = ['2018', '2019', '2020'];
  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: 'Datasest 1',
        backgroundColor: '#4B48FD',
        borderColor: '#4B48FD',
        data: [25000, 20000, 30000],
      },
    ],
    pointBorderColor: '#000',
    pointBackgroundColor: 'rgba(255,255,255,0)',
    fill: false,
    tension: 0,
  };

  var ctx2 = document.getElementById('import_amount_bar').getContext('2d');

  var myBarChart = new Chart(ctx2, {
    type: 'bar',
    data: data2,
    options: {
      barPercentage: 0.3,
      responsive: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: '#fff',
        displayColors: true,
        titleFontColor: '#000',
        bodyFontColor: '#000',
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            display: true,
          },
          // gridLines: {
          //     display: false,
          //     drawBorder: true,
          //     // zeroLineColor: 'black',
          //     lineWidth: 2, // zero line width
          //     color: '#000' // zero line color
          // },
          grid: {
            drawBorder: true,
            display: false,
            borderWidth: 2,
            borderColor: '#000',
          },
        },
        y: {
          ticks: {
            display: true,
            // beginAtZero: true,
            fontSize: 10,
            fontColor: '#909090',
            stepSize: 10000,
            // min: -3000 // minimum value on yAxes
            // beginAtZero: true,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    },
  });
}

/////////////// 구글맵 /////////////////

function initMap() {
  console.log('Map is initialized.');

  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 8,
    styles: [
      {
        featureType: 'administrative.country',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            hue: '#ff0000',
          },
        ],
      },
    ],
    center: {
      lat: -34.397,
      lng: 150.644,
    },
  });

  var geocoder = new google.maps.Geocoder();

  geocodeAddress(geocoder, map);

  function geocodeAddress(geocoder, resultMap) {
    console.log('geocodeAddress 함수 실행');

    // 주소 설정
    var address = '경기도 안양시 만안구 예술공원로 153-32';

    geocoder.geocode({ address: address }, function (result, status) {
      console.log(result);
      console.log(status);

      if (status === 'OK') {
        // 맵의 중심 좌표를 설정한다.
        resultMap.setCenter(result[0].geometry.location);
        // 맵의 확대 정도를 설정한다.
        resultMap.setZoom(16);
        // 맵 마커
        var marker = new google.maps.Marker({
          map: resultMap,
          position: result[0].geometry.location,
        });

        // 위도
        console.log('위도(latitude) : ' + marker.position.lat());
        // 경도
        console.log('경도(longitude) : ' + marker.position.lng());
      } else {
        alert('지오코드가 다음의 이유로 성공하지 못했습니다 : ' + status);
      }
    });
  }
}
