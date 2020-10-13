let textarea = document.querySelector('textarea');
let text = document.querySelector('.text');
let f1 = document.forms['editStyle'];

// функція для кнопки edit , завдяки якій буде з'являтися textarea, з витягнутими даними з верхнього блоку
document.querySelector('#buttonEdit').addEventListener('click', function () {
    document.querySelector('.editHiden').style.display = 'block';
    document.querySelector('.editStyle').style.display = 'none';
    textarea.value = text.innerHTML
})

// функція для кнопки save , завдяки якій змінені дані з textarea повернуться до верхнього блоку, а також відповідає за очищення зайвих елементів, коли виконується add
document.querySelector('#buttonSave').addEventListener('click', function () {
    document.querySelector('.editHiden').style.display = 'none';
    text.innerHTML = textarea.value;
})

// функція для фокусу textarea, при наведенні бордер стає синім
textarea.addEventListener('focus', function () {
    this.style.border = '1px solid blue'
    this.style.borderRadius = '3px';
    this.style.outline = 'none';
    this.style.boxShadow = '0 0 2px 4px rgba(23, 118, 235, 0.5)';
})

// функція для фиходу з фокусу елементу textarea
textarea.addEventListener('blur', function () {
    this.style.border = '1px solid gray'
    this.style.boxShadow = 'none';
})

// функція для кнопки style, щоб з'влявся блок з стилізацією
document.querySelector('#buttonStyle').addEventListener('click', function () {
    document.querySelector('.editHiden').style.display = 'none';
    document.querySelector('.editStyle').style.display = 'block';
})

// функція для fontSize, щоб при нажиманні на певний інпут, розмір шрифта ставав відповідним
document.querySelector('.inputSizes').addEventListener('click', function (event) {
    if (event.target.checked) {
        text.style.fontSize = event.target.value;
    }
})

// функція для фукусу селектора fontFamily
f1.fontFamily.addEventListener('focus', function () {
    this.style.border = '1px solid blue'
    this.style.borderRadius = '5px';
    this.style.outline = 'none';
    this.style.boxShadow = '0 0 2px 4px rgba(23, 118, 235, 0.5)';
})

// функція для виходу з фокусу селектора
f1.fontFamily.addEventListener('blur', function () {
    this.style.border = '1px solid gray'
    this.style.boxShadow = 'none';
})

// функція для вибору шрифта,при нажиманні на певний шрифт, шрифт у верхньому блоці міняється на відповідний 
f1.fontFamily.addEventListener('change', function (event) {
    document.querySelector('.text').style.fontFamily = event.target.value;
})

// функція для регулювання жирності шрифта
document.querySelector('#fontWeight').addEventListener('click', function (event) {
    if (event.target.checked) {
        text.style.fontWeight = event.target.value;
    }
    else {
        text.style.fontWeight = 'normal';
    }
})

// функція для регулювання курсивності шрифта
document.querySelector('#fontStyle').addEventListener('click', function (event) {
    if (event.target.checked) {
        text.style.fontStyle = event.target.value;
    }
    else {
        text.style.fontStyle = 'normal';
    }
})

// функція для кнопки add, щоб при нажиманні з'євлявся певний блок з вибором, а інші зникали, також відповідає за зачищення полів при виборі таблиці чи списку
document.querySelector('#buttonAdd').addEventListener('click', function () {
    document.querySelector('#table').checked = false;
    document.querySelector('#list').checked = false;
    document.querySelector('#tableTr').value = '';
    document.querySelector('#tableTd').value = '';
    document.querySelector('#widthTd').value = '';
    document.querySelector('#heightTd').value = '';
    document.querySelector('#widthBorder').value = '';
    document.querySelector('#listCount').value = '';
    document.querySelector('#typeBorder').value = 'solid';
    document.querySelector('#colorBorder').value = 'black';
    document.querySelector('#listType').value = 'circle';
    document.querySelector('.edit').style.display = 'none';
    text.style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.add').style.display = 'block';
    document.querySelector('.tableSettings').style.display = 'none';
    document.querySelector('.listSettings').style.display = 'none';
    if (text.children.length > 5) {
        document.querySelector('.other').lastChild.remove();
        // text.lastChild.remove();
    }
    if (document.querySelector('.other').children.length > 1) {
        // text.lastChild.remove();
        document.querySelector('.other').lastChild.remove();
    }
})

// функція для з'являння блоку при виборі таблиці
document.querySelector('#table').addEventListener('click', function (event) {
    document.querySelector('.tableSettings').style.display = 'block'
    document.querySelector('.listSettings').style.display = 'none'
    document.querySelector('.add').style.height = '400px';
})

// функція для з'являння блоку при виборі списку
document.querySelector('#list').addEventListener('click', function (event) {
    document.querySelector('.listSettings').style.display = 'block'
    document.querySelector('.tableSettings').style.display = 'none'
    document.querySelector('.add').style.height = '220px';
})
const list = document.forms['list'];
const table = document.forms['table'];
// функція для фокусування і виходу з фокусу елементів input які належать формам
function focus(name) {
    for (let i = 0; i < name.elements.length; i++) {
        name.elements[i].addEventListener('focus', function () {
            name.elements[i].style.outline = 'none';
            name.elements[i].style.borderRadius = '3px';
            name.elements[i].style.border = '1px sokid blue';
            name.elements[i].style.boxShadow = '0 0px 2px 4px rgba(23, 118, 235, 0.5)';
        })
    }
    for (let i = 0; i < name.elements.length; i++) {
        name.elements[i].addEventListener('blur', function () {
            name.elements[i].style.border = '1px solid gray';
            name.elements[i].style.boxShadow = 'none';
        })
    }
}
focus(table);
focus(list);

// функція для вибору кольору тексту
document.querySelector('#buttonColor').addEventListener('click', function () {
    document.querySelector('.square1').style.display = 'flex';
    // функція, щоб при виборі кольору, текст ставав відповідного кольору
    document.querySelector('.square1').addEventListener('click', function (event) {
        text.style.color = event.target.style.backgroundColor;
        this.style.display = 'none';
    })
})

// функція для вибору кольору фону верхнього блоку
document.querySelector('#buttonBackgroundColor').addEventListener('click', function () {
    document.querySelector('.square2').style.display = 'flex';
    // функція, щоб вибраний колір ставав фоном верхнього блоку
    document.querySelector('.square2').addEventListener('click', function (event) {
        text.style.backgroundColor = event.target.style.backgroundColor;
        this.style.display = 'none';
    })
})


// функція для кнопки Create table, при нажиманні на яку буде створюватися код таблиці в textarea відповідно до введених даних
document.querySelector('#createTable').addEventListener('click', function () {
    let tableTag = document.createElement('table');
    this.style.outline = 'none';
    if (table.tr.value.length > 0 && table.td.value.length > 0 && table.widthTd.value.length > 0 && table.heightTd.value.length > 0 && table.widthBorder.value.length > 0) {
        // let tdTag;
        for (let i = 0; i < +table.tr.value; i++) {
            let trTag = document.createElement('tr');
            tableTag.appendChild(trTag);
            for (let j = 0; j < +table.td.value; j++) {
                let tdTag = document.createElement('td');
                trTag.appendChild(tdTag);
                tdTag.style.width = document.querySelector('#widthTd').value + 'px';
                tdTag.style.height = document.querySelector('#heightTd').value + 'px';
                tdTag.style.borderWidth = document.querySelector('#widthBorder').value + 'px';
                tdTag.style.borderStyle = document.querySelector('#typeBorder').value;
                tdTag.style.borderColor = document.querySelector('#colorBorder').value;
                tdTag.textContent = 'TD';
            }
        }
        document.querySelector('.other').insertAdjacentElement('beforeend', tableTag);
        textarea.value += tableTag.outerHTML;
        document.querySelector('.edit').style.display = 'block';
        text.style.display = 'block';
        document.querySelector('.buttons').style.display = 'flex';
        document.querySelector('.add').style.display = 'none';
    }
})

let listTag = document.createElement(`${list.listType.value}`);
// функція для кнопки Create list, при нажиманні на яку буде створюватися код списку в textarea відповідно до введених даних
document.querySelector('#createList').addEventListener('click', function () {
    if (list.listCount.value.length > 0) {
        this.style.outline = 'none';
        for (let i = 1; i <= +list.listCount.value; i++) {
            let liTag = document.createElement('li');
            listTag.appendChild(liTag);
            liTag.textContent = `item ${i}`
            listTag.style.listStyleType = list.listType.value;
        }
        document.querySelector('.other').insertAdjacentElement('beforeend', listTag);
        document.querySelector('.edit').style.display = 'block';
        text.style.display = 'block';
        document.querySelector('.buttons').style.display = 'flex';
        document.querySelector('.add').style.display = 'none';

        textarea.value += listTag.outerHTML;
    }
})