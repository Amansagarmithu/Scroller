function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
let img1 = document.getElementsByClassName('image1')[0];
let img2 = document.getElementsByClassName('image2')[0];

document.addEventListener('scroll', () =>{
    
    if(checkVisible(img1)){
       img2.classList.remove('animate2');
        img1.classList.add("animate");
        
    }
    if(checkVisible(img2)){
        img1.classList.remove('animate');
        img2.classList.add('animate2');
        
    }
});