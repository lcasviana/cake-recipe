const button = document.querySelector('#send');
button.addEventListener('click', () => {
  const name = document.querySelector('#name');
  const cmnt = document.querySelector('#commentary');
  if (!name.value || !cmnt.value) {
    alert('Preencha os dados corretamente... 😅');
    return;
  }
  alert('Obrigado pelo comentário! 🥰💛');
  name.value = '';
  cmnt.value = '';
});