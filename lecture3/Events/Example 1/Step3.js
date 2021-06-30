document.getElementsByClassName('box')[0].addEventListener('click', function (ev) {
/*     ev.preventDefault(); */
    /* ev.cancelBubble=true;  */
    switch (ev.target.id) {
        case 'button':
            console.log('Step3:button');
            break;
        case 'button1':
            console.log(`don't do it!`);
            break;
        case 'container':
            console.log('Step3:div');
            break;
    }
})

document.body.onclick=()=>{console.log(4)}

document.onkeydown=function(ev){
console.log(ev.key);
console.log(ev.keyCode);
};