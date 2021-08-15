// GETTING ALL VARRIABLES

var link = window.location.href;
var title = document.querySelector('#main .title');
var index = 0;
var next = document.getElementById('next-btn');
var content = document.querySelector('.content');
var txt = document.querySelector('.txt');

var form, box, popupCloseBtn, popupBtn, popupInput, proposeBtn;

form = document.querySelector('#popup-form');
box = document.querySelector('.popup-box');
popupInput = document.querySelector('.popup-input');
popupCloseBtn = document.querySelector('.popup-close');
popupBtn = document.querySelector('.popup-btn');
proposeBtn = document.querySelector('#propose-btn');

// VERIFYING THE LINK
if (link.indexOf('#') != -1 && link.indexOf('#') != (link.length - 1)) {
    // HIDING HADER AND SHOWING THE MAIN SECTION
    document.getElementById('header').classList.add('hide');
    // document.getElementById('footer').classList.add('hide');
    document.getElementById('main').classList.remove('hide');
    // GETTING THE TITLE FROM LINK
    link = link.slice(link.indexOf('#') + 1);
    if (link.includes("%20+%20")) {
        var res = link.replace("%20+%20", ' <i style="color:red;" class="fas fa-heart"></i> ');
    } else if (link.includes("+")) {
        var res = link.replace("+", ' <i style="color:red;" class="fas fa-heart"></i> ');
    } else {
        var res = link;
    }

    title.innerHTML = res;
}

// LINES THAT ARE STORING IN A ARRAY
var lines = [
    " কত যে সাগর নদী পেরিয়ে এলাম আমি, কত পথ হলাম যে পার, তোমারি মতন ওগো  অপরূপ সুন্দর কাউকে তো দেখিনি গো আর। ",
    " ভালোবাসা মানে একটা রাত না হয় না ঘুমিয়েই কাটালাম তাতে কি ? প্রত্যেক প্রহরে আমি তোমার কথা ভেবেই জাগি । ",
    " তোমাকে ভেবে পৃথিবী আমার অদেখা তবু এঁকে যাই, আমার ভেতর শুধু তুমি আর তো কিছু পায়নি ঠাই । ",
    " তোমাকে অনুবাদ করেছি স্বপ্নে, তোমাকে অনুবাদ করেছি তৃষ্ণায়??, তোমাকে অনুবাদ করেছি উদাসিনতায়। ",
    " যতনে রেখেছি তোমায় আমারি বুকে, পারবেনা কেড়ে নিতে কেউ তোমাকে, কোথায় যাবো আমি কে আছে আমার, তুমি ছাড়া পৃথিবীটা এতই আধাঁর, এক পৃথিবী প্রেম আমি তোমাকে দেবো, জনমে জনমে আমি তোমারি রবো। ",
    "❤ ভালোবাসি তোমাকে, \n অনেক অনেক ভালোবাসি গো ❤"
]

// MAKING FUNCTIONS

function load() {
    //MAKING BASIC ANIMATION
    content.classList.add('content-anim');
    txt.innerHTML = lines[index];
    setTimeout(() => {
        content.classList.remove('content-anim');
    }, 500)

    // WHILE INDEX REACH THE MAXIMUM NUMBER OF LINE
    if (index == (lines.length - 1)) {
        // STOP INCREASING INDEX
        index = (lines.length - 1);
    } else {
        // OTHERWISE INCREASING IT
        index++;
    }
}

function generate() {
    // VALIDATING BUTTON FOR COPY LINK
    if (popupBtn.innerHTML == "Copy") {
        // SELECTING LINK
        popupInput.select();
        popupInput.setSelectionRange(0, 99999);
        // COPYING LINK
        document.execCommand('copy');

        // RESTORING ITEMS
        popupBtn.innerHTML = "Submit";
        popupClose()
        // ALEART FOR COPYING
        alert('\n \n \n \nলিঙ্ক সঠিক ভাবে কপি হয়েছে \n \n আপনার ভালোবাসার মানুষটিকে লিঙ্কটি দিন।')
    } else {
        // VALIDATING INPUT VALUE
        if (popupInput.value.length != 0) {
            // CONCATING THE LINK WITH NAME
            var pageLink = window.location.href + "#" + popupInput.value;
            popupInput.value = pageLink;
            // CHANGING BUTTON TEXT FOR COPY
            popupBtn.innerHTML = "Copy";
        } else {
            // ALEART FOR INVALID INPUT
            alert('সঠিক নাম দিন!')
        }
    }
}

function popupOpen() {
    // MAKING POPUP VISIBLE WITH BASIC ANIMATION
    form.classList.remove('hide');
    setTimeout(() => {
        box.classList.add('box-anim');
    }, 10);
    setTimeout(() => {
        box.classList.remove('box-anim');
    }, 500);
}

function popupClose() {
    form.classList.add('hide');
    popupInput.value = "";
}

// CALLING THIS FUNCTION

next.addEventListener('click', load);
proposeBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
popupBtn.addEventListener('click', generate);


// Bangla Support
