interface Video {
  name:string,
  price:number,
  renter?:string,
  watchHistort?:string[],
}

interface User {
  name:string,
  age:number,
  rentedVideo?:string[],
}

function pricOfVideo(obj:Video):number|false {
  try {
  console.log(obj.price*3.5)
  return obj.price*3.5
  }
  catch (error) {
    console.error("error")
    return false
  }
}
function videoRenter (videoObj:Video, userObj:User):object|false {
try {
  videoObj.renter=userObj.name
  console.log(videoObj)
  return videoObj
}

catch (error) {
    console.error("error")
    return false
}

}

const TheCurrier:Video={
  name: "TheCurrier",
  price:50,
  
}

const Lorem1:Video={
  name: "TheCurrier",
  price:20,
}

const Lorem2:Video={
  name: "TheCurrier",
  price:30,
}

const Lorem3:Video={
  name: "TheCurrier",
  price:40,
}

const Dudu:User={
  name: "Dudu",
  age:40,
}

const Tom:User={
  name: "Tom",
  age:30,
}

const userSelectionVideo=prompt("please select a movie, the options are:TheCurrier,Lorem1,Lorem2,Lorem3")
const userSelectionUser=prompt("please select a movie, the options are:Dudu,Tom")

if (userSelectionVideo===null||userSelectionUser===null||userSelectionVideo===" "||userSelectionUser===" ") {
  console.log("Not movie/User in the list, null or space")
  console.log(userSelectionVideo)
}
else if (userSelectionVideo==="TheCurrier" && userSelectionUser==="Dudu") {
  const videoPrice=pricOfVideo(TheCurrier);
  const referenceObj=videoRenter(TheCurrier,Dudu);

  
}
else if (userSelectionVideo==="Lorem2") {
  const videoPrice=pricOfVideo(Lorem2);
}
else if (userSelectionVideo==="Lorem3") {
  const videoPrice=pricOfVideo(Lorem3);
}
else if (userSelectionVideo==="Lorem1") {
  const videoPrice=pricOfVideo(Lorem1);
}
else{
 console.log("Not movie in the list")
 console.log(userSelectionVideo)
}

