document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('container').classList.add('blurred');
    setTimeout(function() {
        document.getElementById('fullpage-menu').classList.remove('hidden');
    }, 400);
});

document.getElementById('exit-menu').addEventListener('click', function() {
    document.getElementById('container').classList.remove('blurred');
    document.getElementById('fullpage-menu').classList.add('hidden');
});

function scrollTo(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 2;

setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 2);
}, 10);
}

function scroll_to_page(id) {
    document.getElementById('container').classList.remove('blurred');
    document.getElementById('fullpage-menu').classList.add('hidden');

    location.href="#"+id;
}