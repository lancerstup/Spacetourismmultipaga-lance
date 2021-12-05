//PLANET FUNCTION
const navBtn = document.querySelector('.ham-btn')
const fadeLinks = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

navBtn.addEventListener('click', function(){
    if(navBtn.classList.contains('open')){ //CLOSE BTN
        navBtn.classList.remove('open')  
        body.classList.remove('navigate')
        fadeLinks.forEach(function(e){
            e.classList.add('fade-out') 
            e.classList.remove('fade-in')
        })
        
    }
    else{
        navBtn.classList.add('open') //OPEN BTN
        body.classList.add('navigate')
        fadeLinks.forEach(function(e){
            e.classList.remove('fade-out') 
            e.classList.add('fade-in')
    
        })
      

    }

})
//END


//PLANET FUNCTION

const info = document.querySelector('.info-container')
const destBtn = document.querySelectorAll('.dest-button')
const destContent = document.querySelectorAll('.destination__text-container')
const planetImg = document.querySelectorAll('.ph')

info.addEventListener('click',function(element){
    const id = element.target.dataset.id
    const or = element.target.dataset.or
    console.log(or)
    console.log(id)
    if(id || or){
        destBtn.forEach(function(btn){
            btn.classList.remove('active') //CLOSE
            element.target.classList.add('active')  //OPEN

        })

        destContent.forEach(function(cnt){ //CLOSE
            cnt.classList.remove('active')        

        })
   
        const el = document.getElementById(id) //OPEN
        el.classList.add('active')
            
        //PLANET IMAGE FUNCTION
        planetImg.forEach(function(pht){ //CLOSE
            pht.classList.remove('activate')
        })
  
        const planetary = document.getElementById(or) //OPEN
        planetary.classList.add('activate')

    }
 
})

//END





   



   


  
     

     
   

  

     
    

