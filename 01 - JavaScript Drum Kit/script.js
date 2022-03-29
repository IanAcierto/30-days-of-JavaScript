document.addEventListener('keydown', function(e) {
    if (e.keyCode ==65){
        document.getElementById('clap').play();
        console.log("clap")
    }
});