async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    if (!dataContainer) {
        console.error("Element with id 'api-data' not found.");
        return;
    }

    // Show a loading message while fetching
    dataContainer.textContent = 'Loading user data…';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
        }

        const users = await response.json();

        // Clear loading message before appending results
        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Failed to fetch user data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);