function passwordCracker(passwords, loginAttempt) {
    // Write your code here
    let validArr = [];
    passwords.forEach((str, idx) => {
        validArr.push({ strIdx: loginAttempt.indexOf(str), pwdIdx: idx });
    });
    console.log("--");
    console.log(validArr);

    validArr.sort((a, b) => a.strIdx - b.strIdx);
    console.log(validArr);

    validArr.filter((a) => a.pwdIdx > -1);
    console.log(validArr);

    let validPwd = validArr.map((item) => passwords[item.pwdIdx]);

    console.log(validPwd);

    if (loginAttempt.indexOf(validPwd.join("")) > -1) return validPwd.join(" ");
    return "WRONG PASSWORD";
}

function passwordCracker2(passwords, loginAttempt) {
    // Write your code here
    let validArr = passwords.map((pwd, index) => {
        if (loginAttempt.indexOf(pwd) > -1) {
            return index;
        } else {
            return -1;
        }
    });
    validArr.filter((a) => a > -1);
    console.log("--");
    console.log(validArr);

    let result = [];


    while(true) {
        

        result.push();
    }


    return "WRONG PASSWORD";
}


function buildPwds(loginAttempt)