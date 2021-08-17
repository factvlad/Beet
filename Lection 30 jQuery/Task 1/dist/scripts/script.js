// $(function () {
//     let x = +$(this).index()
//     $("#tabitem2").on("click", function () {
//         $(".content").hide(),
//             $(".content__tabitem3").hide(),
//             $(".content__tabitem2").show();
//     })
//     $("#tabitem1").on("click", function () {
//         $(".content").show(),
//             $(".content__tabitem3").hide(),
//             $(".content__tabitem2").hide();
//     })
//     $("#tabitem3").on("click", function () {
//         $(".content").hide(),
//             $(".content__tabitem3").show(),
//             $(".content__tabitem2").hide();
//     })
// });

$(function () {
    $(".tabitem").on("click", function () {
        let x = +$(this).index();
        $(".content").hide();
        $(".content").eq(x).show();
    })
});

$(function () {
    $(".fa").on("mouseover", function () {
        let count = +$(this).index()
        let p = $(".fa")
        for (let i = 0; i <= count; i++) {
            p.eq(i).css("color", "yellow")
        }
    })
})

$(".fa").on("mouseout", function () {
    $(".fa").css("color", "#4b536b")
})

$(".fa").on("click", function () {
    let count = +$(this).index()
    let p = $(".fa")
    for (let i = 0; i <= count; i++) {
        p.eq(i).css("color", "yellow")
    }
    for (i = count + 1; i <= p.length; i++) {
        p.eq(i).css("color", "#4b536b")
    }
    $(".fa").off("mouseout")
    $(".fa").off("mouseover")
})

