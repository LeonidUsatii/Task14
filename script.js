const button = document.getElementById('addImage');
const dImg = document.getElementById('d-img');

button.addEventListener('click', () => {
  const img = document.createElement('img');
  img.src = 'a.jpg';
  img.alt = 'pict';
  dImg.append(img);
  img.classList.add('myImg');

  setTimeout(
    () => {
      img.classList.add('delete');
    },

    5000
  );
});
