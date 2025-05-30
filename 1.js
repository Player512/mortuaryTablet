document.body.innerHTML = `
<div id="background" style="position: absolute; top: 0%; left: 0%;">

<div id="backgroundColor">
<div id="titleFade" style="opacity: 0.0;">
<div id="titleText">ようこそ、想いを手のひらに</div>
</div>
</div>

<div id="guideSetting">
<div style="display: flex;">
<a href="#" id="addDead" onclick="registrationSetting()">+</a>
<div id="guideText1">名前登録</div>
</div>
</div>

</div>
`;

const backgroundColor = document.getElementById('backgroundColor');
const titleFade = document.getElementById('titleFade');

let fade = 0;

let fadeInTick = setInterval(() => {
    fade = fade + 0.01;
    titleFade.style.opacity = fade;
    if (fade >= 1.0) {
        clearInterval(fadeInTick);
        setTimeout(() => {
            let fadeOutTick = setInterval(() => {
                fade = fade - 0.01;
                titleFade.style.opacity = fade;
                backgroundColor.style.opacity = fade;
                if (fade <= 0.0) {
                    clearInterval(fadeOutTick);
                    document.getElementById('backgroundColor').remove();
                }
            }, 20);
        }, 2000);
    }
}, 20);


let selectCount = 1;

let JCSelect = null;
let JCText = null;
let lastName1 = null;
let fastName1 = null;
let monthText = null;
let dayText = null;

let lastName2 = null;
let fastName2 = null;
let ageAtDeath = null;
let ageText = null;

let sect = null;


function registrationSetting() {
    document.body.style.overflow = 'auto';

    document.body.innerHTML = `
<div id="setting">

<!--<div style="display: flex; justify-content: center;">
<a href="#" id="removeSelect" onclick="removeSelect()">◁</a>
<div id="sect">手元教養(無宗派)</div>
<a href="#" id="addSelect" onclick="addSelect()">▷</a>
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">　</div>-->

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">戒名</div>
<div style="font-size: calc(1vw + 1vh); font-weight: bold;">※戒名の入力が無い際は俗名を表示させます</div>
<div style="display: flex; justify-content: center;">
<input id="lastName1" placeholder="姓" type="text">
<div style="width: calc(2vw + 2vh);"></div>
<input id="fastName1" placeholder="名" type="text">
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">名前(俗名)</div>
<div style="display: flex; justify-content: center;">
<input id="lastName2" placeholder="姓" type="text">
<div style="width: calc(2vw + 2vh);"></div>
<input id="fastName2" placeholder="名" type="text">
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">　</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">命日</div>
<div style="display: flex; justify-content: center;">
<select id="JCSelect">
<option>令和</option>
<option>平成</option>
<option>昭和</option>
<option>大正</option>
<option>明治</option>
<option>慶応</option>
</select>
<input id="JCText" placeholder="漢数字" type="text">
<div id="year">年</div>
</div>

<div style="display: flex; justify-content: center;">
<input id="monthText" placeholder="漢数字" type="text">
<div id="month">月</div>
<input id="dayText" placeholder="漢数字" type="text">
<div id="day">日</div>
</div>

<div style="display: flex; justify-content: center;">
<select id="ageAtDeath">
<option>享年</option>
<option>行年</option>
</select>
<input id="ageText" placeholder="漢数字" type="text">
<div id="age">歳</div>
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">　</div>

<a href="#" id="chartSettingSet" onclick="chartSettingSet()" style="font-size: calc(2vw + 2vh); font-weight: bold;">確認</a>

<div id="annoDomini"></div>
<div id="aged"></div>

</div>
`;

    selectCount = 1;

    JCSelect = document.getElementById('JCSelect');
    JCText = document.getElementById('JCText');
    lastName1 = document.getElementById('lastName1');
    fastName1 = document.getElementById('fastName1');
    monthText = document.getElementById('monthText');
    dayText = document.getElementById('dayText');

    lastName2 = document.getElementById('lastName2');
    fastName2 = document.getElementById('fastName2');
    ageAtDeath = document.getElementById('ageAtDeath');
    ageText = document.getElementById('ageText');

    sect = document.getElementById('sect');
}

function removeSelect() {
    selectCount--;
    if (selectCount === 0) {
        selectCount = 10;
    }

    selectSect();
}

function addSelect() {
    selectCount++;
    if (selectCount === 11) {
        selectCount = 1;
    }

    selectSect();
}

function selectSect() {
    if (selectCount === 1) {
        sect.innerHTML = "手元教養(無宗派)";
    } else if (selectCount === 2) {
        sect.innerHTML = "浄土真宗本願寺派";
    } else if (selectCount === 3) {
        sect.innerHTML = "浄土真宗大谷派";
    } else if (selectCount === 4) {
        sect.innerHTML = "真言宗";
    } else if (selectCount === 5) {
        sect.innerHTML = "日蓮宗";
    } else if (selectCount === 6) {
        sect.innerHTML = "天台宗";
    } else if (selectCount === 7) {
        sect.innerHTML = "臨済宗";
    } else if (selectCount === 8) {
        sect.innerHTML = "曹洞宗";
    } else if (selectCount === 9) {
        sect.innerHTML = "浄土宗";
    } else if (selectCount === 10) {
        sect.innerHTML = "神道";
    }
}

function chartSettingSet() {
    document.body.innerHTML = `
    <div id="mortuaryTabletPosition">


    <img id="mortuaryTablet" src="Picture/1.png">
    
    <a href="#" id="backMortuaryTablet" onclick="backSettingSet()">裏側を見る</a>

    <div id="annoDominiTextPosition" style="display: flex;">
    <div id="JCSelectOrientation">${JCSelect.value}</div>
    <div id="JCTextOrientation">${JCText.value}</div>
    <div>年</div>
    </div>

    <div id="name1TextPosition" style="display: flex;">
    <div>法名</div>
    <div>　</div>
    <div id="lastName1Orientation">${lastName1.value}</div>
    <div>　</div>
    <div id="fastName1Orientation">${fastName1.value}</div>
    </div>

    <div id="dateTextPosition" style="display: flex;">
    <div id="monthTextOrientation">${monthText.value}</div>
    <div>月</div>
    <div id="dayTextOrientation">${dayText.value}</div>
    <div>日</div>
    </div>


    </div>
    `;

    document.body.style.overflow = 'hidden';

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
}

function handleTouchMove(e) {
    e.preventDefault();
}

function backSettingSet() {
    document.body.innerHTML = `
    <div id="mortuaryTabletPosition">


    <img id="mortuaryTablet" src="Picture/1.png">
    
    <a href="#" id="chartMortuaryTablet" onclick="chartSettingSet()">表側を見る</a>

    <div id="name2TextPosition" style="display: flex;">
    <div>俗名</div>
    <div>　</div>
    <div id="lastName2Orientation">${lastName2.value}</div>
    <div>　</div>
    <div id="fastName2Orientation">${fastName2.value}</div>
    </div>

    <div id="ageTextPosition" style="display: flex;">
    <div id="ageAtDeathOrientation">${ageAtDeath.value}</div>
    <div id="ageTextOrientation">${ageText.value}</div>
    <div>歳</div>
    </div>


    </div>
    `;

    document.body.style.overflow = 'hidden';

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
}

function handleTouchMove(e) {
    e.preventDefault();
}