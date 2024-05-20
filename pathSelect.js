//Changing Color and width of path when user click on option from Select

let select = document.getElementById("path");
select.addEventListener('change', () => {

    let x = 0;
    for (let i = 65; i < 69; i++) {
        for (let j = i + 1; j <= 69; j++) {
            if (`${String.fromCharCode(i)}->${String.fromCharCode(j)}` == "B->E")
                continue;
            else
                x++;
            if (select.value == `${String.fromCharCode(i)}->${String.fromCharCode(j)}`) {

                for (let n = 1; n <= 9; n++) {
                    document.getElementById(`line${n}`).style.backgroundColor = "black";
                }
                for (let n = 1; n <= 9; n++) {
                    document.getElementById(`line${n}`).style.width = "2px";
                }
                document.getElementById(`line${x}`).style.backgroundColor = "#66FF00";
                document.getElementById(`line${x}`).style.width = "5px";
            }
        }
    }
    for (let i = 65; i < 69; i++) {
        for (let j = 65; j <= 69; j++) {
            if (i == j)
                continue;
            for (let k = i; k <= 69; k++) {
                if ((i == k || j == k))
                    continue;
                if (`${String.fromCharCode(i)}${String.fromCharCode(j)}` == "BE" || `${String.fromCharCode(i)}${String.fromCharCode(j)}` == "EB" ||
                    `${String.fromCharCode(j)}${String.fromCharCode(k)}` == "BE" || `${String.fromCharCode(j)}${String.fromCharCode(k)}` == "EB")
                    continue;
                const pal = `${String.fromCharCode(i)}->${String.fromCharCode(j)}->${String.fromCharCode(k)}`;
                if (select.value == pal) {
                    const arr = pal.split("->");
                    const first = arr[0] + arr[1]
                    const second = arr[1] + arr[2]
                    let x = 0;
                    for (let a = 65; a < 69; a++) {
                        for (let b = a + 1; b <= 69; b++) {
                            if (`${String.fromCharCode(a)}->${String.fromCharCode(b)}` == "B->E")
                                continue;
                            else
                            x++;
                            if (first == `${String.fromCharCode(a)}${String.fromCharCode(b)}`||first == `${String.fromCharCode(b)}${String.fromCharCode(a)}`) {
                                console.log(`${String.fromCharCode(a)}${String.fromCharCode(b)}`)
                                for (let n = 1; n <= 9; n++) {
                                    document.getElementById(`line${n}`).style.backgroundColor = "black";
                                }
                                for (let n = 1; n <= 9; n++) {
                                    document.getElementById(`line${n}`).style.width = "2px";
                                }
                                document.getElementById(`line${x}`).style.backgroundColor = "#66FF00";
                                document.getElementById(`line${x}`).style.width = "5px";
                            }
                        }
                    }
                    x = 0
                    for (let a = 65; a < 69; a++) {
                        for (let b = a + 1; b <= 69; b++) {
                            if (`${String.fromCharCode(a)}->${String.fromCharCode(b)}` == "B->E")
                                continue;
                            else
                            x++; 
                            if (second == `${String.fromCharCode(a)}${String.fromCharCode(b)}`||second == `${String.fromCharCode(b)}${String.fromCharCode(a)}`) {
                                console.log(`${String.fromCharCode(a)}${String.fromCharCode(b)}`)

                                document.getElementById(`line${x}`).style.backgroundColor = "#66FF00";
                                document.getElementById(`line${x}`).style.width = "5px";
                            }
                        }
                    }
                }
            }
        }
    }
});