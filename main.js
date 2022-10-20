document.getElementById("btnSapXep").onclick = function () {
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;

    var arrange;
    if (number1 < number2 && number1 < number3 && number2 < number3) {
        arrange = number1 + " < " + number2 + " < " + number3;
    } else if (number1 < number2 && number1 < number3 && number3 < number2) {
        arrange = number1 + " < " + number3 + " < " + number2;
    } else if (number2 < number1 && number2 < number3 && number1 < number3) {
        arrange = number2 + " < " + number1 + " < " + number3;
    } else if (number2 < number1 && number2 < number3 && number3 < number1) {
        arrange = number2 + " < " + number3 + " < " + number1;
    } else if (number3 < number1 && number3 < number2 && number1 < number2) {
        arrange = number3 + " < " + number1 + " < " + number2;
    } else {
        arrange = number3 + " < " + number2 + " < " + number1;
    }

    document.getElementById("infoSapXep").innerHTML = arrange;

    document.getElementById("infoSapXep").classList.add("alert-success");
}

document.getElementById("btnHello").onclick = function () {
    var member = document.getElementById("member").value;
    var result = "";

    result += "<p>Xin chào " + member + " !</p>";

    document.getElementById("infoHello").innerHTML = result;

    document.getElementById("infoHello").classList.add("alert-success");

}

document.getElementById("btnCount").onclick = function () {
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;

    var count = 0;

    if (num1 % 2 == 0) {
        count++;
    }

    if (num2 % 2 == 0) {
        count++;
    }

    if (num3 % 2 == 0) {
        count++;
    }
    var result = "";
    result += "<p>Có " + count + " số chẵn, " + (3 - count) + " số lẻ.";

    document.getElementById("infoCount").innerHTML = result;

    document.getElementById("infoCount").classList.add("alert-success");
}

document.getElementById("btnGuess").onclick = function () {
    var edge1 = document.getElementById("edge1").value * 1;
    var edge2 = document.getElementById("edge2").value * 1;
    var edge3 = document.getElementById("edge3").value * 1;
    var result;

    if (edge1 == edge2 && edge1 == edge3 && edge2 == edge3) {
        result = "<p>Hình tam giác đều.</p>";
    } else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
        result = "<p>Hình tam giác cân.</p>";
    } else if (Math.sqrt((edge1 * edge1) + (edge2 * edge2)) == edge3 || Math.sqrt((edge1 * edge1) + (edge3 * edge3)) == edge2 || Math.sqrt((edge2 * edge2) + (edge3 * edge3)) == edge1) {
        result = "<p>Hình tam giác vuông.</p>";
    } else {
        result = "<p>Một loại tam giác khác.</p>";
    }
    document.getElementById("infoGuess").innerHTML = result;

    document.getElementById("infoGuess").classList.add("alert-success");
}