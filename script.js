const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let count = 0;

let int = setInterval(blurry, 30);
let blurriness;

function blurry() {
    count++;
    // console.log(count);
  
    if (count > 99) {
        clearInterval(int);
    }
    loadingText.innerText = `${count}%`;
    // map a range of numbers to another range of numbers. From 0 to 100 and from 1 to 0
    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    
    loadingText.style.opacity = scale(count, 0, 100, 1, 0);
    blurriness = scale(count, 0, 100, 30, 0);
    bg.style.filter = `blur(${blurriness}px)`;
   
    
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}