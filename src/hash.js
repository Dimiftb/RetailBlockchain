function getTitle(){
    return document.getElementsByName("titleOfTokens");
}
function getNumber(){
    return document.getElementsByName("numberOfTokens");
}
function getDescription(){
    return document.getElementsByName("descriptionOfToken");
}
function getPrice(){
    return document.getElementsByName("priceOfToken");
}

 hash = function() {
    var Web3 = require("web3");
    var web3 = new Web3();
    var hashString = web3.utils.soliditySha3(getTitle()).slice(2);
    console.log(hashString);
    hashString = web3.utils.soliditySha3(getTitle(), getNumber()).slice(2);
    console.log(hashString);
    hashString = web3.utils.soliditySha3(getTitle(), getNumber(), getDescription()).slice(2);
    console.log(hashString);
    hashString = web3.utils.soliditySha3(getTitle(), getNumber(), getDescription(), getPrice()).slice(2);
    console.log(hashString);
}