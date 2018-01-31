// 轮播
new Swiper('.swiper-container', {
  loop: true,
  autoplay: 2000,
  speed: 500,
  autoplayDisableOnInteraction: false,
  touchAngle: 20,
  pagination: '.swiper-pagination',
  paginationElement: 'li'
})

// 选项卡
var aTab = document.querySelector('#content .title').querySelectorAll('div')
var oTransformContainer = document.querySelector('.transform-container')
for (var i = 0; i < aTab.length; i++) {
  (function(i){
    aTab[i].addEventListener('touchstart', function(){
      addClass(i)
    })
  })(i)
}

// 滑动切换
oTransformContainer.addEventListener('touchstart', touch)
oTransformContainer.addEventListener('touchmove', touch)
oTransformContainer.addEventListener('touchend', touch)

var start = {
  x: 0,
  y: 0
}

var end = {
  x: 0,
  y: 0
}

var index = 0

function touch(e) {
  switch (e.type) {
    case 'touchstart':
      start.x = e.changedTouches[0].pageX
      start.y = e.changedTouches[0].pageY
      break;
    case 'touchmove':
      end.x = e.changedTouches[0].pageX
      end.y = e.changedTouches[0].pageY
      break;
    case 'touchend':
      if ((end.x - start.x) > 20) {
        index--
        index = Math.max(0, index)
      } else if ((start.x - end.x) > 20) {
        index++
        index = Math.min(index, aTab.length-1)
      }
      
      addClass(index)
      break;      
  }
}

function addClass(i) {
  for (var j = 0; j < aTab.length; j++) {
    aTab[j].className = ''
  }
  aTab[i].className = 'active'
  if ( i === 0 ) {
    oTransformContainer.classList.remove('active')
  } else {
    oTransformContainer.classList.add('active')
  }
}

createScript();
function createScript() {
    var oScript = document.createElement('script');
    oScript.src = 'http://route.showapi.com/181-1?showapi_timestamp'+formatterDateTime()+'&showapi_appid=37928&showapi_sign=d0ca1605e19241c38849c3fb9a56b447&num=10&rand=1&jsonpcallback=getNews';
    document.body.appendChild(oScript);
}

function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}