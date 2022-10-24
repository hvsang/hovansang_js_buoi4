function arrange(a, b, c) {
    var arrange;
    if (a < b && a < c && b < c) {
        arrange = a + " < " + b + " < " + c;
    } else if (a < b && a < c && c < b) {
        arrange = a + " < " + c + " < " + b;
    } else if (b < a && b < c && a < c) {
        arrange = b + " < " + a + " < " + c;
    } else if (b < a && b < c && c < a) {
        arrange = b + " < " + c + " < " + a;
    } else if (c < a && c < b && a < b) {
        arrange = c + " < " + a + " < " + b;
    } else {
        arrange = c + " < " + b + " < " + a;
    }
    return arrange;
}

function sapXep() {
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;

    document.getElementById("infoSapXep").innerHTML = arrange(number1, number2, number3);

    document.getElementById("infoSapXep").classList.add("alert-success");
}

function welcome() {
    var member = document.getElementById("member").value;
    var result = "";

    result += "<p>Xin chào ";
    result += member;
    result += " !</p>";

    document.getElementById("infoHello").innerHTML = result;

    document.getElementById("infoHello").classList.add("alert-success");

}

function count(a, b, c) {
    var count = 0;

    if (a % 2 == 0) {
        count++;
    }

    if (b % 2 == 0) {
        count++;
    }

    if (c % 2 == 0) {
        count++;
    }
    return count;
}

function countChanLe() {
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;

    var result = "";
    result += "<p>Có " + count(num1, num2, num3) + " số chẵn, " + (3 - count(num1, num2, num3)) + " số lẻ.";

    document.getElementById("infoCount").innerHTML = result;

    document.getElementById("infoCount").classList.add("alert-success");
}

function tamGiac() {
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

function yesterday() {
    var day = document.getElementById("day").value * 1;
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;

    if (year % 4 === 0 && year % 100 !== 0) {
        if (day <= 31) {
            day = day - 1;
        } else if (day > 29 && month == 2) {
            alert("Ngày không hợp lệ");
        }

        if (day == 1 && month == 3) {
            day = 29;
            month -= 1;
        }
    } else {
        if (day <= 31) {
            day = day - 1;
        } else if (day > 28 && month == 2) {
            alert("Ngày không hợp lệ");
        }

        if (day == 1 && month == 3) {
            day = 28;
            month -= 1;
        }
    }

    if (day == 1) {
        if (month == 5 || month == 7 || month == 10 || month == 12) {
            day = 30;
            month -= 1;
        } else if (month == 2 || month == 4 || month == 6 || month == 8 || month == 9 || month == 11) {
            day = 31;
            month -= 1;
        } else if (month == 1) {
            day = 31;
            month = 12;
            year -= 1;
        }
    }





    console.log(day, month, year);
}


function day() {
    var month = document.getElementById("month6").value * 1;
    var year = document.getElementById("year6").value * 1;
    var day;
    var result = "";

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        day = 31;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        day = 30;
    } else if (month == 2) {
        if (year % 4 === 0 && year % 100 !== 0) {
            day = 29;
        } else {
            day = 28;
        }
    }

    result += "<p>Tháng ";
    result += month;
    result += " năm ";
    result += year;
    result += " có ";
    result += day;
    result += " ngày";

    document.getElementById("infoDay").innerHTML = result;

    document.getElementById("infoDay").classList.add("alert-success");
}

function read() {
    var number = document.getElementById("number").value * 1;
    var hundred = Math.floor(number / 100);
    var ten = Math.floor(number % 100 / 10);
    var unit = number % 10;
    var readHundred;
    var readTen;
    var readUnit;
    var result1;
    var result = "";

    switch (hundred) {
        case 1:
            readHundred = "Một trăm ";
            break;
        case 2:
            readHundred = "Hai trăm ";
            break;
        case 3:
            readHundred = "Ba trăm ";
            break;
        case 4:
            readHundred = "Bốn trăm ";
            break;
        case 5:
            readHundred = "Năm trăm ";
            break;
        case 6:
            readHundred = "Sáu trăm ";
            break;
        case 7:
            readHundred = "Bảy trăm ";
            break;
        case 8:
            readHundred = "Tám trăm ";
            break;
        case 9:
            readHundred = "Chín trăm ";
            break;
        default:
            result1 = "<p>Số không hợp lệ</p>";
            break;
    }

    switch (ten) {
        case 1:
            readTen = "mười ";
            break;
        case 2:
            readTen = "hai mươi ";
            break;
        case 3:
            readTen = "ba mươi ";
            break;
        case 4:
            readTen = "bốn mươi ";
            break;
        case 5:
            readTen = "năm mươi ";
            break;
        case 6:
            readTen = "sáu mươi ";
            break;
        case 7:
            readTen = "bảy mươi ";
            break;
        case 8:
            readTen = "tám mươi ";
            break;
        case 9:
            readTen = "chín mươi ";
            break;
        default:
            result1 = "<p>Số không hợp lệ</p>";
            break;
    }

    switch (unit) {
        case 1:
            readUnit = "một.";
            break;
        case 2:
            readUnit = "hai.";
            break;
        case 3:
            readUnit = "ba.";
            break;
        case 4:
            readUnit = "bốn.";
            break;
        case 5:
            readUnit = "năm.";
            break;
        case 6:
            readUnit = "sáu.";
            break;
        case 7:
            readUnit = "bảy.";
            break;
        case 8:
            readUnit = "tám.";
            break;
        case 9:
            readUnit = "chín.";
            break;
        default:
            result1 = "<p>Số không hợp lệ</p>";
            break;
    }

    result += readHundred;
    result += readTen;
    result += readUnit;

    document.getElementById("infoRead").innerHTML = result;
    // document.getElementById("infoRead").innerHTML = result1;
    document.getElementById("infoRead").classList.add("alert-success");
}

function timSLN(a, b, c) {
    var max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

function find() {
    var name1 = document.getElementById("name1").value;
    var x1 = document.getElementById("x1").value * 1;
    var y1 = document.getElementById("y1").value * 1;
    var name2 = document.getElementById("name2").value;
    var x2 = document.getElementById("x2").value * 1;
    var y2 = document.getElementById("y2").value * 1;
    var name3 = document.getElementById("name3").value;
    var x3 = document.getElementById("x3").value * 1;
    var y3 = document.getElementById("y3").value * 1;
    var x4 = document.getElementById("x4").value * 1;
    var y4 = document.getElementById("y4").value * 1;
    var fastest;
    var result = "";

    d1 = Math.sqrt(((x1 - x4) * (x1 - x4)) + ((y1 - y4) * y1 - y4));
    d2 = Math.sqrt(((x2 - x4) * (x2 - x4)) + ((y2 - y4) * y2 - y4));
    d3 = Math.sqrt(((x3 - x4) * (x3 - x4)) + ((y3 - y4) * y3 - y4));

    var max = timSLN(d1, d2, d3);
    if (max == d1) {
        fastest = name1;
    } else if (max == d2) {
        fastest = name2;
    } else if (max == d3) {
        fastest = name3;
    }

    result += "<p>Sinh viên xa trường nhất là: ";
    result += fastest;

    document.getElementById("infoFind").innerHTML = result;
    document.getElementById("infoFind").classList.add("alert-success");

}