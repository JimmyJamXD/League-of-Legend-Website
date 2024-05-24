     //Toggle Navigation 
let character_item = document.querySelectorAll(".main-grid-info");

document.querySelector(".header-nav-toggle").addEventListener('click',function(e){
    e.preventDefault();
    let toggle = document.querySelectorAll(".content-header > nav ul");
    for(let i =0; i<toggle.length; i++){
        toggle[i].classList.toggle('navbar-mobilehide');
    }
});
    
//Character Information
document.addEventListener("DOMContentLoaded", function(event){
    let individual_boxes = document.querySelectorAll(".item-sizing");
    let clickInfo1 = document.querySelectorAll(".item-sizing > nav ul");
    for(let i = 0; i < individual_boxes.length;i++){
        console.log(individual_boxes[i]);
        individual_boxes[i].addEventListener("click", function(){
            clickInfo1[i].classList.toggle("itemhide");
            clickInfo1[i].closest(".main-grid-info").classList.toggle("show_background");
        })
    }
});

function champName(champType){
    console.log(champType);
    const thisChampData = champData[champType];
    console.log(thisChampData);
    document.querySelector(".champDisplayName").innerText = thisChampData.displayName;

    //Empty the specification data
    let champspec = "";
    //Add the space required 
    champspec += `<dt>Title</dt <dd>${thisChampData.title}</dd>`; 
    champspec += `<dt>Role</dt> <dd>${thisChampData.role}</dd>`;
    
    champspec += `<dt>Related</dt>
    <dd>
        <ul>`
        for(var i = 0; i < thisChampData.role.length; i++){
            champspec += `<li>${thisChampData.role[i]}</li>`
        }
        champspec += `</ul></dd>`;

    document.querySelector(".champDataSpecs").innerHTML = champspec;

    //Update the images

        //Set the big image to the first image in images
            //Set the src 
            document.querySelector(".photoLarge").setAttribute("src", thisChampData.image[0]['img']);
            //Set the alt
            document.querySelector(".photoLarge").setAttribute("alt", thisChampData.image[0]['img']);

            //Create the gallery
            let thumbset = "";
            //for each image
            // for(let i = 0; i < )
}