let selectCount = 1;

let dharmaName = null;
let dharmaNameValue = "";
let lastName = null;
let lastNameValue ="";
let fastName = null;
let fastNameValue ="";
let JCSelect = null;
let JCSelectValue = 0;
let JCText = null;
let JCTextValue = "";
let monthText = null;
let monthTextValue = "";
let dayText = null;
let dayTextValue = "";
let ageAtDeath = null;
let ageAtDeathValue = 0;
let ageText = null;
let ageTextValue = "";

let sect = null;

let mortuaryTabletChangeCount = 1;
let twoSidesChange = 1;


document.body.innerHTML = `
<div id="background">
<div id="version" style="position: flex;">v0.06.1</div>

<div id="guideSetting">
<div style="display: flex;">
<a href="#" id="addDead" onclick="registrationSetting()">+</a>
<div id="guideText1">名前登録</div>
</div>
</div>

<div id="backgroundColor">
<div id="titleFade" style="opacity: 0.0;">
<div id="titleText">ようこそ、想いを手のひらに</div>
<!--<img id="icon" src="Picture/アイコン1.png">-->
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
            }, 10);
        }, 1000);
    }
}, 10);


function registrationSetting() {
    document.body.style.overflow = 'auto';

    document.body.innerHTML = `
<div id="setting">

<!--
<div style="display: flex; justify-content: center;">
<a href="#" id="removeSelect" onclick="removeSelect()">◁</a>
<div id="sect">手元教養(無宗派)</div>
<a href="#" id="addSelect" onclick="addSelect()">▷</a>
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">　</div>
-->

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">戒名</div>
<div style="font-size: calc(1vw + 1vh); font-weight: bold;">※戒名の入力が無い際は俗名を表示させます</div>
<div style="display: flex; justify-content: center;">
<input id="dharmaName" placeholder="入力" type="text" value=${dharmaNameValue}>
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">名前(俗名)</div>
<div style="display: flex; justify-content: center;">
<input id="lastName" placeholder="姓" type="text" value=${lastNameValue}>
<div style="width: calc(2vw + 2vh);"></div>
<input id="fastName" placeholder="名" type="text" value=${fastNameValue}>
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">　</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">命日</div>
<div style="display: flex; justify-content: center;">
<select id="JCSelect">
<option id="JCSelectValue1">令和</option>
<option id="JCSelectValue2">平成</option>
<option id="JCSelectValue3">昭和</option>
<option id="JCSelectValue4">大正</option>
<option id="JCSelectValue5">明治</option>
<option id="JCSelectValue6">慶応</option>
</select>
<input id="JCText" placeholder="漢数字" type="text" value=${JCTextValue}>
<div id="year">年</div>
</div>

<div style="display: flex; justify-content: center;">
<input id="monthText" placeholder="漢数字" type="text" value=${monthTextValue}>
<div id="month">月</div>
<input id="dayText" placeholder="漢数字" type="text" value=${dayTextValue}>
<div id="day">日</div>
</div>

<div style="display: flex; justify-content: center;">
<select id="ageAtDeath">
<option>享年</option>
<option>行年</option>
</select>
<input id="ageText" placeholder="漢数字" type="text" value=${ageTextValue}>
<div id="age">歳</div>
</div>

<div style="font-size: calc(2vw + 2vh); font-weight: bold;">　</div>

<a href="#" id="chartSettingSet" onclick="chartSettingSet()" style="font-size: calc(2vw + 2vh); font-weight: bold;">確認</a>

<div id="annoDomini"></div>
<div id="aged"></div>

</div>
`;

    selectCount = 1;

    sect = document.getElementById('sect');

    dharmaName = document.getElementById('dharmaName');
    JCSelect = document.getElementById('JCSelect');
    JCText = document.getElementById('JCText');
    monthText = document.getElementById('monthText');
    dayText = document.getElementById('dayText');

    lastName = document.getElementById('lastName');
    fastName = document.getElementById('fastName');
    ageAtDeath = document.getElementById('ageAtDeath');
    ageText = document.getElementById('ageText');

    JCSelect.selectedIndex = JCSelectValue;
}


function chartSettingSet() {
    twoSidesChange = 1;

    if (lastName.value !== "" || fastName.value !== "") {
        if (dharmaName.value === "") {
        dharmaName.value = lastName.value + '　' + fastName.value;
    }
    }

    dharmaNameValue = dharmaName.value;
    lastNameValue = lastName.value;
    fastNameValue = fastName.value;
    JCSelectValue = JCSelect.selectedIndex;
    JCTextValue = JCText.value;
    monthTextValue = monthText.value;
    dayTextValue = dayText.value;
    ageAtDeathValue = ageAtDeath.selectedIndex;
    ageTextValue = ageText.value;

    document.body.innerHTML = `
    <div id="mortuaryTabletPosition">


    <img id="mortuaryTablet" src="Picture/位牌${mortuaryTabletChangeCount}.png">
    
    <a href="#" id="backMortuaryTablet" onclick="backSettingSet()">裏側を見る</a>

    <a href="#" id="backInput" onclick="registrationSetting()"><戻る</a>
    
    <div id="mortuaryTabletChange" style="display: flex;">
    <a href="#" id="mortuaryTabletAddChange" onclick="mortuaryTabletAddChange()">△</a>
    <div id="mortuaryTabletChangeText"></div>
    <a href="#" id="mortuaryTabletRemoveChange" onclick="mortuaryTabletRemoveChange()">▽</a>
    </div>

    <div id="annoDominiTextPosition" style="display: flex;">
    <div id="JCSelectOrientation">${JCSelect.value}</div>
    <div id="JCTextOrientation">${JCText.value}</div>
    <div>年</div>
    </div>

    <div id="name1TextPosition" style="display: flex;">
    <div id="dharmaNameOrientation">${dharmaName.value}</div>
    </div>

    <div id="dateTextPosition" style="display: flex;">
    <div id="monthTextOrientation">${monthText.value}</div>
    <div>月</div>
    <div id="dayTextOrientation">${dayText.value}</div>
    <div>日</div>
    </div>


    </div>
    `;

    let mortuaryTabletChangeText = document.getElementById('mortuaryTabletChangeText');

    document.body.style.overflow = 'hidden';

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    mortuaryTabletChange();
}

function backSettingSet() {
    twoSidesChange = 2;

    document.body.innerHTML = `
    <div id="mortuaryTabletPosition">


    <img id="mortuaryTablet" src="Picture/位牌${mortuaryTabletChangeCount}.png">

    <a href="#" id="chartMortuaryTablet" onclick="chartSettingSet()">表側を見る</a>

    <a href="#" id="backInput" onclick="registrationSetting()"><戻る</a>

    <div id="mortuaryTabletChange">
    <a href="#" id="mortuaryTabletAddChange" onclick="mortuaryTabletAddChange()">△</a>
    <div id="mortuaryTabletChangeText"></div>
    <a href="#" id="mortuaryTabletRemoveChange" onclick="mortuaryTabletRemoveChange()">▽</a>
    </div>

    <div id="name2TextPosition" style="display: flex;">
    <div>俗名</div>
    <div>　</div>
    <div id="lastNameOrientation">${lastName.value}</div>
    <div>　</div>
    <div id="fastNameOrientation">${fastName.value}</div>
    </div>

    <div id="ageTextPosition" style="display: flex;">
    <div id="ageAtDeathOrientation">${ageAtDeath.value}</div>
    <div id="ageTextOrientation">${ageText.value}</div>
    <div>歳</div>
    </div>


    </div>
    `;

    mortuaryTabletChange();
}

function handleTouchMove(e) {
    e.preventDefault();
}

function mortuaryTabletAddChange() {
    mortuaryTabletChangeCount++;

    if (mortuaryTabletChangeCount === 4) {
        mortuaryTabletChangeCount = 1;
    }

    mortuaryTabletChange();
}

function mortuaryTabletRemoveChange() {
    mortuaryTabletChangeCount--;

    if (mortuaryTabletChangeCount === 0) {
        mortuaryTabletChangeCount = 3;
    }

    mortuaryTabletChange();
}

function mortuaryTabletChange() {
    const annoDominiTextPosition = document.getElementById('annoDominiTextPosition');
    const name1TextPosition = document.getElementById('name1TextPosition');
    const name2TextPosition = document.getElementById('name2TextPosition');
    const dateTextPosition = document.getElementById('dateTextPosition');
    const ageTextPosition = document.getElementById('ageTextPosition');

    let defaultColor = 'rgb(191, 191, 143)';
    let woodColor = 'rgb(55, 15, 15)'
    let glassColor = 'rgba(255, 255, 255, 0.75)';

    if (mortuaryTabletChangeCount === 1) {
        mortuaryTabletChangeText.innerText = '塗り';

        if (twoSidesChange === 1) {
            annoDominiTextPosition.style.color = defaultColor;
            name1TextPosition.style.color = defaultColor;
            dateTextPosition.style.color = defaultColor;
        } else if (twoSidesChange === 2) {
            name2TextPosition.style.color = defaultColor;
            ageTextPosition.style.color = defaultColor;
        }
    } else if (mortuaryTabletChangeCount === 2) {
        mortuaryTabletChangeText.innerText = 'モダン';

        if (twoSidesChange === 1) {
            annoDominiTextPosition.style.color = woodColor;
            name1TextPosition.style.color = woodColor;
            dateTextPosition.style.color = woodColor;
        } else if (twoSidesChange === 2) {
            name2TextPosition.style.color = woodColor;
            ageTextPosition.style.color = woodColor;
        }
    } else if (mortuaryTabletChangeCount === 3) {
        mortuaryTabletChangeText.innerText = 'クリスタル';

        if (twoSidesChange === 1) {
            annoDominiTextPosition.style.color = glassColor;
            name1TextPosition.style.color = glassColor;
            dateTextPosition.style.color = glassColor;
        } else if (twoSidesChange === 2) {
            name2TextPosition.style.color = glassColor;
            ageTextPosition.style.color = glassColor;
        }
    }

    if (mortuaryTabletChangeCount >= 1 && mortuaryTabletChangeCount <= 2) {
        if (twoSidesChange === 1) {
            annoDominiTextPosition.style.top = '40%';
            name1TextPosition.style.top = '40%';
            dateTextPosition.style.top = '40%';

            annoDominiTextPosition.style.left = '60%';
            dateTextPosition.style.left = '40%';
        } else if (twoSidesChange === 2) {
            name2TextPosition.style.top = '40%';
            ageTextPosition.style.top = '48%';

            ageTextPosition.style.left = '40%';
        }
    } else if (mortuaryTabletChangeCount === 3) {
        if (twoSidesChange === 1) {
            annoDominiTextPosition.style.top = '47%';
            name1TextPosition.style.top = '47%';
            dateTextPosition.style.top = '47%';

            annoDominiTextPosition.style.left = '64%';
            dateTextPosition.style.left = '36%';
        } else if (twoSidesChange === 2) {
            name2TextPosition.style.top = '47%';
            ageTextPosition.style.top = '55%';

            ageTextPosition.style.left = '36%';
        }
    }
    document.getElementById('mortuaryTablet').remove();
    document.body.innerHTML += `<img id="mortuaryTablet" src="Picture/位牌${mortuaryTabletChangeCount}.png">`;
}

function backInput() {

}