const body = document.body;

const secondbtn = document.getElementById('secondbtn');

const checkbox = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox3 = document.getElementById('checkbox3');

const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

const delete1 = document.getElementById('delete1');
const delete2 = document.getElementById('delete2');
const delete3 = document.getElementById('delete3');

const firstbtn = document.getElementById("firstbtn");
const firstinput = document.getElementById("firstinput");

const notes = document.getElementById("notes");



secondbtn.addEventListener("click", () => {
    if (body.classList.toggle('dark-mode')) {
        secondbtn.textContent = '☀️';
    } else {
        secondbtn.textContent = '🌙';
    };
});



firstbtn.addEventListener("click", () => {
    if (firstinput.value.trim() === "") return;
    const label = document.createElement('label');
    label.className = 'label';


    const sendinput = document.createElement('div');
    sendinput.className = 'input';

    const sendcheckbox = document.createElement('input');
    sendcheckbox.type = 'checkbox';
    sendcheckbox.className = 'checkbox';


    const inputText = document.createElement('span');
    inputText.textContent = firstinput.value;


    sendinput.appendChild(sendcheckbox);
    sendinput.appendChild(inputText);
    label.appendChild(sendinput);


    const icons = document.createElement('div');
    icons.className = 'icons';


    const img1 = document.createElement('img');
    img1.src = 'img/Frame 6.png';

    const img2 = document.createElement('img');
    img2.src = 'img/trash-svgrepo-com 1.png';

    icons.appendChild(img1);
    icons.appendChild(img2);

    label.appendChild(icons);
    notes.appendChild(label);


    sendcheckbox.addEventListener("click", () => {
        sendinput.classList.toggle('done'); 
        setTimeout(() => {
            label.classList.toggle("wait"); 
        }, 1000);
    });

    img2.addEventListener("click", () => {
        label.remove();
    });

    firstinput.value = '';   
});