const headerHeight = document.querySelector("header").offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", headerHeight + "px");

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "315",
        width: "560",
        videoId: "kyC4N3e1QeA",
        events: {
            onReady: function () {
                $(".video-thumb").click(function () {
                    var $this = $(this);
                    if (!$this.hasClass("active")) {
                        player.loadVideoById($this.attr("data-video"));
                        $this
                            .addClass("active")
                            .siblings()
                            .removeClass("active");
                    }
                });
            },
        },
    });
}


const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});