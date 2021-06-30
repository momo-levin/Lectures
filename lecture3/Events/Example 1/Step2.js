function f1(ev){
    alert('Step2:button');
    ev.stopImmediatePropagation();
}
function f2(){alert('Step2:button');}
document.getElementById('button').addEventListener('click',f1);
document.getElementById('button').addEventListener('click',f2);
document.getElementById('container').addEventListener('click',function (){alert('Step2:div');});