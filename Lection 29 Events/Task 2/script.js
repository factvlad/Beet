
//console.log(rows[1])

function sortTable(n) {
    let x, y, i, sortingGen, dir, count, sorting, rows, a, b
    table = document.getElementById("LaLiga");

    sortingGen = true;
    dir = true
    // if dir true - asc direction, else - desc
    count = 0;
    while (sortingGen) {
        sortingGen = false;
        rows = table.rows
        for (i = 1; i < (rows.length - 1); i++) {
            sorting = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (isNaN(parseInt(x.innerHTML)) == 1) {
                a = x.innerHTML.toUpperCase(),
                    b = y.innerHTML.toUpperCase()
            } else {
                a = parseInt(x.innerHTML),
                    b = parseInt(y.innerHTML)
            }
            if (dir) {
                if (a > b) {
                    sorting = true;
                    break;
                }
            } else {
                if (a < b) {
                    sorting = true;
                    break;
                }
            }
        }
        if (sorting) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sortingGen = true;
            count = count + 1
        } else {
            if (count == 0) {
                dir = false;
                sortingGen = true;
            }
        }
    }
}

let laLiga = document.querySelectorAll(".head")
//console.log(laLiga[1].innerHTML)

for (let i = 0; i < laLiga.length; i++) {
    laLiga[i].onclick = sortTable.bind(laLiga[i], i);
}



// let table = document.getElementById("LaLiga"),
//     rows = table.rows;

// let res = 0;
// res = rows[1].getElementsByTagName("TD")[0].innerHTML;
// res = parseInt(res) + 3

// console.log(res)
