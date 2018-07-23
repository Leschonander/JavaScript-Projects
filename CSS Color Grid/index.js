let btns = document.querySelectorAll('button')
var clipboard = new ClipboardJS(btns);

clipboard.on('success', function(e) {
    console.log(e);
    alert('Copied!')
});

clipboard.on('error', function(e) {
    console.log(e);
});