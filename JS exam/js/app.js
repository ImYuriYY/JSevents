let user;
let catEmotions;


let arrayOfSaves;
if(localStorage.getItem("arrayOfSaves") === null) {
    arrayOfSaves = [];
    localStorage.setItem("arrayOfSaves", JSON.stringify(arrayOfSaves));
} else {
    arrayOfSaves = (JSON.parse(localStorage.getItem("arrayOfSaves")));
}



user = {
    cat: {
        name: "",
        id: 0,
        species: "",
        idName: ""
    },
    property: {
        balance: 0,
        feedPacks: 0,
        potionOfHappiness: 0
    },
    needs: {
        hunger: 70,
        drowsiness: 70,
        happiness: 100
    }
};

const startNewGame = document.getElementById("startNewGame");
const loadMyGame = document.getElementById("loadMyGame");

const gameWrapper = document.getElementById("gameWrapper");

const mainMenuSavesBlind = document.getElementById("mainMenuSavesBlind");
const closeMMSaves = document.getElementById("closeMMSaves");
const saves = document.getElementById("saves");
const savesWrapper = document.getElementById("savesWrapper");
const savesCloseLine = document.getElementById("savesCloseLine");
const newGameButton = document.getElementById("newGame");



loadMyGame.addEventListener("click", () => {
    mainMenuSavesBlind.style.display = "flex";
    for(let i = 0; i < arrayOfSaves.length; i++) {
        const saveBlockWrapper = document.createElement("div");
        saveBlockWrapper.classList = "save-block-wrapper";

        const saveBlock = document.createElement("div");
        saveBlock.classList = "save-block";

        const saveName = document.createElement("p");
        saveName.innerText = `${arrayOfSaves[i].saveDate}`;

        const loadGameButton = document.createElement("button");
        loadGameButton.classList = "load-game-button";
        loadGameButton.innerText = "Загрузить";

        const deleteSave = document.createElement("button");
        deleteSave.classList = "delete-save-button";
        deleteSave.innerText = "X";

        saveBlock.appendChild(saveName);
        saveBlock.appendChild(loadGameButton);
        saveBlock.appendChild(deleteSave);
        saveBlockWrapper.appendChild(saveBlock);
        savesWrapper.appendChild(saveBlockWrapper);

        loadGameButton.addEventListener("click", () => {
            user = arrayOfSaves[i].save;
            startGame();
        });
        deleteSave.addEventListener("click", () => {
            savesWrapper.removeChild(saveBlockWrapper);
            arrayOfSaves.splice(i, 1);
            localStorage.setItem("arrayOfSaves", JSON.stringify(arrayOfSaves));
        });
    };
});
closeMMSaves.addEventListener("click", () => {
    mainMenuSavesBlind.style.display = "none";
});
savesCloseLine.addEventListener("click", () => {
    mainMenuSavesBlind.style.display = "none";
});








function loadCatEmotions(){
        catEmotions = {
        everyday: {
            src:`images/cats/${user.cat.idName}/everyday/everyday-${user.cat.idName}.png`,
            alt:`everyday-${user.cat.idName}`
        },
        offended: {
            src:`images/cats/${user.cat.idName}/everyday/everyday-offended-${user.cat.idName}.png`,
            alt:`everyday-offended-${user.cat.idName}`
        },
        dissatisfied: {
            src:`images/cats/${user.cat.idName}/everyday/everyday-dissatisfied-${user.cat.idName}.png`,
            alt:`everyday-dissatisfied-${user.cat.idName}`
        },
        grateful: {
            src:`images/cats/${user.cat.idName}/grateful-${user.cat.idName}.png`,
            alt:`grateful-${user.cat.idName}`
        },
        inquiring: {
            src:`images/cats/${user.cat.idName}/inquiring-${user.cat.idName}.png`,
            alt:`inquiring-${user.cat.idName}`
        },
        sleep: {
            src:`images/cats/${user.cat.idName}/sleep-${user.cat.idName}.png`,
            alt:`sleep-${user.cat.idName}`
        },
        tired: {
            src:`images/cats/${user.cat.idName}/tired-${user.cat.idName}.png`,
            alt:`tired-${user.cat.idName}`
        },
        destructive: {
            src:`images/cats/${user.cat.idName}/destructive-${user.cat.idName}.png`,
            alt:`destructive-${user.cat.idName}`
        },
    };
}


const feedPackPrice = 100;
const potionOfHappinessPrice = 300;


function startGame() {
    loadCatEmotions();
    const userWindowWidth = window.outerWidth;
    const userWindowHeight = window.outerHeight;
    let catDecrementDigit;
    let productDecrementDigit;
    if((userWindowHeight > 600) && (userWindowHeight < 800)) {
        catDecrementDigit = 250;
        productDecrementDigit = 500;
    } else if((userWindowHeight > 800) && (userWindowHeight < 1000)) {
        catDecrementDigit = 275;
        productDecrementDigit = 525;
    } else if((userWindowHeight > 1000) && (userWindowHeight < 1200)) {
        catDecrementDigit = 300;
        productDecrementDigit = 550;
    } else if((userWindowHeight > 1200) && (userWindowHeight < 1400)) {
        catDecrementDigit = 325;
        productDecrementDigit = 575;
    } else if((userWindowHeight > 1400) && (userWindowHeight < 1600)) {
        catDecrementDigit = 350;
        productDecrementDigit = 600;
    } else if((userWindowHeight > 1600) && (userWindowHeight < 1800)) {
        catDecrementDigit = 375;
        productDecrementDigit = 625;
    } else if((userWindowHeight > 1800) && (userWindowHeight < 2000)) {
        catDecrementDigit = 400;
        productDecrementDigit = 650;
    } else if((userWindowHeight > 2000) && (userWindowHeight < 2200)) {
        catDecrementDigit = 425;
        productDecrementDigit = 675;
    } else if((userWindowHeight > 2200) && (userWindowHeight < 2400)) {
        catDecrementDigit = 450;
        productDecrementDigit = 700;
    } else {
        catDecrementDigit = 475;
        productDecrementDigit = 725;
    };

    
    

    gameWrapper.innerHTML = "";
    gameWrapper.innerHTML = `
        <div id="hall" class="background-location">
            <div id="hintContainer">
                <div class="hint-header-centering">
                    <div class="hint-header">
                        Зарабатывай деньги, корми кота и давай ему спать!
                    </div>
                </div>
            </div>
            <div class="needs">
                <div class="need-wrapper">
                    <div class="needs-state">
                        <div id="hungerLine" class="need-line" style="height: ${user.needs.hunger}%;"></div>
                    </div>
                    <p id="hungerPercent" class="need-percent">${user.needs.hunger}</p>
                    <div class="needs-icon-wrapper">
                        <div class="icon eat-icon"></div>
                    </div>
                </div>
                <div class="need-wrapper">
                    <div class="needs-state">
                        <div id="sleepLine" class="need-line" style="height: ${user.needs.drowsiness}%;"></div>
                    </div>
                    <p id="drowsinessPercent" class="need-percent">${user.needs.drowsiness}</p>
                    <div class="needs-icon-wrapper">
                        <div class="icon sleep-icon"></div>
                    </div>
                </div>
                <div class="need-wrapper">
                    <div class="needs-state">
                        <div id="happinessLine" class="need-line" style="height: ${user.needs.happiness}%;"></div>
                    </div>
                    <p id="happinessPercent" class="need-percent">${user.needs.happiness}</p>
                    <div class="needs-icon-wrapper">
                        <div class="icon happiness-icon"></div>
                    </div>
                </div>
            </div>
            <div class="property-wrapper">
                <div class="property">
                    <div class="icon my-money-icon"></div>
                    <p id="myMoney" class="property-quantity">${user.property.balance}</p>
                </div>
                <div class="property" id="feedPackWrapper">
                    <div class="feed-pack-icon">
                        <img src="images/property/feed-packs/feed-pack-${user.cat.idName}.png" alt="${user.cat.idName}-feed-pack">
                    </div>
                    <p id="feedPacks" class="property-quantity">${user.property.feedPacks}</p>
                </div>
                <div class="property" id="potionHappinessWrapper">
                    <div class="icon potion-of-happiness-icon"></div>
                    <p id="potionOfHappiness" class="property-quantity">${user.property.potionOfHappiness}</p>
                </div>
            </div>
            <div class="locations-buttons-wrapper">
                <div class="button-wrapper" id="jobButtonWrapper">
                    <button id="jobButton" class="location-button">Работа</button>
                </div>
                <div class="button-wrapper" id="homeButtonWrapper" style="display: none;">
                    <button id="homeButton" class="location-button">Дом</button>
                </div>
                <div class="button-wrapper" id="shopButtonWrapper">
                    <button id="shopButton" class="location-button">Магазин</button>
                </div>
                <div class="button-wrapper" id="kitchenButtonWrapper">
                    <button id="kitchenButton" class="location-button">Кухня</button>
                </div>
                <div class="button-wrapper" id="hallButtonWrapper" style="display: none;">
                    <button id="hallButton" class="location-button">Гостинная</button>
                </div>
            </div>


            <div class="newspaper-clicker-wrapper" style="display: none;">
                <button id="newspaperClicker"></button>
            </div>


            <div class="products-wrapper" style="top: ${userWindowHeight - productDecrementDigit}px; left: ${(userWindowWidth / 2) - (userWindowWidth / 4)}px; display: none;">
                <div class="product">
                    <div class="product-image-wrapper">
                        <img src="images/property/feed-packs/feed-pack-${user.cat.idName}.png" alt="${user.cat.idName}-feed-pack">
                    </div>
                    <p>${feedPackPrice}</p>
                    <button id="buyFeedButton">Купить</button>
                </div>
                <div class="product">
                    <div class="product-image-wrapper">
                        <img src="images/property/potion-of-happiness.png" alt="potion-of-happiness">
                    </div>
                    <p>${potionOfHappinessPrice}</p>
                    <button id="buyPotionButton">Купить</button>
                </div>
            </div>


            <div class="dish-wrapper" style="display: none;">
                <button id="catDish"></button>
            </div>
            <div class="potion-wrapper" style="display: none;">
                <button id="catPotion"></button>
            </div>


            <div class="sleep-button-wrapper" id="sleepButtonWrapper">
                <button id="sleepButton">Сон</button>
            </div>
            <div id="sleepBlind" style="display: none;"></div>


            <div class="settings-button-wrapper">
                <button id="settingsButton"></button>
            </div>
            <div id="settingsBlind" style="display: none;">
                <div id="closeSettings"></div>
                <ul id="settingsList">
                    <li class="settings__item">
                        <button id="resumeGame">
                            Возобновить игру
                        </button>
                    </li>
                    <li class="settings__item">
                        <button id="savesButton">
                            Сохранения
                        </button>
                    </li>
                    <li class="settings__item">
                        <button id="renameCat">
                            Сменить имя кота
                        </button>
                    </li>
                    <li class="settings__item">
                        <button id="exitTheGame">
                            Выйти в главное меню
                        </button>
                    </li>
                </ul>
                <form id="changeCatNameForm" style="display: none;">
                    <input type="text" id="newCatName" placeholder="Введите новое имя кота">
                    <button id="changeCatNameButton">Сменить</button>
                </form>
                <div id="saves" style="display: none;">
                    <div id="savesCloseLine">
                        <div class="cross-icon"></div>
                    </div>
                    <div id="savesWrapper">

                    </div>
                    <div class="savesButtonsWrapper">
                        <button id="saveGame">
                            Сохранить игру
                        </button>
                        <button id="newGame">
                            Начать новую игру
                        </button>
                    </div>
                </div>
            </div>

            <div id="destructiveCodeBlind" style="display: none;">
                <button id="destructiveCodeNewGame">Попробовать снова</button>
            </div>

            <div class="cat-position" style="top: ${userWindowHeight - catDecrementDigit}px; left: ${userWindowWidth / 2 - 100}px;">
                <p id="userCatName">${user.cat.name}</p>
                <img id="userCat" src="${catEmotions.everyday.src}" alt="${user.cat.idName}"
            </div>

            
        </div>
    `;

    const hintHeaderContainer = document.getElementById("hintContainer")
    const backgroundLocation = document.querySelector(".background-location");

    function steelHint() {
        hintHeaderContainer.style.display = "none";
    };

    setTimeout(steelHint, 6000);
    

    const kitchenButton = document.getElementById("kitchenButton");
    const kitchenButtonWrapper = document.getElementById("kitchenButtonWrapper");
    const hallButton = document.getElementById("hallButton");
    const hallButtonWrapper = document.getElementById("hallButtonWrapper");
    
    const jobButton = document.getElementById("jobButton");
    const jobButtonWrapper = document.getElementById("jobButtonWrapper");
    const homeButton = document.getElementById("homeButton");
    const homeButtonWrapper = document.getElementById("homeButtonWrapper");
    const shopButton = document.getElementById("shopButton");
    const shopButtonWrapper = document.getElementById("shopButtonWrapper");

    const needs = document.querySelector(".needs");
    const catPosition = document.querySelector(".cat-position");
    const userCat = document.getElementById("userCat");
    const feedPackWrapper = document.getElementById("feedPackWrapper");
    const potionHappinessWrapper = document.getElementById("potionHappinessWrapper");

    const clickerWrapper = document.querySelector(".newspaper-clicker-wrapper");

    const productsWrapper = document.querySelector(".products-wrapper");
    const buyFeedButton = document.getElementById("buyFeedButton");
    const buyPotionButton = document.getElementById("buyPotionButton");
    const hintHeader = document.querySelector(".hint-header");

    const myMoney = document.getElementById("myMoney");
    const feedPacks = document.getElementById("feedPacks");
    const potionOfHappiness = document.getElementById("potionOfHappiness");

    const dishWrapper = document.querySelector(".dish-wrapper");
    const potionWrapper = document.querySelector(".potion-wrapper");

    const happinessLine = document.getElementById("happinessLine");
    const happinessPercent = document.getElementById("happinessPercent");
    const hungerLine = document.getElementById("hungerLine");
    const hungerPercent = document.getElementById("hungerPercent");
    const sleepLine = document.getElementById("sleepLine");
    const drowsinessPercent = document.getElementById("drowsinessPercent");

    const sleepButton = document.getElementById("sleepButton");
    const sleepButtonWrapper = document.getElementById("sleepButtonWrapper");
    const sleepBlind = document.getElementById("sleepBlind");

    const settingsButton = document.getElementById("settingsButton");
    const settingsBlind = document.getElementById("settingsBlind");
    const closeSettings = document.getElementById("closeSettings");
    const settingsList = document.getElementById("settingsList");
    const resumeGameButton = document.getElementById("resumeGame");
    const renameCatButton = document.getElementById("renameCat");
    const changeCatNameForm = document.getElementById("changeCatNameForm");
    const newCatName = document.getElementById("newCatName");
    const changeCatNameButton = document.getElementById("changeCatNameButton");
    const exitTheGame = document.getElementById("exitTheGame");
    const userCatName = document.getElementById("userCatName");
    const savesButton = document.getElementById("savesButton");
    const saves = document.getElementById("saves");
    const savesWrapper = document.getElementById("savesWrapper");
    const savesCloseLine = document.getElementById("savesCloseLine");
    const newGameButton = document.getElementById("newGame");
    const saveGameButton = document.getElementById("saveGame");




    function steelInterface() {
        kitchenButtonWrapper.style.display = "none";
        jobButtonWrapper.style.display = "none";
        shopButtonWrapper.style.display = "none";
        sleepButtonWrapper.style.display = "none";
        homeButtonWrapper.style.display = "block";

        needs.style.display = "none";
        catPosition.style.display = "none";
        feedPackWrapper.style.display = "none";
        potionHappinessWrapper.style.display = "none";
    }

    function showInterface() {
        kitchenButtonWrapper.style.display = "block";
        jobButtonWrapper.style.display = "block";
        shopButtonWrapper.style.display = "block";
        sleepButtonWrapper.style.display = "block";
        homeButtonWrapper.style.display = "none";

        needs.style.display = "flex";
        catPosition.style.display = "block";
        feedPackWrapper.style.display = "flex";
        potionHappinessWrapper.style.display = "flex";
    }


    function lackOfMoney() {
        hintHeaderContainer.style.display = "block";
        hintHeader.innerText = "У вас недостаточно денег для этого!"
        setTimeout(steelHint, 3000);
    };


    function needsSet() {
        happinessLine.style.height = `${user.needs.happiness}%`;
        happinessPercent.innerText = user.needs.happiness;

        hungerLine.style.height = `${user.needs.hunger}%`;
        hungerPercent.innerText = user.needs.hunger;

        sleepLine.style.height = `${user.needs.drowsiness}%`;
        drowsinessPercent.innerText = user.needs.drowsiness;
    };

    function happinessCalc() {
        user.property.potionOfHappiness--;
        potionOfHappiness.innerText--;
        needsSet();
    };
    function hungerCalc() {
        user.property.feedPacks--;
        feedPacks.innerText--;
        needsSet();
    };

    function needsApper(need) {
        if(need === "happiness") {
            if((user.needs.happiness + 50) > 100) {
                user.needs.happiness = 100;
                happinessCalc();
            } else {
                user.needs.happiness += 50;
                happinessCalc();
            };
        } else if(need === "hunger") {
            if((user.needs.hunger + 25) > 100) {
                user.needs.hunger = 100;
                hungerCalc();
            } else {
                user.needs.hunger += 25;
                hungerCalc();
            };
        };
    };


    function needsLower() {
        user.needs.hunger--;

        user.needs.hunger < 50 ? user.needs.happiness-- : null;
        user.needs.drowsiness < 50 ? user.needs.happiness-- : null;

        user.needs.happiness <= 0 ? user.needs.happiness = 0 : null;
        user.needs.hunger <= 0 ? user.needs.hunger = 0 : null;
        user.needs.drowsiness <= 0 ? user.needs.drowsiness = 0 : null;

        needsSet();
    };
    function drowsinessLower() {
        user.needs.drowsiness--;
    };



    function setEmotion(thisEmotion) { 
        if(thisEmotion === "everyday") {
            userCat.setAttribute("src", catEmotions.everyday.src);
            userCat.setAttribute("alt", catEmotions.everyday.alt);
        } else if(thisEmotion === "offended") {
            userCat.setAttribute("src", catEmotions.offended.src);
            userCat.setAttribute("alt", catEmotions.offended.alt);
        } else if(thisEmotion === "dissatisfied") {
            userCat.setAttribute("src", catEmotions.dissatisfied.src);
            userCat.setAttribute("alt", catEmotions.dissatisfied.alt);
        } else if(thisEmotion === "sleep") {
            userCat.setAttribute("src", catEmotions.sleep.src);
            userCat.setAttribute("alt", catEmotions.sleep.alt);
        } else if(thisEmotion === "grateful") {
            userCat.setAttribute("src", catEmotions.grateful.src);
            userCat.setAttribute("alt", catEmotions.grateful.alt);
        } else if(thisEmotion === "inquiring") {
            userCat.setAttribute("src", catEmotions.inquiring.src);
            userCat.setAttribute("alt", catEmotions.inquiring.alt);
        } else if(thisEmotion === "tired") {
            userCat.setAttribute("src", catEmotions.tired.src);
            userCat.setAttribute("alt", catEmotions.tired.alt);
        } else if(thisEmotion === "destructive") {
            userCat.setAttribute("src", catEmotions.destructive.src);
            userCat.setAttribute("alt", catEmotions.destructive.alt);
        };
    };

    function destructiveCode() {
        setEmotion("destructive");
        hintHeaderContainer.style = "display: block; z-index: 201";
        hintHeader.innerText = "Недовольный кот снёс вам хату!!!";
        const destructiveCodeBlind = document.getElementById("destructiveCodeBlind");
        const destructiveCodeNewGame = document.getElementById("destructiveCodeNewGame");
        destructiveCodeBlind.style.display = "flex";
        catPosition.style = `top: ${userWindowHeight - catDecrementDigit}px; left: ${userWindowWidth / 2 - 100}px; z-index: 201;`;
        destructiveCodeNewGame.addEventListener("click", () => {
            newGame();
        });
    };

    function needsEmotionChecker() {
        (user.needs.hunger < 50) && (user.needs.drowsiness > 50) ? setEmotion("offended") : null;
        (user.needs.hunger > 50) && (user.needs.drowsiness < 50) ? setEmotion("tired") : null;
        (user.needs.hunger < 50) && (user.needs.drowsiness < 50) ? setEmotion("dissatisfied") : null;
        (user.needs.happiness < 50) && (user.needs.drowsiness > 50) && (user.needs.hunger > 50) ? setEmotion("inquiring") : null;
        (user.needs.happiness > 50) && (user.needs.drowsiness > 50) && (user.needs.hunger > 50) ? setEmotion("everyday") : null;
        (user.needs.happiness < 20) && (user.needs.drowsiness < 10) && (user.needs.hunger < 10) ? destructiveCode() : null;
    };

    let emotionCheckerId = setInterval(needsEmotionChecker, 1000);
    let drowsinessLowerId = setInterval(drowsinessLower, 2000);
    let needsLowerId = setInterval(needsLower, 2000);
    
    let drowsinessApperId;
    function drowsinessApper() {
        clearInterval(drowsinessLowerId);
        drowsinessApperId = setInterval(() => {
            if(user.needs.drowsiness >= 100) {
                user.needs.drowsiness = 100;
            } else {
                user.needs.drowsiness++;
            };
            needsSet();
        }, 500);
    };

    function setHungerDrowsinessNeeds() {
        drowsinessLowerId = setInterval(drowsinessLower, 2000);
        needsLowerId = setInterval(needsLower, 2000);
    }



    jobButton.addEventListener("click", () => {
        backgroundLocation.setAttribute("id", "job");
        steelInterface();
        clickerWrapper.style.display = "block";
        homeButton.addEventListener("click", () => {
            backgroundLocation.setAttribute("id", "hall");
            showInterface();
            clickerWrapper.style.display = "none";
        });
    });
    clickerWrapper.addEventListener("click", () => {
        user.property.balance++;
        myMoney.innerText = user.property.balance;
    });




    shopButton.addEventListener("click", () => {
        backgroundLocation.setAttribute("id", "shop");
        steelInterface();
        feedPackWrapper.style.display = "flex";
        potionHappinessWrapper.style.display = "flex";
        productsWrapper.style.display = "flex";
        homeButton.addEventListener("click", () => {
            backgroundLocation.setAttribute("id", "hall");
            showInterface();
            productsWrapper.style.display = "none";
        });
    });
    buyFeedButton.addEventListener("click", () => {
        if(user.property.balance < feedPackPrice) {
            lackOfMoney();  
        } else {
            user.property.balance -= feedPackPrice;
            myMoney.innerText = user.property.balance;
            user.property.feedPacks++;
            feedPacks.innerText++;
        };
    });
    buyPotionButton.addEventListener("click", () => {
        if(user.property.balance < potionOfHappinessPrice) {
            lackOfMoney();  
        } else {
            user.property.balance -= potionOfHappinessPrice;
            myMoney.innerText = user.property.balance;
            user.property.potionOfHappiness++;
            potionOfHappiness.innerText++;
        };
    });




    kitchenButton.addEventListener("click", () => {
        backgroundLocation.setAttribute("id", "kitchen");
        kitchenButtonWrapper.style.display = "none";
        jobButtonWrapper.style.display = "none";
        shopButtonWrapper.style.display = "none";
        sleepButtonWrapper.style.display = "none";
        hallButtonWrapper.style.display = "block";
        dishWrapper.style.display = "block";
        potionWrapper.style.display = "block";
    });
    dishWrapper.addEventListener("click", () => {
        if(user.property.feedPacks < 1) {
            hintHeaderContainer.style.display = "block";
            hintHeader.innerText = "Нет еды!"
            setTimeout(steelHint, 2000);
        } else {
            needsApper("hunger");
            setEmotion("grateful")
        };
    });
    potionWrapper.addEventListener("click", () => {
        if(user.property.potionOfHappiness < 1) {
            hintHeaderContainer.style.display = "block";
            hintHeader.innerText = "Нет зелий кошачьего счастья!"
            setTimeout(steelHint, 2000);
        } else {
            needsApper("happiness");
        };
    });

    hallButton.addEventListener("click", () => {
        backgroundLocation.setAttribute("id", "hall");
        kitchenButtonWrapper.style.display = "block";
        jobButtonWrapper.style.display = "block";
        shopButtonWrapper.style.display = "block";
        sleepButtonWrapper.style.display = "block";
        hallButtonWrapper.style.display = "none";
        dishWrapper.style.display = "none";
        potionWrapper.style.display = "none"
    });



    sleepButton.addEventListener("click", () => {
        sleepBlind.style.display = "block";
        clearInterval(emotionCheckerId);
        setEmotion("sleep");
        drowsinessApper();
    });
    sleepBlind.addEventListener("click", () => {
        sleepBlind.style.display = "none";
        clearInterval(drowsinessApperId);
        clearInterval(needsLowerId);
        setHungerDrowsinessNeeds()
        emotionCheckerId = setInterval(needsEmotionChecker, 1000);
    });



    settingsButton.addEventListener("click", () => {
        settingsBlind.style.display = "flex";
        clearInterval(drowsinessLowerId);
        clearInterval(needsLowerId);
    });
    closeSettings.addEventListener("click", () => {
        settingsBlind.style.display = "none";
        saves.style.display = "none";
        settingsList.style.display = "block"
        setHungerDrowsinessNeeds()
    });
    resumeGameButton.addEventListener("click", () => {
        settingsBlind.style.display = "none";
        setHungerDrowsinessNeeds()
    });
    renameCatButton.addEventListener("click", () => {
        settingsList.style.display = "none";
        changeCatNameForm.style.display = "flex";
    });
    changeCatNameButton.addEventListener("click", (e) => {
        e.preventDefault();
        user.cat.name = newCatName.value;
        userCatName.innerText = user.cat.name;
        changeCatNameForm.style.display = "none";
        settingsList.style.display = "block"
        settingsBlind.style.display = "none";
        setHungerDrowsinessNeeds()
    });
    exitTheGame.addEventListener("click", () => {
        window.location.reload();
    });
    savesCloseLine.addEventListener("click", () => {
        saves.style.display = "none";
        settingsList.style.display = "block"
        settingsBlind.style.display = "none";
    });
    savesButton.addEventListener("click", () => {
        saves.style.display = "flex";
        settingsList.style.display = "none";
        savesWrapper.innerHTML = "";
        for(let i = 0; i < arrayOfSaves.length; i++) {
            const saveBlockWrapper = document.createElement("div");
            saveBlockWrapper.classList = "save-block-wrapper";

            const saveBlock = document.createElement("div");
            saveBlock.classList = "save-block";

            const saveName = document.createElement("p");
            saveName.innerText = `${arrayOfSaves[i].saveDate}`;

            const loadGameButton = document.createElement("button");
            loadGameButton.classList = "load-game-button";
            loadGameButton.innerText = "Загрузить";

            const deleteSave = document.createElement("button");
            deleteSave.classList = "delete-save-button";
            deleteSave.innerText = "X";

            saveBlock.appendChild(saveName);
            saveBlock.appendChild(loadGameButton);
            saveBlock.appendChild(deleteSave);
            saveBlockWrapper.appendChild(saveBlock);
            savesWrapper.appendChild(saveBlockWrapper);

            loadGameButton.addEventListener("click", () => {
                user = arrayOfSaves[i].save;
                startGame();
            });
            deleteSave.addEventListener("click", () => {
                savesWrapper.removeChild(saveBlockWrapper);
                arrayOfSaves.splice(i, 1);
                localStorage.setItem("arrayOfSaves", JSON.stringify(arrayOfSaves));
            });
        };
    });


    saveGameButton.addEventListener("click", () => {
        let userDate = String(new Date());
        userDate = userDate.split(" ");
        userDate.splice(5, 2);
        userDate = userDate.join(" ");

        const saveBlockWrapper = document.createElement("div");
        saveBlockWrapper.classList = "save-block-wrapper";

        const saveBlock = document.createElement("div");
        saveBlock.classList = "save-block-on-game";

        const saveName = document.createElement("p");
        saveName.innerText = `${userDate}`;

        saveBlock.appendChild(saveName);
        saveBlockWrapper.appendChild(saveBlock);
        savesWrapper.appendChild(saveBlockWrapper);
        
        arrayOfSaves.push(
            {
                saveDate: userDate,
                save: user
            }
        )
        localStorage.setItem("arrayOfSaves", JSON.stringify(arrayOfSaves));
    });
    newGameButton.addEventListener("click", () => {
        newGame();
    });
};



function newGame() {
    user = {
        cat: {
            name: "",
            id: 0,
            species: "",
            idName: ""
        },
        property: {
            balance: 0,
            feedPacks: 0,
            potionOfHappiness: 0
        },
        needs: {
            hunger: 70,
            drowsiness: 70,
            happiness: 100
        }
    };

    loadCatEmotions();

    gameWrapper.innerHTML = "";
    gameWrapper.innerHTML = `
        <div id="petStore" class="background-location">
            <div id="hintContainer">
                <div class="hint-header-centering">
                    <div class="hint-header">
                        Купи кота!
                    </div>
                </div>
            </div>
            <div class="cats-wrapper">
                <div class="cat">
                    <img class="cat-image" src="images/cats/rb-cat/cool-rb-cat.png" alt="rb-cat">
                    <button id="buyBtn">КУПИТЬ</button>
                </div>
                <div class="cat">
                    <img class="cat-image" src="images/cats/british-cat/cool-british-cat.png" alt="british-cat">
                    <button id="buyBtn">КУПИТЬ</button>
                </div>

                <div class="cat">
                    <img class="cat-image" src="images/cats/sphinx-cat/cool-sphinx-cat.png" alt="sphinx-cat">
                    <button id="buyBtn">КУПИТЬ</button>
                </div>
            </div>
        </div>
    `;

    const buyButtons = document.querySelectorAll("#buyBtn");
    const catsWrapper = document.querySelector(".cats-wrapper");
    const hintHeader = document.querySelector(".hint-header");

    for (let i = 0; i < buyButtons.length; i++) {
        buyButtons[i].addEventListener("click", () => {
            user.cat.id = i;
            switch (i) {
                case 0:
                    user.cat.idName = "rb-cat";
                    user.cat.species = "Русская голубая кошка";
                    break;
                case 1:
                    user.cat.idName = "british-cat";
                    user.cat.species = "Британский белый кот";
                    break;
                case 2:
                    user.cat.idName = "sphinx-cat";
                    user.cat.species = "Сфинкс";
                    break;
            };
            hintHeader.innerText = "Дай коту имя!";
            catsWrapper.innerHTML = "";
            catsWrapper.innerHTML = `
                <div class="cat">
                    <form class="cat-name-wrapper">
                        <input type="text" id="selectedName">
                    </form>
                    <img class="cat-image" src="images/cats/${user.cat.idName}/joyful-${user.cat.idName}.png" alt="${user.cat.idName}">
                    <button id="chooseButton">ВЫБРАТЬ</button>
                </div>
            `;

            const chooseButton = document.getElementById("chooseButton");
            const selectedName = document.getElementById("selectedName");

            chooseButton.addEventListener("click", () => {
                user.cat.name = selectedName.value;
                hintHeader.innerText = "Теперь можно играть!";
                catsWrapper.innerHTML = "";
                catsWrapper.innerHTML = `
                    <div class="cat">
                        <img class="cat-image" src="images/cats/${user.cat.idName}/joyful-${user.cat.idName}.png" alt="${user.cat.idName}">
                        <div class="cat-description">
                            <p class="desc__item">${user.cat.name}</p>
                            <p class="desc__item">${user.cat.species}</p>
                        </div>
                        <button id="startButton">ИГРАТЬ</button>
                    </div>
                `;
                const startButton = document.getElementById("startButton");

                startButton.addEventListener("click", () => {
                    startGame();
                });
            });
        });
    };
};

startNewGame.addEventListener("click", () => {
    newGame();
});