// body

let body = document.body;


// parent  div
let div = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
// div.setAttribute("id","main");


// image
let img= document.createElement("img");
img.src = "try.png";
img.style.width = "100%";
let img2= document.createElement("img");
img2.src = "shiva.png";
img2.style.width = "100%";
let img3= document.createElement("img");
img3.src = "try.png";
img3.style.width = "100%";


// heading

let heading = document.createElement("h5");
let head = document.createTextNode("Web Development");
heading.appendChild(head);
let heading2 = document.createElement("h5");
let head2 = document.createTextNode("Web Development");
heading2.appendChild(head2);
let heading3 = document.createElement("h5");
let head3 = document.createTextNode("Web Development");
heading3.appendChild(head3);


// paragrapgh

let p = document.createElement("p");
let text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, assumenda. Provident fugiat cupiditate nulla libero, soluta aspernatur aliquam culpa earum consequatur illo adipisci recusandae, consectetur autem quae molestias voluptatem cumque?");

p.appendChild(text);
let p2 = document.createElement("p");
let text2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, assumenda. Provident fugiat cupiditate nulla libero, soluta aspernatur aliquam culpa earum consequatur illo adipisci recusandae, consectetur autem quae molestias voluptatem cumque?");

p2.appendChild(text2);
let p3 = document.createElement("p");
let text3 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, assumenda. Provident fugiat cupiditate nulla libero, soluta aspernatur aliquam culpa earum consequatur illo adipisci recusandae, consectetur autem quae molestias voluptatem cumque?");

p3.appendChild(text3);


// button
let btn = document.createElement("button");
let btn_text = document.createTextNode("Read More");

btn.appendChild(btn_text);

let btn2 = document.createElement("button");
let btn_text2 = document.createTextNode("Read More");

btn2.appendChild(btn_text2);

let btn3 = document.createElement("button");
let btn_text3 = document.createTextNode("Read More");

btn3.appendChild(btn_text3);


// adding all element in parent
body.appendChild(div);

div.appendChild(img);
div.appendChild(heading);
div.appendChild(p);
div.appendChild(btn);

body.appendChild(div2);

div2.appendChild(img2);
div2.appendChild(heading2);
div2.appendChild(p2);
div2.appendChild(btn2);

body.appendChild(div3);

div3.appendChild(img3);
div3.appendChild(heading3);
div3.appendChild(p3);
div3.appendChild(btn3);


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


div2.addEventListener("mouseenter",addHover2);
function addHover2(){
    div2.style.boxShadow = "0px 0px 30px rgba(0, 0, 0, 0.8)";
}
div2.addEventListener("mouseleave",removeHover2);
function removeHover2(){
    div2.style.boxShadow = "none";

}

btn2.addEventListener("mouseenter",addHoverBtn2);
function addHoverBtn2(){
    btn2.style.opacity = "0.5";
}
btn2.addEventListener("mouseleave",removeHoverBtn2);
function removeHoverBtn2(){
    btn2.style.opacity = "1";

}

img2.addEventListener("mouseenter",add_hello2);
function add_hello2(){
    img2.src = "try.png";
}
img2.addEventListener("mouseleave",remove_hello2);
function remove_hello2(){
    img2.src = "shiva.png";
}


div3.addEventListener("mouseenter",addHover3);
function addHover3(){
    div3.style.boxShadow = "0px 0px 30px rgba(0, 0, 0, 0.8)";
}
div3.addEventListener("mouseleave",removeHover3);
function removeHover3(){
    div3.style.boxShadow = "none";

}

btn3.addEventListener("mouseenter",addHoverBtn3);
function addHoverBtn3(){
    btn3.style.opacity = "0.5";
}
btn3.addEventListener("mouseleave",removeHoverBtn3);
function removeHoverBtn3(){
    btn3.style.opacity = "1";

}

img3.addEventListener("mouseenter",add_hello3);
function add_hello3(){
    img3.src = "shiva.png";
}
img3.addEventListener("mouseleave",remove_hello3);
function remove_hello3(){
    img3.src = "try.png";
}

// styling

// body.style.height = "98vh";
body.style.display = "flex";
// body.style.alignItems = "center";
body.style.justifyContent = "space-evenly";
body.style.flexWrap = "wrap";

div.style.width = "300px";
div.style.border = "1px solid black";   
div.style.textAlign = "center";
div.style.padding = "10px";
// div.style.margin = "auto";
div.style.transition = "0.8s";
div.style.marginBottom = "20px";

div2.style.width = "300px";
div2.style.border = "1px solid black";   
div2.style.textAlign = "center";
div2.style.padding = "10px";
// div.style.margin = "auto";
div2.style.transition = "0.8s";
div2.style.marginBottom = "20px";

div3.style.width = "300px";
div3.style.border = "1px solid black";   
div3.style.textAlign = "center";
div3.style.padding = "10px";
// div.style.margin = "auto";
div3.style.transition = "0.8s";
div3.style.marginBottom = "20px";



// para
p.style.textAlign = "justify";
p2.style.textAlign = "justify";
p3.style.textAlign = "justify";


// button
btn.style.border = "none";
btn.style.background = "black";
btn.style.color = "white";
btn.style.padding = "10px 25px";
btn.style.borderRadius = "3px";
btn.style.transition = "0.8s";

btn2.style.border = "none";
btn2.style.background = "black";
btn2.style.color = "white";
btn2.style.padding = "10px 25px";
btn2.style.borderRadius = "3px";
btn2.style.transition = "0.8s";

btn3.style.border = "none";
btn3.style.background = "black";
btn3.style.color = "white";
btn3.style.padding = "10px 25px";
btn3.style.borderRadius = "3px";
btn3.style.transition = "0.8s";

