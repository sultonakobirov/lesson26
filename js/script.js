let form = document.querySelector('form')
let todoContainer = document.querySelector('.todo-container')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let input = this.querySelector('input')
    let box = document.createElement('div')
    let txtCont = document.createElement('div')
    let txt = document.createElement('p')
    let cross = document.createElement('img')
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if(minutes < 10 && minutes > 1){
        minutes = minutes/10
        minutes = minutes.toString()
        minutes = minutes.replace('.', '')
        
    } else if(minutes < 1){
        minutes = "00"
    }
    if(hours < 10){
        hours = hours/10
        hours = hours.toString()
        hours = hours.replace('.', '')
        
    }
    let timeTxt = document.createElement('p')
    let hoursTxt = document.createElement('span')
    let minutesTxt = document.createElement('span')
    let dots = document.createElement('span')
    timeTxt.classList.add('current-time')
    dots.textContent = ':'
    hoursTxt.textContent = hours
    minutesTxt.textContent = minutes
    timeTxt.appendChild(hoursTxt)
    timeTxt.appendChild(dots)
    timeTxt.appendChild(minutesTxt)
    cross.src = './images/cross.svg' 
    cross.classList.add('cross')
    txt.textContent = input.value
    box.classList.add('todo-box')
    box.appendChild(txtCont)
    box.appendChild(cross)
    box.appendChild(timeTxt)
    txtCont.appendChild(txt)
    todoContainer.appendChild(box)
    cross.addEventListener('click', function () {
        cross.parentElement.remove()
    })
    event.target.reset(); 
})