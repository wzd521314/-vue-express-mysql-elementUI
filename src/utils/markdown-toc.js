//由于默认使用H1作为文章标题，所以内容的标题等级都是从H2开始计算，如有其他需求可以自行修改
export function markdownToc(selector) {
  //获取到markdown文章全部内容的子节点列表
  let allNodes = document.querySelector(selector).childNodes
  let maxLevel = 2
  
  //设置目录跳转滑动的动画，注意有兼容性问题
  document.documentElement.style["scroll-behavior"] = "smooth"

  //创建正则表达式，用来匹配节点名为h开头的2-6标签（其实就是所有的h1-h6标签）
  let nodeExp = /H[2-6]/i;
  let nodeList = []
  for( let node of allNodes) {
    if(nodeExp.test(node.nodeName)) {
      //初始化一个对象，用它来保存所有的H开头的节点的节点本身、对应的目录名称、以及提取H后面的数字来进行目录的分级
      let nodeInfo = {}
      nodeInfo.nodeObject = node;
      nodeInfo.content = node.innerText;
      nodeInfo.level = [...node.nodeName][1] * 1
      nodeInfo.topDistance = node.offsetTop
      nodeInfo.offsetParent = node.offsetParent
      nodeList.push(nodeInfo)
    }
  }
  
  //根据NodeList的内容自动生成节点列表
  let Toc = document.createElement('div')
  let TocItem = ''
  Toc.className = 'markdown_toc'
  for(let i=0; i<nodeList.length; i++) {
    TocItem += `<a name= "${nodeList[i].nodeObject.id}" level=${nodeList[i].level}>${nodeList[i].content}</a>`
  }
  Toc.innerHTML = `${TocItem}`

  for(let node of Toc.childNodes) {
    node.style.left = (node.getAttribute('level') - maxLevel) * 12 + 'px'
  }


  addStyleNode(`.currentToc{ color: #42b983; border-right: solid 2px}
  .markdown_toc{position: fixed;top: 50%; transform: translateY(-50%); margin-left: 20px; color: #505d6b;} 
  .markdown_toc a{display: block;font-size: 16px;font-weight: 400;overflow: hidden;text-decoration: none;text-overflow: ellipsis;white-space: nowrap; padding: 6px 10px 6px 0; position: relative;}
   `)

  
  
  
  
  
  Toc.onclick = function (event) {
    //点击目录栏时先屏蔽一下监听滚动的程序

    //获取到当前目录以及所对应的h元素
    let currentTocNode = event.target
    let currentNode = document.getElementById(currentTocNode.name)

    currentNode.scrollIntoView(true);
    
    
    //给当前目录的a标签添加动态类
    //toggleClass(Toc.childNodes, currentTocNode, 'currentToc')
    //toggleClass(nodeList, currentNode, ".currentToc")
    
    //一秒钟后再重新监听鼠标滚动
    
  }


  let fn = function() {
    for (let node of Toc.childNodes) {
      node.classList.remove('currentToc')
    }

    for(let i =0; i<[...Toc.childNodes].length; i++) {
      
      if(document.documentElement.scrollTop > nodeList[i].topDistance - 2) {
        toggleClass(Toc.childNodes,Toc.childNodes[i],'currentToc')
      }
    }
    // for (let element of Toc.childNodes) {
    //   console.log(document.getElementById(element.name).offsetTop);
      
    //   if(document.documentElement.scrollTop > document.getElementById(element.name).offsetTop - 2) {
    //     toggleClass(Toc.childNodes,element,'currentToc')
    //   }
    // }

    
  }
  
  document.body.onscroll = debounce(fn, 10)

  //往body元素内添加此目录元素
  return Toc
}

//新建一个style标签，采用传统的CSS写法后传入str参数即可
function addStyleNode(str){
  var styleNode=document.createElement("style");
  styleNode.type="text/css";
  if( styleNode.styleSheet){         //
    styleNode.styleSheet.cssText=	str;       //ie下要通过 styleSheet.cssText写入. 
  }else{
    styleNode.innerHTML=str;	   //在ff中， innerHTML是可读写的，但在ie中，它是只读的. 
  }
  document.getElementsByTagName("head")[0].appendChild( styleNode );
 }

//切换动态类函数,将节点列表和当前切换的节点以及动态类传入进来
function toggleClass(nodeList,currentNode, className) {
  
  if(currentNode.nodeName == 'A') {
    for(let node of nodeList) {
      node.classList.remove(className)
    }
    currentNode.classList.add(className)
  }
}

//防抖函数
function debounce(fn, delay) {
  let time = null
  return function () {
    //如果之前被设置了定时器则清除
    let args = arguments
    let that = this
    if(time) {
      clearTimeout(time)
    }
    
    //然后重新设置一个定时器
    time = setTimeout(fn.bind(that, args), delay)
  }
}