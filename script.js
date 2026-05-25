//Part 1 : onload function
let alertDiv = document.querySelector(".alert");
let closeButtonAlert = document.querySelector(".okay");

//funtions
window.onload = function () {
    alertDiv.style.display = "flex"
};

closeButtonAlert.onclick = function () {
    alertDiv.style.display = "none"
};


//-----------------------------------------------------------------------------------------------




//Animtion 1 : opition scale and light
    let opitionsArray = document.querySelectorAll(".option");
    let iconsArray = document.querySelectorAll("span");
    let transition = function (transformValue, backgroundValue, firstElement, secondElement) {
        secondElement.style.transform = transformValue;
        firstElement.style.background = backgroundValue;
    };

    //fuctions 
    function opitionsAnimtion(opitionIndex, iconIndex) {
        
        //mouse fuctions
        opitionsArray[opitionIndex].onmouseenter = function () {
            transition("scale(1.15)", "linear-gradient(133deg, #2e5e3e, #1a3523)",
                opitionsArray[opitionIndex], iconsArray[iconIndex]);
        };
        opitionsArray[opitionIndex].onmouseleave = function () {
            transition("scale(1)", "#1a3523",
                opitionsArray[opitionIndex], iconsArray[iconIndex]);
        };

    };

    //start the fuctions 
    opitionsAnimtion(0, 1);
    // opitionsAnimtion(1, 2);
    // opitionsAnimtion(2, 3);




//------------------------------------------------------------------------------------------------- 



//Animtion 2 : close button animtion 
    let closeButton = document.querySelector(".x");
    let backgroundCangerFunction = function(mouseType , backgroundValue){
        closeButton.addEventListener(mouseType,function(){
            closeButton.style.background = backgroundValue;
        });
    };

    //mouse function start
    backgroundCangerFunction("mouseenter","none");
    backgroundCangerFunction("mouseleave","red");



//--------------------------------------------------------------------------------------------------------------------


//Animtion 3 : jumping icon in a button
    let downloadButton = document.getElementById("downloadButton");
    let buttonIcon = document.getElementById("buttonIcon");
    let animtionstartFunction = function(mouseType,animationValue){
        downloadButton.addEventListener(mouseType,function(){
            buttonIcon.style.animation = animationValue; 
        });
    };
//Open close home need page 
let homeneedButton = document.getElementById("op1");
let homeNeedPage = document.querySelector(".home_need");
let homeNeedCloseButton = document.querySelector(".x");
let displayChangerFuction = function(buttonName ){
    buttonName.addEventListener("click",function(){
         
        //Check buttonname
        if(buttonName === homeneedButton){
            homeNeedPage.style.display = "block";
        }
        else{
            homeNeedPage.style.display = "none";
        };
    });
};

//Start display changer fuction
displayChangerFuction(homeNeedCloseButton);
displayChangerFuction(homeneedButton);




//-----------------------------------------------------------------------------------------------------------------------------





//part 5 : Adding item and remove in home need page
let itemInputValue = document.getElementById("itemInput");
let priceInputValue = document.getElementById("priceInput");
let addButton = document.getElementById("addButton");

let tableNewData = document.querySelector(".need");
let itemArrayEmpty = [];
let priceArrayEmpty = [];


//fuctions

let deleteFunctionNewData = function (elementName,numberOfElement, arrayName, stringArrayName, loopVarible) {
    if (elementName.childNodes[numberOfElement].innerText === arrayName[loopVarible]) {
        arrayName.splice(arrayName.indexOf(elementName.childNodes[numberOfElement].innerText), 1)
        window.localStorage.setItem(stringArrayName, JSON.stringify(arrayName))
    }
}

let saveDataFuction = function(itemArray, priceArray ,itemInputValues, priceInputValues){
   
    if(window.localStorage.getItem("itemNames")){
         itemArrayEmpty = JSON.parse(window.localStorage.getItem("itemNames"));
         priceArrayEmpty = JSON.parse(window.localStorage.getItem("prices"));
    }
    else{
        itemArrayEmpty = [];
         priceArrayEmpty = [];
    }

    itemArrayEmpty.unshift(itemInputValues);
    priceArrayEmpty.unshift(priceInputValues);
    //add to local storge
    window.localStorage.setItem("itemNames",JSON.stringify(itemArray));
    window.localStorage.setItem("prices",JSON.stringify(priceArray));
}


let CloneFunction = function(itemNameTextValue ,priceTextValue ,mainElementName){
    let divClone = document.querySelector(".thing").cloneNode(true)
    let itemNameCloneNewData = divClone.childNodes[1];
    let priceCloneNewData = divClone.childNodes[3];
    let deleteButtonNewData = divClone.childNodes[5].childNodes[0];

    //style and text add
    divClone.style.display = "flex";
    itemNameCloneNewData.prepend(document.createTextNode(itemNameTextValue.value));
    priceCloneNewData.prepend(document.createTextNode(priceTextValue.value));
    mainElementName.append(divClone);

    //delete function 
    deleteButtonNewData.addEventListener("click",function(e){
        for(let i = 0; i < itemArrayEmpty.length; i++){
            deleteFunctionNewData(e.target.parentElement.parentElement,1,itemArrayEmpty,"itemNames",i);
            deleteFunctionNewData(e.target.parentElement.parentElement,3, priceArrayEmpty, "prices", i);
            divClone.remove();
            
        }
    })
} 



//buttons click function
addButton.addEventListener("click",function(e){
    e.preventDefault();

    //functions start
    CloneFunction(itemInputValue,priceInputValue,tableNewData);
    saveDataFuction(itemArrayEmpty,priceArrayEmpty,itemInputValue.value,priceInputValue.value);
    window.localStorage.setItem("itemNames",JSON.stringify(itemArrayEmpty));
    window.localStorage.setItem("prices",JSON.stringify(priceArrayEmpty));
})
itemArrayEmpty = JSON.parse(window.localStorage.getItem("itemNames"));
priceArrayEmpty = JSON.parse(window.localStorage.getItem("prices"))




//------------------------------------------------------------------------------------------






//Part 2 : cheak the data 
let itemData = JSON.parse(window.localStorage.getItem("itemNames"));
let priceData = JSON.parse(window.localStorage.getItem("prices"));
let totalPrice = document.querySelector("pricee")
let itemArrayData = [];
let priceArrayData = [];
let table = document.querySelector(".need");
let deleteFunction = function (elementName,numberOfElement, arrayName, stringArrayName, loopVarible) {
    if (elementName.childNodes[numberOfElement].innerText === arrayName[loopVarible]) {
        arrayName.splice(arrayName.indexOf(elementName.childNodes[numberOfElement].innerText), 1)
        window.localStorage.setItem(stringArrayName, JSON.stringify(arrayName))
    }
}
let homeNeedClonefunction = function ( arrayNameFirst, arrayNameSecond) {
    for(let i = 0; i < itemData.length; i++){
    //var declire
    let divCloneCheak = document.querySelector(".thing").cloneNode(true);
    let itemNameClone = divCloneCheak.childNodes[1];
    let priceClone = divCloneCheak.childNodes[3];
    let deleteButton = divCloneCheak.childNodes[5].childNodes[0];

    //delete button fuction 
    deleteButton.addEventListener("click",function(e){
        for(let i = 0; i < itemArrayEmpty.length; i++){
            deleteFunctionNewData(e.target.parentElement.parentElement,1,itemArrayEmpty,"itemNames",i);
            deleteFunctionNewData(e.target.parentElement.parentElement,3, priceArrayEmpty, "prices", i);
            divCloneCheak.remove();
            
        }
    })

    //Div style
    divCloneCheak.style.display = "flex";
    itemNameClone.prepend(document.createTextNode(arrayNameFirst[i]));
    priceClone.prepend(document.createTextNode(arrayNameSecond[i]));
    table.append(divCloneCheak);
    };
}

//cheak (if)
if (window.localStorage.getItem("itemNames") && window.localStorage.getItem("prices")) {

    if (typeof JSON.parse(window.localStorage.getItem("itemNames"))[0] === "string") {


            //clone and perper the div
            homeNeedClonefunction(itemData,priceData)
    };
};


//---------------------------------------------------------------------------------

//End Part : go to print page

let downloadButtonChanger = document.querySelector(".c")
downloadButtonChanger.onclick = function () {
    location.href = "http://127.0.0.1:5500/print_page.html";
}










