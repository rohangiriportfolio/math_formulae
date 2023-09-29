let scrollContainer = document.querySelector('#menu_item');
let back_btn = document.getElementById('l_btn');
let next_btn = document.getElementById('r_btn');
var ff = 0;
var open_or_close_btn;
// if(screen.width==0){
//     i
// }
scrollContainer.addEventListener('wheel', function (e) {   // For scrollig the menu items horizontally
    e.preventDefault(); // prevent default scrolling
    // let deltaY = -Math.sign(e.deltaX);
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

next_btn.addEventListener('click', () => {   // For right arrow in menu bar
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 30;
})

let scrollingInterval;   // Long press of right arrow for faster scroll
function startScrolling() {
    scrollingInterval = setInterval(scrollContent, 10);
}
function stopScrolling() {
    clearInterval(scrollingInterval);
}
function scrollContent() {
    scrollContainer.style.scrollBehavior = "auto";
    if (scrollContainer.scrollLeft < scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft += 5;
    }
}

back_btn.addEventListener('click', () => {   // For left arrow in menu bar
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 30;
})

let scrollingInterval1;   // Long press of left arrow for faster scroll
function startScrolling1() {
    scrollingInterval1 = setInterval(scrollContent1, 10);
}
function stopScrolling1() {
    clearInterval(scrollingInterval1);
}
function scrollContent1() {
    scrollContainer.style.scrollBehavior = "auto";
    if (scrollContainer.scrollLeft < scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft -= 5;
    }
}

var open_close = 0;
var f = 0;
var content_links = document.getElementsByClassName("content_link");
var contents = document.getElementsByClassName("content0");
var sides = document.getElementsByClassName("side0");
// var a_n = document.getElementsByClassName("a");
// var ab_n = document.getElementsByClassName("ab");
let searchbox = document.getElementById("search_tab").value;
searchbox = searchbox.toLowerCase();
let contentlink = document.getElementsByClassName("content_link");
let flag = 0;
function open_content(content_name) {   // For clicking the menu item in the top menu bar and opening the content

    for (i of content_links) {
        i.classList.remove("active_link");
    }
    for (i of contents) {
        i.classList.remove("active_content");
    }
    event.currentTarget.classList.add("active_link");
    for (let i = 0; i < contentlink.length; i++) {
        if (contentlink[i].classList.contains("active_link")) {
            flag = i;
            break;
        }
    }
    document.getElementById(content_name).classList.remove("add");
    document.getElementById(content_name).classList.add("active_content");
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].classList.contains("active_content")) {
            f = i;
            break;
        }
    }
    // document.getElementById(content_name).scrollIntoView();

    if (ff == 1) {
        open_or_close_btn.classList.remove("openitem");
    }
}

function open_side_content(content_name) {   // For clicking the menu item in the top menu bar and opening the side content
    for (i of sides) {
        i.classList.remove("active_side");
    }
    document.getElementById(content_name).classList.remove("remove");
    document.getElementById(content_name).classList.add("active_side");

    for (let i = 0; i < sides.length; i++) {
        if (sides[i].classList.contains("active_side")) {
            open_close = i;
            break;
        }
    }
}

function open_sub_content(name, _name) {
    var _name1 = document.getElementsByClassName(_name);
    for (i of _name1) {
        i.style.color = "black";
    }
    document.getElementById(name).style.color = "blueviolet";
    document.getElementById(name).scrollIntoView();
}

function colorchange(id, id1) {
    var _id = document.getElementsByClassName(id1);
    for (i of _id) {
        i.style.color = "white";
    }
    document.getElementById(id).style.color = "rgb(195, 131, 255)";
}
window.addEventListener("load", () => {   // For Loading Animation Delay
    setTimeout(disappear, 3000);
});
function disappear() {
    document.querySelector(".loader1").classList.add("loader1--hidden");
}




let enter = 0;
let signal = 0;
let count;
function search() {   // For Searching in the Searchbar
    searchbox = document.getElementById("search_tab").value;
    searchbox = searchbox.toLowerCase();
    contentlink = document.getElementsByClassName("content_link");
    count = 0;
    for (let i = 0; i < contentlink.length; i++) {
        if (searchbox == "") {
            if (contentlink[i] == contentlink[flag]) {
                contentlink[i].classList.add("active_link");
                contentlink[i].scrollIntoView();
            }
            else {
                contentlink[i].classList.remove("active_link");
            }
        }
        else if (!contentlink[i].innerHTML.toLowerCase().includes(searchbox)) {
            contentlink[i].classList.remove("active_link");
            if (contentlink[i] == contentlink[flag]) {
                contentlink[i].scrollIntoView();
            }
        }
        else {
            contentlink[i].classList.add("active_link");
            contentlink[i].scrollIntoView();
            signal = i;
            count = count + 1;
        }
    }

}
var search_cross = 0;
var content0 = document.getElementsByClassName("content0");
var side0 = document.getElementsByClassName("side0");
const input = document.querySelector("input");
input.addEventListener("keyup", (event) => {  // For Enter Key is pressed!
    if (event.key === "Enter" && count == 1) {
        search_cross = 1;
        for (let i = 0; i < content0.length; i++) {
            content0[i].classList.remove("active_content");
            if (i == signal) {
                content0[signal].classList.add("active_content");
            }
        }
        for (let i = 0; i < side0.length; i++) {
            side0[i].classList.remove("active_side");
            if (i == signal) {
                side0[signal].classList.add("active_side");
            }
        }
        for (let i = 0; i < contentlink.length; i++) {
            if (contentlink[i].classList.contains("active_link")) {
                flag = i;
                break;
            }
        }
        for (let i = 0; i < sides.length; i++) {
            if (sides[i].classList.contains("active_side")) {
                open_close = i;
                break;
            }
        }
        for (let i = 0; i < contents.length; i++) {
            if (contents[i].classList.contains("active_content")) {
                f = i;
                break;
            }
        }
    }
});



function op_or_cl() {
    open_or_close_btn = document.getElementById("open_or_close");
    open_or_close_btn.classList.toggle("openitem");
    if (open_or_close_btn.classList.contains("openitem")) {
        ff = 1;
    }
    contents[f].classList.toggle("add");
    sides[open_close].classList.toggle("remove");
}


// function submitemail(e){
//     e.preventDefault();
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "rohangiri.portfolio@gmail.com",
//         Password : "D023B9C234B844EBC4732AD7795796EB78E6",
//         To : 'rohangiri1spsr@gmail.com',
//         From : 'rohangiri.portfolio@gmail.com',
//         Subject : "Feedback from Math Formulae website",
//         Body : "Name: " + document.getElementById("name").value + ";\n Address: " + document.getElementById("address").value + ";\n Feedback: " + document.getElementById("feed").value,
//     }).then(
//       message => alert(message)
//     );
// }


// // Function to send the email
// function submitemail() {
//     emailjs.send("service_qf0s657", "template_su66lyd", {
//         to_name: "Recipient Name",
//         from_name: "Sender Name",
//         message: "This is the email content."
//     })
//         .then(function (response) {
//             console.log("Email sent successfully:", response);
//         }, function (error) {
//             console.error("Email sending failed:", error);
//         });
// }







function submitemail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        message: document.getElementById("feed").value
    }
    var inputs = document.querySelectorAll(".inputs");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            return false;
        }
    }
    emailjs.send("service_jf8lbo8", "template_8io33xc", params).then(function (res) {
        alert("Success! " + res.status);
    })
}