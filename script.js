// code by goldenegg000

// global chat variables
var user = "goldenegg000";
var CHATboxbg = "";
var CHATmsgstyle = "";
var CHATmsgbg = "50";
var debug = false;
var timestampactive = false;

var daURL = new URL(document.URL);
var daParams = new URLSearchParams(daURL.search);

if (daParams.has("channel")) {
    user = daParams.get("channel");
}
if (daParams.has("debug")) {
    debug = true;
}
if (daParams.has("timestampactive")) {
    timestampactive = true;
}
if (daParams.has("message-color")) {
    if (daParams.get("message-color") == "none") {
        CHATboxbg = "#00000000";
    } else {
        CHATboxbg = daParams.get("message-color").replace("$", "#");
    }
}
if (daParams.has("font-size")) {
    if (daParams.get("font-size") == "none") {
        CHATmsgbg = "50";
    } else {
        CHATmsgbg = daParams.get("font-size");
    }
}
if (daParams.has("message-style")) {
    if (daParams.get("message-style") == "none") {
        CHATmsgstyle = "";
    } else {
        CHATmsgstyle = daParams.get("message-style");
    }
}
if (daParams.has("body-color")) {
    if (daParams.get("body-color") == "none") {
        document.body.style.backgroundColor = "rbg(0, 0, 0, 0)";
    } else {
        document.body.style.backgroundColor = daParams.get("body-color").replace("$", "#");
    }
}
if (daParams.has("border-color")) {
    if (daParams.get("border-color") == "none") {
        document.body.style.border = "none";
    } else {
        document.body.style.borderColor = daParams.get("border-color").replace("$", "#");
    }
}

const client = new tmi.Client({
    channels: [ user ]
});

client.connect();

function UpdateStyles() {
    var elements = document.getElementsByClassName("chat");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.backgroundColor = CHATboxbg;
        element.style.fontSize = CHATmsgbg+"px";
        element.style.fontFamily = CHATmsgstyle;
    }
}

function OnChatMassage(channel, tags, message, self) {
    if (debug) {
        console.log("debug--", channel, tags, message, self, "--debug");
    }
    var dadiv = document.createElement("div");

    // get time
    const current = new Date();

    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    dadiv.innerHTML = `<span class='chat-author__display-name'>${timestampactive ? `<span class='massagesendtime'>${time}</span>` : ""}<font color="${tags.color.replace('"', "'")}">${tags['display-name']}</font></span>: <span class='chat-massage'>${message}</span>`;
    dadiv.classList.add("chat");
    // document.body.innerHTML = `<div class='chat'><span class='chat-author__display-name'><font color="${tags.color?.replace('"', "'")}">${tags['display-name']}</font></span>: <span class='chat-massage'>${message}</span></div>`+document.body.innerHTML;
    document.body.prepend(dadiv);
    UpdateStyles();
}

client.on('message', OnChatMassage);
// document.body.innerHTML += `<div class='chat'>SEVER: loging chat... :::Noice:::</div>`;

OnChatMassage("", {"display-name": "Server", "color": "GOLD"}, `logging '${user}' channel :::Noice:::`, false);


emoteWidth = CHATmsgbg;

const helpers = ["geckobooi", "Redknobz", "FelipeRattu"];
// detecting emotes
function update() {
    
    thechat = document.body.getElementsByClassName("chat-massage");
    
    for (var i = 0; i < thechat.length; i++) { // for gifs
        if (thechat[i].innerText.includes(":::")) {
            while (true) { // yes "while (true)" should never be used but i like using break's so its fine.
                var start_pos = thechat[i].innerText.indexOf(':::') + 3;
                var end_pos = thechat[i].innerText.indexOf(':::',start_pos);
                if (thechat[i].innerText[start_pos] == ":") { break; }
                var text_to_get = thechat[i].innerText.substring(start_pos,end_pos);
                if (start_pos == -1 || end_pos == -1 || !thechat[i].innerText.includes(":::")) {
                    break;
                }
                newEmoteCheckGif(thechat[i], ":::" + text_to_get + ":::", "https://raw.githubusercontent.com/Goldenegg000/TwitchEmote/main/"+allLetter(text_to_get)+".gif", allLetter(text_to_get));
                
            }
        }
    }
    
    for (var i = 0; i < thechat.length; i++) { // for pngs
        if (thechat[i].innerText.includes("::")) {
            while (true) { // yes "while (true)" should never be used but i like using break's so its fine.
                var start_pos = thechat[i].innerText.indexOf('::') + 2;
                var end_pos = thechat[i].innerText.indexOf('::',start_pos);
                var text_to_get = thechat[i].innerText.substring(start_pos,end_pos);
                if (start_pos == -1 || end_pos == -1|| !thechat[i].innerText.includes("::")) {
                    break;
                }
                newEmoteCheck(thechat[i], "::" + text_to_get + "::", "https://raw.githubusercontent.com/Goldenegg000/TwitchEmote/main/"+allLetter(text_to_get)+".png", allLetter(text_to_get));
            }
        }
    }
    
    // for my ego and ad revenue lol XD
    var docs = document.getElementsByClassName("chat-author__display-name");
    for (let i = 0; i < docs.length; i++) {
        const element = docs[i].getElementsByTagName("font")[0];
        if (element.innerHTML == "goldenegg000") {
            element.innerHTML = '<span class="rainbow_text_animated"><svg style="color: gold" aria-hidden="true" width="'+CHATmsgbg+'px" height="'+CHATmsgbg+'px" focusable="false" data-prefix="fas" data-icon="crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-crown fa-w-20 fa-3x"><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" class=""></path></svg>goldenegg000</span>';
        }
    }
    // for supporters that helped me do this stuff :) love yall
    helpers.forEach((item) => {
        for (let i = 0; i < docs.length; i++) {
            const element = docs[i];
            if (element.innerHTML == item) {
                element.innerHTML = '<span style="color: blue"><svg aria-hidden="true" width="'+CHATmsgbg+'px" height="'+CHATmsgbg+'px" focusable="false" data-prefix="fas" data-icon="user-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-user-check fa-w-20 fa-3x"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" class=""></path></svg></span>'+item;
            }
        }
        return;
    });
    
}

// this function strips strings to only have valid characters
function allLetter(inputtxt)
{ 
    
    if (inputtxt == undefined) { // fallback case
        return "";
    }
    
    const letters = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", 
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // list of valid letters

    TheArray = inputtxt.split('');
    const TheNewArray = inputtxt.split('');
    for (let index = 0; index < TheArray.length; index++) { // check if char valid
        const element = TheArray[index];
        if (letters.includes(element)) {
            continue;
        }
        TheNewArray[index] = "";
    }

    return TheNewArray.join("").toString();
}
// creates/adds emotes to chat
const newEmoteCheck = (thechat, emoteText, emoteimglink, emotename) => {
    try {
        if (thechat.innerHTML.includes(emoteText)) {
            thechat.innerHTML = thechat.innerHTML.replace(emoteText, "<img width='"+emoteWidth+"' height='"+emoteWidth+"' class='CostumeEmotesDis' src='"+emoteimglink+"' alt='"+emotename+"'></img>");
        }
    } catch {
        // why tf is this catch empty!?
    }
}
// creates/adds emote gifs to chat
const newEmoteCheckGif = (thechat, emoteText, emoteimglink, emotename) => {
    try {
        if (thechat.innerHTML.includes(emoteText)) {
            thechat.innerHTML = thechat.innerHTML.replace(emoteText, "<img width='"+emoteWidth+"' height='"+emoteWidth+"' class='CostumeEmotesDis' src='"+emoteimglink+"' alt='"+emotename+"'></img>");
        }
    } catch {
        // why tf is this catch empty!?
    }
}
const GetCurrentEmotesList = () => {
    $.ajax({url: "https://raw.githubusercontent.com/Goldenegg000/TwitchEmote/main/emoteslist.js", success: function(result){
        eval(result);
    }});
}

setInterval(() => {
    update();
}, 500);