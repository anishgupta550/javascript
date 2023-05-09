// body

let body = document.body;


// parent  div
let div = document.createElement("div");
// div.setAttribute("id","main");


// image
let img= document.createElement("img");
img.src = "try.png";
img.style.width = "100%";


// heading

let heading = document.createElement("h5");
let head = document.createTextNode("Web Development");
heading.appendChild(head);


// paragrapgh

let p = document.createElement("p");
let text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, assumenda. Provident fugiat cupiditate nulla libero, soluta aspernatur aliquam culpa earum consequatur illo adipisci recusandae, consectetur autem quae molestias voluptatem cumque?");

p.appendChild(text);


// button
let btn = document.createElement("button");
let btn_text = document.createTextNode("Read More");

btn.appendChild(btn_text);


// adding all element in parent
body.appendChild(div);

div.appendChild(img);
div.appendChild(heading);
div.appendChild(p);
div.appendChild(btn);


// hovers
div.addEventListener("mouseenter",addHover);
function addHover(){
    div.style.boxShadow = "0px 0px 30px rgba(0, 0, 0, 0.8)";
}
div.addEventListener("mouseleave",removeHover);
function removeHover(){
    div.style.boxShadow = "none";

}

btn.addEventListener("mouseenter",addHoverBtn);
function addHoverBtn(){
    btn.style.opacity = "0.5";
}
btn.addEventListener("mouseleave",removeHoverBtn);
function removeHoverBtn(){
    btn.style.opacity = "1";

}

img.addEventListener("mouseenter",add_hello);
function add_hello(){
    img.src = "shiva.png";
}
img.addEventListener("mouseleave",remove_hello);
function remove_hello(){
    img.src = "try.png";
}

// styling

// body.style.height = "98vh";
// body.style.display = "flex";
// body.style.alignItems = "center";
// body.style.justifyContent = "center";

div.style.width = "300px";
div.style.border = "1px solid black";   
div.style.textAlign = "center";
div.style.padding = "10px";
div.style.margin = "auto";
div.style.transition = "0.8s";



// para
p.style.textAlign = "justify";


// button
btn.style.border = "none";
btn.style.background = "black";
btn.style.color = "white";
btn.style.padding = "10px 25px";
btn.style.borderRadius = "3px";
btn.style.transition = "0.8s";

