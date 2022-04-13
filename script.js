//JSON
//fetch API

var object = {
    restaurant1:{
        Starteritems:{
            Noodles:150,
            Soup:100,
            SweetDish:40
        },
        MainCourse:{
            Noodles:150,
            Soup:100,
            SweetDish:40
        }
    },
    restaurant2:{
        Starteritems:{
            Noodles:150,
            Soup:100,
            SweetDish:40
        },
        MainCourse:{
            Noodles:150,
            Soup:100,
            SweetDish:40
        }
    }

}

var image1= document.getElementById("img1");
image1.innerHTML = object.restaurant1.MainCourse.Noodles;
document.getElementById("img2").innerHTML = object.restaurant1.MainCourse.Noodles;
document.getElementById("img3").innerHTML = object.restaurant1.MainCourse.Noodles;


document.getElementById("file-picker").onchange = function(){
document.getElementById("img__append").innerHTML = "Image Uploaded"
document.getElementById("to__redirect").display = "none";
}

document.getElementById("to__redirect").onclick = function(){
    window.location.href = "https://facebook.com"
}

console.log(object.restaurant1.MainCourse.Noodles)