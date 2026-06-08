import image from "./assets/image.jpg"
import image2 from "./assets/image2.png"
export function greeting(){
    // return "Welcome to my portfolio"
    console.log("hello john doe jane")
}
export function imageRender(){
     const bodyImg =document.createElement("img")
     bodyImg.src=image
     document.body.appendChild(bodyImg)

     const bodyImg2 =document.createElement("img")
     bodyImg2.src=image2
     document.body.appendChild(bodyImg2)
     
}