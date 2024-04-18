// ==UserScript==
// @name         Iframe Chat AVA ETEC
// @namespace    https://www.linkedin.com/in/edufgimenez/
// @version      1.0
// @description  Disponibiliza o chat da ETEC em outras páginas
// @author       Eduardo Gimenez
// @match        https://eadtec.cps.sp.gov.br/*
// @exclude      https://eadtec.cps.sp.gov.br/index.php*
// @exclude      https://eadtec.cps.sp.gov.br/atividades*
// @exclude      https://eadtec.cps.sp.gov.br/bate_papo*
// @exclude      https://eadtec.cps.sp.gov.br/mostraaula.php
// @exclude      https://eadtec.cps.sp.gov.br/midiateca/arquivos/*
// @exclude      https://eadtec.cps.sp.gov.br/popup_aviso_mostra.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // let main_element = document.getElementById("main");
    // main_element.style.marginLeft = '20px';

    // Crie um elemento iframe
    var chatFrame = document.createElement("iframe");
    var chatContainer = document.createElement("div")

    // Defina os atributos do iframe
    chatFrame.setAttribute("src", "https://eadtec.cps.sp.gov.br/bate_papo/index.php");
    chatFrame.setAttribute("width", "50%");
    chatFrame.setAttribute("height", "500px");
    chatFrame.style.position = '';
    chatFrame.style.background = 'white';
    chatFrame.style.border = "3px solid black";
    chatFrame.style.borderRadius = "20px";

    // Adicione o iframe ao corpo da página
    chatContainer.appendChild(chatFrame);
    document.body.appendChild(chatContainer);
})();
