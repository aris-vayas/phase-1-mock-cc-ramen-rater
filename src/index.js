//IDK if this is how they wanted the first part done will see later
//Edit HTML to deliver the requested style of webpage
//PART1 add buttons to replace image placeholder and display the shown photo
//PART 2 add a form submit to take in reviews 


//After re-reading i will not use the images from my html
//redoing this cost me a lot of time and hopefully its the right method
// but i think i'd rather fetch the data based on a button click 
// this function will add the ID to the url to get to the correct API
function getImages(data){
    fetch(`http://localhost:3000/${data}`)
    .then(item => console.log("what is this API data", item))
//return the data which is my img API
}
//my idea here is to get create a funtion that recieves the click and passes it to the
//getImages() function to be Fetched
//i would need the /ramen/:id to be given to get to my correct fetch file
//once i have that i will use .then to return the data(source image) )

//i then will use a second button function that creates an img element based on the ID
//then that element is appended to the DOM


function moveImage(){
    //this funtion will replace the placeholder image with the source image
    //we will also append the h2 and h3 here 
    //all of this will be processed in this function and then pushed into the click event

    let newImg= getImages(buttonClick)
    console.log("check what we get",newImage)
    
       
   
}
function buttonClick(){
    let btn = document.getElementById('photos')
    //get the src of btn
    //return the url for the fetch function
     console.log(btn)
// btn.addEventListener('click', handleDelete)
}
    //after the images are able to be moved we will then set up a 'submit' event
    //to handle the review, the rating, name of restaurant comments
    //and add a new image to our html list (i think classname = 'photos') 
    //we will use similar methods as above where we will grab the elements and 
    //append them based on user input  


function formHandler(){

}
//flow of functions:::
//buttonClick will get our correct img to feed into getImages
//getImages will return our API data to be written in moveImages
//formHandler will process the submit function and write the new info
//to the html 

//all of our functions here
getImages('ramens/1')
//moveImage()
//buttonClick()
//formHandler()