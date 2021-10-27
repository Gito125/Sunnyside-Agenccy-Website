
const myMenu = document.querySelector('.my-menu')
const mobileMenu = document.querySelector('.mobile-menu')

myMenu.addEventListener('click', function(){
  this.classList.toggle('active-menu')
  if(mobileMenu.style.display == 'block'){
    mobileMenu.style.display = 'none'
  } else {
    mobileMenu.style.display = 'block'
  }
})

// SCROLL INTERACTIONS
const slideRightContent = document.querySelectorAll('.slide-right')
const slideLeftContent = document.querySelectorAll('.slide-left')
const slideDownContent = document.querySelectorAll('.slide-down')


window.addEventListener('scroll', ()=>{
  var windowHeight = window.innerHeight

  slideRightContent.forEach(slide =>{
    var pos = slide.getBoundingClientRect().top
    if(pos < windowHeight - 150){
      slide.classList.add('active')
    } else {
      slide.classList.remove('active')
    }
  })

  slideLeftContent.forEach(slide =>{
    var pos = slide.getBoundingClientRect().top
    if(pos < windowHeight - 150){
      slide.classList.add('active')
    } else {
      slide.classList.remove('active')
    }
  })

  slideDownContent.forEach(slide =>{
    var pos = slide.getBoundingClientRect().top
    if(pos < windowHeight - 150){
      slide.classList.add('active')
    } else {
      slide.classList.remove('active')
    }
  })

})