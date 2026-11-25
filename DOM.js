// this works to get the elements from js 

const title = document.querySelector('#main-heading');

console.log(title)

// to change the css styling of it just use the style property and and change it 

// so the steps to change it that first save it to a varibale then access its style properties 
// this is inline styling and only works for only one id element not a every element 


title.style.color = 'red'

// since it is a class then u have to use . because selectAll is a css method 
const listItems = document.querySelectorAll('.list-items')


// since we cannot use the querry select all and change its styling all at once cuz it returns the node list then what we have to do is to loop each of it and then change its style 

// when we use for loop inside the list it should be for and of not for and in 

for (item of listItems){
    item.style.color= 'red'
}







// this works to get the elements from the same class 


// const listItems = document.getElementsByClassName('list-items')
 

// const container= document.getElementsByTagName('div')

// // it prints out th dom object and the tag not the content of it 
// console.log(title)
// console.log(listItems)
// console.log(container)

// const items= document.querySelectorAll('li')

// console.log(items)



