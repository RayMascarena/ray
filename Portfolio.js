function blink() {
  var f = document.getElementById('blink');
  setInterval(function() {
    f.style.display = (f.style.display == 'none' ? '' : 'none');
  }, 600);
}

blink();