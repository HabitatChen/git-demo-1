let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0;


makeFakeSlides()
$slides.css({ transform: 'translateX(-400px)' })
bindEvents()
$(next).on('click',()=>{
    goTOSlide(current+1)
})
$(previous).on('click',()=>{
    goTOSlide(current-1)
})

let timer = setInterval(function(){
  goTOSlide(current + 1)
},2000)

$('.window').on('mouseenter',function(){
  window.clearInterval(timer)
}).on('mouseleave',function(){
  timer = setInterval(function(){
    goTOSlide(current + 1)
  },2000)
})


function bindEvents(){
  $('#buttonWrapper').on('click','button',e=>{
    let $button = $(e.currentTarget)
    let index = $button.index()
    goTOSlide(index)
  })
}



function goTOSlide(index) {
  if (index > $buttons.length - 1) {
    index =0
  } else if (index < 0) {
    index = $buttons.length - 1;
  }
  if(current === $buttons.length - 1 && index ===0) {
    //最后一张到第一张
    $slides.css({transform:`translateX(${-($buttons.length+1)*400}px)`})
      .one('transitionend',function(){
        $slides.hide() .offset()
        $slides.css({transform:`translateX(${-(index +1 )*400}px)`}) .show()
      })
  } else if (current ===0 && index ===$buttons.length -1) {
      $slides.css({ transform: `translateX(0px)`})
        .one('transitionend',()=>{
          $slides.hide().offset()
          $slides.css({transform:`translateX(${-(index +1 )*400}px)`}).show()
        })
  } else{
    $slides.css({transform:`translateX(${-(index +1 )*400}px)`})
  }
    current = index
}


function makeFakeSlides() {
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length - 1).clone(true)
  //加 true 是复制他全家
  $slides.append($firstCopy) //把拷贝的第一张加到最前面
  $slides.prepend($lastCopy) //把拷贝的最后一张放到最后面
}
