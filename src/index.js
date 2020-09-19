var currentIndex = 0,
navItems = $('.nav li');
console.dir(navItems);
  
function setSlide(index) {
  navItems.removeClass('selected');
  navItems.eq(index).addClass('selected');
  $('.slide').css('display', 'none');
  $('.slide').eq(index).css('display', 'block');
}

$('.nav li').click(function() {
  var index = $('.nav li').index($(this));
  setSlide(index);
});

function next() {
  if (currentIndex < (navItems.length - 1)) {
    currentIndex++;
    setSlide(currentIndex);
  }
}

$('.next').click(function() {
  next();
});

function prev() {
  if (currentIndex > 0) {
    currentIndex--;
    setSlide(currentIndex);
  }
}

$('.prev').click(function() {
  prev();
});

  
  
  
