$(document).ready(function () {
    setListeners();

});

function setListeners() {
    $(".meter input").click(function () {
        var setTo = this.getAttribute("id");
        console.log(setTo);
        switch (setTo) {
            case "setTo1":
                var x = "-37.5";
                var width = "12.5";
                break;
            case "setTo2":
                var x = "-12.5";
                var width = "37.5";
                break;
            case "setTo3":
                var x = "12.5";
                var width = "62.5";
                break;
            case "setTo4":
                var x = "37.5";
                var width = "87.5";
        }
        $(".slider").css("left", x + "%");
        $(".mercury").css("width", width + "%");
        $(".meter>label").removeClass("checked");
        $(".meter input").removeAttr("checked");
        this.setAttribute("checked", "checked");
        this.parentElement.setAttribute("class", "checked");
    })
}