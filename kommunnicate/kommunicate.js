// To Reverse the Number
function rev(num){
    let rev = 0
    while(num!=0){
        let digit = num%10
        rev = rev*10 + digit
        num = Math.floor(num/10)
    }
    console.log(rev)
}



// FETCH URL
function getUrlParameterValue(url, parameter) {
    const urlParams = new URLSearchParams(url);
    value = urlParams.get(`${parameter}`);
    return value;
    }
//var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
    var url = prompt("Enter the url");
    var params = prompt("Enter the parameter");
    console.log(getUrlParameterValue(url, params));