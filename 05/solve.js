function decodeIt(inputStr) {
    var result = "";
    var prevChar = 0;
    var currentChar = 0;
    var cnt = 0;

    for (i = 0; i < inputStr.length; i++) {
        currentChar = charToNum(inputStr.charAt(i));

        if ( currentChar === prevChar ) {
            if( prevChar === 0 ) {
                result += inputStr.charAt(i);
            }
            else {
                cnt++;
            }
        }
        else {
            if (currentChar === 3) {
                cnt = 0;
                cnt++;
            }
            else {
                switch(prevChar) {
                    case 1:
                    result += String.fromCharCode(cnt + 96);
                    break;
                    case 2:
                    if (cnt === 10) {
                        result += "0";
                    }
                    else {
                        result += cnt.toString();
                    }
                    break;
                    case 3:
                    if (cnt === 1) {
                        result += ".";
                    }
                    else if (cnt === 2) {
                        result += "<";
                    }
                    else if (cnt === 3) {
                        result += ">";
                    }
                    else {
                        console.log("뭔일이지 이건? 왜 여기가 나와?");
                    }
                    break;
                    default:
                    cnt = 0;
                    cnt++;
                    break;
                }
            }

            if (currentChar === 0) {
                result += inputStr.charAt(i);
            }
        }

        prevChar = currentChar;
    }

    return result;
}

function charToNum(inputChar) {
    if (inputChar === "l") {
        return 1;
    }
    else if (inputChar === "I") {
        return 2;
    }
    else if (inputChar === "i") {
        return 3;
    }
    else {
        return 0;
    }
}
