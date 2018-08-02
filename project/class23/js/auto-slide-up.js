!function (){
  //添加 offset类
  let specialTags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  findClosestAndRemoveOffset()

  window.addEventListener('scroll',function(x){
    findClosestAndRemoveOffset()
  })

  function findClosestAndRemoveOffset() {
    let minIndex = 0;
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) <
        Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }
    // minIndex 就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    var a = document.querySelector('a[href="#' + id + '"]')
    var li = a.parentNode
    let children = li.parentNode.children
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}.call()
