const form = document.querySelector('#searchForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const searchTErm = form.elements.query.value
})