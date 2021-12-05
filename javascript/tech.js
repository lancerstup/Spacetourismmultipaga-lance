const thInfo = document.querySelector('.tech-info')
const techBtn = document.querySelectorAll('.tech__button')
const techContent = document.querySelectorAll('.tech__text-container')
const techImg = document.querySelectorAll('.tch')

thInfo.addEventListener('click',function(element){
    const th = element.target.dataset.th
    const ad = element.target.dataset.ad
    if(th || ad){
        techBtn.forEach(function(thBtn){
            thBtn.classList.remove('active') //CLOSE
            element.target.classList.add('active')  //OPEN

        })

        techContent.forEach(function(thCnt){ //CLOSE
            thCnt.classList.remove('active')        

        })
   
        const el = document.getElementById(th) //OPEN
        el.classList.add('active')
            
        //PLANET IMAGE FUNCTION
        techImg.forEach(function(techPht){ //CLOSE
            techPht.classList.remove('activate')
        })
  
        const techPeople = document.getElementById(ad) //OPEN
            techPeople.classList.add('activate')

    }
 
})