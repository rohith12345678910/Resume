document.getElementById('zoom-in').addEventListener('click', function() {
    // Increase the body's font size to zoom in
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) * 1.2) + 'px';
});

document.getElementById('zoom-out').addEventListener('click', function() {
    // Decrease the body's font size to zoom out
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) / 1.2) + 'px';
});
