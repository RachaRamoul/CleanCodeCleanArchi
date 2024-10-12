document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Requête POST vers le backend pour ajouter un utilisateur
  await fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName }),
  });

  loadUsers();
});

async function loadUsers() {
  const response = await fetch('/users'); // Requête GET pour obtenir les utilisateurs
  const users = await response.json();
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.firstName} ${user.lastName}`;
    userList.appendChild(li);
  });
}

loadUsers();
