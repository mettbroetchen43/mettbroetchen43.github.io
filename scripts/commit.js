// (C) 2025 mettbroetchen43 / Sascha Mester
// All Rights Reserved
// This file is part of https://mettbroetchen43.github.io
// This file is licensed under the AGPL License.
// License text available at https://www.gnu.org/licenses/agpl-3.0.txt


fetch('https://api.github.com/repos/mettbroetchen43/mettbroetchen43.github.io/commits')
  .then(response => {
    if (!response.ok) throw new Error('Netzwerkfehler');
    return response.json();  // oder response.text() bei Text
  })
  .then(data => {
    // console.log('Dateiinhalt:', text);
    const firstCommit = data[0];
    const sha = firstCommit.sha;
    document.getElementById('commit-id').textContent = sha;    
  })
  .catch(error => {
    document.getElementById('commit-id').textContent = 'Fehler beim Laden';
  });