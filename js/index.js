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

$(document).ready(function(){
    $('.quotes').slick();
    $('#picture').css('visibility','visible').hide().fadeIn(700, function() {
        $('.title').css('visibility','visible').hide().fadeIn(700, function() {
            $('.description').css('visibility','visible').hide().fadeIn(700, function() {
                var options = {
      strings: ['$ nano introduktion.txt', "Jag är en 22-årig webbutvecklare i <b>Falköping</b>.<br>Jag gillar att arbeta inom frontend och backend för att konstruera moderna och välfungerande hemsidor."],
      typeSpeed: 40
    };
    
    var typed = new Typed('#whoami', options);
            });
        });
    });  
  });

  document.querySelector('#scroll-page-2').addEventListener('click', function() {
    scroll_to_page('page2');
  });


  if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }