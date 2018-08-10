!function () {
    var duration = 40
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id 
        id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run,duration)
            } else{
                fn && fn.call()
            }
        }, 10)
    }
    let code = `
      /*
      *首先，需要一下准备皮卡丘的外套
      */
      .preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        background:#fee433;
      }
      .wrapper{
        width:100%;
        height:165px;
        position: relative;
      }
      /*
      *然后，需要开始画皮卡丘的鼻子
      */
      .nose{
        width:0px;
        height: 0px;
        border:14px solid;
        border-color: black transparent transparent ;
        border-radius: 50%;
        position: absolute;
        left:50%;
        top:28px;
        transform:translateX(-50%);
      }
      /*
      *接下来，画的是皮卡丘的眼睛
      */
      .eye{
        width:49px;
        height:49px;
        background:#2e2e2e;
        position: absolute;
        border-radius: 50%;
        border:2px soli #000000;
      }
      /*
      *这里是白色的眼球
      */
      .eye::before{
        content:'';
        display: block;
        width: 22px;
        height: 22px;
        background: white;
        position: absolute;
        border-radius:50%;
        left:8px;
        top:1px;
        border:2px solid #000
      }
      .eye.left{
        right: 50%;
        margin-right: 90px;;
      }
       .eye.right{
        left: 50%;
        margin-left: 90px;;
      }
      /*
      *然后，然后是腮红
      */
      .face{
        width:68px;
        height: 68px;
        background: #fc0d1c;
        border:2px solid black;
        border-radius: 50%;
        position: absolute;
      }
      .face.left{
        right: 50%;
        top:85px;
        margin-right: 116px;;
      }
       .face.right{
        left: 50%;
        top:85px;
        margin-left: 116px;;
      }
      /*
      *最后呢，画的是嘴唇，一开始是上嘴唇
      */
      .upperLip{
        height: 20px;
        width:90px;
        border: 3px solid black;
        position:absolute;
        top:50px;
        background:#fde348
      }
      .upperLip.left{
        right: 50%;
        top:49px;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform:rotate(-21deg);
      }
      .upperLip.right{
        left: 50%;
        top:49px;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform:rotate(21deg);
      }
      /*
      *这里开始是下嘴唇
      */
      .lowerLip-wrapper{
        bottom: 2px;
        position: absolute;
        left:50%;
        margin-left: -150px;
        height: 110px;
        width:300px;
        overflow: hidden;
      }
      .lowerLip{
        width:300px;
        height: 3500px;
        background:#990513;
        border-radius:200px/2000px;
        border:2px solid black;
        position: absolute;
        bottom: 0;
        overflow:hidden;
      }
      .lowerLip::after{
        content:'';
        position:absolute;
        bottom:-20px;
        width:100px;
        height:100px;
        background:#fc4a62;
        left:50%;
        margin-left: -50px;
        border-radius:50px;
      }
      /*
      *这只nice的皮卡丘就送给你啦。
      */
      `
    writeCode('', code)
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget) //button
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break;
            case 'middle':
                duration = 40
                break;
            case 'fast':
                duration = 10
                break;
            
        }
    })
}.call()