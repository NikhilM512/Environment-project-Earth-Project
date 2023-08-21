
let $climate=document.getElementById("climate");
let $consumption=document.getElementById("consumption");
let $resources=document.getElementById("resources");
let $people=document.getElementById("people");
let $frame=document.getElementById("frame");
let $save_msg=document.getElementById("save");


$climate.onclick=()=>{
    $climate.style.backgroundColor="#2F80ED";
    $consumption.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent"
    document.body.style.backgroundImage="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)";
    $frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    $save_msg.innerText="Do your bit! Save trees, use renewable energy soureces and prefer to travel green."
}

$consumption.onclick=()=>{
    $consumption.style.backgroundColor="#27AE60";
    $climate.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent"
    document.body.style.backgroundImage="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)";
    $frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    $save_msg.innerText="Do your bit! Shop only what you need,eat only what you need and always save the left overs."
}

$resources.onclick=()=>{
    $resources.style.backgroundColor="#27AE60";
    $climate.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent"
    document.body.style.backgroundImage="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)";
    $frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    $save_msg.innerText="Do your bit! Shop only what you need,eat only what you need and always save the left overs."
}