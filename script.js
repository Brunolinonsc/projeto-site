const formulario = document.getElementById('Formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const campoA = parseInt(document.getElementById('campoA').value);
  const campoB = parseInt(document.getElementById('campoB').value);

  if (campoB > campoA) {
    mensagem.textContent = "Parabens o Campo B é maior que Campo A.";
    mensagem.style.color = 'green';
  } else {
    mensagem.textContent = "Seu formulário está invalido, digite um numero maior que o do campo A.";
    mensagem.style.color = 'red';
  }
});