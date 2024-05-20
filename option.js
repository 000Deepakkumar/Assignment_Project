select=document.getElementById("path");
    for (let i = 65; i <69; i++) {
        for (let j =65 ; j <= 69; j++) {
            if(i==j)
                continue;
            for(let k=i;k <=69; k++){
                if((i==k||j==k))
                    continue;
                if(`${String.fromCharCode(i)}${String.fromCharCode(j)}`=="BE"||`${String.fromCharCode(i)}${String.fromCharCode(j)}`=="EB"||
                `${String.fromCharCode(j)}${String.fromCharCode(k)}`=="BE"||`${String.fromCharCode(j)}${String.fromCharCode(k)}`=="EB")
                    continue;
                console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`);
                var opt=document.createElement("option")
                opt.value=`${String.fromCharCode(i)}->${String.fromCharCode(j)}->${String.fromCharCode(k)}`;
                opt.innerHTML=`${String.fromCharCode(i)}->${String.fromCharCode(j)}->${String.fromCharCode(k)}`;
                select.appendChild(opt);
}}}