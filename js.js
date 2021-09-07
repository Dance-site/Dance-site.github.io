let search_link = document.querySelector('.search_link');
let search_a = document.querySelector('.search_a');

search_a.addEventListener('click', function() {

  if (!search_link.value) {
    search_link.classList.toggle('search_link_active');
    return;
  }

   search_link.classList.add('search_link_active');
})

let menuBtn = document.querySelector('.menu-btn');
let menu_li = document.querySelector('.menu_li');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('activ');
	menu_li.classList.toggle('activ');
})