var menu_button = document.getElementById("menu-button");
var show_links_wrap = document.getElementById("show-links-wrap");
var top_bun = document.getElementById("top-bun");
var bottom_bun = document.getElementById("bottom-bun");

menu_button.addEventListener("click", function () {
  show_links_wrap.classList.toggle("d-block");
  document.documentElement.classList.toggle("menu-open");
  menu_button.classList.toggle("height");
  top_bun.classList.toggle("top-bun-open");
  bottom_bun.classList.toggle("bottom-bun-open");
});

$(".get-in-touch").hide();

document.getElementById('contact').addEventListener('mouseover',()=>{
  $(".header-get-in-touch").show();
    $(".header-get-in-touch-outside").show();
    document.querySelector("#contact").style.color = "rgb(247 84 27)";
})

document.getElementById('contact').addEventListener('click',()=>{
  $(".header-get-in-touch").hide();
    $(".header-get-in-touch-outside").hide();
    document.querySelector("#contact").style.color = "white";
})

$(document).on("scroll", function (e) {
  if (!$(e.target).closest("#contact").length) {
    $(".header-get-in-touch").hide();
    $(".header-get-in-touch-outside").hide();
    document.querySelector("#contact").style.color = "white";
  }
});

window.onload = function () {
  var divToHide = document.querySelector('.header-get-in-touch');
  document.onmousemove = function (e) {
    if (e.target.id === 'contact') {
      divToHide.style.display = 'block';
      console.log('hi')
    } else if (e.target.id !== 'header-get-in-touch-outside' && e.target.id !== 'header-get-in-touch') {
      document.querySelector("#contact").style.color = "white";
      divToHide.style.display = 'none';
    }
  };
};

const copyMailId = document.querySelectorAll(".mail-text");

copyMailId.forEach((copyText) => {
  copyText.addEventListener("click", () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    var elem = document.createElement("textarea");
    elem.value = "+917339748149";
    document.body.appendChild(elem);
    elem.select();

    try {
      document.execCommand("copy");
      selection.removeAllRanges();

      const mailId = copyText.textContent;
      copyText.textContent = "Copied!";
      copyText.classList.add("success");
      elem.style.display = "none";
      document.querySelector(".call-svg").style.display = "none";

      setTimeout(() => {
        copyText.textContent = mailId;
        copyText.classList.remove("success");
        document.querySelector(".call-svg").style.display = "block";
      }, 6000);
    } catch (e) {
      copyText.textContent = "Couldn't copy, hit Ctrl+C!";
      copyText.classList.add("error");

      setTimeout(() => {
        errorMsg.classList.remove("show");
      }, 10000);
    }
  });
});