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


    function getTitle() {
        var title = document.getElementById("titleOfToken").value;
        return title;
    }

    function getCompany() {
        var company = document.getElementById("descriptionOfToken");
        return company;
    }

    function getNumber() {
        var number = document.getElementById("numberOfTokens").value;
        return number;
    }

    function getLocation() {
        var location = document.getElementById("locationOfToken").value;
        return location;
    }

    function getPrice() {
        var price = document.getElementById("priceOfToken").value;
        return price;
    }

releaseToken = function () {
    var label = document.getElementById("fillAll");
    if (getTitle() != "" && getNumber() != "" && getPrice() != "" && getLocation() != "") {
        label.innerHTML = "Token successfully released";
        label.style.color = "white";
        label.style.display = "";
        var table = document.getElementById("createTokenTable");
        var rowNumber = table.insertRow(-1);
        var cell1 = rowNumber.insertCell(0);
        cell1.innerHTML = "Adidas";
        var cell2 = rowNumber.insertCell(1);
        cell2.innerHTML = getTitle();
        var cell3 = rowNumber.insertCell(2);
        cell3.innerHTML = getLocation();
        var cell4 = rowNumber.insertCell(3);
        cell4.innerHTML = getNumber();
        var cell5 = rowNumber.insertCell(4);
        cell5.innerHTML = getPrice();
        var addBuyBtn = document.createElement("input");
        addBuyBtn.setAttribute("type", "button");
        addBuyBtn.setAttribute("value", "Buy");
        addBuyBtn.setAttribute("class", "buy");
        var cell6 = rowNumber.insertCell(5);
        cell6.appendChild(addBuyBtn);
    } else {
        label.innerHTML = "Please fill all required fields before releasing a token";
        label.style.color = "red";
        label.style.display = "";
    }
}