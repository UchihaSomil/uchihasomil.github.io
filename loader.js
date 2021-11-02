window.addEventListener('load',function(){
    var loader_arr = ['Redirecting', 'Redirecting1', 'Redirecting2', 'Redirecting3']
    var loader_no = Math.floor(Math.random() * loader_arr.length);
    document.getElementById('loader-h1').textContent = loader_arr[loader_no]
    setTimeout(()=>{
        document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
        document.getElementById('loader').style.display = "none"
        document.getElementById('siteWrapper').classList.remove('display-none')
        ;
    },2000)
})
setTimeout(()=>{
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
    document.getElementById('loader').style.display = "none"
    document.getElementById('siteWrapper').classList.remove('display-none');
},6000)
