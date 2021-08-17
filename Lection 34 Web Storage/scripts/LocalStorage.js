let query = 'http://www.omdbapi.com/?apikey=6d2c5721&i='

let favourList = $("#localStorage")
let queryBackup = query

let movieList = window.localStorage.getItem("ID").split(",")
////console.log(movieList)
let list = "<ol class='list'> </ol>"
favourList.append(list);
let listItem = ""
let movieOl = $(".list")
////console.log(movieList)

$.each(movieList, function (idx, val) {
    let i = val
    query = query + i
    ////console.log(query)
    let listItem = `<li class='movie' id ="${i}">`
    let movieItem = ""
    $.getJSON(query, function (data) {
        return data
    }).done(function (movie) {
        $.each(movie, function (key, value) {
            if (key == "Title" || key == "Year") {
                ////console.log(`${key}: ${value}`)
                movieItem = movieItem + `${key}: ${value}; </br>`
                ////console.log(list)
                //movieItem = ""
            } else if (key == "Poster") {
                movieItem = movieItem + `${key}: <img src="${value}"> `
            }
        });
        //list = list + "</ol>"
        listItem = listItem + movieItem + "</li> "
        movieOl.append(listItem)
    })
    query = queryBackup

});
// listItem = $(".movie");
// //let btn = "";
// for (let i = 0; i < listItem.length; i++) {
//     //console.log(listItem[i])
//     let btn = `<button onclick='details(${i})'>Details</button>`
//     listItem[i].append(btn)
// }

// function details(i) {
//     let query = "http://www.omdbapi.com/?apikey=6d2c5721&i=",
//         movies = $(".movie").eq(i);
//     let imdbID = movies.attr('id');
//     let target = $("#" + imdbID)
//     //console.log(target)
//     //type = "&Type=" + $(".type").val();
//     imdbID = imdbID.trim();
//     imdbID = imdbID.replace(/ /g, '%20');
//     query = query + imdbID;
//     $(".detailsList").remove();
//     $.getJSON(query, function (data) {
//         //var json = $.parseJSON(data);
//         return data
//     }).then(function (data) {
//         let Search = data,
//             poster = "",
//             details = "",
//             allDetails = "<ul class='detailsList'>";
//         $.each(Search, function (key, value) {
//             if (key != "Poster") {
//                 details = details + `<li> ${key} - ${value} </li> \n`
//             }
//         });
//         allDetails = allDetails + poster + details + "</ul>"
//         $("body").append(allDetails);
//     });
// }

////console.log(list)
