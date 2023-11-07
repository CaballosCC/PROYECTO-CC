const horse  = document.querySelector('.horse');
const style  = window.getComputedStyle(horse);
[].slice.call(document.querySelectorAll('[type="color"]')).forEach( input => { 
    let color = style.getPropertyValue('--color-' + input.id).trim();
        console.log(color)
    input.value = color;   
    input.addEventListener('change', e => { horse.style.setProperty('--color-' + input.id, input.value); })
})