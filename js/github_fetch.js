const spawn = document.getElementById('spawn');
const own = 'Nicorho12';
const api_url = `https://api.github.com/users/${own}/repos`;

fetch(api_url)
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const repoElement = document.createElement('article');
            const title = document.createElement('h2');
            title.textContent = repo.name;
            const description = document.createElement('p');
            description.textContent = repo.description || 'No description provided.';
            const link = document.createElement('a');
            link.href = repo.homepage;
            link.textContent = 'Visit Project';
            const link2 = document.createElement('a');
            link2.href = repo.html_url;
            link2.textContent = 'View on GitHub';
            repoElement.appendChild(title);
            repoElement.appendChild(description);
            repoElement.appendChild(link);
            repoElement.appendChild(document.createTextNode(' | '));
            repoElement.appendChild(link2);
            spawn.appendChild(repoElement);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
