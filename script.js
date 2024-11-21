// Función para convertir la cadena de texto a un conjunto de números
function convertirAConjunto(str) {
    return new Set(str.split(',').map(item => item.trim()).filter(item => item !== ''));
}

// Operación de unión
function union() {
    let setA = convertirAConjunto(document.getElementById('setA').value);
    let setB = convertirAConjunto(document.getElementById('setB').value);

    let resultado = new Set([...setA, ...setB]);
    document.getElementById('resultadoUnion').innerText = `A ∪ B = {${[...resultado].join(', ')}}`;
}

// Operación de intersección
function interseccion() {
    let setA = convertirAConjunto(document.getElementById('setA').value);
    let setB = convertirAConjunto(document.getElementById('setB').value);

    let resultado = new Set([...setA].filter(x => setB.has(x)));
    document.getElementById('resultadoInterseccion').innerText = `A ∩ B = {${[...resultado].join(', ')}}`;
}

// Operación de diferencia
function diferencia() {
    let setA = convertirAConjunto(document.getElementById('setA').value);
    let setB = convertirAConjunto(document.getElementById('setB').value);

    let resultado = new Set([...setA].filter(x => !setB.has(x)));
    document.getElementById('resultadoDiferencia').innerText = `A - B = {${[...resultado].join(', ')}}`;
}

// Operación de complemento
function complemento() {
    let setA = convertirAConjunto(document.getElementById('setA').value);
    let setB = convertirAConjunto(document.getElementById('setB').value);

    let universo = new Set([...setA, ...setB]); // Asumimos el universo es la unión de A y B

    let complementoA = new Set([...universo].filter(x => !setA.has(x)));
    let complementoB = new Set([...universo].filter(x => !setB.has(x)));

    document.getElementById('resultadoComplemento').innerText = `A' = {${[...complementoA].join(', ')}}, B' = {${[...complementoB].join(', ')}}`;
}