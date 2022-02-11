var red = document.querySelector('#red')
var blue = document.querySelector('#blue')
var green = document.querySelector('#green')
var button = document.querySelector('button')
var rect = document.querySelector('#rect')
var panel = document.querySelector('#panel')

var colorCode
var arr= []


button.addEventListener('click',function(){
   colorCode =`rgb(${Number(red.value)},${Number(blue.value)},${Number(green.value)})`
   rect.style.backgroundColor = colorCode
   rect.innerHTML=''  
})

rect.addEventListener('click',function(){
    check()
    
    
})

function check(){
    if(arr.indexOf(colorCode) === -1){
        arr.push(colorCode)
        var template = ` <div style="background-color:${colorCode}" class="circle"></div>`
        panel.innerHTML += template 
    }
    else{}
}
