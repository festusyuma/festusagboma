

    document.querySelector('.click').onclick = function () {
    if(screen.width < 415) {
        document.querySelector('.menu-area').style.display = 'none';
        console.log('done')
    }
    };


document.querySelector('#toggle').onclick = function(){
    document.querySelector('.menu-area').style.display = 'block';
};


document.querySelector('.menu-area').onclick = function(){
    if(screen.width < 415) {
        document.querySelector('.menu-area').style.display = 'none';
    }
};