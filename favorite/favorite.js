function favorite() {
    let favorite = document.getElementById("favorite");
    let favoriteOff = document.getElementsByClassName("favorite-off")[0];

    console.log(favorite)
    console.log(favoriteOff)

    if (favoriteOff !== undefined) {
        favorite.innerHTML = `<svg onclick="favorite()" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#383838"/>
        <path d="M50.0007 71.959L75.7507 87.5006L68.9173 58.209L91.6673 38.5006L61.709 35.959L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959Z" fill="#383838"/>
        </svg>`;
    } else {
        favorite.innerHTML = `<svg class="favorite-off" onclick="favorite()" width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z"
          fill="#BABABA"
        />
        <path
          d="M91.6673 38.5006L61.709 35.9173L50.0007 8.33398L38.2923 35.959L8.33398 38.5006L31.084 58.209L24.2507 87.5006L50.0007 71.959L75.7507 87.5006L68.959 58.209L91.6673 38.5006ZM50.0007 64.1673L34.334 73.6256L38.5007 55.7923L24.6673 43.7923L42.9173 42.209L50.0007 25.4173L57.1257 42.2507L75.3757 43.834L61.5423 55.834L65.709 73.6673L50.0007 64.1673Z"
          fill="#BABABA"
        />
      </svg>`
    }
  }