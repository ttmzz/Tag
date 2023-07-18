form();

const btn = document.createElement('button');
btn.classList.add('btn');

btn.innerText = "Play";
document.getElementById('forms').appendChild(btn);

function form() {

    const label1 = document.createElement('label');
    label1.classList.add('lemail');
    label1.innerText = "E-mail";
    document.getElementById('forms').appendChild(label1);

    const email = document.createElement('input');
    email.classList.add('valor');
    email.classList.add('a');
    document.getElementById('forms').appendChild(email);

    // =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

    const label2 = document.createElement('label');
    label2.classList.add('lsenha');
    label2.innerText = "Senha";
    document.getElementById('forms').appendChild(label2);
    
    const senha = document.createElement('input');
    senha.classList.add('valor');
    document.getElementById('forms').appendChild(senha);
}
