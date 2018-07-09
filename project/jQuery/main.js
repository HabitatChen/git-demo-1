window.Node2 = function(node){
  return {
    getSiblings:function(){
      var allChildren = node.parentNode.children;
      var arr = {
        length:0
      }
      for (let i = 0; i < allChildren.length;i++){
        if (allChildren[i] !== node) {
          arr[arr.length] = allChildren[i]
          arr.length += 1
        }
      }
      return arr
    },
    addClass: function(classes) {
      classes.forEach((value) => node.classList.add(value))
    }
  }
}
var node2 = Node2(item3)
console.log(node2.getSiblings())
node2.addClass(['a','b','c'])