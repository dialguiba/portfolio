/* window.addEventListener("resize", resize());

function resize() {
  document.getElementsByClassName("articles").style.height = "100vh";
} */
var lastScrollTop = 0;

function hideNav() {
  //console.log("ocultar");
  setTimeout(() => {
    /* lastScrollTop = 0; */
    $("nav").fadeOut("slow", function () {
      document.querySelector("nav").style.display = "none";
    });
  }, 500);
}

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      document.querySelector("nav").style.display = "flex";
      // downscroll
      //document.querySelector("nav").style.display = "none";
    } else {
      // upscroll code
      //console.log("scrollup");
      document.querySelector("nav").style.display = "flex";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

fetch("https://portfolio-api-six.vercel.app/api/projects", {
  mode: "no-cors",
})
  .then((response) => response.json())
  .then((json) => console.log(json));
