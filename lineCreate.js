//Passing span(node),div(line) as argument to function and using those to get value for slope,angle,length from nodeA to nodeB 

function adjustLine(from, to, line) {

    var fromTop = from.offsetTop + from.offsetHeight / 2;
    var toTop = to.offsetTop + to.offsetHeight / 2;
    var fromLeft = from.offsetLeft + from.offsetWidth / 2;
    var toLeft = to.offsetLeft + to.offsetWidth / 2;

    var CA = Math.abs(toTop - fromTop);
    var CO = Math.abs(toLeft - fromLeft);
    var H = Math.sqrt(CA * CA + CO * CO);
    var ANG = 180 / Math.PI * Math.acos(CA / H);

    if (toTop > fromTop) {
        var top = (toTop - fromTop) / 2 + fromTop;
    } else {
        var top = (fromTop - toTop) / 2 + toTop;
    }
    if (toLeft > fromLeft) {
        var left = (toLeft - fromLeft) / 2 + fromLeft;
    } else {
        var left = (fromLeft - toLeft) / 2 + toLeft;
    }

    if ((fromTop < toTop && fromLeft < toLeft) || (toTop < fromTop && toLeft < fromLeft)) {
        ANG *= -1;
    }
    top -= H / 2;

    line.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
    line.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
    line.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
    line.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
    line.style["-transform"] = 'rotate(' + ANG + 'deg)';
    line.style.top = top + 40 + 'px';
    line.style.left = left + 'px';
    line.style.height = H - 78 + 'px';
}

//using DOM to get div,line by id and passing it as argument to function

setInterval(function () {
    lineCreate()
}, 100);

function lineCreate() {
    let x = 0;
    for (let i = 65; i < 69; i++) {
        for (let j = i + 1; j <= 69; j++) {
            if (`${String.fromCharCode(i)}->${String.fromCharCode(j)}` == "B->E")
                continue;
            else
                x++;
            adjustLine(
                document.getElementById(`div${String.fromCharCode(i)}`),
                document.getElementById(`div${String.fromCharCode(j)}`),
                document.getElementById(`line${x}`)
            )

        }
    }
}


