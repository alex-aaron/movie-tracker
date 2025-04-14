document.addEventListener("DOMContentLoaded", () => {
  console.log('page loaded!');
  console.log(data);

  const movieForm = document.getElementById('movie-submit-form');
  const title = document.getElementById('title');
  const year = document.getElementById('year');
  const director = document.getElementById('director');
  const watch = document.getElementById('watch');

  movieForm.addEventListener('submit', function(e){
    e.preventDefault();
    data.push({
      title: title.value,
      director: director.value,
      year: year.value,
      watch: watch.value
    });
    console.log(data);
  });

});