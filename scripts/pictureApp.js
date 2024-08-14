/* function displayImage()
{
    var imageArray = [
        {

        //address of image
        src: "https://www.iit.edu/sites/default/files/styles/width_1280/public/2020-05/id_profile_1280x850.jpg?itok=iR0mCcD0",

        //image size on page
        width: "500",
        height: "auto"

    },
    {

        //address of image
        src: "scripts/headshot.png",

        //image size on page
        width: "500",
        height: "auto"

    }
];

    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height; 
    }

    //create random image number
    function getRandomNumber(min, max)
    {
        // generate and return a random number for the image to be displayed   
        imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
        return newArray[imgNo];
    }
    // 0 is first image and (preBuffer.length - 1) is last image of the array  
  var newImage = getRandomNumber(0, newArray.length - 1);  
   
  // remove the previous images  
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }  
  // display the new random image    
  document.body.appendChild(newImage);
} */

function displayRandomImages()   
  {  
     //array of images with image location, and description  
     var imageArray = [  
     {   
       //address URL of the image  
       src: "images/pictureApp/Prachi_Kevin_Diwali.jpg",
       desc: "My wife Prachi and I celebrating Diwali on my first trip to India, November 2023" 
     },   
     {  
       src: "images/pictureApp/Sammi_Elkhart_Lake.jpg",
       desc: "My wife and I's corgi Samantha wondering why we are staring at her on a pontoon boat in Elkhart Lake, Wisconsin. July 2023." 
     },
     {   
        //address URL of the image  
        src: "images/pictureApp/Prachi_30th_Birthday_Experience.jpg",
        desc: "Prachi, her parents, and myself with our hosts a Latin dance & food experience for Prachi's 30th birthday. May 2023"  
      },
      {   
        //address URL of the image  
        src: "images/pictureApp/Kevin_and_Jason_Ladanye.jpg",
        desc: "One of my sleight-of-hand idol's Jason Ladayne and myself following Jason's performance. July 2023"  
      }
     ];  
        
      //find the length of the array of images  
      var arrayLength = imageArray.length;  
      var newArray = [];  
      for (var i = 0; i < arrayLength; i++) {  
          newArray[i] = new Image();  
          newArray[i].src = imageArray[i].src;
      }  
       
    // create random image number  
    function getRandomNum(min, max)   
    {  
        // generate and return a random number for the image to be displayed   
        imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
        return newArray[imgNo];  
    }    
    
    // 0 is first image and (preBuffer.length - 1) is last image of the array  
    var newImage = getRandomNum(0, newArray.length - 1);
     
    // remove the previous images  
    var images = document.getElementsByTagName('img');

    var l = images.length; 
    for (var p = 0; p < l; p++) {  
       images[0].parentNode.removeChild(images[0]);
    }
    // display the new random image    
    document.getElementById("image-container").appendChild(newImage);
  }
