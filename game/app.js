var man = document.getElementById('man');
var auto = document.getElementById('auto');
var divMan = document.getElementById('manDiv');
var autoDiv = document.getElementById('autoDiv');
var inter;
///////////////////////////////////////// man 1 ///////////////////////////////////
function man1() {
    man.src = 'man' + 1 + ".gif";
    auto.style.width = "22%";
    man.style.marginTop = "23.7%";
    auto.src = 'auto' + 7 + ".gif";
    man.style.marginLeft = "47%";
    man.style.width = "17%";
    if (document.getElementById('autoDiv').innerHTML == 100) {
        document.getElementById('autoDiv').innerHTML = 90;
        autoDiv.style.width = "11%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 90) {
        document.getElementById('autoDiv').innerHTML = 80;
        autoDiv.style.width = "10%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 80) {
        document.getElementById('autoDiv').innerHTML = 70;
        autoDiv.style.width = "9%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 70) {
        document.getElementById('autoDiv').innerHTML = 60;
        autoDiv.style.width = "8%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 60) {
        document.getElementById('autoDiv').innerHTML = 50;
        autoDiv.style.width = "7%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 50) {
        document.getElementById('autoDiv').innerHTML = 40;
        autoDiv.style.width = "6%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 40) {
        document.getElementById('autoDiv').innerHTML = 30;
        autoDiv.style.width = "5%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 30) {
        document.getElementById('autoDiv').innerHTML = 20;
        autoDiv.style.width = "4%";
        autoDiv.style.backgroundColor = "red";
    }
    else if (document.getElementById('autoDiv').innerHTML == 20) {
        document.getElementById('autoDiv').innerHTML = 10;
        autoDiv.style.width = "3%";
        auto.style.marginTop = "25%";
        clearInterval(inter);
        document.getElementById('man').src = "man.gif";
        document.getElementById('auto').src = "auto7.gif";
        autoDiv.style.backgroundColor = "red";
        setTimeout(function () {
            auto.style.display = "none";
        }, 2500)
    }
    setTimeout(function () {
        man.style.marginTop = "26%";
        man.style.marginLeft = "50%";
        man.src = 'man.gif';
        man.style.width = "13%";
    }, 1000);
}
///////////////////////////////////////// man 2 ///////////////////////////////////
function man2() {
    man.src = 'man' + 2 + ".gif";
    auto.src = 'auto' + 7 + ".gif";
    auto.style.width = "22%";
    man.style.marginLeft = "40%";
    man.style.width = "25%";
    if (document.getElementById('autoDiv').innerHTML == 100) {
        document.getElementById('autoDiv').innerHTML = 90;
        autoDiv.style.width = "11%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 90) {
        document.getElementById('autoDiv').innerHTML = 80;
        autoDiv.style.width = "10%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 80) {
        document.getElementById('autoDiv').innerHTML = 70;
        autoDiv.style.width = "9%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 70) {
        document.getElementById('autoDiv').innerHTML = 60;
        autoDiv.style.width = "8%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 60) {
        document.getElementById('autoDiv').innerHTML = 50;
        autoDiv.style.width = "7%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 50) {
        document.getElementById('autoDiv').innerHTML = 40;
        autoDiv.style.width = "6%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 40) {
        document.getElementById('autoDiv').innerHTML = 30;
        autoDiv.style.width = "5%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 30) {
        document.getElementById('autoDiv').innerHTML = 20;
        autoDiv.style.width = "4%";
        autoDiv.style.backgroundColor = "red";
    }
    else if (document.getElementById('autoDiv').innerHTML == 20) {
        document.getElementById('autoDiv').innerHTML = 10;
        clearInterval(inter);
        auto.style.marginTop = "25%";
        autoDiv.style.width = "3%";
        document.getElementById('man').src = "man.gif";
        document.getElementById('auto').src = "auto7.gif";
        autoDiv.style.backgroundColor = "red";
        setTimeout(function () {
            auto.style.display = "none";
        }, 2500)
    }
    setTimeout(function () {
        man.style.marginTop = "26%";
        man.src = 'man.gif';
        man.style.marginLeft = "50%";
        man.style.width = "13%";
    }, 1000);
}
///////////////////////////////////////// man 3 ///////////////////////////////////
function man3() {
    man.src = 'man' + 3 + ".gif";
    auto.style.width = "22%";
    auto.src = 'auto' + 7 + ".gif";
    man.style.marginTop = "13%";
    man.style.width = "22%";
    man.style.marginLeft = "43%";
    if (document.getElementById('autoDiv').innerHTML == 100) {
        document.getElementById('autoDiv').innerHTML = 90;
        autoDiv.style.width = "11%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 90) {
        document.getElementById('autoDiv').innerHTML = 80;
        autoDiv.style.width = "10%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 80) {
        document.getElementById('autoDiv').innerHTML = 70;
        autoDiv.style.width = "9%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 70) {
        document.getElementById('autoDiv').innerHTML = 60;
        autoDiv.style.width = "8%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 60) {
        document.getElementById('autoDiv').innerHTML = 50;
        autoDiv.style.width = "7%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 50) {
        document.getElementById('autoDiv').innerHTML = 40;
        autoDiv.style.width = "6%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 40) {
        document.getElementById('autoDiv').innerHTML = 30;
        autoDiv.style.width = "5%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 30) {
        document.getElementById('autoDiv').innerHTML = 20;
        autoDiv.style.width = "4%";
        autoDiv.style.backgroundColor = "red";
    }
    else if (document.getElementById('autoDiv').innerHTML == 20) {
        document.getElementById('autoDiv').innerHTML = 10;
        clearInterval(inter);
        auto.style.marginTop = "25%";
        autoDiv.style.width = "3%";
        document.getElementById('man').src = "man.gif";
        document.getElementById('auto').src = "auto7.gif";
        autoDiv.style.backgroundColor = "red";
        setTimeout(function () {
            auto.style.display = "none";
        }, 2500)
    }
    setTimeout(function () {
        man.style.marginTop = "26%";
        man.src = 'man.gif';
        man.style.width = "13%";
        man.style.marginLeft = "50%";
    }, 600);
}
///////////////////////////////////////// man 4 ///////////////////////////////////
function man4() {
    man.src = 'man' + 4 + ".gif";
    man.style.marginTop = "24%";
    man.style.marginLeft = "42%";
    man.style.width = "28%";
    if (document.getElementById('autoDiv').innerHTML == 100) {
        document.getElementById('autoDiv').innerHTML = 90;
        autoDiv.style.width = "11%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 90) {
        document.getElementById('autoDiv').innerHTML = 80;
        autoDiv.style.width = "10%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 80) {
        document.getElementById('autoDiv').innerHTML = 70;
        autoDiv.style.width = "9%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 70) {
        document.getElementById('autoDiv').innerHTML = 60;
        autoDiv.style.width = "8%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 60) {
        document.getElementById('autoDiv').innerHTML = 50;
        autoDiv.style.width = "7%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 50) {
        document.getElementById('autoDiv').innerHTML = 40;
        autoDiv.style.width = "6%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 40) {
        document.getElementById('autoDiv').innerHTML = 30;
        autoDiv.style.width = "5%";
    }
    else if (document.getElementById('autoDiv').innerHTML == 30) {
        document.getElementById('autoDiv').innerHTML = 20;
        autoDiv.style.width = "4%";
        autoDiv.style.backgroundColor = "red";
    }
    else if (document.getElementById('autoDiv').innerHTML == 20) {
        document.getElementById('autoDiv').innerHTML = 10;
        clearInterval(inter);
        auto.style.marginTop = "25%";
        autoDiv.style.width = "3%";
        document.getElementById('man').src = "man.gif";
        document.getElementById('auto').src = "auto7.gif";
        autoDiv.style.backgroundColor = "red";
        setTimeout(function () {
            auto.style.display = "none";
        }, 2500)
    }
    setTimeout(function () {
        man.src = 'man.gif';
        man.style.width = "13%";
        man.style.marginLeft = "50%";
        man.style.marginTop = "26%";
    }, 1000);
}
///////////////////////////////////////// auto ///////////////////////////////////
///////////////////////////////////////// auto ///////////////////////////////////
var autoNum;
setTimeout(function () {
    inter = setInterval(function () {
        autoNum = Math.ceil(Math.random() * 4);

        if (divMan.innerHTML == 10) {
            clearInterval(inter);
            autoNum = 8;
            auto.style.width = "5%";
            man.style.width = "30%";
            man.src = "man6.gif";
            setTimeout(function () {
                auto.style.marginTop = "25%";
                auto.style.width = "15%";
            }, 2);
            setTimeout(function () {
                man.style.display = "none";
            }, 2000);
        }
        if (autoNum == 8) {
            auto.style.marginTop = "10%";
            auto.style.width = "-5%";
            man.style.marginTop = "26%";
            man.style.width = "30%";
            man.src = "man6.gif";
        }
        // auto.style.marginTop = "25%";
        if (autoNum === 4) {
            auto.style.width = "30%";
            man.style.marginTop = "26%";
            man.src = 'man' + 5 + ".gif";
            setTimeout(() => {
                man.src = 'man.gif';
                man.style.width = "13%";
            }, 1000);
        }

        if (autoNum == 1 || autoNum == 3 || autoNum == 4) {
            if (document.getElementById('manDiv').innerHTML == 100) {
                document.getElementById('manDiv').innerHTML = 90;
                divMan.style.width = "11%";
            }
            else if (document.getElementById('manDiv').innerHTML == 90) {
                document.getElementById('manDiv').innerHTML = 80;
                divMan.style.width = "10%";
            }
            else if (document.getElementById('manDiv').innerHTML == 80) {
                document.getElementById('manDiv').innerHTML = 70;
                divMan.style.width = "8%";
            }
            else if (document.getElementById('manDiv').innerHTML == 70) {
                document.getElementById('manDiv').innerHTML = 60;
                divMan.style.width = "7%";
            }
            else if (document.getElementById('manDiv').innerHTML == 60) {
                document.getElementById('manDiv').innerHTML = 50;
                divMan.style.width = "6%";
            }
            else if (document.getElementById('manDiv').innerHTML == 50) {
                document.getElementById('manDiv').innerHTML = 40;
                divMan.style.width = "5%";
            }
            else if (document.getElementById('manDiv').innerHTML == 40) {
                document.getElementById('manDiv').innerHTML = 30;
                divMan.style.width = "4%";
                divMan.style.backgroundColor = "red";
            }
            else if (document.getElementById('manDiv').innerHTML == 30) {
                document.getElementById('manDiv').innerHTML = 20;
                divMan.style.width = "3%";
                divMan.style.backgroundColor = "red";
            }
            else if (document.getElementById('manDiv').innerHTML == 20) {
                document.getElementById('manDiv').innerHTML = 10;
                divMan.style.width = "2.5%";
                document.getElementById('man').src = "man5.gif";
                document.getElementById('auto').src = "auto.gif";
                divMan.style.backgroundColor = "red";
            }
        }

        if (autoNum === 3) {
            auto.style.marginTop = "26%";
            man.src = 'man' + 6 + ".gif";
            man.style.width = "25%";
            setTimeout(() => {
                man.src = 'man.gif';
                man.style.width = "13%";
            }, 2000);
        }


        if (autoNum === 1) {
            setTimeout(() => {
                man.src = 'man.gif';
                man.style.width = "13%";
            }, 1400);
        }
        auto.src = 'auto' + autoNum + ".gif";
        auto.style.width = "22%";
    }, 2500)
}, 1000)


// if (autoNum == 8) {
//     auto.style.marginTop = "10%";
//     auto.style.width = "-5%";
//     man.style.marginTop = "26%";
//     man.style.width = "30%";
//     man.src = "man6.gif";
// }