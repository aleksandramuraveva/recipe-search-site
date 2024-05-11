// Search bar toggling style
const searchContainer = document.querySelector(".search__container");
const input = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  input.focus();
})

// Search bar toggling style ends



// Making a request to API and displaying it on the page

searchBtn.addEventListener("click", () => {
	let query = document.querySelector(".search__input").value;
	if(query.trim() !== "") {
		searchRecipes(query);
	}
	document.querySelector(".search__input").value = "";
	
	
})


const gridContainer = document.querySelector(".grid-container");






async function searchRecipes(query) {
  const baseUrl = 'https://api.edamam.com';
  const endpoint = '/api/recipes/v2';
  const apiKey = '262609570d631dc7dd2a58e9b474ad63'; // API key
  const apiId = "4cdbc013"
  const searchQuery = encodeURIComponent(query); // search query

  const url = `${baseUrl}${endpoint}?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&type=public`;

  try {
  	gridContainer.innerHTML = "";
  	
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.hits.slice(0,3)); 

    display(data)
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}



function display(data) {
	
	let htmlContent = "";

	if(data.hits) {
		data.hits.slice(0,4).forEach((item) => {
			const newEl = document.createElement("div");
			newEl.classList.add("card");
			newEl.innerHTML = `
						<div class="card__img">
							<img src="${item.recipe.image}" alt="dish">
						</div>
						<div class="card__content">
							<div class="card__text">
								<h2 class="card__title">${item.recipe.label}</h2>
								<p class="card__description"></p>
							</div>
						`
			gridContainer.append(newEl)
		})
	}
}


//Notes for myself


//Application ID
//4cdbc013

//This is the application ID, you should send with each API request.

//Application Keys
//262609570d631dc7dd2a58e9b474ad63  —
//These are application keys used to authenticate requests.

//https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&type=public
	// let inputValue = document.querySelector(".search__input").value;