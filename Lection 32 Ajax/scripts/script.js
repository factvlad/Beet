let res = $(".result");
let response = true
function search() {
    title = $(".name").val(),
        type = "&Type=" + $(".type").val(),
        query = "http://www.omdbapi.com/?apikey=6d2c5721&s=",
        IsEmpty = true;

    query = query + title + type
    $("ol,.pages,#NotFound,.detailsList").remove();

    $.getJSON(query, function (data) {
        //var json = $.parseJSON(data);
        console.log(data);

        return data
    })
        .done(function (data) {
            let Search = data.Search;
            response = data.Response;
            if (response === "True") {
                let pages = Math.ceil(data.totalResults / 10)
                makeFilmList(Search)
                if (pages > 1) {
                    let btnMas = ""
                    for (let i = 0; i < pages; i++) {
                        btnMas += `<button class="pages" onclick="pagination(${i + 1})"> ${i + 1} </button>`
                    }
                    $("body").append(btnMas);
                }

            } else {
                res.append(`<span id='NotFound'>${data.Error}<span>`);
            }
        })
    console.log(IsEmpty)
}

function makeFilmList(ar) {
    let list = "<ol>"
    for (let index = 0; index < ar.length; index++) {
        list = list + `<li class="movie" id='${ar[index].imdbID}'> ${ar[index].Title} </li> \n <button onclick='details(${index})'>Details</button>`
    }
    list = list + "</ol>"
    res.append(list);
}


function pagination(i) {
    let queryBackup = query;
    query += "&page=" + i;
    $("ol").remove();
    $(".detailsList").remove();
    $.getJSON(query, function (data) {
        //var json = $.parseJSON(data);
        return data
    }).then(function (data) {
        let Search = data.Search
        makeFilmList(Search);
        query = queryBackup
    });
}

function details(i) {
    let query = "http://www.omdbapi.com/?apikey=6d2c5721&i=",
        movies = $(".movie").eq(i);
    let imdbID = movies.attr('id');
    //type = "&Type=" + $(".type").val();
    imdbID = imdbID.trim();
    imdbID = imdbID.replace(/ /g, '%20');
    query = query + imdbID;
    $(".detailsList").remove();
    $.getJSON(query, function (data) {
        //var json = $.parseJSON(data);
        return data
    }).then(function (data) {
        let Search = data,
            poster = "",
            details = "",
            allDetails = "<ul class='detailsList'>";
        $.each(Search, function (key, value) {
            if (key == "Poster") {
                poster = `<img src="${value}">\n`
            } else {
                details = details + `<li> ${key} - ${value} </li> \n`
            }
        });
        allDetails = allDetails + poster + details + "</ul>"
        $("body").append(allDetails);
    });
}


// let allPages = $(".pages")
// console.log(allPages)

// for (let i = 0; i < allPages.length; i++) {
//     allPages[i].onclick = pagination.bind(allPages[i], i);
// }
