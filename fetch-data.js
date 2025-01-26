document.addEventListener("DOMContentLoaded", () => {
    // Asynchronous function to fetch user data
    async function fetchUserData() {
      // API URL
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
      // Select the data container element
      const dataContainer = document.getElementById('api-data');
  
      try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
  
        // Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // Parse the response as JSON
        const users = await response.json();
  
        // Clear existing content in the data container
        dataContainer.innerHTML = '';
  
        // Create a <ul> element
        const userList = document.createElement('ul');
  
        // Loop through the users and append their names to the list
        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
  
        // Append the user list to the data container
        dataContainer.appendChild(userList);
      } catch (error) {
        // Handle errors by displaying a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
      }
    }
  
    // Invoke the fetchUserData function
    fetchUserData();
  });
  