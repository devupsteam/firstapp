let cancel = document.getElementById('cancel')
let container = document.getElementById('con')
let menubtn = document.getElementById('menubtn')





menubtn.addEventListener('click',function(){
    console.log('clicked')
    container.classList.remove('none')
    container.classList.add('add')
})
cancel.addEventListener('click',function(){
    console.log('clicked')
    container.classList.add('none')
    container.classList.remove('add')
})