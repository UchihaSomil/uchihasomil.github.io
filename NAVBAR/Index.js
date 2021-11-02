var menu_button = document.getElementById('menu-button');
var show_links_wrap = document.getElementById('show-links-wrap');
var top_bun = document.getElementById('top-bun');
var bottom_bun = document.getElementById('bottom-bun');


menu_button.addEventListener('click', function () {
    show_links_wrap.classList.toggle('d-block');
    document.documentElement.classList.toggle('menu-open');
    menu_button.classList.toggle('height');
    top_bun.classList.toggle('top-bun-open')
    bottom_bun.classList.toggle('bottom-bun-open')
});