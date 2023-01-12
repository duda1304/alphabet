let currentPage;
let order = [];

const content = {
    "1" : [
        {
            "img" : "dog.svg",
            "en" : "dog",
            "fr" : "chien"
        },
        {
            "img" : "cat.svg",
            "en" : "cat",
            "fr" : "chat"
        },
        {
            "img" : "bag.svg",
            "en" : "bag",
            "fr" : "sac"
        },
        {
            "img" : "sun.svg",
            "en" : "sun",
            "fr" : "soleil"
        },
        {
            "img" : "bed.svg",
            "en" : "bed",
            "fr" : "lit"
        },
        {
            "img" : "girl.svg",
            "en" : "girl",
            "fr" : "fille"
        },
        {
            "img" : "bird.svg",
            "en" : "bird",
            "fr" : "oiseau"
        },
        {
            "img" : "vase.svg",
            "en" : "vase",
            "fr" : "vase"
        },
        {
            "img" : "sofa.svg",
            "en" : "sofa",
            "fr" : "canapé"
        },
        {
            "img" : "frog.svg",
            "en" : "frog",
            "fr" : "grenouille"
        }
    ],
    "2" : [
        {
            "en" : "red",
            "fr" : "rouge"
        },
        {
            "en" : "ear",
            "fr" : "oreille"
        },
        {
            "en" : "nut",
            "fr" : "noix"
        },
        {
            "en" : "oil",
            "fr" : "huile"
        },
        {
            "en" : "pie",
            "fr" : "tarte"
        },
        {
            "en" : "tea",
            "fr" : "thé"
        },
        {
            "en" : "box",
            "fr" : "boîte"
        },
        {
            "en" : "ant",
            "fr" : "fourmi"
        },
        {
            "en" : "bin",
            "fr" : "poubelle"
        },
        {
            "en" : "boy",
            "fr" : "garçon"
        },
    ],
    "3" : [
        {
            "en" : "knee",
            "fr" : "genou"
        },
        {
            "en" : "milk",
            "fr" : "lait"
        },
        {
            "en" : "snow",
            "fr" : "neige"
        },
        {
            "en" : "zero",
            "fr" : "zéro"
        },
        {
            "en" : "neck",
            "fr" : "cou"
        },
        {
            "en" : "moon",
            "fr" : "lune"
        },
        {
            "en" : "bowl",
            "fr" : "bol"
        },
        {
            "en" : "tree",
            "fr" : "arbre"
        },
        {
            "en" : "leaf",
            "fr" : "feuille"
        },
        {
            "en" : "boat",
            "fr" : "bateau"
        },
    ],
    "4" : [
        {
            "en" : "glass",
            "fr" : "verre"
        },
        {
            "en" : "berry",
            "fr" : "baie"
        },
        {
            "en" : "horse",
            "fr" : "cheval"
        },
        {
            "en" : "green",
            "fr" : "vert"
        },
        {
            "en" : "brain",
            "fr" : "cerveau"
        },
        {
            "en" : "house",
            "fr" : "maison"
        },
        {
            "en" : "apple",
            "fr" : "pomme"
        },
        {
            "en" : "chair",
            "fr" : "chaise"
        },
        {
            "en" : "knife",
            "fr" : "couteau"
        },
        {
            "en" : "plane",
            "fr" : "avion"
        },
    ],
    "5" : [
        {
            "en" : "lamb",
            "fr" : "agneau"
        },
        {
            "en" : "goat",
            "fr" : "chèvre"
        },
        {
            "en" : "doll",
            "fr" : "poupée"
        },
        {
            "en" : "lion",
            "fr" : "lion"
        },
        {
            "en" : "head",
            "fr" : "tête"
        },
        {
            "en" : "bell",
            "fr" : "cloche"
        },
        {
            "en" : "desk",
            "fr" : "bureau"
        },
        {
            "en" : "half",
            "fr" : "moitié"
        },
        {
            "en" : "bank",
            "fr" : "banque"
        },
        {
            "en" : "hand",
            "fr" : "main"
        },
    ],
    "6" : [
        {
            "en" : "seven",
            "fr" : "sept"
        },
        {
            "en" : "shark",
            "fr" : "requin"
        },
        {
            "en" : "mouse",
            "fr" : "souris"
        },
        {
            "en" : "watch",
            "fr" : "montre"
        },
        {
            "en" : "stamp",
            "fr" : "timbre"
        },
        {
            "en" : "snake",
            "fr" : "serpent"
        },
        {
            "en" : "dress",
            "fr" : "robe"
        },
        {
            "en" : "beach",
            "fr" : "plage"
        },
        {
            "en" : "birth",
            "fr" : "naissance"
        },
        {
            "en" : "enemy",
            "fr" : "ennemi"
        }
    ],
    "7" : [
        {
            "en" : "island",
            "fr" : "île"
        },
        {
            "en" : "turtle",
            "fr" : "tortue"
        },
        {
            "en" : "flower",
            "fr" : "fleur"
        },
        {
            "en" : "violin",
            "fr" : "violon"
        },
        {
            "en" : "rabbit",
            "fr" : "lapin"
        },
        {
            "en" : "cherry",
            "fr" : "cerise"
        },
        {
            "en" : "donkey",
            "fr" : "âne"
        },
        {
            "en" : "corener",
            "fr" : "angle"
        },
        {
            "en" : "bottle",
            "fr" : "bouteille"
        },
        {
            "en" : "fabric",
            "fr" : "tissu"
        }
    ]
}


function setData(page) {
    $('.first-row').empty();
    $('.second-row').empty();
    content[page].slice(0,5).forEach(element => {
        let box_template = `<div class="col d-flex flex-column align-items-center box text-center p-2 me-2 rounded-3">
                        <img class="audio-icon align-self-end" src="./img/audio_icon.svg"></img>
                        ${element.img ? `<img src="./img/${element.img}" class="mb-2 mt-2 image"></img>` : ''}
                        <p ${!element.img ? 'class="align-self-start"' : ''}>${element.en}</p>
                        <small ${!element.img ? 'class="align-self-start"' : ''}><i>${element.fr}</i></small>
                    </div>`;

        $('.first-row').append(box_template);
    })

    content[page].slice(5).forEach(element => {
        let box_template = `<div class="col d-flex flex-column align-items-center box text-center p-2 me-2 rounded-3">
                                <img class="audio-icon align-self-end" src="./img/audio_icon.svg"></img>
                                ${element.img ? `<img src="./img/${element.img}" class="mb-2 mt-2 image"></img>` : ''}
                                <p ${!element.img ? 'class="align-self-start"' : ''}>${element.en}</p>
                                <small ${!element.img ? 'class="align-self-start"' : ''}><i>${element.fr}</i></small>
                            </div>`;

        $('.second-row').append(box_template);
    })

    currentPage = page;
    if (order.length === 0) order = Object.keys(content);
}

function setNext() {
    const nextPage = getNextPage();

    if (nextPage in content) setData(nextPage);
}

function getNextPage() {
    return (parseInt(currentPage) + 1).toString();
}




const mainScreen = `<div id="content" class="content container-fluid">
<div class="row">
                    <div class="col-4">
                    </div>
                    <div class="col-4 pt-3 xl-pt-4 d-flex flex-column">
                        <h1 id="mainPageTitle" class="text-white m-0">The Advent</h1>
                        <h1 id="mainPageTitle" class="text-white m-0">Calendar</h1>
                    </div>
                    <div class="col-4 d-flex flex-row justify-content-around">
                        <div class="gauge-wrapper align-self-end mb-2">
                            <div class="gauge four success">
                              <div class="needle"></div>
                              <img alt="gauge" src="gauge.png"></img>
                              <img alt="gauge" src="gauge_label.png" id="gaugeLabel"></img>
                            </div>
                        </div>
                        <div id="snowflake" class="mt-1 me-2 mt-xl-3 me-xl-3" >
                            <img src="snowflake.png"  alt="snowflake" class="w-100"></img>
                        </div>
                    </div>
                </div>
<div id="calendar">
    <div class="row ms-0 me-0 margin-bottom justify-content-between">
        <div class="calendarBox p-0  text-center context-menu  position-relative" id="24">
            <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
             <p class='calendarNumber whiteFont'>24</p>
            <p class="calendarText whiteFont">Les préposi- tions de temps</p>
            </div>
           
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="23">
        <img src="whiteBox.png" class="w-100"></img>
        <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>23</p>
            <p class="calendarText greenFont">Les yes/no questions</p>
            </div>
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="22">
         <img src="redBox.png" class="w-100"></img>
          <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>22</p>
            <p class="calendarText whiteFont">La nourriture</p>
            </div>
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="21">
         <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>21</p>
            <p class="calendarText whiteFont">Le prétérit simple</p>
            </div>
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="20">
         <img src="redBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>20</p>
            <p class="calendarText whiteFont">L'article	indéfini "the"</p>
            </div>
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="19">
         <img src="whiteBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>19</p>
            <p class="calendarText greenFont">Les émotions</p>
            </div>
        </div>
    </div>
    <div class="row ms-0 me-0 margin-bottom justify-content-between">
        <div class="calendarBox p-0   text-center context-menu position-relative" id="13">
         <img src="redBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>13</p>
            <p class="calendarText whiteFont">There is/There are</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="14">
         <img src="whiteBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>14</p>
            <p class="calendarText greenFont">Les couleurs</p>
            </div>
        </div>
        <div class="calendarBox p-0    text-center context-menu position-relative" id="15">
         <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>15</p>
            <p class="calendarText whiteFont">Les animaux de compagnie</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="16">
         <img src="whiteBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>16</p>
            <p class="calendarText greenFont">Les membres de la famille</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="17">
         <img src="redBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>17</p>
            <p class="calendarText whiteFont">L'auxiliaire avoir</p>
            </div>
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="18">
          <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>18</p>
            <p class="calendarText whiteFont">Les parties du corps</p>
            </div>
        </div>
    </div>
    <div class="row ms-0 me-0 margin-bottom justify-content-between">
        <div class="calendarBox p-0   text-center context-menu position-relative" id="12">
          <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>12</p>
            <p class="calendarText whiteFont">Le vocabulaire de Noël</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="11">
          <img src="whiteBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>11</p>
            <p class="calendarText greenFont">Les préposi- tions de lieu</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="10">
        <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>10</p>
            <p class="calendarText whiteFont">L'heure</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="9">
         <img src="redBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>9</p>
            <p class="calendarText whiteFont">Les jours de la semaine</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="8">
         <img src="whiteBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>8</p>
            <p class="calendarText greenFont">Se présenter</p>
            </div>
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="7">
          <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>7</p>
            <p class="calendarText whiteFont">Le présent simple</p>
            </div>
        </div>
    </div>
    <div class="row ms-0 me-0 justify-content-between">
        <div class="calendarBox p-0  argin-right text-center context-menu position-relative" id="1">
        <img src="redBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>1</p>
            <p class="calendarText whiteFont">L'alphabet</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="2">
         <img src="whiteBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>2</p>
            <p class="calendarText greenFont">Les pronoms personnels</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="3">
        <img src="yellowBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>3</p>
            <p class="calendarText whiteFont">Les nombres</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="4">
         <img src="redBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>4</p>
            <p class="calendarText whiteFont">Les adjectifs possessifs</p>
            </div>
        </div>
        <div class="calendarBox p-0   text-center context-menu position-relative" id="5">
           <img src="whiteBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber greenFont'>5</p>
            <p class="calendarText greenFont">Le verbe être</p>
            </div>
        </div>
        <div class="calendarBox p-0  text-center context-menu position-relative" id="6">
         <img src="redBox.png" class="w-100"></img>
            <div class="position-absolute calendarBoxText">
            <p class='calendarNumber whiteFont'>6</p>
            <p class="calendarText whiteFont">Les articles indéfinis</p>
            </div>
        </div>
    </div>
</div>  
<div>    
</div>`;


const challenge19 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>19.</span> Les émotions</p>
<div id="challenge19LeftSide">
    <div class="w-100 position-relative">
        <img src="images/challenge19/challenge19Img.png" class="w-100">
        <div class="position-absolute w-100 h-100" style="top: 6%; left: 0px; padding-left: 19%; padding-right: 12%;">
            <form onsubmit="checkResponses(event, '19')" id="form" class="h-100">
            <div class="row w-100 ms-0 me-0 justify-content-between" style="height: 22%;">
                    <div style="width: 22%" class="h-100 p-0 position-relative" ondrop="drop(event, 'first', '19')" ondragover="allowDrop(event)">
                        <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="first"></input>
                    </div>
                    <div style="width: 22%" class="h-100 p-0 position-relative"  ondrop="drop(event, 'second', '19')" ondragover="allowDrop(event)">
                        <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="second"></input>
                    </div>
                    <div style="width: 22%" class="h-100 p-0 position-relative" ondrop="drop(event, 'third', '19')" ondragover="allowDrop(event)" >
                        <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="third"></input>
                    </div>
                    <div style="width: 22%" class="h-100 p-0 position-relative" ondrop="drop(event, 'fourth', '19')" ondragover="allowDrop(event)" >
                        <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="fourth"></input>
                    </div>
            </div>
            <div class="row w-100 ms-0 me-0 justify-content-between" style="height: 24%; padding-top: 4%">
                <div style="width: 22%" class="h-100 p-0 position-relative" ondrop="drop(event, 'fifth', '19')" ondragover="allowDrop(event)" >
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="fifth"></input>
                </div>
                <div style="width: 22%" class="h-100 p-0 position-relative"  ondrop="drop(event, 'sixth', '19')" ondragover="allowDrop(event)" >
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="sixth"></input>
                </div>
                <div style="width: 22%" class="h-100 p-0 position-relative" ondrop="drop(event, 'seventh', '19')" ondragover="allowDrop(event)" >
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="seventh"></input>
                </div>
                <div style="width: 22%" class="h-100 p-0 position-relative" ondrop="drop(event, 'eight', '19')" ondragover="allowDrop(event)" >
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="eight"></input>
                </div>
            </div>
            <div class="row w-100 ms-0 me-0 justify-content-between" style="height: 24%; padding-top: 3%">
                <div style="width: 22%" class="h-100 p-0 position-relative">
                </div>
                <div style="width: 22%" class="h-100 p-0 position-relative"  ondrop="drop(event, 'ninght', '19')" ondragover="allowDrop(event)" >
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="ninght"></input>
                </div>
                <div style="width: 22%" class="h-100 p-0 position-relative" ondrop="drop(event, 'tenth', '19')" ondragover="allowDrop(event)" >
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="tenth"></input>
                </div>
                <div style="width: 22%" class="h-100 p-0 position-relative">
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
<div id="challenge19RightSide" class="row pt-1 pt-lg-3">
    <div class="row mb-3 mb-xl-4">
        <p class="text-white p-0">Associe chaque personnage à l'émotion qu'il exprime.</p>
    </div>
    <div class="row justify-content-between pe-0" ondragover="allowDrop(event)" ondrop="dropBack(event)">
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="TIRED">
            <p class="m-0 ">tired</p>
            <div class="frenchTranslation15">
                <p>fatigué(e)</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="COLD">
            <p class="m-0 ">cold</p>
            <div class="frenchTranslation15">
                <p>avoir froid</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="SAD">
            <p class="m-0 ">sad</p>
            <div class="frenchTranslation15">
                <p>triste</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="SCARED">
            <p class="m-0 ">scared</p>
            <div class="frenchTranslation15">
                <p>effrayé(e)</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="EXCITED">
            <p class="m-0 ">excited</p>
            <div class="frenchTranslation15">
                <p>excité(e)</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="HAPPY">
            <p class="m-0 ">happy</p>
            <div class="frenchTranslation15">
                <p>heureux/heureuse</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="HOT">
            <p class="m-0 ">hot</p>
            <div class="frenchTranslation15">
                <p>avoir chaud</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="NERVOUS"><p class="m-0 ">nervous</p>
            <div class="frenchTranslation15">
                <p>nerveux/nerveuse</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="HUNGRY">
            <p class="m-0 ">hungry</p>
            <div class="frenchTranslation15">
                <p>avoir faim</p>
            </div>
        </div>
        <div class="challenge19Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="ANGRY">
            <p class="m-0 ">angry</p>
            <div class="frenchTranslation15">
                <p>énervé(e)</p>
            </div>
        </div>
    </div>
    <div class="row m-0 ps-0 pt-3 pt-xl-5">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2"  style="width: 45%;" type="submit" form="form">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="showResponses('19')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 73%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
</div>`;

const challenge7 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<div id="challenge7ImageContainer">
    <img src="images/challenge7/challenge7Img.png" class="w-100"></img>
</div>
<p class="challengeTitle whiteFont text-center"><span>7.</span> Le présent simple</p>
<div id="challenge7PartOne" class="row justify-content-center p-1 p-md-2">
    <p class="text-danger fw-bold fw-bold mb-2 mb-xxl-4">Le présent simple s'utilise dans les cas suivants:</p>
    <div class="col-6 text-left" style="z-index: 999">
        <p><span class="text-danger fw-bold fw-bold">•</span> Évoquer une caractéristique, un fait permanent, une vérité générale</p>
        <p><span class="text-danger fw-bold fw-bold">•</span> Parler d'une habitude, d'une action répétée</p>
        <p><span class="text-danger fw-bold fw-bold">•</span> Exprimer un jugement, une opinion, un goût</p>
        <p>À la forme affirmative, une phrase se construit de la manière suivante:</p>
        <p><span class="text-danger fw-bold fw-bold">•</span> Sujet + base verbale (+complément).</p>
        <p>Pour la troisième personne du singulier (he, she, it), une phrase se construit de la manière suivante:</p>
        <p><span class="text-danger fw-bold fw-bold">•</span> Sujet + base verbale + <span class="text-danger fw-bold text-decoration-underline">s</span></p>
        <p><span class="text-danger fw-bold fw-bold">*</span> La terminaison du verbe est en <span class="text-danger fw-bold text-decoration-underline">es</span> pour ceux terminant par <span class="text-danger fw-bold text-decoration-underline">ch, sh, x, z, o, s</span>.</p>
        <p><span class="text-danger fw-bold fw-bold">*</span> La terminaison est en <span class="text-danger fw-bold text-decoration-underline">ies</span> pour tous les verbes terminant par un <span class="text-danger fw-bold text-decoration-underline">y</span> précédé d'une consonne.</p>
        <p class="blueFont fst-italic mb-1 mb-xxl-3 mt-xxl-4 fw-bold">Exemples:</p>
        <p class="mb-0 mb-xxl-2">He wash<span class="text-danger fw-bold text-decoration-underline">es</span> his car on Saturdays.</p>
        <p class="translation blueFont fst-italic">Il lave sa voiture le samedi.</p>
        <p class="mb-0 mb-xxl-2 mt-2">She always tid<span class="text-danger fw-bold text-decoration-underline">ies</span> her room after school.</p>
        <p class="translation blueFont fst-italic">Elle range toujours sa chambre après l'école.</p>
    </div>
    <div class="col-6 text-left position-relative ps-0" style="z-index: 999">
        <p>À la forme négative, une phrase se construit de la manière suivante:</p>
        <p><span class="text-danger fw-bold fw-bold">•</span> Sujet + auxiliaire do (does pour la troisième personne du singulier) + not + base verbale (+complément).</p>
        <p class="blueFont fst-italic mb-1 mb-xxl-3 mt-xxl-4 fw-bold">Exemples:</p>
        <p class="mb-0 mb-xxl-2">I <span class="text-danger fw-bold text-decoration-underline">don't go</span> to school at weekends.</p>
        <p class="translation blueFont fst-italic">Je ne vais pas à l'école le week end.</p>
        <p class="mb-0 mb-xxl-2 mt-2">She <span class="text-danger fw-bold text-decoration-underline">doesn't want</span> to go with me.</p>
        <p class="translation blueFont fst-italic">Elle ne veut pas y aller avec moi.</p>
        <p style="margin-top: 15%">À la forme interrogative, une phrase<br> se construit de la manière suivante:</p>
        <p><span class="text-danger fw-bold fw-bold">•</span> Auxiliaire do (does pour la troisième<br> personne du singulier) + sujet + base verbale (+complément)?</p>
        <p class="blueFont fst-italic mb-1 mb-xxl-3 mt-xxl-4 fw-bold">Exemples:</p>
        <p class="mb-0 mb-xxl-2"><span class="text-danger fw-bold text-decoration-underline">Do</span> you <span class="text-danger fw-bold text-decoration-underline">play</span> football on Wednesdays?</p>
        <p class="translation blueFont fst-italic">Est-ce que tu joues au football le mercredi?</p>
        <p class="mb-0 mb-xxl-2 mt-2"><span class="text-danger fw-bold text-decoration-underline">Does</span> she <span class="text-danger fw-bold text-decoration-underline">work</span> in this company? </p>
        <p class="translation blueFont fst-italic">Est-ce qu'elle travaille dans cette entreprise?</p>
        <div id="challenge7TextBlueCircle" class="text-white text-center">
            <p>Astuce:</p>
            <p class="m-0">verbe à l'infinitif:</p>
            <p class="fst-italic">to eat (manger)</p>
            <p>base verbale: <span class="fst-italic">eat</span></p>
        </div>
    </div>
</div>
<div class="row justify-content-center w-100" style="position:absolute; bottom:5%;">
    <button class="btn btn-primary me-2" style="width: 25%;" onClick="displaySecondPage('7')">Aller à la page suivante</button>
    <button class="btn btn-primary" style="width: 25%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
</div>
</div>`;

const challenge7_1 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>7.</span> Le présent simple</p>
<div id="challenge7RightSide" >
    <form onsubmit="checkResponses(event, '7')" id="form" class="row justify-content-center pt-3 pt-md-5 mt-xl-5">
    <p class="mb-3 mb-xl-4" id="instructions">Conjugue les verbes entre parenthèses au présent simple. Attention au bon ordre des mots.</p>
    <div class="col-6">
        <p>1. Tanya <span><input maxlength="15" name="first" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> German very well.<span class="fst-italic"> (speak)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Tanya parle très bien allemand.</p>
        </div>
        <p>2. I don't often <span><input maxlength="15" name="second" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> coffee.<span class="fst-italic"> (drink)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Je ne bois pas souvent du café.</p>
        </div>
        <p>3. The swimming pool <span><input maxlength="15" name="third" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> at 7.30 every morning.<span class="fst-italic"> (open)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>La piscine ouvre tous les matins à 7h30.</p>
        </div>
        <p>4. My parents <span><input maxlength="15" name="fourth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> in a very small flat.<span class="fst-italic"> (live)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Mes parents vivent dans un très petit appartement.</p>
        </div>
        <p>5. Bees <span><input maxlength="15" name="fifth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> honey.<span class="fst-italic"> (make)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Les abeilles font du miel.</p>
        </div>
    </div>
    <div class="col-6">
        <p>6. Vegetarians <span><input maxlength="15" name="sixth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> meat.<span class="fst-italic"> (not/eat)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Les végétariens ne mangent pas de viande.</p>
        </div>
        <p>7. I <span><input maxlength="15" name="seventh" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> tennis every Wednesday.<span class="fst-italic"> (play)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Je joue au tennis tous les mercredis.</p>
        </div>
        <p>8. Where <span><input maxlength="15" name="eight" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off" style="width: 35%"></input></span> <span class="fst-italic">(she/live)?</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Où habite t-elle?</p>
        </div>
        <p>9. <span><input maxlength="15" name="ninght" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> <span class="fst-italic">(they/eat)</span> vegetables every day?</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Est-ce qu'ils mangent des légumes tous les jours?</p>
        </div>
        <p>10. She <span><input maxlength="15" name="tenth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 7)" autocomplete="off"></input></span> her mother every morning.<span class="fst-italic"> (call)</span></p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Elle appelle sa mère tous les matins.</p>
        </div>
    </div>
    <div class="row m-0 pt-3 pt-xl-5 w-75 justify-content-center">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" type="submit">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('7')" type="button">Les réponses</button>
    </div>
    <div class="row m-0 w-75 justify-content-center">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="backToFirstPage('7')" type="button">Retour à la première page</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
    </form>
</div>
</div>`;

const challenge22 = ` <div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont" style="margin-top: 1%"><span>22.</span> La nourriture</p>
<div id="challenge22LeftSide">
        <img src="images/challenge22/challenge22Img.png" class="w-100">
</div>
<div id="challenge22RightSide" class="row pt-1 pt-lg-3">
    <form  onsubmit="checkResponses(event, '22')" id="form">
       <p class="mb-3 mb-xl-4">Réponds aux questions suivantes.</p>
       <p>1. How do you say "potatoes" in French? <span><input maxlength="18" name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off" style="width: 35%"></input></span> .</p>
       <div class="frenchTranslation15">
           <p>Comment dis-tu "potatoes" en français?</p>
       </div>
       <p class="mt-1 mt-lg-2">2. How do you say "rice" in French? <span><input maxlength="18" name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> .</p>
       <div class="frenchTranslation15">
           <p>Comment dis-tu "rice" en français?</p>
       </div>
       <p class="mt-1 mt-lg-2" >3. How do you say "spinach" in French? <span><input maxlength="18" name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> .</p>
       <div class="frenchTranslation15">
           <p>Comment dis-tu "spinach" en français?</p>
       </div>
       <p class="mt-1 mt-lg-2">4. How do you say "milk" in French? <span><input maxlength="18" name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> .</p>
       <div class="frenchTranslation15">
           <p>Comment dis-tu "milk" en français?</p>
       </div>
       <p class="mt-1 mt-lg-2">5. How do you say "cherries" in French? <span><input maxlength="18" name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> .</p>
       <div class="frenchTranslation15">
           <p>Comment dis-tu "cherries" en français?</p>
       </div>
       <p class="mt-1 mt-lg-2">6. How do you say "eggs" in French? <span><input maxlength="18" name="sixth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> .</p>
       <div class="frenchTranslation15">
           <p>Comment dis-tu "eggs" en français?</p>
       </div>
       <p class="mt-1 mt-lg-2">7. How do you say "bread" in French? <span><input maxlength="18" name="seventh" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> .</p>
       <div class="frenchTranslation15">
           <p>Comment dis-tu "bread" en français?</p>
       </div>
       <div class="row m-0 ps-0 pt-3 pt-xl-5">
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;"  type="submit">Vérifier</button>
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('22')" type="button">Les réponses</button>
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
        </div>
    </form>
</div>
</div>`;

const challenge1 = `<div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>1.</span> L'alphabet</p>
<div id="challenge1LeftSide" class="margin-right">
        <div class="w-100 position-relative">
                <img src="images/challenge1/alphabet.png" class="w-100">
                <div class="position-absolute w-100 h-100" style="top: 0px; left: 0px; ">
                        <div class="row w-100" style="height: 16%; margin-top: 7%;  margin-left: 7%; margin-right: 7%;">
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="A"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="B"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="C"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="D"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="E"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="F"></div>
                        </div>
                        <div class="row w-100" style="height: 16%; margin-left: 7%; margin-right: 7%;">
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="G"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="H"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="I"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="J"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="K"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="L"></div>
                        </div>
                        <div class="row w-100" style="height: 16%; margin-left: 7%; margin-right: 7%;">
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="M"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="N"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="O"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="P"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="Q"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="R"></div>
                        </div>
                        <div class="row w-100" style="height: 16%; margin-left: 7%; margin-right: 7%;">
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="S"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="T"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="U"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="V"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="W"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="X"></div>
                        </div>
                        <div class="row w-100" style="height: 16%; margin-left: 7%; margin-right: 7%;">
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="Y"></div>
                                <div style="width: 14.5%" class="p-0 h-100" onclick="play(event)" id="Z"></div>
                        </div>
                </div>
        </div>
</div>
<div id="challenge1RightSide" class="row pt-1 pt-lg-3">
        <p class="text-white p-0 mb-2 mb-lg-3">Épelle les mots suivants en anglais puis écoute la correction en cliquant sur chacun des mots.</p>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="bed" onclick="play(event)">
                <p class="dragItemEnglish m-0">Bed</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic m-0">Lit</p>
                </div>
        </div>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="chair" onclick="play(event)">
                <p class="dragItemEnglish m-0">Chair</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic m-0">Chaise</p>
                </div>
        </div>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="bag" onclick="play(event)">
                <p class="dragItemEnglish m-0">Bag</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic m-0">Sac</p>
                </div>
        </div>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="table" onclick="play(event)">
                <p class="dragItemEnglish m-0">Table</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic frenchTranslation15 m-0">Table</p>
                </div>
        </div>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="sofa" onclick="play(event)">
                <p class="dragItemEnglish m-0">Sofa</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic frenchTranslation15 m-0">Canapé</p>
                </div>
        </div>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="banana" onclick="play(event)">
                <p class="dragItemEnglish m-0">Banana</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic frenchTranslation15 m-0">Banane</p>
                </div>
        </div>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="goal" onclick="play(event)">
                <p class="dragItemEnglish m-0">Goal</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic frenchTranslation15 m-0">But</p>
                </div>
        </div>
        <div class="challenge1Box me-2 me-lg-3 mb-2 mb-lg-3 context-menu" id="prince" onclick="play(event)">
                <p class="dragItemEnglish m-0">Prince</p>
                <div class="frenchTranslation15 ">
                        <p class="fst-italic frenchTranslation15 m-0">Prince</p>
                </div>
        </div>
        <div class="row m-0 ps-0 pt-3 justify-content-center">
                <button class="btn btn-primary me-2 mb-2" style="width: 70%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
        </div>
</div>
<audio id="audio" type="audio/mpeg"></audio>
</div>`;

const challenge2 = `<div id="contentChallenge" class="  container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>2.</span> Les pronoms personnels</p>
<div id="challenge2LeftSide" class = "margin-right">
        <img src="images/challenge2/challenge2Img.png" class="w-100" ></img>
</div>

<div id="challenge2RightSide" class="row pt-1 pt-lg-3" >
        <form onsubmit="checkResponses(event, '2')" id="form">
                <p class="whiteFont mb-2 mb-xxl-3">Complète le texte avec le bon pronom personnel.</p>
                <div class="row justify-content-between pe-0" ondragover="allowDrop(event)" ondrop="dropBack(event)">
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="I"><p class="m-0 p-1 text-center">I</p></div>
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="YOU-1"><p class="m-0 p-1 text-center">you</p></div>
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="HE"><p class="m-0 p-1 text-center">he</p></div>
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="SHE"><p class="m-0 p-1 text-center">she</p></div>
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="IT"><p class="m-0 p-1 text-center">it</p></div>
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="WE"><p class="m-0 p-1 text-center">we</p></div>
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="YOU-2"><p class="m-0 p-1 text-center">you</p></div>
                        <div class="challenge2Box text-white draggable" draggable="true" ondragstart="drag(event)" id="THEY"><p class="m-0 p-1 text-center">they</p></div>
                </div>
                <div class="row justify-content-between pe-0 mt-3" id="dropArea">
                        <div class="challenge2Img m-1 m-lg-2 position-relative"> 
                                <img src="images/challenge2/challenge2Img1.png" class="w-100" >
                                <div class="position-absolute dropArea" ondrop="drop(event, 'first', '2')" ondragover="allowDrop(event)" style="top: 22%; left: 45%; width: 48%;">
                                        <p class="mb-2">Hi, <span><input id="" name="first" disabled autocomplete="off"></input></span> 'm Kelly.</p>
                                        <div>
                                                <p class="frenchTranslationBlue">Bonjour, Je m'appelle Kelly.</p>
                                        </div>
                                </div>
                        </div>  
                        <div class="challenge2Img m-1 m-lg-2 position-relative">
                                <img src="images/challenge2/challenge2Img2.png" class="w-100" >
                                <div class="position-absolute dropArea" ondrop="drop(event, 'second', '2')" ondragover="allowDrop(event)" style="top: 20%; left: 42%; width: 52%;">
                                        <p>This is Abby.</p>
                                        <p class="mb-2"><span><input id="" name="second" disabled autocomplete="off"></input></span> is my best friend.</p>
                                        <div>
                                                <p class="frenchTranslationBlue">Voici Abby. C'est ma meilleure amie.</p>
                                        </div>
                                </div>
                        </div>  
                        <div class="challenge2Img m-1 m-lg-2 position-relative">
                                <img src="images/challenge2/challenge2Img3.png" class="w-100" >
                                <div class="position-absolute dropArea" ondrop="drop(event, 'third', '2')" ondragover="allowDrop(event)" style="top: 20%; left: 42%; width: 52%;">
                                        <p>This is Liam.</p>
                                        <p class="mb-2"><span><input id="" name="third" disabled autocomplete="off"></input></span> is my friend too.</p>
                                        <div>
                                                <p class="frenchTranslationBlue">Voici Liam. C'est aussi mon ami.</p>
                                        </div>
                                </div>  
                        </div> 
                        <div class="challenge2Img m-1 m-lg-2 position-relative">
                                <img src="images/challenge2/challenge2Img4.png"  class="w-100" >
                                <div class="position-absolute dropArea" ondrop="drop(event, 'fourth', '2')" ondragover="allowDrop(event)" style="top: 22%; left: 30%; width: 40%" >
                                        <p class="mb-2"><span><input id="" name="fourth" disabled autocomplete="off"></input></span> are my best friends.</p>
                                        <div>
                                                <p class="frenchTranslationBlue">Ils sont mes meilleurs amis.</p>
                                        </div>
                                </div>
                        </div>  
                        <div class="challenge2Img m-1 m-lg-2 position-relative">
                                <img src="images/challenge2/challenge2Img5.png" class="w-100" >
                                <div class="position-absolute dropArea" ondrop="drop(event, 'fifth', '2')" ondragover="allowDrop(event)" style="top: 12%; left: 42%; width: 54%;">
                                        <p class="mb-2"><span><input id="" name="fifth" disabled autocomplete="off"></input></span> are students at Peter Marshall school.</p>
                                        <div>
                                                <p class="frenchTranslationBlue">Nous sommes étudiants à l'école Peter Marshall.</p>
                                        </div>
                                </div>
                        </div>  
                        <div class="challenge2Img m-1 m-lg-2 position-relative">
                                <img src="images/challenge2/challenge2Img6.png" class="w-100" >
                                <div class="position-absolute dropArea" ondrop="drop(event, 'sixth', '2')" ondragover="allowDrop(event)" style="top: 22%; left: 53%; width: 40%" >
                                        <p class="mb-2"><span><input id="" name="sixth" disabled autocomplete="off"></input></span> is a great school.</p>
                                        <div>
                                                <p class="frenchTranslationBlue">C'est une bonne école.</p>
                                        </div>
                                </div>
                        </div>  
                </div>
                <div class="row m-0 pt-3 pt-xl-5">
                        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" type="submit">Vérifier</button>
                        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('2')" type="button">Les réponses</button>
                        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
                </div>
        </form>
</div>
</div>`;

const challenge3 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>3.</span> Les nombres</p>
<div id="challenge3LeftSide">
    <div class="w-100 position-relative">
        <img src="images/challenge3/challenge3Img.png" class="w-100">
        <div class="position-absolute w-100 h-100" style="top: 0px; left: 0px; padding-left: 9%; padding-right: 4%;">
            <div class="row w-100 ms-0 me-0" style="height: 25%; margin-top: 4%;">
                    <div style="width: 12.5%" class="h-100" onclick="play(event)" id="1"></div>
                    <div style="width: 12.5%" class="h-100"  onclick="play(event)" id="2"></div>
                    <div style="width: 12.5%" class="h-100" onclick="play(event)" id="3"></div>
                    <div style="width: 12.5%" class="h-100" onclick="play(event)" id="4"></div>
                    <div style="width: 12.5%" class="h-100" onclick="play(event)" id="5"></div>
                    <div style="width: 12.5%" class="h-100" onclick="play(event)" id="6"></div>
                    <div style="width: 12.5%" class="h-100" onclick="play(event)" id="7"></div>
                    <div style="width: 12.5%" class="h-100" onclick="play(event)" id="8"></div>
            </div>
            <div class="row w-100 ms-0 me-0" style="height: 25%;">
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="9"></div>
                <div style="width: 12.5%" class="h-100"  onclick="play(event)" id="10"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="11"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="12"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="13"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="14"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="15"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="16"></div>
            </div>
            <div class="row w-100 ms-0 me-0" style="height: 25%;">
                <div style="width: 12.5%" class="h-100"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="17"></div>
                <div style="width: 12.5%" class="h-100"  onclick="play(event)" id="18"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="19"></div>
                <div style="width: 12.5%" class="h-100" onclick="play(event)" id="20"></div>
                
            </div>
        </div>
    </div>
</div>
<div id="challenge3RightSide" class="row pt-1 pt-lg-3" onsubmit="checkResponses(event)">
       <p class="text-white fw-bold m-0">À toi de jouer!</p>
       <p class="text-white fw-bold">Compte jusqu'à 20 en anglais, sans regarder les réponses bien sûr :-)</p>
        <div class="row m-0 pt-3 pt-xl-4">
            <button class="btn btn-primary me-2 mb-2" style="width: 79%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
        </div>
</div>
<audio id="audio" type="audio/mpeg"></audio>
</div>`;

const challenge4 = ` <div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>4.</span> Les adjectifs possessifs</p>
<div id="challenge4LeftSide">
        <img src="images/challenge4/challenge4Img.png" class="w-100">
</div>
<div id="challenge4RightSide" class="row pt-1 pt-lg-3" >
    <form onsubmit="checkResponses(event, '4')" id="form">
       <p id="instructions" class="mb-3 mb-xl-4">Complète les phrases avec le bon adjectif possessif.</p>
       <p>
           <span><input maxlength="5" name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> name is Jef and this is <span><input maxlength="5" name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> family.
        </p>
        <p>
            <span><input maxlength="5" name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> surname is Johnson.
        </p>
        <p>I have got one brother and one sister.</p>
        <p>
            <span><input maxlength="5" name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> names are Ryan and Mary.
        </p>
        <p>
            We have got two dogs. <span><input maxlength="5" name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> names are Sony and Joy. We also have got a cat.
        </p>
        <p>
            <span><input maxlength="5" name="sixth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> name is Chany.
        </p>
        <div class="frenchTranslation15 mt-2 mt-lg-3">
            <p>Je m'appelle Jef et voici ma famille.</p>
            <p>Notre nom de famille est Johnson.</p>
            <p>J'ai un frère et une sœur. Ils s'appellent Ryan et Mary.</p>
            <p>Nous avons deux chiens. Ils s'appellent Sony et Joy.</p>
            <p>Nous avons aussi un chat. Il s'appelle Chany.</p>
        </div>
        <div class="row m-0 ps-0 pt-2 pt-md-3 pt-xl-5">
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 mb-xxl-4" style="width: 34%;" type="submit">Vérifier</button>
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 mb-xxl-4" style="width: 34%;" onclick="showResponses('4')" type="button">Les réponses</button>
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 mb-xxl-4 returnButton" style="width: 62%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
        </div>
    </form>
<div>
</div>`;

const challenge5 = ` <div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>5.</span> Le verbe être</p>
<div id="challenge5LeftSide">
        <img src="images/challenge5/challenge5Img.png" class="w-100">
        <div class="row m-0 pt-3 pt-xl-5 justify-content-end">
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" type="submit" form="form">Vérifier</button>
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('5')" type="button">Les réponses</button>
           
        </div>
        <div class="row m-0 justify-content-end">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
        </div>
</div>
<div id="challenge5RightSide" class="row pt-1 pt-lg-3" >
        <form onsubmit="checkResponses(event, '5')" id="form">
                <p id="instructions" class="mb-3 mb-xl-4">Complète les phrases avec le verbe être au présent simple.</p>
                <p> I <span><input maxlength="5" name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> Juan and I live in Argentina. I <span><input maxlength="5" name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> ten years old. I <span><input maxlength="5" name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> part of the junior national football team. We use to play in Santa Genoveva stadium which <span><input maxlength="5" name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> next to the city centre. I like playing in this stadium because it <span><input maxlength="5" name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> one of the biggest stadiums in the country. Matches <span><input maxlength="5" name="sixth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> often played against Latin American teams there. We often win because we all <span><input maxlength="5" name="seventh" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> good players.
                </p>
                <div class="frenchTranslation15 frenchTranslationBackgroundSmallChallenge5 mt-3 mt-xl-5">
                <p>Je m'appelle Juan et j'habite en Argentine. J'ai dix ans. Je fais partie de l'équipe nationale junior de football. Nous jouons dans le stade de Santa Genoveva qui se trouve à côté du centre ville. J'aime jouer dans ce stade parce que c'est l'un des plus grands stades du pays. On y joue souvent des matchs contre des équipes latino-américaines. Nous gagnons souvent parce que nous sommes tous de bons joueurs.</p>
                </div>
              
        </form>
</div>
</div>`;

const challenge9 = ` <div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>9.</span> Les jours de la semaine</p>
<div id="challenge9LeftSide">
        <img src="images/challenge9/challenge9Img.png" class="w-100">
</div>
<div id="challenge9RightSide" class="row pt-1 pt-lg-3">
    <form  onsubmit="checkResponses(event, '9')" id="form">
    <p class="mb-2" id="instructions">Complète les phrases suivantes avec le bon jour de la semaine en anglais.</p>
    <p class="mb-0 mt-2">1. Rewrite correctly this day of the week:</p>
    <p>YADSTEU <span><input maxlength="10" name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span>.</p>
    <div class="frenchTranslation15">
        <p>Réécris correctement ce jour: YADSTEU</p>
    </div>
    <p class="mb-0 mt-2">2. It is Saturday today. Yesterday, it was <span><input maxlength="10" name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span>.</p>
    <div class="frenchTranslation15">
        <p>Nous sommes samedi. Hier nous étions...</p>
    </div>
    <p class="mb-0 mt-2">3. It is Friday today. Yesterday, it was <span><input maxlength="10" name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span>.</p>
    <div class="frenchTranslation15">
        <p>Nous sommes vendredi. Hier nous étions...</p>
    </div>
    <p class="mb-0 mt-2">4. It is Tuesday today. Tommorow, it will be <span><input maxlength="10" name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span>.</p>
    <div class="frenchTranslation15">
        <p>Nous sommes mardi. Demain nous serons...</p>
    </div>
    <p class="mb-0 mt-2">5. It is Sunday today. Tommorow, it will be <span><input maxlength="10" name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span>.</p>
    <div class="frenchTranslation15">
        <p>Nous sommes dimanche. Demain nous serons...</p>
    </div>
    <div class="row m-0 pt-3 pt-xl-5">
        <button class="btn btn-primary w-25 me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" type="submit">Vérifier</button>
        <button class="btn btn-primary w-25 me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('9')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2"  style="width:45%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
    </form>
</div>
</div>`;

const challenge14 = ` <div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>14.</span> Les couleurs</p>
<div id="challenge14LeftSide">
        <img src="images/challenge14/challenge14Img.png" class="w-100">
</div>
<div id="challenge14RightSide" class="row pt-1 pt-lg-3">
    <form  onsubmit="checkResponses(event, '14')" id="form">
    <p id="instructions" class="mb-3 mb-xl-4">Réponds aux questions suivantes par la bonne couleur en anglais.</p>
    <p>1. What colour is the Christmas tree? <span><input  name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off" class="w-25"></input></span></p>
    <div class="frenchTranslation15">
        <p>De quelle couleur est le sapin de Noël?
        </p>
    </div>
    <p class="mt-1 mt-md-2">2. What are the colours of Santa's outfit? <span><input  name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off" ></input></span></p>
    <div class="frenchTranslation15">
        <p>Quelles sont les couleurs de la tenue du Père Noël?</p>
    </div>
    <p class="mt-1 mt-md-2">3. What colour are Santa's reindeers? <span><input  name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off" class="w-25"></input></span></p>
    <div class="frenchTranslation15">
        <p>De quelle couleur sont les rennes du Père Noël?</p>
    </div>
    <p class="mt-1 mt-md-2">4. What colour is the snow? <span><input  name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off" class="w-25"></input></span></p>
    <div class="frenchTranslation15">
        <p>De quelle couleur est la neige?</p>
    </div>
    <p class="mt-1 mt-md-2">5. What colour are the Christmas candy canes? <span><input  name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off" ></input></span></p>
    <div class="frenchTranslation15">
        <p>De quelles couleurs sont les sucres d'orge de Noël?</p>
    </div>
    <p class="mt-1 mt-md-2">6. What are the colours of Santa's elves' outfit? <span><input  name="sixth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>Quelles sont les couleurs de la tenue des lutins du Père Noël?</p>
    </div>
    <div class="row m-0 pt-3 pt-xl-5">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 w-25" type="submit">Vérifier</button>
        <button class="btn btn-primary w-25 me-1 me-md-2 mb-1 mb-md-2" onclick="showResponses('14')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
    </form>
</div>
</div>`;

const challenge15 = ` <div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>15.</span> Les animaux  de compagnie</p>
<p class="text-white" id="instructions">Découvre quel animal de compagnie se cache derrière chaque devinette.</p>
<div id="challenge15LeftSide">
        <img src="images/challenge15/challenge15Img.png" class="w-100">
</div>
<div id="challenge15RightSide" class="row pt-1 pt-lg-3">
    <form onsubmit="checkResponses(event, '15')" id="form">
    <p>1. I am feline and I meow. <span><input maxlength="12" name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>Je suis un félin et je miaule.</p>
    </div>
    <p class="mt-1 mt-lg-2">2. I often sing very early in the morning and I can fly. <span><input maxlength="12" name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>Je chante souvent très tôt le matin et je sais voler.</p>
    </div>
    <p class="mt-1 mt-lg-2">3. It is said that I am the most faithful friend of man. </p>
    <p>My barking sometimes disturbs the neighbours. <span><input maxlength="12" name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>On dit de moi que je suis le plus fidèle ami de l’homme. Mes aboiements dérangent parfois les voisins.</p>
    </div>
    <p class="mt-1 mt-lg-2">4. I live in water and have fins. <span><input maxlength="12" name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>Je vis dans l'eau et j'ai des nageoires.</p>
    </div>
    <p class="mt-1 mt-lg-2">5. I live in a burrow, I have big ears and I like carrots. <span><input maxlength="12" name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>Je vis dans un terrier, j'ai de grandes oreilles et j'aime les carottes.</p>
    </div>
    <p class="mt-1 mt-lg-2">6. I am a climbing bird that can imitate human speech. <span><input maxlength="12" name="sixth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>Je suis un oiseau grimpeur capable d'imiter la parole humaine.</p>
    </div>
    <p class="mt-1 mt-lg-2">7. I store my food in my jowls. <span><input maxlength="12" name="seventh" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15">
        <p>Je mets en réserve ma nourriture dans mes abajoues.</p>
    </div>
    <p class="mt-1 mt-lg-2">8. I am a small rodent mammalian and I like to hide in the corners of houses. <span><input maxlength="12" name="eight" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span></p>
    <div class="frenchTranslation15 mb-lg-3">
        <p>Je suis un petit mammifère rongeur et j'aime me cacher dans<br>les recoins des maisons.</p>
    </div>
    <div class="row m-0 ps-0 pt-2 pt-xl-5" style="width: 107%;">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" type="submit">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('15')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 " style="width: 43%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</form>
</div>
</div>`;

const challenge6 = ` <div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>6.</span> Les	articles indéfinis</p>
<div id="challenge6UpperPart" class="row p-0 p-md-2 p-xxl-4">
    <p class="text-danger fw-bold mb-1 mb-xxl-3 bigger">Les articles a et an</p>
    <div class="col-6 text-left">
        <p class="mb-md-2 mb-xxl-4"><span class="text-danger fw-bold">• A et an</span> se traduisent en français par <span class="text-danger fw-bold">un ou une</span>.</p>
        <p class="mb-md-2 mb-xxl-4"><span class="text-danger fw-bold">•</span> Ils se placent devant les noms dénombrables singuliers (les choses que l'on peut compter.)</p>
        <p><span class="text-danger fw-bold">• A</span> se place devant les noms commençant par une consonne et <span class="text-danger fw-bold">an</span> devant les noms commençant par une voyelle.</p>
    </div>
   <div class="col-6 text-left">
        <p class="mb-md-2 mb-xxl-4"><span class="blueFont fw-bold fst-italic">Exemples:</span> a cat <span class="small">(un chat)</span>, an animal <span class="small">(un animal)</span>, a mouse <span class="small">(une souris)</span>.</p>
        <p class="mb-md-2 mb-xxl-4">Les articles <span class="text-danger fw-bold">a</span> et <span class="text-danger fw-bold">an</span> sont obligatoires devant les noms de métiers.</p>
        <p><span class="blueFont fw-bold fst-italic">Exemple:</span> My mother is a doctor.</p>
        <p><span class="small">Ma mère est un docteur.</span>
   </div>
</div>
<div id="challenge6LowerPart" class="row justify-content-center pe-2 ps-2">
    <p class="text-white mb-2 mb-sm-3 mb-lg-4" id="instructions">Sélectionne le bon article indéfini dans chacune des phrases suivantes.</p>
    <div class="col-6 text-left text-white">
        <p>1. My friends and I ate <span class="context-menu" id="first-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="first-a" onclick="setBold(event)">a</span> orange for dessert.</p>
        <div class="frenchTranslation15">
            <p>Mes amis et moi avons mangé une orange pour le dessert.</p>
        </div>
        <p class="mt-1 mt-lg-2">2. <span class="context-menu" id="second-a" onclick="setBold(event)">A</span>/<span class="context-menu" id="second-an" onclick="setBold(event)">An</span> friend of mine is a very good photographer.</p>
        <div class="frenchTranslation15">
            <p>Un de mes amis est un très bon photographe.</p>
        </div>
        <p class="mt-1 mt-lg-2">3. He has got <span class="context-menu" id="third-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="third-a" onclick="setBold(event)">a</span> sofa in his room.</p>
        <div class="frenchTranslation15">
            <p>Il a un canapé dans sa chambre.</p>
        </div>
        <p class="mt-1 mt-lg-2">4. I really want to eat <span class="context-menu" id="fourth-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="fourth-a" onclick="setBold(event)">a</span> apple pie !</p>
        <div class="frenchTranslation15">
            <p>J'ai vraiment envie de manger une tarte aux pommes !</p>
        </div>
        <p class="mt-1 mt-lg-2">5. Love is <span class="context-menu" id="fifth-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="fifth-a" onclick="setBold(event)">a</span> wonderful thing.</p>
        <div class="frenchTranslation15">
            <p>L'amour est une chose merveilleuse.</p>
        </div>
    </div>
    <div class="col-6 text-left text-white">
        <p>6. Ariane has got <span class="context-menu" id="sixth-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="sixth-a" onclick="setBold(event)">a</span> car in her garage.</p>
        <div class="frenchTranslation15">
            <p>Ariane a une voiture dans son garage.</p>
        </div>
        <p class="mt-1 mt-lg-2">7. Mike's mother bought him <span class="context-menu" id="seventh-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="seventh-a" onclick="setBold(event)">a</span> guitar for his birthday.</p>
        <div class="frenchTranslation15">
            <p>La mère de Mike lui a acheté une guitare pour son anniversaire.</p>
        </div>
        <p class="mt-1 mt-lg-2">8. I'm thinking of buying <span class="context-menu" id="eight-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="eight-a" onclick="setBold(event)">a</span> new pair of trousers.</p>
        <div class="frenchTranslation15">
            <p>Je pense acheter un nouveau pantalon.</p>
        </div>
        <p class="mt-1 mt-lg-2">9. Liam is <span class="context-menu" id="ninght-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="ninght-a" onclick="setBold(event)">a</span> teacher in my school.</p>
        <div class="frenchTranslation15">
            <p>Liam est un professeur dans mon école.</p>
        </div>
        <p class="mt-1 mt-lg-2">10. There is <span class="context-menu" id="tenth-an" onclick="setBold(event)">an</span>/<span class="context-menu" id="tenth-a" onclick="setBold(event)">a</span> dog in the garden.</p>
        <div class="frenchTranslation15">
            <p>Il y a un chien dans le jardin.</p>
        </div>
    </div>
    <div class="row m-0 pt-2 pt-md-3 pt-xl-5 w-100 buttonsDiv justify-content-center">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="checkResponses(event, '6')">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('6')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 " style="width: 35%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
</div>`;

const challenge16 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>16.</span> Les membres de la famille</p>
<div id="challenge16LeftSide">
    <div class="w-100 position-relative">
        <img src="images/challenge16/challenge16Img.png" class="w-100">
        <div class="position-absolute w-100 h-100" style="top: 5.5%; left: 0px; padding-left: 22.5%; padding-right: 10.5%;">
            <form onsubmit="checkResponses(event, '16')" id="form" class="h-100">
            <div class="row w-100 ms-0 me-0 justify-content-between" style="height: 20%;">
                    <div style="width: 20%" class="h-100 p-0 position-relative">
                    </div>
                    <div style="width: 20%; margin-right: 2%;" class="h-100 p-0 position-relative"  ondrop="drop(event, 'first', '16')" ondragover="allowDrop(event)">
                        <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="first"></input>
                    </div>
                    <div style="width: 20%; margin-left: 3%;" class="h-100 p-0 position-relative" ondrop="drop(event, 'second', '16')" ondragover="allowDrop(event)">
                        <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="second"></input>
                    </div>
                    <div style="width: 20%" class="h-100 p-0 position-relative">
                    </div>
            </div>
            <div class="row w-100 ms-0 me-0 justify-content-between" style="height: 24.5%; padding-top: 4%">
                <div style="width: 20%" class="h-100 p-0 position-relative" ondrop="drop(event, 'third', '16')" ondragover="allowDrop(event)">
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="third"></input>
                </div>
                <div style="width: 20%; margin-right: 2%;" class="h-100 p-0 position-relative">
                    <div id="exampleSolution"  class="position-absolute w-100 d-flex justify-content-center align-items-center" style="bottom : 0px; height: 19%" name="fourth">THE MOTHER</div>
                </div>
                <div style="width: 20%; margin-left: 3%;" class="h-100 p-0 position-relative" ondrop="drop(event, 'fifth', '16')" ondragover="allowDrop(event)">
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="fifth"></input>
                </div>
                <div style="width: 20%" class="h-100 p-0 position-relative" ondrop="drop(event, 'sixth', '16')" ondragover="allowDrop(event)">
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="sixth"></input>
                </div>
            </div>
            <div class="row w-100 ms-0 me-0 justify-content-between" style="height: 26.5%; padding-top: 10%">
                <div style="width: 20%" class="h-100 p-0 position-relative" ondrop="drop(event, 'seventh', '16')" ondragover="allowDrop(event)">
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="seventh"></input>
                </div>
                <div style="width: 20%; margin-right: 2%;" class="h-100 p-0 position-relative"  ondrop="drop(event, 'eight', '16')" ondragover="allowDrop(event)">
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="eight"></input>
                </div>
                <div style="width: 20%; margin-left: 3%;" class="h-100 p-0 position-relative" ondrop="drop(event, 'ninght', '16')" ondragover="allowDrop(event)">
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="ninght"></input>
                </div>
                <div style="width: 20%" class="h-100 p-0 position-relative" ondrop="drop(event, 'tenth', '16')" ondragover="allowDrop(event)">
                    <input id=""  class="position-absolute w-100" disabled style="bottom : 0px; height: 19%" name="tenth"></input>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
<div id="challenge16RightSide" class="row pt-1 pt-lg-3">
    <div class="row mb-3 mb-xl-4">
        <p class="text-white p-0">Place le nom des membres de la famille au bon endroit.</p>
    </div>
    <div class="row justify-content-between pe-0" ondragover="allowDrop(event)" ondrop="dropBack(event)">
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_GRANDFATHER">
            <p class="m-0 ">the grandfather</p>
            <div class="frenchTranslation15">
                <p>le grand-père</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_FATHER">
            <p class="m-0 ">the father</p>
            <div class="frenchTranslation15">
                <p>le père</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_SON">
            <p class="m-0 ">the son</p>
            <div class="frenchTranslation15">
                <p>le fils</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_GRANDMOTHER">
            <p class="m-0 ">the grandmother</p>
            <div class="frenchTranslation15">
                <p>la grand-mère</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_DAUGHTER">
            <p class="m-0 ">the daughter</p>
            <div class="frenchTranslation15">
                <p>la fille</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_UNCLE">
            <p class="m-0 ">the uncle</p>
            <div class="frenchTranslation15">
                <p>l'oncle</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_COUSIN-1">
            <p class="m-0 ">the cousin</p>
            <div class="frenchTranslation15">
                <p>le cousin</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_AUNT">
            <p class="m-0 ">the aunt</p>
            <div class="frenchTranslation15">
                <p>la tante</p>
            </div>
        </div>
        <div class="challenge16Box text-white m-1 ps-1 ps-md-2 pt-1 pb-1 draggable" draggable="true" ondragstart="drag(event)" id="THE_COUSIN-2">
            <p class="m-0 ">the cousin</p>
            <div class="frenchTranslation15">
                <p>la cousine</p>
            </div>
        </div>
    </div>
    <div class="row m-0 ps-0 pt-2 pt-sm-3 pt-xl-5 pe-0">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 " style="width: 45%;" type="submit" form="form">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%;" onclick="showResponses('16')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 72%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
</div>`;


const challenge10 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>10.</span> L'heure</p>
<div class="row p-1 p-md-2 justify-content-center">
    <div id="challenge10PartOne" class="row p-3">
    <div class="col-6 text-left">
        <p class="text-danger fw-bold">AM/PM</p>
        <p>On distingue le matin de l’après-midi.</p>
        <p><span class="text-danger fw-bold">•</span> AM signifie <span class="text-danger fw-bold">ante meridiem</span> (avant	midi)</p>
        <p><span class="text-danger fw-bold">•</span> PM signifie <span class="text-danger fw-bold">post meridiem</span> (après	midi)</p>
        <p class="blueFont fst-italic mb-2 mt-2 fw-bold">Exemples:</p>
        <p>6 AM: <span class="frenchTranslationBlue">6 heures</span></p>
        <p>6 PM: <span class="frenchTranslationBlue">18 heures</span></p>
    </div>
    <div class="col-6 text-left">
        <p class="text-danger fw-bold">PAST/TO</p>
        <p>Les minutes se disent avant les heures.</p>
        <p>De la première à la trentième minutes, on utilise <span class="text-danger fw-bold">«past»</span>: ainsi <span class="text-danger fw-bold">«il est 8h20»</span> se dit <span class="text-danger fw-bold">«it’s twenty past eight»</span>.</p>
       <p>De la	trente-et-unième à cinquante-neuvième minute, on utilise <span class="text-danger fw-bold">«to»</span>: ainsi <span class="text-danger fw-bold">«il est 8h35»</span> se dit <span class="text-danger fw-bold">«it’s twenty-five to nine»</span>. C’est le nombre de minutes restantes avant qu'il soit	9 heures.</p>
    </div>
    <div class="col-12 text-left mt-3">
        <p class="text-danger fw-bold">LES CAS PARTICULIERS</p>
        <p><span class="text-danger fw-bold">•</span> L’heure pile se dit <span class="text-danger fw-bold">«o’clock»</span>, ainsi <span class="text-danger fw-bold">«il est 10h»</span> se dit <span class="text-danger fw-bold">«it's ten o’clock»</span>.</p>
        <p><span class="text-danger fw-bold">•</span> Le	quart	d’heure	se	dit <span class="text-danger fw-bold">«quarter»</span> ainsi <span class="text-danger fw-bold">«il	est	8h15»</span> se dit <span class="text-danger fw-bold">«it's quarter past eight»</span> et <span class="text-danger fw-bold">«il	est	6h45»</span> se dit <span class="text-danger fw-bold">«it's quarter to seven»</span>.</p>
        <p><span class="text-danger fw-bold">•</span> La	demi-heure	se	dit <span class="text-danger fw-bold">«half»</span> ainsi <span class="text-danger fw-bold">«il est	12h30»</span> se dit <span class="text-danger fw-bold">«it's half past twelve»</span> et non <span class="text-danger fw-bold">«it's thirty past twelve»</span>.</p>
        <p><span class="text-danger fw-bold">•</span> Midi	se	dit <span class="text-danger fw-bold">«noon»</span> et	plus	rarement <span class="text-danger fw-bold">«midday»</span>.</p>
        <p><span class="text-danger fw-bold">•</span> Minuit se	dit <span class="text-danger fw-bold">«midnight»</span>.</p>
    </div>
    </div>
    <div class="row mt-3 mt-xxl-5 justify-content-center position-absolute w-75" style="bottom: 10%">
        <button class="btn btn-primary me-2" style="width: 25%;" onClick="displaySecondPage('10')">Aller à la page suivante</button>
        <button class="btn btn-primary" style="width: 35%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
</div>`;

const challenge10_1 = `<div id="contentChallenge" class="container-fluid contentChallenge10_1">
<p class="challengeTitle whiteFont text-center"><span>10.</span> L'heure</p>
<div id="challenge10LeftSide">
    <img src="images/challenge10/challenge101Img.png" class="w-100">
</div>
<div id="challenge10RightSide">
    <p class="mb-2" id="instructions">Donne l'heure affichée sur la montre.</p>
    <div class="w-100 position-relative">
        <img src="images/challenge10/challenge102Img.png" class="w-100">
        <form id="form" class="w-100 h-100 position-absolute" style="top: 0px; left: 0px;" onsubmit="checkResponses(event, '10')">
            <div class="row w-100 ms-0 me-0" style="height: 4%; margin-top: 22%;">
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="first" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="second" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="third" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="fourth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
            </div>
            <div class="row w-100 ms-0 me-0" style="height: 4%; margin-top: 25.5%;">
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="fifth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="sixth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="seventh" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="eight" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
            </div>
            <div class="row w-100 ms-0 me-0" style="height: 4%; margin-top: 25.5%;">
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="ninght" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="tenth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="eleventh" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
                <div style="width: 25%" class="h-100 position-relative" >
                    <input class="w-100 h-100 position-absolute" style="top:0px; left:0px;" name="twelfth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 10)" autocomplete="off"></input>
                </div>
            </div>
        </form>
    </div>
</div>
<div class="row w-75 mt-3 mt-xxl-5 justify-content-center position-absolute" style="bottom: 0%; left: 25%">
    <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" type="submit" form="form">Vérifier</button>
    <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('10')" type="button">Les réponses</button>
    <button class="btn btn-primary  me-1 me-md-2 mb-1 mb-md-2" style= "width: 35%" onclick="backToFirstPage('10')" type="button">Retour à la première page</button>
    <button class="btn btn-primary  me-1 me-md-2 mb-1 mb-md-2" style= "width: 35%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
</div>
</div>`;

const challenge11 = `<div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>11.</span> Les	prépositions de lieu</p>
<div id="challenge11LeftSide">
        <img src="images/challenge11/challenge11Img.png" class="w-100">
</div>
<div id="challenge11RightSide" class="row pt-1 pt-lg-3" >
    <p id="instructions" class="p-0 mb-2 mb-xxl-4">Complète les phrases avec la bonne préposition de lieu.</p>
    <div class="row mb-0 mb-md-3 mb-xl-5" ondragover="allowDrop(event)" ondrop="dropBack(event)">
        <div class="challenge11Box text-white draggable me-2 mb-2" draggable="true" ondragstart="drag(event)" id="IN-1"><p class="m-0 p-1 text-center">in</p></div>
        <div class="challenge11Box text-white draggable me-2 mb-2" draggable="true" ondragstart="drag(event)" id="IN-2"><p class="m-0 p-1 text-center">in</p></div>
        <div class="challenge11Box text-white draggable me-2 mb-2" draggable="true" ondragstart="drag(event)" id="BEHIND" ><p class="m-0 p-1 text-center">behind</p></div>
        <div class="challenge11Box text-white draggable me-2 mb-2" draggable="true" ondragstart="drag(event)" id="ON"><p class="m-0 p-1 text-center">on</p></div>
        <div class="challenge11Box text-white draggable me-2 mb-2" draggable="true" ondragstart="drag(event)" id="NEXT"><p class="m-0 p-1 text-center">next</p></div>
    </div>
    <form onsubmit="checkResponses(event, '11')" id="form" class="p-0">
        <p>Hi, my name is Diane.</p>
        <p>I'm twelve and I'm <span><input maxlength="5" name="first" ondrop="drop(event, 'first', '11')" ondragover="allowDrop(event)" id="" class="context-menu"></input></span> Year 8.</p>
        <p>My desk is <span><input maxlength="5" name="second" ondrop="drop(event, 'second', '11')" ondragover="allowDrop(event)" id="" class="context-menu"></input></span> to the window and Kate's desk is  <span><input maxlength="5" name="third" ondrop="drop(event, 'third', '11')" ondragover="allowDrop(event)" id="" class="context-menu"></input></span> my desk. My exercise book is  <span><input maxlength="5" name="fourth" ondrop="drop(event, 'fourth', '11')" ondragover="allowDrop(event)" id="" class="context-menu"></input></span> my desk. My pencils and my pens are  <span><input maxlength="5" name="fifth" ondrop="drop(event, 'fifth', '11')" ondragover="allowDrop(event)" id="" class="context-menu"></input></span> my pencil case.</p>
        <div class="frenchTranslation15 mt-2 mt-lg-3">
            <p>Bonjour, je m'appelle Diane. J'ai 12 ans et je suis en cinquième. Mon bureau est à 
                côté de la fenêtre et le bureau de Kate est derrière mon bureau. Mes crayons et mes stylos sont dans ma trousse.</p>
        </div>
        <div class="row m-0 ps-0 pt-3 pt-xl-5">
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 34%;" type="submit">Vérifier</button>
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 34%;" onclick="showResponses('11')" type="button">Les réponses</button>
            <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2 " style="width: 62%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
        </div>
    </form>
</div>
</div>`;

const challenge24 = ` <div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>24.</span> Les prépositions de temps</p>
<div id="challenge24LeftSide" class="p-2 row">
    <p class="p-0 mb-2">On utilise aussi les propositions de lieu pour introduire des compléments circonstanciels de temps:</p>
    <div class="col-6 border-top border-end p-1">
        <p>In (+ year)</p>
        <p class="frenchTranslationBlue">En (+ année)</p>
    </div>
    <div class="col-6 border-top p-1">
        <p>On (+ day)</p>
        <p class="frenchTranslationBlue">Le (+ jour)</p>
    </div>
    <div class="col-6 border-top border-end p-1">
        <p>In (+ season)</p>
        <p class="frenchTranslationBlue">En (+ saison)</p>
    </div>
    <div class="col-6 border-top p-1">
        <p>On (+ date)</p>
        <p class="frenchTranslationBlue">On (+ date)</p>
    </div>
    <div class="col-6 border-top border-end p-1">
        <p>In (+ month)</p>
        <p class="frenchTranslationBlue">En (+ mois)</p>
    </div>
    <div class="col-6 border-top p-1">
        <p>At (+ time)</p>
        <p class="frenchTranslationBlue">À (+ heure)</p>
    </div>
    <div class="col-6 border-top border-end p-1">
        <p>In (+ part of the day)</p>
        <p class="frenchTranslationBlue">En (+ partie de la journée)</p>
    </div>
    <div class="col-6 border-top p-1">
        <p>At (night, the weekend)</p>
        <p class="frenchTranslationBlue">le soir, le week-end</p>
    </div>
    <p class="blueFont fst-italic p-0 mt-3">Exemples:</p>
    <p class="p-0">James is coming <span class="text-danger fw-bold">on</span> September 15th.</p>
    <p class="frenchTranslationBlue mb-2 p-0">James vient le 15 septembre.</p>

    <p class="p-0">I was born <span class="text-danger fw-bold">in</span> 2010.</p>
    <p class="frenchTranslationBlue p-0">Je suis né en 2010.</p>
  

</div>
<div id="challenge24RightSide" class="row pt-1 pt-lg-3">
    <form  onsubmit="checkResponses(event, '24')" id="form">
    <p class="mb-2" id="instructions">Complète les phrases suivantes par la bonne préposition de temps.</p>
    <p class="mb-0 mt-2">1. I love playing football with my friends <span><input maxlength="10" name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> the afternoon. </p>
    <div class="frenchTranslation15">
        <p>J'aime jouer au football avec mes amis l'après-midi.</p>
    </div>
    <p class="mb-0 mt-2">2. I don't go to school <span><input maxlength="10" name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> Saturdays.</p>
    <div class="frenchTranslation15">
        <p>Je ne vais pas à l'école le samedi.</p>
    </div>
    <p class="mb-0 mt-2">3. Our office is closed <span><input maxlength="10" name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> July.</p>
    <div class="frenchTranslation15">
        <p>Notre bureau est fermé en juillet.</p>
    </div>
    <p class="mb-0 mt-2">4. I will go on holidays <span><input maxlength="10" name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> Wednesday.</p>
    <div class="frenchTranslation15">
        <p>Je vais partir en vacances mercredi.</p>
    </div>
    <p class="mb-0 mt-2">5. I always go to bed <span><input maxlength="10" name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> 9pm.</p>
    <div class="frenchTranslation15">
        <p>Je vais toujours me coucher à 21 heures.</p>
    </div>
    <p class="mb-0 mt-2">6. I never drink fizzy drinks <span><input maxlength="10" name="sixth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> night.</p>
    <div class="frenchTranslation15">
        <p>Je ne bois jamais de boissons gazeuses le soir.</p>
    </div>
    <p class="mb-0 mt-2">7. My best friend always calls me <span><input maxlength="10" name="seventh" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> the evening.</p>
    <div class="frenchTranslation15">
        <p>Mon meilleur ami m'appelle toujours dans la soirée.</p>
    </div>
    <div class="row m-0 pt-3 pt-xl-5">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" type="submit">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%;" onclick="showResponses('24')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2"  style="width:45%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
    </form>
</div>
</div>`;

const challenge8 = `<div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>8.</span> Se présenter</p>
<div id="challenge8LeftSide" class="p-2 row">
    <p class="p-0 mb-2">Pour se présenter brièvement, il faut répondre à quelques questions de la manière suivante:</p>
    <div class="col-6 p-1">
        <p class="text-danger fw-bold bigger">Questions</p>
    </div>
    <div class="col-6 p-1">
        <p class="text-danger fw-bold bigger">Réponses</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">1. What is your name?</p>
        <p class="frenchTranslationBlue mb-1 mb-lg-2 mb-xxl-3 mb-xxl-3">Comment t'appelles-tu?</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Comment vous appelez-vous?</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">1. My name is Lucy.</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Mon prénom est Lucy.</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">2. What is your surname?</p>
        <p class="frenchTranslationBlue mb-1 mb-lg-2 mb-xxl-3">Quel est ton nom de famille?</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Quel est votre nom de famille?</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">2.My surname is Spencer.</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2"> Mon nom de famille est Spencer.</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">3. How old are you?</p>
        <p class="frenchTranslationBlue mb-1 mb-lg-2 mb-xxl-3">Quel âge as-tu?</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Quel âge avez-vous?</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">3. I am 11 years old.</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2"> J'ai 11 ans.</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">4. Where do you come from?</p>
        <p class="frenchTranslationBlue mb-1 mb-lg-2 mb-xxl-3">D'où viens-tu?</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">D'où venez-vous?</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">4. I come from France.</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Je viens de France.</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">5. Where do you live?</p>
        <p class="frenchTranslationBlue mb-1 mb-lg-2 mb-xxl-3">Où habites-tu?</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Où habitez-vous?</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">5. I live in Annecy.</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">J'habite à Annecy.</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">6. Have you got any brothers and sisters?</p>
        <p class="frenchTranslationBlue mb-1 mb-lg-2 mb-xxl-3">As-tu des frères et soeurs?</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Avez-vous des frères et soeurs?</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">6.  I have got two brothers and one sister.</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">J'ai deux frères et une soeur.</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">7. Have you got any pets?</p>
        <p class="frenchTranslationBlue mb-1 mb-lg-2 mb-xxl-3">As-tu des animaux de compagnie?</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2">Avez-vous des animaux de compagnie?</p>
    </div>
    <div class="col-6 border-top p-1">
        <p class="mb-lg-1 mb-xxl-2">7. I have got a dog.</p>
        <p class="frenchTranslationBlue mb-lg-1 mb-xxl-2"> J'ai un chien.</p>
    </div>
</div>
<div id="challenge8RightSide" class="row">
    <p class="mb-2 p-0" id="instructions">À toi de jouer ! Présente toi en répondant aux 7 questions.</p>
    <textarea rows="10"></textarea>
    <div class="row w-100 mt-3 mt-md-4 mt-xxl-5">
        <button class="btn btn-primary" style="width: 82%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
</div>`;

const challenge20 = `<div id="contentChallenge" class="text-center container-fluid contentChallenge20">
<p class="challengeTitle whiteFont"><span>20.</span> L'article indéfini "the"</p>
<div id="challenge20LeftSide" class="p-2 row">
    <p class="text-danger fw-bold mb-1 mb-md-2">L'article indéfini "the"</p>
    <p class="mb-1 mb-md-2"><span class="text-danger fw-bold">•</span> se traduit en français par <span class="text-danger fw-bold">"le"</span>, <span class="text-danger fw-bold">"la"</span>, <span class="text-danger fw-bold">"l'"</span>, ou <span class="text-danger fw-bold">"les"</span></p>
    <p class="mb-1 mb-md-2"><span class="text-danger fw-bold">•</span> est invariable</p>
    <p class="mb-1 mb-md-2">L'article <span class="text-danger fw-bold">"the"</span> est utilisé pour désigner des choses, des personnes ou des idées particulières, précises.</p>
    <p class="mb-1 mb-md-2">On n'emploie pas <span class="text-danger fw-bold">"the"</span> devant les <span class="text-danger fw-bold">généralités</span>, les noms de <span class="text-danger fw-bold">repas</span>, les noms de <span class="text-danger fw-bold">langues</span>, les noms <span class="text-danger fw-bold">d'activités sportives</span>, les noms de <span class="text-danger fw-bold">jours</span> ou de <span class="text-danger fw-bold">mois</span>.</p>
    <p class="blueFont fst-italic mb-0">Exemples:</p>
    <div class="col-6 text-left mb-1 mb-md-2">
        <p class="mb-0">Ø Cats are animals.</p>
        <p class="frenchTranslationBlue mb-1 mb-md-2">Les chats sont des animaux.</p>
        <p class="mb-0">Ø Breakfast is an important meal.</p>
        <p class="frenchTranslationBlue mb-1 mb-md-2">Le petit déjeuner est un repas important.</p>
        <p class="mb-0">I like Ø English.</p>
        <p class="frenchTranslationBlue mb-1 mb-md-2">J'aime l'anglais.</p>
    </div>
    <div class="col-6 text-left mb-1 mb-md-2">
        <p class="mb-0">I often play Ø tennis.</p>
        <p class="frenchTranslationBlue mb-1 mb-md-2">Je joue souvent au tennis.</p>
        <p class="mb-0">Ø Sunday is the best day of the week.</p>
        <p class="frenchTranslationBlue mb-1 mb-md-2">Dimanche est le meilleur jour de la semaine.</p>
    </div>
    <p class="mb-1 mb-md-2">On emploie "the" dans certains cas spécifiques, notamment pour dire que l'on joue d'un instrument de musique, et devant les noms de pays composés de noms communs.</p>
    <p class="blueFont fst-italic mb-0">Exemples:</p>
    <div class="col-5 text-left mb-1 mb-md-2">
        <p class="mb-0">I play the violin.</p>
        <p class="frenchTranslationBlue mb-1 mb-md-2">Je joue du violon.</p>
    </div>
    <div class="col-7 text-left mb-1 mb-md-2 pe-0">
        <p class="mb-0">I live in the United States of America.</p>
        <p class="frenchTranslationBlue mb-1 mb-md-2">J'habite aux Etats-Unis.</p>
    </div>
</div>
<div id="challenge20RightSide" class="row pt-1 pt-lg-3">
    <form  onsubmit="checkResponses(event, '20')" id="form">
    <p class="mb-2" id="instructions">Complète les phrases suivantes par l'article the si nécessaire.</p>
    <p class="mb-0 mt-1 mt-md-2">1. <span><input maxlength="10" name="first" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> breakfast is my favourite meal. </p>
    <div class="frenchTranslation15">
        <p>Le petit déjeuner est mon repas préféré.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">2. I have a Geography class on <span><input maxlength="10" name="second" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> Monday.</p>
    <div class="frenchTranslation15">
        <p>J'ai un cours de géographie le lundi.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">3. They are having <span><input maxlength="10" name="third" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> dinner.</p>
    <div class="frenchTranslation15">
        <p>Ils sont en train de dîner.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">4. Can you give me <span><input maxlength="10" name="fourth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> bottle of water, please?</p>
    <div class="frenchTranslation15">
        <p>Pouvez-vous me donner la bouteille d'eau, s'il vous plaît?</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">5. I want to see <span><input maxlength="10" name="fifth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> new movie by Spielberg.</p>
    <div class="frenchTranslation15">
        <p>Je veux voir le nouveau film de Spielberg.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">6. Jimmy plays <span><input maxlength="10" name="sixth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> drums.</p>
    <div class="frenchTranslation15">
        <p>Jimmy joue de la batterie.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">7. Lisa plays <span><input maxlength="10" name="seventh" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> guitar.</p>
    <div class="frenchTranslation15">
        <p>Lisa joue de la guitare.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">8. <span><input maxlength="10" name="eight" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> boys in Kyle's class are very nice.</p>
    <div class="frenchTranslation15">
        <p>Les garçons dans la classe de Kyle sont très gentils.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">9. We go to the cinema every <span><input maxlength="10" name="ninght" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> Friday.</p>
    <div class="frenchTranslation15">
        <p>Nous allons au cinéma tous les vendredis.</p>
    </div>
    <p class="mb-0 mt-1 mt-md-2">10. <span><input maxlength="10" name="tenth" oninput="this.value=this.value.toUpperCase()" autocomplete="off"></input></span> house of my mother is in London.</p>
    <div class="frenchTranslation15">
        <p>La maison de ma mère est à Londres.</p>
    </div>
    <div class="row m-0 pt-1 pt-md-3 pt-xl-5">
        <button class="btn btn-primary me-1 me-md-2" style="width: 23%;" type="submit">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 " style="width: 25%;" onclick="showResponses('20')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 "  style="width:45%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
    </form>
</div>
</div>`;

const challenge13 = `<div id="contentChallenge" class="container-fluid contentChallenge13">
<p class="challengeTitle whiteFont text-center"><span>13.</span> There is/There are</p>
<div id="challenge13LeftSide" class="row p-1 p-md-2">
    <p class="mb-1 p-0"> Pour désigner quelque chose ou pour signaler l'existence d'une chose, on utilise l'expression "There is ..." ou "There are ...", que l'on peut traduire en français par "il y a".</p>

    <p class="text-danger fw-bold mb-1 mt-1 mb-lg-2 mt-lg-2 p-0 bigger">La forme affirmative</p>

    <div class="row border-top border-bottom p-1 ms-0">
        <div class="col-6 text-left ps-0">
            <p class="mb-1">There is + groupe nominal singulier</p>
            <p class="mb-1">There is a dog in the street.</p>
            <p class="mb-1 frenchTranslationBlue">Il y a un chien dans la rue.</p>
        </div>
        <div class="col-6 text-left">
            <p class="mb-1">There are + groupe nominal pluriel</p>
            <p class="mb-1">There are two cats in the garden.</p>
            <p class="mb-1 frenchTranslationBlue">Il y a deux chats dans le jardin.</p>
        </div>
    </div>

    <p class="text-danger fw-bold mb-1 mt-1 mb-lg-2 mt-lg-2 p-0 bigger">La forme négative</p>

    <div class="row border-top border-bottom p-1 ms-0">
        <div class="col-6 text-left ps-0">
            <p class="mb-1">There isn't + groupe nominal singulier</p>
            <p class="mb-1">There isn't a dog in the street.</p>
            <p class="mb-1 frenchTranslationBlue">Il n'y a pas de chien dans la rue.</p>
        </div>
        <div class="col-6 text-left">
            <p class="mb-1">There aren't + groupe nominal pluriel</p>
            <p class="mb-1">There aren't two cats in the garden.</p>
            <p class="mb-1 frenchTranslationBlue">Il n'y a pas deux chats dans le jardin.</p>
        </div>
    </div>

    <p class="text-danger fw-bold mb-1 mt-1 mb-lg-2 mt-lg-2 p-0 bigger">La forme interrogative (Yes/No question)</p>

    <div class="row border-top p-1 ms-0">
        <div class="col-6 text-left ps-0">
            <p class="mb-1">Is there + groupe nominal singulier?</p>
            <p class="mb-1">Is there a dog in the street?</p>
            <p class="mb-1 frenchTranslationBlue">Y a-t-il un chien dans la rue?</p>
            <p class="mb-1">Yes, there is.</p>
            <p class="mb-1 frenchTranslationBlue">Oui.</p>
            <p class="mb-1">No, there isn't.</p>
            <p class="mb-1 frenchTranslationBlue">Non.</p>
        </div>
        <div class="col-6 text-left">
            <p class="mb-1">Are there + groupe nominal pluriel?</p>
            <p class="mb-1">Are there two cats in the garden?</p>
            <p class="mb-1 frenchTranslationBlue">Y a-t-il deux chats dans le jardin?</p>
            <p class="mb-1">Yes, there are.</p>
            <p class="mb-1 frenchTranslationBlue">Oui.</p>
            <p class="mb-1">No, there aren't.</p>
            <p class="mb-1 frenchTranslationBlue">Non.</p>
        </div>
    </div>
</div>
<div id="challenge13RightSide">
<p class="mb-3 mb-xl-4" id="instructions">Sélectionne la bonne réponse entre there is et there are. </p>
<p>1. <span class="context-menu" id="first-is" onclick="setBold(event)">There is</span>/<span class="context-menu" id="first-are" onclick="setBold(event)">There are</span> a computer in his room.</p>
<div class="frenchTranslation15 mb-2 mb-md-3">
    <p>Il y a un ordinateur dans la pièce.</p>
</div>
<p>2. <span class="context-menu" id="second-is" onclick="setBold(event)">There is</span>/<span class="context-menu" id="second-are" onclick="setBold(event)">There are</span> are two cars in the garage.</p>
<div class="frenchTranslation15 mb-2 mb-md-3">
    <p>Il y a deux voitures dans le garage.</p>
</div>
<p>3. <span class="context-menu" id="third-is" onclick="setBold(event)">There is</span>/<span class="context-menu" id="third-are" onclick="setBold(event)">There are</span> thirty students in the class.</p>
<div class="frenchTranslation15 mb-2 mb-md-3">
    <p>Il y a trente élèves dans la classe.</p>
</div>
<p>4. <span class="context-menu" id="fourth-is" onclick="setBold(event)">There is</span>/<span class="context-menu" id="fourth-are" onclick="setBold(event)">There are</span> clothes on the floor.</p>
<div class="frenchTranslation15 mb-2 mb-md-3">
    <p>Il y a des vêtements sur le sol.</p>
</div>
<p>5. <span class="context-menu" id="fifth-is" onclick="setBold(event)">There is</span>/<span class="context-menu" id="fifth-are" onclick="setBold(event)">There are</span> a book on the table.</p>
<div class="frenchTranslation15 mb-2 mb-md-3">
    <p>Il y a un livre sur la table.</p>
</div>
<p>6. <span class="context-menu" id="sixth-is" onclick="setBold(event)">There is</span>/<span class="context-menu" id="sixth-are" onclick="setBold(event)">There are</span> a lot of beautiful trainers in this shop.</p>
<div class="frenchTranslation15 mb-2 mb-md-3">
    <p>Il y a beaucoup de belles baskets dans ce magasin.</p>
</div>
</div>
<div class="row justify-content-center w-100 challenge13Buttons pe-5 ps-5 ">
<button class="btn btn-primary me-2" style="width: 15%;" onclick="checkResponses(event, '13')">Vérifier</button>
<button class="btn btn-primary me-2 " style="width: 15%;" onclick="showResponses('13')" type="button">Les réponses</button>
<button class="btn btn-primary" style="width: 30%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
</div>`;

const challenge17 = ` <div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>17.</span> L'auxiliaire avoir</p>
<div id="challenge17PartOne" class="row p-1 p-md-2">
    <div class="col-6 text-left" style="z-index: 999">
        <p class="text-danger fw-bold mb-2 mb-xxl-4">To have est utilisé:</p>
        <p><span class="text-danger fw-bold">•</span> pour exprimer l’idée d’avoir, et la possession</p>

        <p class="blueFont fst-italic mt-2 fw-bold">Exemple:</p>
        <p class="mb-1">John has two cars.</p>
        <p class="translation blueFont fst-italic">John a deux voitures.</p>
      
        <p class="text-danger fw-bold mb-2 mt-2">Attention! Have et have got ont le même sens. Have got s’utilise dans un contexte familier et uniquement au présent simple.</p>

        <p><span class="text-danger fw-bold">•</span> pour exprimer l’idée de prendre, consommer ou d’avoir une activité</p>

        <p class="blueFont fst-italic mt-2 fw-bold">Exemples:</p>
        <p class="mb-1">Let’s have a drink!</p>
        <p class="translation blueFont fst-italic">Prenons un verre!</p>
        <p class="mb-1">Mark had a shower.</p>
        <p class="translation blueFont fst-italic">Mark a pris une douche.</p>
      
        <p><span class="text-danger fw-bold">•</span> pour exprimer un devoir, une contrainte (have to + base verbale)</p>

        <p class="blueFont fst-italic mt-2 fw-bold">Exemple:</p>
        <p class="mb-1">Do you have to tidy your bedroom now?</p>
        <p class="translation blueFont fst-italic">Dois-tu ranger ta chambre maintenant?</p>

    </div>
    <div class="col-6 text-left position-relative" style="z-index: 999">
        <p>Le verbe avoir se conjugue de la manière suivante au présent simple:</p>

        <p class="text-danger fw-bold mb-2">To have - Avoir / Forme affirmative</p>

        <div class="row border-top border-bottom p-1">
            <div class="col-6 text-left">
                <p class="blueFont fw-bold mb-1">Sujet</p>
                <p class="mb-1">I</p>
                <p class="mb-1">He/She/It</p>
                <p class="mb-1">We/You/They</p>
            </div>
            <div class="col-6 text-left">
                <p class="blueFont fw-bold mb-1">To have</p>
                <p class="mb-1">have</p>
                <p class="mb-1">has</p>
                <p class="mb-1">have</p>
            </div>
        </div>

        <p class="text-danger fw-bold mb-2 mt-3">To have - Avoir / Forme négative</p>
        
        <div class="row border-top border-bottom p-1">
            <div class="col-6 text-left">
                <p class="blueFont fw-bold mb-1">Sujet</p>
                <p class="mb-1">I</p>
                <p class="mb-1">He/She/It</p>
                <p class="mb-1">We/You/They</p>
            </div>
            <div class="col-6 text-left">
                <p class="blueFont fw-bold mb-1">To have</p>
                <p class="mb-1">have not</p>
                <p class="mb-1">has not</p>
                <p class="mb-1">have not</p>
            </div>
        </div>

        <p class="text-danger fw-bold mb-2 mt-3">To have - Avoir / Forme interrogative</p>
        
        <div class="row border-top border-bottom p-1">
            <div class="col-6 text-left">
                <p class="blueFont fw-bold mb-1">To have</p>
                <p class="mb-1">Have</p>
                <p class="mb-1">Has</p>
                <p class="mb-1">Have</p>
            </div>
            <div class="col-6 text-left">
                <p class="blueFont fw-bold mb-1">Sujet</p>
                <p class="mb-1">I</p>
                <p class="mb-1">he/she/it</p>
                <p class="mb-1">we/you/they</p>
            </div>
        </div>
</div>
</div>
<div class="row justify-content-center w-100 position-absolute challenge17Buttons">
<button class="btn btn-primary me-2" style="width:25%;" onClick="displaySecondPage('17')">Aller à la page suivante</button>
<button class="btn btn-primary" style="width:25%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
</div>`;

const challenge17_1 = ` <div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>17.</span> L'auxiliaire avoir</p>
<div id="challenge17PartTwo">
    <form onsubmit="checkResponses(event, '17')" id="form" class="row pt-3 pt-md-5 mt-xl-5">
    <p class="mb-3 mb-xl-4" id="instructions">Complète les phrases avec le verbe have au présent simple en fonction du sujet.</p> 
    <div class="col-12">
        <p>1. My mum <span><input maxlength="15" name="first" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 17)" autocomplete="off"></input></span> a new handbag.</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Ma maman a un nouveau sac à main.</p>
        </div>
        <p>2. They <span><input maxlength="15" name="second" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 17)" autocomplete="off"></input></span> a big swimming pool in their garden.</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Ils ont une grande piscine dans leur jardin.</p>
        </div>
        <p>3. He <span><input maxlength="15" name="third" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 17)" autocomplete="off"></input></span> to clean the bathroom before leaving.</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Il doit nettoyer la salle de bain avant de partir.</p>
        </div>
        <p>4. Kate and I <span><input maxlength="15" name="fourth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 17)" autocomplete="off"></input></span> a wonderful daughter named Jane.</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Kate et moi avons une merveilleuse fille prénommée Jane.</p>
        </div>
        <p>5. We <span><input maxlength="15" name="fifth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 17)" autocomplete="off"></input></span> a nice little dog.</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Nous avons un gentil petit chien.</p>
        </div>
        <p>6. I <span><input maxlength="15" name="sixth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 17)" autocomplete="off"></input></span> to do a lot of homework!</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Je dois faire beaucoup de devoirs!</p>
        </div>
        <p>7. Let's <span><input maxlength="15" name="seventh" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 17)" autocomplete="off"></input></span> a party tonight!</p>
        <div class="frenchTranslation15 mb-2 mb-md-3">
            <p>Faisons la fête ce soir!</p>
        </div>
    </div>
    <div class="row m-0 pt-3 pt-xl-5">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%" type="submit">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 25%" onclick="showResponses('17')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 35%" onclick="backToFirstPage('17')" type="button">Retour à la première page</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 35%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
    </form>
</div>
</div>`;

const challenge21 = ` <div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>21.</span> Le prétérit simple</p>
<div class="row p-1 p-md-2">
    <div id="challenge21PartOne" class="row p-3">
    <div class="col-12 text-left">
        <p class="text-danger fw-bold mb-1">Forme affirmative:</p>
        <p class="mb-1">Sujet + base verbale + ed (+complément).</p>
        <p class="blueFont fst-italic mb-1 mt-2 fw-bold">Exemple:</p>
        <p class="mb-1">I <span class="text-danger fw-bold">cooked</span> yesterday for my mother.</p>
        <p class="frenchTranslationBlue">J'ai cuisiné hier pour ma mère.</p>

        <p class="text-danger fw-bold mt-2 mb-1">Les exceptions</p>
        <p><span class="text-danger fw-bold">•</span> Si le verbe se termine par un <span class="text-danger fw-bold">-E</span>, on n’ajoute qu’un <span class="text-danger fw-bold">-D</span>.</p>

        <p class="blueFont fst-italic mb-1 mt-2 fw-bold">Exemple:</p>
        <p class="mb-1">to dance <span class="frenchTranslationBlue fst-italic">(danser)</span> > he danced <span class="frenchTranslationBlue fst-italic">(il a dansé)</span></p>
        <p class="mb-1 mt-2"><span class="text-danger fw-bold">•</span> Si le verbe se termine par un <span class="text-danger fw-bold">-Y</span>, précédé d'une <span class="text-danger fw-bold">consonne</span>, on remplace le <span class="text-danger fw-bold">-Y</span> par un <span class="text-danger fw-bold">-I</span> et on ajoute <span class="text-danger fw-bold">-ED</span>. </p>

        <p class="blueFont fst-italic mb-1 mt-2 fw-bold">Exemples:</p>
        <p class="mb-1">to study <span class="frenchTranslationBlue fst-italic">(étudier)</span> > he <span class="text-danger fw-bold">studied</span> <span class="frenchTranslationBlue fst-italic">(il a étudié)</span></p>
        <p class="mb-1">to worry <span class="frenchTranslationBlue fst-italic">(s’inquiéter)</span> > we <span class="text-danger fw-bold">worried</span> <span class="frenchTranslationBlue fst-italic">(nous nous sommes inquiétés)</span></p>
        
        <p class="mt-2"><span class="text-danger fw-bold">•</span> Si le verbe se termine par la combinaison, <span class="text-danger fw-bold">consonne + voyelle + consonne et qu’il est d’une syllabe</span>, alors on double la dernière consonne et on ajoute <span class="text-danger fw-bold">-ED</span>.</p>

        <p class="blueFont fst-italic mb-1 mt-2 fw-bold">Exemples:</p>
        <p class="mb-1">to tap <span class="frenchTranslationBlue fst-italic">(percer)</span> > he <span class="text-danger fw-bold">tapped</span> <span class="frenchTranslationBlue fst-italic">(il a percé)</span></p>
        <p class="mb-1">to chat <span class="frenchTranslationBlue fst-italic">(bavarder)</span> > she <span class="text-danger fw-bold">chatted</span> <span class="frenchTranslationBlue fst-italic">(elle a discuté)</span></p>
    </div>
    </div>
    <div class="row mt-3 mt-xxl-5 justify-content-center position-absolute" style="bottom: 10%">
        <button class="btn btn-primary w-25 me-2" onClick="displaySecondPage('211')">Aller à la page suivante</button>
        <button class="btn btn-primary w-25"  onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
</div>`;

const challenge21_1 =`<div id="contentChallenge" class="container-fluid contentChallenge21_1">
            <p class="challenge21Title whiteFont text-center"><span>21.</span> Le prétérit simple</p>
            <div class="row justify-content-center" id="challenge21PartTwo">
                <div class="col-7 col-lg-6">
                    <p class="mb-1 mb-md-2" id="instructions">Pour les verbes irréguliers, il faut se référer à la liste. Ci-dessous, une liste non exhaustive des verbes irréguliers les plus courants. Ils sont à apprendre par coeur.</p>
                    <p id="instructions"><span class="yellowFont">Attention:</span> On utilise les verbes irréguliers qu'à la forme affirmative.</p>
                </div>
                <div class="row mt-3 mt-xxl-5 justify-content-center position-absolute" style="bottom: 2.5%">
                    <button class="btn btn-primary w-25 me-2" onClick="displaySecondPage('212')">Aller à la page suivante</button>
                    <button class="btn btn-primary me-1 me-md-2 w-25" onclick="backToFirstPage('210')" type="button">Retour à la première page</button>
                    <button class="btn btn-primary w-25"  onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
                </div>
            </div>
        </div>`;

const challenge21_2 = `<div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>21.</span> Le prétérit simple</p>
<div id="challenge21LeftSide" class="p-2 row">
    <p class="text-danger fw-bold mb-0 p-0">Forme négative:</p>
    <p class="mb-1 p-0">Sujet + did + not + base verbale (+complément).</p>

    <p class="blueFont fst-italic p-0 mb-0 mt-2 fw-bold">Exemple:</p>
    <p class="p-0">We <span class="text-danger fw-bold">did not</span> play with them in the garden.</p>
    <p class="frenchTranslationBlue p-0">Nous n'avons pas joué avec eux dans le jardin.</p>

    <p class="text-danger p-0 mt-2">Forme interrogative:</p>
    <p class="p-0">(pronom interrogatif +) did + sujet + base verbale (+complément) ?</p>

    <p class="blueFont fst-italic p-0 mb-0 mt-2 fw-bold">Exemple:</p>
    <p class="p-0"><span class="text-danger fw-bold">Did</span> you <span class="text-danger fw-bold">watch</span> the news?</p>
    <p class="frenchTranslationBlue p-0">As-tu regardé le journal télévisé?</p>
    
    <p class="p-0 mt-2">On emploie le prétérit simple pour:</p>
    <p class="p-0"><span class="text-danger fw-bold">•</span> Évoquer des faits ponctuels du passé, sans les relier au contexte présent</p>
    <p class="p-0"><span class="text-danger fw-bold">•</span> Faire un récit au passé</p>

    <p class="blueFont fst-italic p-0 mb-0 mt-2 fw-bold">Exemples:</p>
    <p class="p-0">Their uncle worked in London for a few years.</p>
    <p class="frenchTranslationBlue p-0 mb-1">Leur oncle a travaillé à Londres pendant quelques années. (fait coupé du présent)</p>
    <p class="p-0">And they lived happily ever after.</p>
    <p class="frenchTranslationBlue p-0">Ils vécurent heureux et eurent beaucoup d'enfants. (récit au passé)</p>
</div>
<div id="challenge21RightSide" class="row pt-1 pt-lg-3">
    <form  onsubmit="checkResponses(event, '21')" id="form">
    <p class="mb-2" id="instructions">Conjugue les verbes entre parenthèses au prétérit simple. Fais attention à la forme de la phrase: affirmative, négative ou interrogative.</p>
    <p class="mb-0 mt-2">1. He <span><input maxlength="20" name="first" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 21)" autocomplete="off"></input></span> <span class="fst-italic">(not/study)</span>	at	Miles	Johnson University. </p>
    <div class="frenchTranslation15">
        <p>Il n'a pas étudié à l'université Miles Johnson.</p>
    </div>
    <p class="mb-0 mt-2">2. <span><input maxlength="20" name="second" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 21)" autocomplete="off"></input></span> 	<span class="fst-italic">(she/cook)</span> a delicious meal	for	her	husband?</p>
    <div class="frenchTranslation15">
        <p>A t-elle cuisiné un délicieux repas pour son mari?</p>
    </div>
    <p class="mb-0 mt-2">3. Last night I <span><input maxlength="20" name="third" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 21)" autocomplete="off"></input></span> <span class="fst-italic">(watch)</span> a movie with my parents.</p>
    <div class="frenchTranslation15">
        <p>J'ai regardé un film avec mes parents hier soir.</p>
    </div>
    <p class="mb-0 mt-2">4. I <span><input maxlength="20" name="fourth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 21)" autocomplete="off"></input></span> <span class="fst-italic">(not/eat)</span> at the restaurant with my friend.</p>
    <div class="frenchTranslation15">
        <p>Je n'ai pas mangé au restaurant avec mon ami.</p>
    </div>
    <p class="mb-0 mt-2">5. <span><input maxlength="20" name="fifth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 21)" autocomplete="off"></input></span> <span class="fst-italic">(they/find)</span> a treasure in their garden?</p>
    <div class="frenchTranslation15">
        <p>Ont-ils trouvé un trésor dans leur jardin?</p>
    </div>
    <p class="mb-0 mt-2">6. We <span><input maxlength="20" name="sixth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 21)" autocomplete="off"></input></span> <span class="fst-italic">(be)</span> in the same school.</p>
    <div class="frenchTranslation15">
        <p>Nous étions dans la même école.</p>
    </div>
    <p class="mb-0 mt-2">7. I <span><input maxlength="20" name="seventh" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 21)" autocomplete="off"></input></span> <span class="fst-italic">(learn)</span> a lot of interesting things with my teacher.</p>
    <div class="frenchTranslation15">
        <p>J'ai appris beaucoup de choses intéressantes avec mon professeur.</p>
    </div>
    </form>
</div>
<div class="row m-0 position-absolute challenge21_2Buttons">
    <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width:15%" type="submit" form="form">Vérifier</button>
    <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2"  style="width:15%" onclick="showResponses('21')" type="button">Les réponses</button>
    <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width:30%" onclick="backToFirstPage('211')" type="button">Retour à la première page</button>
    <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width:30%" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
</div>
</div>`;


const challenge23 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>23.</span> Les yes/no questions</p>
<div class="row p-1 p-md-2 justify-content-center">
    <div id="challenge23PartOne" class="row p-3">
        <div class="col-5 text-left">
            <p class="mb-2 mb-md-3">Il existe deux types de questions en anglais, <span class="text-danger fw-bold">les questions ouvertes et les questions fermées</span>.</p>
            <p class="mb-2 mb-md-3">Les questions ouvertes commencent par un pronom interrogatif (why: <span class="fst-italic">pourquoi</span>, when: <span class="fst-italic">quand</span>, where: <span class="fst-italic">où</span>, etc.) et ont <span class="text-danger fw-bold">une multitude de possibilités de réponses</span>.</p>
            <p class="mb-2 mb-md-3">Les questions fermées, les yes/no questions, commencent par un auxiliaire (be: <span class="fst-italic">être</span>, have: <span class="fst-italic">avoir</span>, do: <span class="fst-italic">faire</span> et auxiliaire utilisé pour former des phrases à la forme négative et interrogative) ou un modal (can, will, should, etc.).</p>
            <p class="mb-2 mb-md-3">Les deux possibilités de réponses pour ce type de question sont <span class="text-danger fw-bold">oui</span> et <span class="text-danger fw-bold">non</span>.</p>
            <p class="frenchTranslationBlue mb-2 mb-md-3" style="line-height: 1em;">Pour ce cours nous nous concentrerons sur les yes/no questions avec les auxiliaires be, have et do au présent simple. </p>
            <p class="mb-0">Pour répondre à une question fermée, on n'utilise pas simplement <span class="text-danger fw-bold">yes</span> ou <span class="text-danger fw-bold">no</span>, mais on formule une réponse courte sur le modèle suivant: </p>
        </div>
        <div class="col-7 text-left">
            <p><span class="text-danger fw-bold">•</span> Si la réponse est affirmative:</p>
            <p><span class="text-danger fw-bold">Yes</span> + sujet (repris par un pronom personnel) + <span class="text-danger fw-bold">auxiliaire conjugué à la forme affirmative</span>.</p>
            <p><span class="text-danger fw-bold">•</span> Si la réponse est négative:</p>
            <p><span class="text-danger fw-bold">No</span> + sujet (repris par un pronom personnel) + <span class="text-danger fw-bold">auxiliaire conjugué à la forme négative</span>.</p>
            <p class="blueFont fst-italic mb-1 mt-2 mt-mb-3 fw-bold">Exemples:</p>
            <p class="mb-1 mb-1 mt-2">- Have you got the keys of the house?</p>
            <p class="frenchTranslationBlue">- As-tu les clés de la maison?</p>
            <p class="mb-1 mb-1 mt-2">- Yes, I have.</p>
            <p class="frenchTranslationBlue">- Oui.</p>
            <p class="mb-1 mb-1 mt-2">- Is Mark your new teacher?</p>
            <p class="frenchTranslationBlue">- Est-ce que Mark est ton nouveau professeur?</p>
            <p class="mb-1 mb-1 mt-2">- No, he is not.</p>
            <p class="frenchTranslationBlue">- Non.</p>
            <p class="mb-1 mb-1 mt-2">- Does Emma live in France?</p>
            <p class="frenchTranslationBlue">- Est-ce que Emma vit en France?</p>
            <p class="mb-1 mb-1 mt-2">- Yes, she does.</p>
            <p class="frenchTranslationBlue">- Oui.</p>
        </div>
    </div>
    
</div>
<div class="row mt-3 mt-xxl-5 justify-content-center w-100 challenge23Buttons">
    <button class="btn btn-primary me-2" style="width:25%;" onClick="displaySecondPage('23')">Aller à la page suivante</button>
    <button class="btn btn-primary"  style="width:25%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
</div>
</div>`;

const challenge23_1 = `<div id="contentChallenge" class="container-fluid contentChallenge">
<p class="challengeTitle whiteFont text-center"><span>23.</span> Les yes/no questions</p>
<div class="row p-1 p-md-2 justify-content-center">
    <div id="challenge23PartTwo" class="row p-3 mt-md-5">
        <div class="col-1"></div>
        <div class="col-4 text-left mt-5">
            <p class="mb-4" id="instructions">Réponds aux questions suivantes en donnant les deux possibilités de réponses.</p>
            <p class="fst-italic yellowFont">Exemple:</p>
            <p class="mb-1">Are you French?</p>
            <div class="frenchTranslation15">
                <p>Es-tu français?</p>
            </div>
            <p class="mt-2">Yes, I am. / No, I am not.</p>
            <div class="frenchTranslation15">
                <p>Oui / Non</p>
            </div>
        </div>
        <div class="col-7 text-left  ps-0 ps-sm-2">
            <form  onsubmit="checkResponses(event, '23')" id="form">
                <p class="mb-0 mt-2">1. Do you live in Germany? <span><input name="first" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 23)" autocomplete="off"></input></span></p>
                <div class="frenchTranslation15">
                    <p>Est-ce que tu vis en Allemagne?</p>
                </div>
                <p class="mb-0 mt-2">2. Have you got a brother? <span><input name="second" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 23)" autocomplete="off"></input></span></p>
                <div class="frenchTranslation15">
                    <p>As-tu un frère?</p>
                </div>
                <p class="mb-0 mt-2">3. Is it a good film? <span><input name="third" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 23)" autocomplete="off"></input></span></p>
                <div class="frenchTranslation15">
                    <p>Est-ce un bon film?</p>
                </div>
                <p class="mb-0 mt-2">4. Has your dad got a Porsche? <span><input name="fourth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 23)" autocomplete="off"></input></span></p>
                <div class="frenchTranslation15">
                    <p>Est-ce que ton père a une Porsche?</p>
                </div>
                <p class="mb-0 mt-2">5. Does he want to come tonight? <span><input name="fifth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 23)" autocomplete="off"></input></span></p>
                <div class="frenchTranslation15">
                    <p>Est-ce qu'il veut venir ce soir?</p>
                </div>
                <p class="mb-0 mt-2">6. Do they know the answer? <span><input name="sixth" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 23)" autocomplete="off"></input></span></p>
                <div class="frenchTranslation15">
                    <p>Est-ce qu'ils connaissent la réponse? </p>
                </div>
                <p class="mb-0 mt-2">7. Is she tired? <span><input name="seventh" oninput="this.value=this.value.toUpperCase();rememberAnswer(event, 23)" autocomplete="off"></input></span></p>
                <div class="frenchTranslation15">
                    <p>Est-elle fatiguée?</p>
                </div>
                </form>
        </div>
    </div>
    <div class="row mt-3 mt-xxl-5 justify-content-center position-absolute w-75 challenge23_1Buttons">
        <button class="btn btn-primary me-1 me-md-2 " style="width:20%;" type="submit" form="form">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 " style="width:20%;" onclick="showResponses('23')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2" style="width: 35%;" onclick="backToFirstPage('23')" type="button">Retour à la première page</button>
        <button class="btn btn-primary mt-2"  style="width: 35%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
</div>`;

const challenge18 = `<div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>18.</span> Les parties du corps</p>
<div id="challenge18LeftSide">
        <div class="w-100 position-relative">
               
                <img src="images/challenge18/challenge18Img.png" class="w-100"></img>
                <!-- left side -->
                <div id="answers">
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 8%; left: 10%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 8%; left: 19%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 22%; left: 9%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 22%; left: 18%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 11%; top: 28.5%; left: 7%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png"  style="position:absolute; z-index : 999; opacity : 0; width: 11%; top: 28.5%; left: 17%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 15%; top: 39%; left: 6%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 42%; left: 20%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 13%; top: 62%; left: 8%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 63%; left: 18%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 72%; left: 13%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png"  class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 8%; top: 73%; left: 21%;" onclick="circle(event)"></img>
                </div>
                
                <!-- Right side -->
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 12%; left: 71%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 12%; left: 80%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 8%; top: 20%; left: 71%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 8%; top: 20%; left: 78%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 25%; left: 71%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 25%; left: 78%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 12%; top: 30.5%; left: 71%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 32%; left: 82%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 42%; left: 71%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 42%; left: 78%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 53.5%; left: 71%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 10%; top: 53.5%; left: 79.5%;" onclick="circle(event)"></img>
                </div>
                <div>
                        <img src="images/elipse.png" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 80%; left: 71%;" onclick="circle(event)"></img>
                        <img src="images/elipse.png" class="correct" style="position:absolute; z-index : 999; opacity : 0; width: 9%; top: 80%; left: 78%;" onclick="circle(event)"></img>
                </div>
                </div>
        </div>
</div>
<div id="challenge18RightSide" class="row pt-1 pt-lg-3">
   <p id="instructions">Pour chaque numéro, entoure la bonne réponse entre les deux propositions. Puis écoute les bonnes réponses. </p>
   <div class="row mt-5 pt-3 pt-xl-5">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%" onclick="checkResponses(event, '18')">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 45%" onclick="{showResponses('18');play(event);}" type="button" id="challenge18">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 74%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>
<audio id="audio" type="audio/mpeg"></audio>
</div>`;

const challenge12 = `<div id="contentChallenge" class="text-center container-fluid contentChallenge">
<p class="challengeTitle whiteFont"><span>12.</span> Le vocabulaire de Noël</p>
<p class="text-white" id="instructions">Retrouve dans la grille tous les mots de la liste ci-dessous soit verticalement ou horizontalement.</p>
<div id="challenge12LeftSide">
        <img src="images/challenge12/challenge12Img101.png" class="w-100">
</div>
<div id="challenge12RightSide" class="row pt-1 pt-lg-3">
    <div class="w-100 position-relative">
    <table style="font-weight: 400;" data-tablestyle="MsoNormalTable" data-tablelook="480" id="our_table">
        <tbody id="challenge12Table">
        <tr id="row">
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:141,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:11,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:18,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:16,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:98,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:7,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:4,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:8,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">X</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:5,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">V</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:126,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">X</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Q</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:24,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:39,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Y</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:68,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:14,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:83,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:3,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:17,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:134,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">V</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">X</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:18,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:43,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:54,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:37,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:73,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:53,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:6,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:170,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:64,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:24,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:46,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:75,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:6,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">V</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:71,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:8,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:51,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">X</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:149,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Y</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:32,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:15,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:16,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:68,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:14,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">P</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:63,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:15,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:31,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Y</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:138,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">J</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">K</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:64,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:18,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:25,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">X</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:82,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:19,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Q</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:83,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:15,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:26,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">K</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:111,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">X</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:6,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:18,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:16,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">W</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:-44,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:89,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:19,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Y</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:63,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:3,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:6,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:134,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:11,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">F</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">V</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:13,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:60,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:68,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:27,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">J</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:4,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:23,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:6,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Z</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:149,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Q</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:33,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:10,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:53,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:62,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">V</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:17,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Z</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:56,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:15,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:17,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">U</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:138,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:18,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">V</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:15,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">W</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:-15,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">K</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:98,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:29,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:62,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:15,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:3,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:134,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:18,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">Y</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:27,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">M</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:92,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:54,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:111,&quot;335559737&quot;:47,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:73,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:4,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">V</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:13,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">S</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:140,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:33,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:3,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:46,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">X</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:80,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:10,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:69,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:29,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:17,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        <tr id="bottomRow">
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:140,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">R</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">I</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">H</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">G</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:107,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:15,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">L</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:112,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:25,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="none"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:60,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">O</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:106,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">N</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:3,&quot;335551620&quot;:3,&quot;335559685&quot;:111,&quot;335559737&quot;:54,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">D</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:31,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:111,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">T</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:69,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">B</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:12,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">C</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:2,&quot;335551620&quot;:2,&quot;335559685&quot;:3,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">A</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:109,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        <td data-celllook="4369">
        <p><span data-contrast="auto"><span data-ccp-parastyle="Table Paragraph">E</span></span><span data-ccp-props="{&quot;201341983&quot;:1,&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559685&quot;:110,&quot;335559737&quot;:0,&quot;335559738&quot;:0,&quot;335559739&quot;:0,&quot;335559740&quot;:279}">&nbsp;</span></p>
        </td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
    <div class="row m-0 ps-0 position-absolute w-75" style="bottom: 10%; left: 20%;">
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 20%;"  onclick="checkResponses(event, '12')">Vérifier</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 20%;"  onclick="showResponses('12')" type="button">Les réponses</button>
        <button class="btn btn-primary me-1 me-md-2 mb-1 mb-md-2" style="width: 35%;" onclick="backToMainScreen()" type="button">Retour à la page d'accueil</button>
    </div>
</div>`;


const challenges = {"1" : challenge1, 
                    "2" : challenge2, 
                    "3" : challenge3, 
                    "4" : challenge4,
                    "5" : challenge5, 
                    "6" : challenge6, 
                    "7" : challenge7, 
                    "8" : challenge8,
                    "9" : challenge9, 
                    "10" : challenge10,
                    "11" : challenge11, 
                    "12" : challenge12,
                    "13" : challenge13, 
                    "14" : challenge14, 
                    "15" : challenge15, 
                    "16" : challenge16, 
                    "17" : challenge17,
                    "18" : challenge18,
                    "19" : challenge19, 
                    "20" : challenge20, 
                    "21" : challenge21, 
                    "22": challenge22, 
                    "23" : challenge23, 
                    "24" : challenge24 
                   };

function checkDate(userID) {
    document.getElementById("snowflake").addEventListener("click", unlogUser)
    const today = new Date();

    if(userID == 3) {
    // for testing and admin to see all challenges
        const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        pages.forEach(element => {
            document.getElementById(element).addEventListener("click", function() { 
                if (element === 12) {
                    document.getElementById("main").innerHTML = challenges[element];
                    prepareTable();
                } else {
                    document.getElementById("main").innerHTML = challenges[element];
                }
            });
        });
    } else if (today.valueOf() >= (new Date(today.getFullYear() + '-12-1')).valueOf()) {
        const date = today.getDate();

        for (let i = 1; i <= date; i++) {
            if (i === 12) {
                document.getElementById(i).addEventListener("click", function() { 
                    document.getElementById("main").innerHTML = challenges[i];
                    prepareTable();
                });
            } else {
                document.getElementById(i).addEventListener("click", function() { 
                    document.getElementById("main").innerHTML = challenges[i];
                });
            }
        }
    }

    checkRate()
        .then(response => {
            if (response.code === 200) {
                response.result.forEach(element => {
                    updateOverallScore(element.challengeNo, parseInt(element.correct), parseInt(element.count), parseInt(element.attempts));
                    
                })
                document.documentElement.style
                    .setProperty('--angle', calculateOverallScore()*180 + 'deg');
            }
        })
}

let challenge21Temp = {};
let challenge23Temp = {};
let challenge7Temp = {};
let challenge10Temp = {};
let challenge17Temp = {};

function rememberAnswer(e, challengeNo) {
    if (challengeNo === 21) {
        challenge21Temp[e.target.name] = e.target.value;
    } else if (challengeNo === 23) {
        challenge23Temp[e.target.name] = e.target.value;
    } else if (challengeNo === 7) {
        challenge7Temp[e.target.name] = e.target.value;
    } else if (challengeNo === 10) {
        challenge10Temp[e.target.name] = e.target.value;
    } else {
        challenge17Temp[e.target.name] = e.target.value;
    }
   
}

let count = 0;
let correctCount = 0;
let incorrectCount = 0;
let rate = 0;

function addCorrectCount() {
    correctCount = correctCount + 1;
}

function addIncorrectCount() {
    incorrectCount = incorrectCount + 1;
}

function openSuccessRateMessage(challengeNo) {
    if (correctCount !== 0 || incorrectCount !== 0) {
        if (overallScoreData[challengeNo]) {
            count = overallScoreData[challengeNo].attempts
        }
        count = count + 1;
        let message;
        let questionsCount;

        if (challengeNo === '12') {
            questionsCount = 7;
        } else if (challengeNo === '18') {
            questionsCount = 13;
        } else {
            questionsCount = Object.keys(responses[challengeNo]).length;
        }

        if (challengeNo === '12') {
            correctCount = calculateSuccessForCrosswords();
        }

        rate = correctCount/questionsCount;
        updateOverallScore(challengeNo, correctCount, questionsCount, count);

        if (rate === 1) {
            message = 'Bien joué! À demain pour le prochain challenge.';
        } 

        if (rate === 1 && challengeNo === '24') {
            message = "Bravo tu peux être fier de toi ! N'hésite pas à revoir les cours et à refaire les exercices pour t'entraîner."
        }

        if (count === 1 && rate < 0.7) {
            message = 'Réessaye pour améliorer ton score.';
        }
        if (count === 1 && rate >= 0.7 && challengeNo !== '24') {
            message = 'Bien joué! Consulte les bonnes réponses. À demain pour le prochain challenge.';
        }
        if (count === 1 && rate >= 0.7 && challengeNo === '24') {
            message = 'Bien joué! Consulte les bonnes réponses.';
        }
        if (count > 1 && rate < 1) {
            message = 'Consulte les bonnes réponses. À demain pour le prochain challenge.';
        } 

        if (count > 1 && rate < 1 && challengeNo === '24') {
            message = "Bravo tu peux être fier de toi ! N'hésite pas à revoir les cours et à refaire les exercices pour t'entraîner."
        }

        document.getElementById("successRateMessage").innerHTML = message;
        
        if (count > 1 && challengeNo === '24') {
            document.getElementById("successRate").innerHTML = `Taux de réussite: ${Math.round(calculateOverallScore()*100)}%`;
        } else {
            document.getElementById("successRate").innerHTML = `Bonnes réponses: ${correctCount} sur ${questionsCount}`;
        }
        document.getElementById("openSuccessRateModal").click();
        updateRate(parseInt(challengeNo), correctCount, questionsCount);
    }
}

function calculateSuccessForCrosswords() {
    let rows = document.getElementsByTagName("tr");
    let rowsArray = Array.from(rows);

    let answers = [ {"tr" : [0], "td" : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}, {"tr" : [0,1,2,3,4,5,6,7,8,9,10,11,12], "td" : [0]}, {"tr" : [6,7,8,9,10,11,12], "td" : [8]}, {"tr" : [0,1,2,3,4,5,6,7,8,9], "td" : [11]}, {"tr" : [1,2,3,4,5,6,7,8], "td" : [16]}, {"tr" : [0, 1,2,3], "td" : [18]}, {"tr" : [2], "td" : [16,17,18]}];

    let correctCount = 0;

    answers.forEach(element => {
        let count = 0;
        element.tr.forEach(row => {
            let rowData = Array.from(rowsArray[row].children);
            element.td.forEach(index => {
                if (!rowData[index].children[0].classList.contains("green")) {
                    count = count + 1;
                }
            })
        })
        if (count === 0) {
            correctCount = correctCount + 1;
        }
    })
    return correctCount;
}

let overallScoreData = {};

function updateOverallScore(challengeNo, correctCount, questionsCount, attempts) {
    overallScoreData[challengeNo] = {'correct' : correctCount, 'count' : questionsCount, 'attempts' : attempts}
}

function calculateOverallScore() {
    let correct = 0;
    let count = 0;
    for(const challengeNo in overallScoreData) {
        correct = correct + overallScoreData[challengeNo].correct;
        count = count + overallScoreData[challengeNo].count;
    }
    return correct/count;
}

function backToMainScreen() {
    count = 0;
    correctCount = 0;
    incorrectCount = 0;
    rate = 0;
    responsesRevealed = false;
    challenge7Temp = {};
    challenge10Temp = {};
    challenge17Temp = {};
    challenge21Temp = {};
    challenge23Temp = {};
    document.getElementById("main").innerHTML = mainScreen;
    document.documentElement.style
        .setProperty('--angle', calculateOverallScore()*180 + 'deg');
    checkData();
}

function backToFirstPage(challengeNo) {
    if (challengeNo === '7') {
        document.getElementById("main").innerHTML = challenge7;
    }
    if (challengeNo === '10') {
        document.getElementById("main").innerHTML = challenge10;
    }
    if (challengeNo === '17') {
        document.getElementById("main").innerHTML = challenge17;
    }
    if (challengeNo === '211') {
        document.getElementById("main").innerHTML = challenge21_1;
    }
    if (challengeNo === '211') {
        document.getElementById("main").innerHTML = challenge21_1;
    }
    if (challengeNo === '210') {
        document.getElementById("main").innerHTML = challenge21;
    }
     if (challengeNo === '23') {
        document.getElementById("main").innerHTML = challenge23;
    }

    if(responsesRevealed === true) {
        responsesRevealed = false;
    }
}

function displaySecondPage(challengeNo) {
    if (challengeNo === '7') {
        document.getElementById("main").innerHTML = challenge7_1;
        let inputElements = Array.from(document.getElementsByTagName('input'));
        inputElements.forEach(element => {
            if (challenge7Temp[element.name]) {
                element.value = challenge7Temp[element.name]
            }
        })
    }
    if (challengeNo === '10') {
        document.getElementById("main").innerHTML = challenge10_1;
        let inputElements = Array.from(document.getElementsByTagName('input'));
        inputElements.forEach(element => {
            if (challenge10Temp[element.name]) {
                element.value = challenge10Temp[element.name]
            }
        })
    }
    if (challengeNo === '17') {
        document.getElementById("main").innerHTML = challenge17_1;
        let inputElements = Array.from(document.getElementsByTagName('input'));
        inputElements.forEach(element => {
            if (challenge17Temp[element.name]) {
                element.value = challenge17Temp[element.name]
            }
        })
    }
    if (challengeNo === '21') {
        document.getElementById("main").innerHTML = challenge21_1;
    }
    if (challengeNo === '211') {
        document.getElementById("main").innerHTML = challenge21_1;
    }
    if (challengeNo === '212') {
        document.getElementById("main").innerHTML = challenge21_2;
        let inputElements = Array.from(document.getElementsByTagName('input'));
        inputElements.forEach(element => {
            if (challenge21Temp[element.name]) {
                element.value = challenge21Temp[element.name]
            }
        })
    }
    if (challengeNo === '23') {
        document.getElementById("main").innerHTML = challenge23_1;
        let inputElements = Array.from(document.getElementsByTagName('input'));
        inputElements.forEach(element => {
            if (challenge23Temp[element.name]) {
                element.value = challenge23Temp[element.name]
            }
        })
    }
}

function play(e) {
    e.preventDefault();
    if(e.currentTarget.id === "challenge18") {
        if (count > 1 || rate >= 0.7) {
            audio.setAttribute("src", `audio/body parts.mp3`);
            audio.play(); 
        }
    } else {
        const src = e.currentTarget.id.toLowerCase();
        const audio = document.getElementById("audio");
        audio.setAttribute("src", `audio/${src}.mp3`);
        audio.play();
    }
}

// CHALLENGE RESPONSES
const challenge2Responses = {"first" : "I", "second" : "SHE", "third" : "HE", "fourth" : "THEY", "fifth" : "WE", "sixth" : "IT"};

const challenge4Responses = {"first" : "MY", "second" : "MY", "third" : "OUR", "fourth" : "THEIR", "fifth" : "THEIR", "sixth" : "ITS"};

const challenge5Responses = {"first" : "AM", "second" : "AM", "third" : "AM", "fourth" : "IS", "fifth" : "IS", "sixth" : "ARE","seventh" : "ARE"};

const challenge9Responses = {"first" : "TUESDAY", "second" : "FRIDAY", "third" : "THURSDAY", "fourth" : "WEDNESDAY", "fifth" : "MONDAY"};

const challenge14Responses = {"first" : ["GREEN"], "second" : ["RED AND WHITE", "WHITE AND RED", "RED WHITE", "WHITE RED"], "third" : ["BROWN"], "fourth" : ["WHITE"], "fifth" : ["RED AND WHITE", "WHITE AND RED", "RED WHITE", "WHITE RED"], "sixth" : ["GREEN AND RED", "RED AND GREEN", "GREEN RED", "RED GREEN"]}; 

const challenge15Responses = {"first" : ["CAT","A CAT"], "second" : ["BIRD", "A BIRD"], "third" : ["DOG", "A DOG"], "fourth" : ["FISH", "A FISH"], "fifth" : ["RABBIT", "A RABBIT"], "sixth" : ["PARROT", "A PARROT"], "seventh" : ["HAMSTER", "A HAMSTER"], "eight" : ["MOUSE", "A MOUSE"]};

const challenge6Responses = {"first" : "an", "second" : "a", "third" : "a", "fourth" : "an", "fifth" : "a", "sixth" : "a", "seventh" : "a", "eight" : "a", "ninght" : "a", "tenth" : "a"};

const challenge7Responses = {"first" : ["SPEAKS"], "second" : ["DRINK"], "third" : ["OPENS"], "fourth" : ["LIVE"], "fifth" : ["MAKE"], "sixth" : ["DON'T EAT", "DON'T", "DO NOT EAT"], "seventh" : ["PLAY"], "eight" : ["DOES SHE LIVE", "DOES SHE"], "ninght" : ["DO THEY EAT", "DO THEY"], "tenth" : ["CALLS"]};

const challenge19Responses = {"first" : "SCARED", "second" : "TIRED", "third" : "EXCITED", "fourth" : "HUNGRY", "fifth" : "COLD", "sixth" : "HAPPY", "seventh" : "SAD", "eight" : "ANGRY", "ninght" : "HOT", "tenth" : "NERVOUS"};

const challenge22Responses = {"first" : "POMMES DE TERRE", "second" : "RIZ", "third" : "ÉPINARD", "fourth" : "LAIT", "fifth" : "CERISES", "sixth" : "OEUFS", "seventh" : "PAIN"};

const challenge16Responses = {"first" : "THE GRANDMOTHER", "second" : "THE GRANDFATHER", "third" : "THE FATHER", "fifth" : "THE AUNT", "sixth" : "THE UNCLE", "seventh" : "THE DAUGHTER", "eight" : "THE SON", "ninght" : "THE COUSIN", "tenth" : "THE COUSIN"};

const challenge10Responses = {"first" : ["THREE O'CLOCK", "IT'S THREE O'CLOCK"], "second" : ["FIVE PAST THREE", "IT'S FIVE PAST THREE"], "third" : ["TEN PAST THREE", "IT'S TEN PAST THREE"], "fourth" : ["QUARTER PAST THREE", "IT'S QUARTER PAST THREE"], "fifth" : ["TWENTY PAST THREE", "IT'S TWENTY PAST THREE"], "sixth" : ["TWENTY-FIVE PAST THREE", "IT'S TWENTY-FIVE PAST THREE"], "seventh" : ["HALF PAST THREE", "IT'S HALF PAST THREE"], "eight" : ["TWENTY-FIVE TO FOUR", "IT'S TWENTY-FIVE TO FOUR"], "ninght" : ["TWENTY TO FOUR", "IT'S TWENTY TO FOUR"], "tenth" : ["QUARTER TO FOUR", "IT'S QUARTER TO FOUR"], "eleventh" : ["TEN TO FOUR", "IT'S TEN TO FOUR"], "twelfth" : ["FIVE TO FOUR", "IT'S FIVE TO FOUR"]};

const challenge11Responses = {"first" : "IN", "second" : "NEXT", "third" : "BEHIND", "fourth" : "ON", "fifth" : "IN"};

const challenge24Responses = {"first" : "IN", "second" : "ON", "third" : "IN", "fourth" : "ON", "fifth" : "AT", "sixth" : "AT", "seventh" : "IN"};

const challenge17Responses = {"first" : "HAS", "second" : "HAVE", "third" : "HAS", "fourth" : "HAVE", "fifth" : "HAVE", "sixth" : "HAVE", "seventh" : "HAVE"};

const challenge13Responses = {"first" : "is", "second" : "are", "third" : "are", "fourth" : "are", "fifth" : "is", "sixth" : "are"};

const challenge21Responses = {"first" : ["DIDN'T STUDY", "DID NOT STUDY"], "second" : ["DID SHE COOK"], "third" : ["WATCHED"], "fourth" : ["DIDN'T EAT", "DID NOT EAT"], "fifth" : ["DID THEY FIND"], "sixth" : ["WERE"], "seventh" : ["LEARNT"]};

const challenge20Responses = {"first" : "", "second" : "", "third" : "", "fourth" : "THE", "fifth" : "THE", "sixth" : "THE", "seventh" : "THE", "eight" : "THE", "ninght" : "", "tenth" : "THE"};

const challenge23Responses = {"first" : ["YES, I DO.", "YES, I DO", "NO, I DON'T.", "NO, I DON'T", "NO, I DO NOT","NO, I DO NOT.", "YES, I DO./NO, I DON'T.","YES, I DO./NO, I DO NOT.", "YES, I DO. / NO, I DON'T.","YES, I DO. / NO, I DO NOT."], "second" : ["YES, I HAVE.", "YES, I HAVE", "NO, I HAVEN'T.", "NO, I HAVEN'T", "NO, I HAVE NOT", "NO, I HAVE NOT.", "YES, I HAVE./NO, I HAVEN'T.", "YES, I HAVE./NO, I HAVE NOT.", "YES, I HAVE. / NO, I HAVEN'T.", "YES, I HAVE. / NO, I HAVE NOT."], "third" : ["YES, IT IS.", "YES, IT IS", "NO, IT ISN'T.", "NO, IT ISN'T", "NO, IT IS NOT", "NO, IT IS NOT.", "YES, IT IS./NO, IT ISN'T.", "YES, IT IS./NO, IT IS NOT.", "YES, IT IS. / NO, IT ISN'T.", "YES, IT IS. / NO, IT IS NOT."], "fourth" : ["YES, HE HAS.", "YES, HE HAS", "NO, HE HASN'T.", "NO, HE HASN'T","NO, HE HAS NOT","NO, HE HAS NOT.", "YES, HE HAS./NO, HE HASN'T.", "YES, HE HAS./NO, HE HAS NOT.", "YES, HE HAS. / NO, HE HASN'T.", "YES, HE HAS. / NO, HE HAS NOT."], "fifth" : ["YES, HE DOES.", "YES, HE DOES", "NO, HE DOESN'T.", "NO, HE DOESN'T", "NO, HE DOES NOT", "NO, HE DOES NOT.", "YES, HE DOES./NO, HE DOESN'T.", "YES, HE DOES./NO, HE DOES NOT.", "NO, HE DOES NOT.", "YES, HE DOES. / NO, HE DOESN'T.", "YES, HE DOES. / NO, HE DOES NOT."], "sixth" : ["YES, THEY DO.", "YES, THEY DO", "NO, THEY DON'T.", "NO, THEY DON'T", "NO, THEY DO NOT", "NO, THEY DO NOT.", "YES, THEY DO. / NO, THEY DO NOT."], "seventh" : ["YES, SHE IS.", "YES, SHE IS", "NO, SHE ISN'T.", "NO, SHE ISN'T", "NO, SHE IS NOT", "NO, SHE IS NOT.", "YES, SHE IS./NO, SHE ISN'T.", "YES, SHE IS./NO, SHE IS NOT.", "YES, SHE IS. / NO, SHE ISN'T.", "YES, SHE IS. / NO, SHE IS NOT."]};

const responses = {"2" : challenge2Responses, 
                    "4" : challenge4Responses, 
                    "5" : challenge5Responses, 
                    "6" : challenge6Responses, 
                    "7" : challenge7Responses, 
                    "9" : challenge9Responses, 
                    "10" : challenge10Responses, 
                    "11" : challenge11Responses, 
                    "13" : challenge13Responses, 
                    "14" : challenge14Responses, 
                    "15" : challenge15Responses, 
                    "16" : challenge16Responses, 
                    "17" : challenge17Responses, 
                    "19" : challenge19Responses, 
                    "20" : challenge20Responses,
                    "21" : challenge21Responses, 
                    "22" : challenge22Responses, 
                    "23" : challenge23Responses, 
                    "24" : challenge24Responses};


function checkResponses(e, challengeNo) {
    e.preventDefault();
    if (responsesRevealed !== true) {
        correctCount = 0;
        incorrectCount = 0;
        if (challengeNo === "6") {
            for(sentence in challenge6Responses) {
                let correct = challenge6Responses[sentence];
                let incorrect;
                if (correct === "an") {
                    incorrect = "a";
                } else {
                    incorrect = "an";
                }
                if (document.getElementById(`${sentence}-${incorrect}`).style.color === "blue") {
                    document.getElementById(`${sentence}-${incorrect}`).style.color = "red";
                    addIncorrectCount();
                }
                if (document.getElementById(`${sentence}-${correct}`).style.color === "blue") {
                    document.getElementById(`${sentence}-${correct}`).style.color = "greenyellow";
                    addCorrectCount();
                }
            }
        } else if (challengeNo === "12") {
            let rows = document.getElementsByTagName("tr");
            let rowsArray = Array.from(rows);
    
            let correctLetters = {0 : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18], 1 : [0,11,16,18], 2 : [0,11,16,17,18], 3 : [0,11,16,18], 4 : [0,11,16], 5 : [0,11,16], 6 : [0,8,11,16], 7 : [0,8,11,16], 8 : [0,8,11,16], 9 : [0,8,11], 10 : [0,8], 11 : [0,8], 12 : [0,8]}
           
            let firstRowData = Array.from(rowsArray[0].children);
            let correctFirstRow = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18];
    
            for (let i = 0; i < rowsArray.length; i++) {
                let rowData = Array.from(rowsArray[i].children);
                let correctRowData = correctLetters[i];
                
                for (let  i = 0; i < rowData.length; i++) {
                    if (rowData[i].children[0].classList.contains("black") && correctRowData.includes(i)) {
                        rowData[i].children[0].classList.replace("black", "green");
                        addCorrectCount();
                    } else if (rowData[i].children[0].classList.contains("black") && !correctRowData.includes(i)) {
                        rowData[i].children[0].classList.replace("black", "red");
                        addIncorrectCount();
                    }
                }
            }
        } else if (challengeNo === "13") {
            for(sentence in challenge13Responses) {
                let correct = challenge13Responses[sentence];
                let incorrect;
                if (correct === "are") {
                    incorrect = "is";
                } else {
                    incorrect = "are";
                }
                if (document.getElementById(`${sentence}-${incorrect}`).style.color === "blue") {
                    document.getElementById(`${sentence}-${incorrect}`).style.color = "red";
                    addIncorrectCount();
                }
                if (document.getElementById(`${sentence}-${correct}`).style.color === "blue") {
                    document.getElementById(`${sentence}-${correct}`).style.color = "greenyellow";
                    addCorrectCount();
                }
            }
        // } 
        // else if(challengeNo === "15" || challengeNo === "7") {
        //     const challengeResponses = responses[challengeNo];
        //     for(let answer in challengeResponses) {
        //         if (form[answer].value.trim() !== challengeResponses[answer][0] && form[answer].value.trim() !== challengeResponses[answer][1] && form[answer].value.trim() !== "") {
        //             form[answer].style.color ="red";
        //             addIncorrectCount();
        //         } else if (form[answer].value.trim() !== "") {
        //             form[answer].style.color ="greenyellow";
        //             addCorrectCount();
        //         }
        //     }
        }  else if(challengeNo === "10") {
            const challengeResponses = responses[challengeNo];
            for(let answer in challengeResponses) {
                if (!challengeResponses[answer].includes(form[answer].value.trim()) && !challengeResponses[answer].includes(form[answer].value.trim().replace(/[^\w\s\,,./-]/gi, "'")) && form[answer].value.trim() !== "") {
                    form[answer].style.color ="red";
                    addIncorrectCount();
                } else if (form[answer].value.trim() !== "") {
                    form[answer].style.color ="darkgreen";
                    addCorrectCount();
                }
            }
        }
        else if(challengeNo === "14" || challengeNo === "23" || challengeNo === "21" || challengeNo === "15" || challengeNo === "7") {
            const challengeResponses = responses[challengeNo];
            for(let answer in challengeResponses) {
                if (!challengeResponses[answer].includes(form[answer].value.trim()) && !challengeResponses[answer].includes(form[answer].value.trim().replace(/[^\w\s\,,./-]/gi, "'")) && form[answer].value.trim() !== "") {
                    form[answer].style.color ="red";
                    addIncorrectCount();
                } else if (form[answer].value.trim() !== "") {
                    form[answer].style.color ="greenyellow";
                    addCorrectCount();
                }
            }
        } else if (challengeNo === "18") {
            let parentElement = document.getElementById("answers");
            let images = parentElement.getElementsByTagName("img");
            let imagesArray = Array.from(images);
            imagesArray.forEach(image => {
                if (image.style.opacity === '1') {
                    if (image.classList.contains('correct')) {
                        image.src = 'images/elipseGreen.png';
                        addCorrectCount();
                    } else {
                        image.src = 'images/elipseRed.png';
                        addIncorrectCount();
                    }
                }
            })
        } else if (challengeNo === "20") {
            const form = e.target.elements;
            const challengeResponses = responses[challengeNo];
    
            for(let answer in challengeResponses) {
                if (form[answer].value.trim() !== challengeResponses[answer]) {
                    form[answer].style.color ="red";
                    addIncorrectCount();
                } else if (form[answer].value.trim() === challengeResponses[answer]) {
                    form[answer].style.color ="greenyellow";
                    addCorrectCount();
                }
            }
        }
        else {
            const form = e.target.elements;
            const challengeResponses = responses[challengeNo];
    
            for(let answer in challengeResponses) {
                if (form[answer].value.trim() !== challengeResponses[answer] && form[answer].value.trim() !== "") {
                    form[answer].style.color ="red";
                    addIncorrectCount();
                } else if (form[answer].value.trim() !== "") {
                    if (challengeNo === '2' || challengeNo === '19' || challengeNo === '16' || challengeNo === '10') {
                        form[answer].style.color ="darkgreen";
                    } else {
                        form[answer].style.color ="greenyellow";
                    }
                    addCorrectCount();
                }
            }
        }
        openSuccessRateMessage(challengeNo);
    }
}

let responsesRevealed = false;

function showResponses(challengeNo) {
    if (overallScoreData[challengeNo]) {
        count = overallScoreData[challengeNo].attempts
    }
    if (count === 0) {
        document.getElementById("successRateMessage").innerHTML = 'Tu as le droit à 2 essais. Tente ta chance !';
        document.getElementById("successRate").innerHTML = '';
        document.getElementById("openSuccessRateModal").click();
    } else if (count === 1 && overallScoreData[challengeNo].correct/overallScoreData[challengeNo].count < 0.7) {
        document.getElementById("successRateMessage").innerHTML = "Il te reste encore un essai. Essaye d'améliorer ton score !";
        document.getElementById("successRate").innerHTML = '';
        document.getElementById("openSuccessRateModal").click();
    } else {
        correctCount = 0;
        incorrectCount = 0;
        responsesRevealed = true;
        if (challengeNo === '6') {
            for (sentence in challenge6Responses) {
                let correct = challenge6Responses[sentence];
                let incorrect;
                if (correct === "an") {
                    incorrect = "a";
                } else {
                    incorrect = "an";
                }
                document.getElementById(`${sentence}-${incorrect}`).style.color = "white";
                document.getElementById(`${sentence}-${correct}`).style.color = "greenyellow";
            } 
        } else if (challengeNo === '13') {
            for (sentence in challenge13Responses) {
                let correct = challenge13Responses[sentence];
                let incorrect;
                if (correct === "are") {
                    incorrect = "is";
                } else {
                    incorrect = "are";
                }
                document.getElementById(`${sentence}-${incorrect}`).style.color = "white";
                document.getElementById(`${sentence}-${correct}`).style.color = "greenyellow";
            } 
        } else if (challengeNo === '18') {
            let parentElement = document.getElementById("answers");
            let images = parentElement.getElementsByTagName("img");
            let imagesArray = Array.from(images);
            imagesArray.forEach(image => {
                    if (image.classList.contains('correct')) {
                        image.src = 'images/elipseGreen.png';
                        image.style.opacity = '1';
                    } else {
                        image.src = 'images/elipse.png';
                        image.style.opacity = '0';
                    }
            })
        }
        else if (challengeNo === "12") {

            let rows = document.getElementsByTagName("tr");
            let rowsArray = Array.from(rows);

            let correctLetters = {0 : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18], 1 : [0,11,16,18], 2 : [0,11,16,17,18], 3 : [0,11,16,18], 4 : [0,11,16], 5 : [0,11,16], 6 : [0,8,11,16], 7 : [0,8,11,16], 8 : [0,8,11,16], 9 : [0,8,11], 10 : [0,8], 11 : [0,8], 12 : [0,8]}
        
            let firstRowData = Array.from(rowsArray[0].children);
            let correctFirstRow = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18];

            for (let i = 0; i < rowsArray.length; i++) {
                let rowData = Array.from(rowsArray[i].children);
                let correctRowData = correctLetters[i];

                for (let  i = 0; i < rowData.length; i++) {
                    if (correctRowData.includes(i)) {
                        if (rowData[i].children[0].classList.length > 0) {
                            rowData[i].children[0].removeAttribute("class");
                        }
                        rowData[i].children[0].classList.add("green");
                    } else {
                        if (rowData[i].children[0].classList.length > 0) {
                            rowData[i].children[0].removeAttribute("class");
                        }
                    }
                }
            }
        } else if (challengeNo === "2" || challengeNo === '16' || challengeNo === '19'  || challengeNo === '11') {
            const form = document.getElementById('form');
            const challengeResponses = responses[challengeNo];

            let inputFileds = document.getElementsByTagName("input");

            let inputFiledsArray = Array.from(inputFileds);

            inputFiledsArray.forEach(element => element.setAttribute("id", ""));
            for(let answer in challengeResponses) {
                form[answer].value = challengeResponses[answer];
            
                if(challengeNo === '11') {
                    form[answer].style.color = "greenyellow";
                } else {
                    form[answer].style.color = "darkgreen";
                }
            
                let options = document.getElementsByClassName("draggable");
                let optionsArray = Array.from(options);
                optionsArray.forEach(element => element.style.display = "");
            }
        } 
        else {
            const form = document.getElementById('form');
            const challengeResponses = responses[challengeNo];

            if (challengeNo === '23' || challengeNo === '21') {
                    for(let answer in challengeResponses) {
                        form[answer].value = challengeResponses[answer][challengeResponses[answer].length -1];
                        form[answer].style.color ="greenyellow";
                    }
            } else if (challengeNo === '14' || challengeNo === '7' || challengeNo === '15') {
                for(let answer in challengeResponses) {
                    form[answer].value = challengeResponses[answer][0];
                    form[answer].style.color ="greenyellow";
                }
            } else if (challengeNo === '10'){
                for(let answer in challengeResponses) {
                form[answer].value = challengeResponses[answer][0];
                form[answer].style.color ="darkgreen";
                }
            }
            else {
                for(let answer in challengeResponses) {
                    form[answer].value = challengeResponses[answer];
                    form[answer].style.color ="greenyellow";
                }
            }
        }
    }
}

// DRAG AND DROP CHALLENGES
function allowDrop(ev) {
    ev.preventDefault();
}

function blur(e){
    e.target.blur();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, inputField, challengeNo) {
    ev.preventDefault();
    const form = document.getElementById("form");
    let data = ev.dataTransfer.getData("text");
    if (document.querySelector("#input" + data)) {
        document.querySelector("#input" + data).value = "";
        
        document.querySelector("#input" + data).setAttribute('draggable', false);
        document.querySelector("#input" + data).setAttribute("id", "");
    }

    if (data === "YOU-1" || data === "YOU-2" || data === "THE_COUSIN-1" || data === "THE_COUSIN-2" || data === "IN-1" || data === "IN-2") {
        let inputText = data.split("-");
        form.elements[inputField].value = inputText[0].replace("_", " ");
    } else {
        form.elements[inputField].value = data.replace("_", " ");
    }

    if (form.elements[inputField].getAttribute("id") === "") {
        form.elements[inputField].setAttribute("id", 'input' + data);
    } else {
        let element = document.getElementById(form.elements[inputField].getAttribute("id").substr(5));
        element.style.display = "";
        form.elements[inputField].setAttribute("id", 'input' + data);
    }
    document.getElementById(data).style.display = "none";

    if (challengeNo === '2') {
        form.elements[inputField].style.color = '#4966AE';
    }

    if (challengeNo === '16' || challengeNo === '19') {
        form.elements[inputField].style.color = '#0CBAE9';
    }

    if (challengeNo === '11') {
        form.elements[inputField].style.color = 'white';
    }

    form.elements[inputField].setAttribute("draggable", true);
    form.elements[inputField].addEventListener("dragstart", dragBack);
    form.elements[inputField].parentElement.addEventListener("dragstart", dragBack);
}

function dragBack(ev) {
    ev.dataTransfer.setData("text", ev.target.id.replace('input', ''));
}

function dropBack(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const element = document.querySelector("#" + data);
    if (element.style.display === 'none') {
        element.style.display = '';
        document.querySelector("#input" + data).value = "";
        document.querySelector("#input" + data).setAttribute('draggable', false);
        document.querySelector("#input" + data).setAttribute("id", "");
    }
}


// CHOOSE CHALLENGES
function setBold(e) {
    const sentence = e.target.id.split("-");
    let secondOption;
    
    if(sentence[1] === "a") {
        secondOption = `${sentence[0]}-an`;
    } else if (sentence[1] === "an") {
        secondOption = `${sentence[0]}-a`;
    } else if (sentence[1] === "is") {
        secondOption = `${sentence[0]}-are`;
    } else {
        secondOption = `${sentence[0]}-is`;
    }
    e.currentTarget.style.color = "blue";
    document.getElementById(secondOption).style.color = "white";
}

function circle(e) {
    e.target.style.opacity = "1";
    if (e.target.nextElementSibling) {
        e.target.nextElementSibling.style.opacity= "0";
    } else {
        e.target.previousElementSibling.style.opacity= "0";
    }
}

// CHALLENGE 12
function prepareTable() {
    let cells = document.getElementsByTagName("td");
    let cellsArray = Array.from(cells);
    cellsArray.forEach(letter => {
            letter.addEventListener("click", markLetter);
            // letter.addEventListener("long-press", colorMouseOver);
            // letter.setAttribute('data-long-press-delay','500');
            // letter.addEventListener("mouseup", removeColorMouseOver);
            letter.addEventListener("touchstart", markLetter);
            letter.addEventListener("touchmove", markLetterTouch);
            });
}

function removeMark(e) {
    e.preventDefault();
    if (e.currentTarget.children[0].classList.length > 0) {
        e.currentTarget.children[0].removeAttribute("class")
    } else {
        e.currentTarget.children[0].classList.toggle("black");
    }
}

// MOUSE DRAG TO MARK
function colorMouseOver(e) {
    if (!e.currentTarget.children[0].classList.contains("black")) {
        if (e.currentTarget.children[0].classList.length > 0) {
            e.currentTarget.children[0].removeAttribute("class");
            e.currentTarget.children[0].classList.toggle("black");
        } else {
            e.currentTarget.children[0].classList.toggle("black");
        }
    } 
    let cells = document.getElementsByTagName("td");
    let cellsArray = Array.from(cells);
    cellsArray.forEach(letter => {
        letter.addEventListener("mouseover", markLetter);
        }
    );
}

function markLetter(e) {
    e.preventDefault();
    if (!e.currentTarget.children[0].classList.contains("black")) {
        if (e.currentTarget.children[0].classList.length > 0) {
            e.currentTarget.children[0].removeAttribute("class");
            e.currentTarget.children[0].classList.toggle("black");
        } else {
            e.currentTarget.children[0].classList.toggle("black");
        }
    } else {
        e.currentTarget.children[0].classList.toggle("black");
    }
}

function removeColorMouseOver() {
    let cells = document.getElementsByTagName("td");
    let cellsArray = Array.from(cells);
    cellsArray.forEach(letter => {
        letter.removeEventListener("mouseover", markLetter);
        }
    );
}

// TOUCH DRAG TO MARK
function markLetterTouch(e) {
    var myLocation = e.touches[0];
	var targetElement = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
    if (targetElement.nodeName === "TD") {
        if (!targetElement.children[0].classList.contains("black")) {
            if (targetElement.children[0].classList.length > 0) {
                targetElement.children[0].removeAttribute("class")
            } else {
                targetElement.children[0].classList.toggle("black")
            }
        }
    }
    if (targetElement.nodeName === "P") {
        if (!targetElement.classList.contains("black")) {
            if (targetElement.classList.length > 0) {
                targetElement.removeAttribute("class")
            } else {
                targetElement.classList.toggle("black")
            }
        }
    }
    if (targetElement.nodeName === "SPAN") {
        if(targetElement.parentElement.nodeName === "P") {
            if (!targetElement.parentElement.classList.contains("black")) {
                if (targetElement.parentElement.classList.length > 0) {
                    targetElement.parentElement.removeAttribute("class")
                } else {
                    targetElement.parentElement.classList.toggle("black")
                }
            }
        } else {
            if (!targetElement.parentElement.parentElement.classList.contains("black")) {
                if (targetElement.parentElement.parentElement.parentElement.classList.length > 0) {
                    targetElement.parentElement.removeAttribute("class")
                } else {
                    targetElement.parentElement.parentElement.classList.toggle("black")
                }
            }
        }
    }
}


