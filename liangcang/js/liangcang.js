  //轮播图
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    speed:500,
    autoplay:{
    delay:3000
},
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable :true
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
  //搜索框
var tex = document.getElementsByClassName('tex')[0]
var sub = document.getElementsByClassName('sub')[0]
sub.onclick = function(){
    var box = tex.style.visibility = "visible"
    if(box){
        sub.onclick = function(){
            tex.style.visibility = "hidden"
        }
    }
}       