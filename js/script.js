let insertButton = document.querySelector('button');

insertButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let divContainer = document.querySelector('div[class="container"]');
    let campoTexto = document.querySelector('input[name="texto"]').value;
    let campoTag = document.querySelector('input[name="tag"]').value;
    const elementoDiv = createElement('div',campoTexto,campoTag);
    divContainer.appendChild(elementoDiv);

});


function createElement(typeElement,textElement,tagElement){
    let elementoDiv = document.createElement(typeElement);
    elementoDiv.classList.add('item');
    let subElements = createSubElement('p','span');
    let p = subElements[0];
    let span = subElements[1];
    const textNode = document.createTextNode(textElement);
    const tagNode = document.createTextNode(tagElement);
    span.appendChild(tagNode);
    p.appendChild(textNode);
    elementoDiv.appendChild(span);
    elementoDiv.insertBefore(p,span)
    return elementoDiv;
}

function createSubElement(text,tag){
    let texto = document.createElement(text);
    let tagElement = document.createElement(tag);
    return [texto,tagElement];
}
