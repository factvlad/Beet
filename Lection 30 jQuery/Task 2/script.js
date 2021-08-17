$(function () {
    let equalPressed = false,
        e = 0,
        x = 0;
    function press() {
        e = $(".enter").val();
        x = $(this).text();
        $(".enter").val(`${e}${x}`);
        equalPressed = false;
    }
    $(".number").on("click", function () {
        //console.log(equalPressed)
        if (equalPressed) {
            $(".enter").val($(this).text());
            equalPressed = false;
        } else {
            e = $(".enter").val();
            x = $(this).text();
            $(".enter").val(`${e}${x}`);
        }
    })
    $(".action").on("click", press)
    function calcResult() {
        e = $(".enter").val();
        e = e.replace(/\^/g, '**');
        result = eval(e);
        $(".enter").val(`${result}`);
        equalPressed = true;
    }
    $(".equal").on("click", calcResult)
    $("body").on("keydown", function (event) {
        if (event.which == 13) {
            calcResult();
            event.preventDefault();
        }
    })
    $(".clean").on("click", function () {
        $(".enter").val("");
    })
})


