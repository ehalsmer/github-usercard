const staticTestData = {
  "login": "ehalsmer",
  "id": 44128101,
  "node_id": "MDQ6VXNlcjQ0MTI4MTAx",
  "avatar_url": "https://avatars0.githubusercontent.com/u/44128101?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ehalsmer",
  "html_url": "https://github.com/ehalsmer",
  "followers_url": "https://api.github.com/users/ehalsmer/followers",
  "following_url": "https://api.github.com/users/ehalsmer/following{/other_user}",
  "gists_url": "https://api.github.com/users/ehalsmer/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ehalsmer/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ehalsmer/subscriptions",
  "organizations_url": "https://api.github.com/users/ehalsmer/orgs",
  "repos_url": "https://api.github.com/users/ehalsmer/repos",
  "events_url": "https://api.github.com/users/ehalsmer/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ehalsmer/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Eleasah Halsmer",
  "company": "Geomni",
  "blog": "",
  "location": "Lehi, Utah",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 25,
  "public_gists": 0,
  "followers": 14,
  "following": 21,
  "created_at": "2018-10-14T02:25:35Z",
  "updated_at": "2019-06-23T15:35:08Z"
}

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const promise = axios.get('https://api.github.com/users/ehalsmer')




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// test data:

createCard(staticTestData);

function createCard(user){
  // create elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');


  // create structure
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // add classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // set content
  image.src = user.avatar_url;
  name.textContent = user.name;
  username.textContent = user.login;
  location.textContent = `Location: ${user.location}`;

  profile.textContent = `Profile: `
  profile.appendChild(profileLink);
  profileLink.setAttribute('href', `${user.html_url}`);
  profileLink.textContent = `${user.html_url}`;

  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  // any event listeners?

  // return card
  console.log(card);
  return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
