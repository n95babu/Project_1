const button = document.querySelector('#butt');
const ul = document.querySelector('#assets'); // List of data will be post
const newsUl = document.querySelector('#news');
const news = document.querySelector('#tickr-box');
const coinAPI = `https://api.coinranking.com/v1/public/coins`
const newsAPI = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`
const newsAPIKey = `f09a8461c40803deaf10d1196fbe809d292c6f75e25189abc59b25f0a467fceb`



function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

// This fun will render Coins 
const getCoinData = async () => {
  const response = await axios.get(`${coinAPI}`);
  let assets = response.data.data.coins; 
  // const assets =coindata.data.coins //rendering local data
  // console.log(assets)
  assets.forEach(function(coin){
    let li = createNode('li');
    let span = createNode('span');
    let img = createNode('img')
  img.src = coin.iconUrl
  span.innerHTML = `${coin.price} ${coin.name} `; 
  append(li, span);
  append(ul, li);
  append(li, img);
  })

}
getCoinData()


//This function will render news 

const GetNewsData = async () => {
  const response = await axios.get(`${newsAPI}`)
  let news = response.data.Data
  news.forEach(function(coinnews){
    let li =createNode('li')
    let span = createNode('span')

    span.innerHTML = `${coinnews.title}`
    append(li, span);
    append(newsUl, li)
  })


  console.log(response)
}

GetNewsData()








//This function will refresh the coin Prices

// setInterval(() => {
// const assets = document.querySelector('#assets');
// assets.innerHTML = '';
// getCoinData();
// }, 1)


// This function will refresh the news Data

// setInterval(() => {
//   const news = document.querySelector('#news');
//   news.innerHTML = '';
//   GetNewsData
// },10000)





