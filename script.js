// const accessKey ='hYgUCDz2L1zXr_000Ped1lS94Hq35wHxd696fCgSBX4';
// const searchform = document.getElementById('search-form')
// const searchbox = document.getElementById('search-box')
// const searchresult = document.getElementById('search-result')
// const somemorebtn = document.getElementById('show-more-btn')

// let keyword = ""
// let page = 1;

// async function searchImages() {
//     keyword = searchbox.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();

//     if(page === 1){
//         searchresult.innerHTML = "";
//     }

//     const results = data.results;
//     results.map((result) =>{
//          const image = document.createElement("img");
//          image.src = result.urls.small; 
//          const imagelink = document.createElement("a");
//          imagelink.href = result.links.html;
//          imagelink.target = "_blank";

//          imagelink.appendChild(image);
//          searchresult.appendChild(imagelink);
//     })
// somemorebtn.style.display = "block";
// }

// searchform.addEventListener('submit',function(e){
//     e.preventDefault();
//     page = 1;
//     searchImages();
// });

// somemorebtn.addEventListener('click',function(e){
//     page++;
//     searchImages();
// })

const accessKey ='hYgUCDz2L1zXr_000Ped1lS94Hq35wHxd696fCgSBX4';

const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('search-box');
const searchresult = document.getElementById('search-result');
const somemorebtn = document.getElementById('show-more-btn');

let keyword = "";
let page = 1;

async function searchImages() {

    keyword = searchbox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchresult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {

        const image = document.createElement("img");
        image.src = result.urls.small;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    });

    somemorebtn.style.display = "block";
}

searchform.addEventListener('submit', async function(e){

    e.preventDefault();

    page = 1;

    somemorebtn.innerText = "Loading...";

    await searchImages();

    somemorebtn.innerText = "Show More";
});

somemorebtn.addEventListener('click', async function(){

    somemorebtn.innerText = "Loading...";

    page++;

    await searchImages();

    somemorebtn.innerText = "Show More";
});