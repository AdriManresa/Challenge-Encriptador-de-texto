function encriptar(traduccion) {
    const warning = document.querySelector("#warning");
    const textarea = document.querySelector("#texto");
    const texto = textarea.value;
    const area_default = document.querySelector("#default");
    const area_result = document.querySelector("#result");
    const texto_out = document.querySelector("#texto_out");

    warning.removeAttribute("style");
    if (texto.trim() === "") {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
    }

    if (/[^a-z\s]/.test(texto)) {
        warning.style.color = "red";
        warning.style.fontSize = "16px";
        return;
    }

    let out = "";
    for (let i = 0; i < texto.length; i++) {
        if (traduccion[texto[i]]) {
            out += traduccion[texto[i]];
        } else {
            out += texto[i];
        }
    }

    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    texto_out.innerHTML = out;
}

function desencriptar(traduccion) {
    const warning = document.querySelector("#warning");
    const textarea = document.querySelector("#texto");
    let texto = textarea.value;
    const area_default = document.querySelector("#default");
    const area_result = document.querySelector("#result");
    const texto_out = document.querySelector("#texto_out");

    warning.removeAttribute("style");
    if (texto.trim() === "") {
        area_default.classList.remove("invisible");
        area_result.classList.add("invisible");
        return;
    }

    if (/[^a-z\s]/.test(texto)) {
        warning.style.color = "red";
        warning.style.fontSize = "16px";
        return;
    }

    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");

    Object.keys(traduccion).forEach(key => {
        texto = texto.replace(new RegExp(traduccion[key], "g"), key);
    });

    texto_out.innerHTML = texto;
}

function clipboard() {
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.innerHTML);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

const traduccion = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

enc.addEventListener('click', () => encriptar(traduccion));
des.addEventListener('click', () => desencriptar(traduccion));
copy.addEventListener('click', clipboard);
