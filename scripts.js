$(document).ready(function () {
    $("#e_date").datepicker({ dateFormat: 'dd/mm/yy' });
});

$(document).ready(function () {
    $("#o_date").datepicker({ dateFormat: 'dd/mm/yy' });
});

$(document).ready(function () {
    $("#w_date").datepicker({ dateFormat: 'dd/mm/yy' });
});

$(document).ready(function () {
    $("#dt_from").datepicker({ dateFormat: 'dd/mm/yy' });
});

$(document).ready(function () {
    $("#dt_to").datepicker({ dateFormat: 'dd/mm/yy' });
});
function myFunction() {
    var checkBox = document.getElementById("chk01");
    var checkBox2 = document.getElementById("chk02");
    var checkBox3 = document.getElementById("chk03");
    var checkBox4 = document.getElementById("chk04");
    var drp = document.getElementById("drp_art");
    var drp2 = document.getElementById("drp_grop");
    if (checkBox.checked == true) {
        drp.style.visibility = "visible";
        drp2.style.visibility = "hidden";
        checkBox2.checked = false;
        checkBox3.checked = false;
        checkBox4.checked = false;
    } else {
        drp.style.visibility = "hidden";
    }
}
function myFunction2() {
    var checkBox = document.getElementById("chk02");
    var checkBox1 = document.getElementById("chk01");
    var checkBox3 = document.getElementById("chk03");
    var checkBox4 = document.getElementById("chk04");
    var drp = document.getElementById("drp_grop");
    var drp1 = document.getElementById("drp_art");
    if (checkBox.checked == true) {
        drp.style.visibility = "visible";
        drp1.style.visibility = "hidden";
        checkBox1.checked = false;
        checkBox3.checked = false;
        checkBox4.checked = false;
    } else {
        drp.style.visibility = "hidden";
    }
}
function myFunction3() {
    var checkBox1 = document.getElementById("chk01");
    var checkBox2 = document.getElementById("chk02");
    var checkBox3 = document.getElementById("chk03");
    var checkBox4 = document.getElementById("chk04");
    var drp = document.getElementById("drp_grop");
    var drp1 = document.getElementById("drp_art");
    if (checkBox3.checked == true) {
        drp.style.visibility = "hidden";
        drp1.style.visibility = "hidden";
        checkBox1.checked = false;
        checkBox2.checked = false;
        checkBox4.checked = false;
    } else {
        //
    }
}

function myFunction4() {
    var checkBox1 = document.getElementById("chk01");
    var checkBox2 = document.getElementById("chk02");
    var checkBox3 = document.getElementById("chk03");
    var checkBox4 = document.getElementById("chk04");
    var drp = document.getElementById("drp_grop");
    var drp1 = document.getElementById("drp_art");
    if (checkBox4.checked == true) {
        drp.style.visibility = "hidden";
        drp1.style.visibility = "hidden";
        checkBox1.checked = false;
        checkBox2.checked = false;
        checkBox3.checked = false;
    } else {
        //
    }
}
