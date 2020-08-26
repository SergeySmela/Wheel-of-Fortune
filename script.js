let spin = document.querySelector('.spin');

function rotateWheel() {
    let x = 1024; // min value
    let y = 9999; // max value
    let deg = Math.floor(Math.random() * (x - y)) + y;
    console.log('[deg]', deg);

    let box = document.getElementById('box');

   box.style.transform = `rotate(${deg}deg)`;

   let element = document.getElementById('mainbox');
   element.classList.remove('animate');
   setTimeout(function() {
       element.classList.add('animate');
       console.log('[deg]', deg);
       let endDeg = deg - (Math.trunc(deg / 360) * 360);
       console.log('[endDeg]', endDeg);
       if (endDeg >= 26 && endDeg < 71) {
           alert(210);
       } else if (endDeg >= 71 && endDeg < 116) {
           alert(50);
       } else if (endDeg >= 116 && endDeg < 161) {
           alert('110');
       } else if (endDeg >= 161 && endDeg < 206) {
           alert('150');
       }
       else if (endDeg >= 206 && endDeg < 251) {
           alert('310');
       }
       else if (endDeg >= 251 && endDeg < 296) {
           alert('350');
       }
       else if (endDeg >= 296 && endDeg < 341) {
           alert('10');
       }
       else if ((endDeg >= 341 && endDeg < 360) || endDeg < 25) {
           alert('250');
       }

   }, 5000);
}

spin.addEventListener('click', rotateWheel);