var allButtons = $('#buttons > span');

for(let i =0;i<allButtons.length;i++) {
  $(allButtons[i]).on('click',function(x){
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform:'translate('+ p + 'px)'
    })
    n = index
    activeButton(allButtons.eq(n))
  })
}
var n = 0;
var size = allButtons.length
playSlide(n % size)

var timerId = setTimer()

function setTimer(){
   return setInterval(()=>{
    n+=1
    playSlide(n % size)
    },1000)
}

$('.window').on('mouseenter',()=>{
  window.clearInterval(timerId)
})
$('.window').on('mouseleave',()=>{
  timerId = setTimer()
})
function activeButton($buttons){
  $buttons
   .addClass('red')
   .siblings('.red').removeClass('red')
}
function playSlide(index){
  allButtons.eq(index).trigger('click')
}