const inputValue = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const nameContainer = document.querySelector("#name");
const unContainer = document.querySelector("#user-name");
const reposContainer = document.querySelector("#repos");
const urlContainer = document.querySelector("#url");

const client_id = "Iv1.2693c7d25b24e93c";
const client_secret = "d18a28b3c22dfb3c4c927857e9f18bcc4161504e";

const fetchUsers = async user => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret}`);

  const data = await api_call.json();
  return { data };

};

const showData = () => {
    fetchUsers(inputValue.value)
        .then((res) => {

            nameContainer.innerHTML = `${res.data.name}`

            unContainer.innerHTML = `${res.data.login}`
            
            reposContainer.innerHTML = `${res.data.public_repos}`

            urlContainer.innerHTML = `${res.data.html_url}`
        })
}

searchButton.addEventListener("click", () => {
  showData()
});
