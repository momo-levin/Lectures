function handleClicks(e) {
    document.getElementById('target').innerHTML = e.target;
    document.getElementById('currentTarget').innerHTML = e.currentTarget;
    document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
    document.getElementById('explicitOriginalTarget').innerHTML = e.explicitOriginalTarget;
    document.getElementById('originalTarget').innerHTML = e.originalTarget;
}

function handleMouseover(e) {
    document.getElementById('target').innerHTML = e.target;
    document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
}

document.addEventListener('click', handleClicks, false);
document.addEventListener('mouseover', handleMouseover, false);