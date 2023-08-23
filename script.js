const menu =  document.querySelector('.menu-icon')
const nav=  document.querySelector('nav')
let toggle = false

menu.addEventListener('click', () => {
   toggle = !toggle
   console.log(toggle)
   if(toggle){
      nav.classList.add('open-nav')        
   }
   if(!toggle){
      nav.classList.remove('open-nav')
   }
})