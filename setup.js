function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

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
                newEmoteCheckGif(document.body, ":::" + text_to_get + ":::", "https://raw.githubusercontent.com/Goldenegg000/TwitchEmote/main/"+allLetter(text_to_get)+".gif", allLetter(text_to_get));
                
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
                newEmoteCheck(document.body, "::" + text_to_get + "::", "https://raw.githubusercontent.com/Goldenegg000/TwitchEmote/main/"+allLetter(text_to_get)+".png", allLetter(text_to_get));
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

function DoLink() {
    var link = "https://get-emote.netlify.app/chatBox.html?"
    // link = "http://127.0.0.1:5500/chatBox.html?" // for localhost testing
    link += "channel="+document.getElementById("channel-name").value;
    if (document.getElementById("bgbo-active").checked) {
        link += "&body-color="+document.getElementById("bg-color").value.replace("#", "$")+componentToHex(Number(document.getElementById("bg-opacity").value));
    } else {
        link += "&body-color=none";
    }
    if (document.getElementById("font-active").checked) {
        link += "&font-size="+document.getElementById("text-size").value;
    } else {
        link += "&font-size=none";
    }
    if (document.getElementById("bo-active").checked) {
        link += "&border-color="+document.getElementById("bo-color").value.replace("#", "$")+componentToHex(Number(document.getElementById("bo-opacity").value));
    } else {
        link += "&border-color=none";
    }
    if (document.getElementById("message-active").checked) {
        link += "&message-color="+document.getElementById("message-color").value.replace("#", "$")+componentToHex(Number(document.getElementById("message-opacity").value));
    } else {
        link += "&message-color=none";
    }
    if (document.getElementById("font-active").checked) {
        link += "&message-style="+document.getElementById("text-styles").value;
    } else {
        link += "&message-style=none";
    }
    if (document.getElementById("timestamp").checked) {
        link += "&timestampactive";
    }
    return link;
}

function DoLinkClip() {
    navigator.clipboard.writeText(DoLink()).then(() => {
        alert("copied to clipboard.");
    });
}

var previuslink;
function DoPreview() {
    DaPreviewOBJ = document.getElementById("preview2");
    if (document.getElementById("bgbo-active").checked) {
        DaPreviewOBJ.style.backgroundColor = document.getElementById("bg-color").value+componentToHex(Number(document.getElementById("bg-opacity").value));
    } else {
        DaPreviewOBJ.style.backgroundColor = "rgb(0, 0, 0, 0)";
    }
    if (document.getElementById("bo-active").checked) {
        DaPreviewOBJ.style.borderWidth = "10px";
        DaPreviewOBJ.style.borderStyle = "solid";
        DaPreviewOBJ.style.borderColor = document.getElementById("bo-color").value+componentToHex(Number(document.getElementById("bo-opacity").value));
    } else {
        DaPreviewOBJ.style.border = "none";
    }
    var CHATmsgbg = 50;
    var chatfont = "Arial";
    if (document.getElementById("font-active").checked) {
        CHATmsgbg = document.getElementById("text-size").value;
        chatfont = document.getElementById("text-styles").value;
    }
    if (document.getElementById("message-active").checked) {
        var elements = document.getElementsByClassName("chat");
        var CHATboxbg = document.getElementById("message-color").value+componentToHex(Number(document.getElementById("message-opacity").value));
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.backgroundColor = CHATboxbg;
            element.style.fontSize = CHATmsgbg+"px";
            element.style.fontFamily = chatfont;
        }
    } else {
        var elements = document.getElementsByClassName("chat");
        var CHATboxbg = "#08091c00";
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.backgroundColor = CHATboxbg;
            element.style.fontSize = CHATmsgbg+"px";
            element.style.fontFamily = chatfont;
        }
    }
    var elements = document.getElementsByClassName("massagesendtime");
    timestampactive = document.getElementById("timestamp").checked;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.display = timestampactive ? "" : "none";
    }

    if (previuslink == DoLink()) { return; }
    previuslink = DoLink();
    document.getElementById("updatereallink").innerHTML = "link: <font style='color: blue;' class='all-copy'>"+DoLink().replaceAll("&", "&amp;")+"</font>";
}

DoPreview()
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var randomechatmassages = [
    "memes lol",
    "wow, you have a nice looking chat :O",
    "KEK",
    "awsome stream!",
    "im from germany lol",
    "goldenegg000 is the best XD",
    "<span style='font-weight: bold'>download the get-emotes extension NOW!!!</span>",
    "poggers :)",
    "u good",
    "looking real good ;)",
    "hello",
    "lol",
    "sheesh",
    "W",
    "L XD",
    "dabbing bf XD",
    "eyo what the dog doin? :p",
    "spong",
    "memes are the best",
    "fnf vs exe pretty pog ngl",
    "next time tryhard! :P",
    "today is great",
    "how u doing mate :D",
    "how can i set up a chat that looks like urs?",
];
var randomenames = [
    "memer014",
    "funnyguyXD",
    "noadspls",
    "coolguy123",
    "piggi",
    "notbbh",
    "skeppyfan",
    "skeppyhater",
    "baldbbh",
    "minecraftnotofficial",
    "poggers",
    "memesarepog",
    "domtendopig",
    "somegirl",
    "funniestguy",
    "iloveyellow",
    "SUB&FOLLOW2GOLDENEGG000",
];
var randomecolors = [
    "blue", "red", "green", "yellow", "black", "black", "black", "yellow", "pink",
];

function OnChatMassage(channel, tags, message, self) {
    if (false) {
        console.log("debug--", channel, tags, message, self, "--debug");
    }
    var dadiv = document.createElement("div");
    dadiv.classList.add("chat");

    // get time
    const current = new Date();

    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    dadiv.innerHTML = `<span class='chat-author__display-name'><span class='massagesendtime'>${time}</span><font color="${tags.color?.replace('"', "'")}">${tags['display-name']}</font></span>: <span class='chat-massage'>${message}</span>`;
    // document.getElementById("preview2").innerHTML = `<div class='chat'><span class='chat-author__display-name'><font color="${tags.color?.replace('"', "'")}">${tags['display-name']}</font></span>: <span class='chat-massage'>${message}</span></div>`+document.getElementById("preview2").innerHTML;
    document.getElementById("preview2").prepend(dadiv);
    DoPreview();
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

function emulatechat() {
    var randoimechatmassage = randomechatmassages[getRandomInt(randomechatmassages.length)];
    var randomename = randomenames[getRandomInt(randomenames.length)];
    var randomecolor = randomecolors[getRandomInt(randomecolors.length)];
    OnChatMassage("", {"display-name": randomename, "color": randomecolor}, randoimechatmassage, false);
    setTimeout(emulatechat, 1000+getRandomInt(2001));
    update();
}
emulatechat()