let foods = JSON.parse(localStorage.getItem('foods')) || [];

function showSection(id){
  document.getElementById('donate').style.display = id==='donate' ? 'block' : 'none';
  document.getElementById('available').style.display = id==='available' ? 'block' : 'none';
  if(id==='available') renderFoods();
}

document.getElementById('foodForm').addEventListener('submit', function(e){
  e.preventDefault();
  let newFood = {
    donor: document.getElementById('donorName').value,
    food: document.getElementById('foodType').value,
    loc: document.getElementById('location').value,
    phone: document.getElementById('phone').value,
    time: new Date().toLocaleString()
  };
  foods.push(newFood);
  localStorage.setItem('foods', JSON.stringify(foods));
  alert('Super bro! Food donation posted! 🙏');
  this.reset();
  showSection('available');
});

function renderFoods(){
  let list = document.getElementById('foodList');
  if(foods.length===0){ list.innerHTML = "<p>No food available now.</p>"; return; }
  list.innerHTML = foods.map(f => `
    <div class="food-card">
      <h3>🍛 ${f.food}</h3>
      <p><b>From:</b> ${f.donor}</p>
      <p><b>Location:</b> ${f.loc}</p>
      <p><b>Contact:</b> ${f.phone}</p>
      <small>${f.time}</small>
    </div>
  `).join('');
}
renderFoods();
