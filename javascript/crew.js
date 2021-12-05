const crInfo = document.querySelector('.crew__info')
const crewBtn = document.querySelectorAll('.crew__button')
const crewContent = document.querySelectorAll('.crew__text-container')
const crewImg = document.querySelectorAll('.ppl')

crInfo.addEventListener('click',function(elem){
    const cr = elem.target.dataset.cr
    const br = elem.target.dataset.br
    if(cr || br){
        crewBtn.forEach(function(crBtn){
            crBtn.classList.remove('active') //CLOSE
            elem.target.classList.add('active')  //OPEN

        })

        crewContent.forEach(function(crCnt){ //CLOSE
            crCnt.classList.remove('active')        

        })
   
        const ele = document.getElementById(cr) //OPEN
        ele.classList.add('active')
            
        //PLANET IMAGE FUNCTION
        crewImg.forEach(function(crewPht){ //CLOSE
            crewPht.classList.remove('activate')
        })
  
        const crewPeople = document.getElementById(br) //OPEN
        crewPeople.classList.add('activate')

    }
 
})



