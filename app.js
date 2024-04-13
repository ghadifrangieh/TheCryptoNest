

// Fetch data initially
fetchData();

// Fetch data every minute (60000 milliseconds)
setInterval(fetchData, 60000);

function fetchData() {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,dogecoin,cardano,tether,solana,xrp,shiba-inu,litecoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      var solanaPrice = data.solana.usd;
      document.getElementById('Solana').textContent = `$${solanaPrice}`;
      var ethereum =data.ethereum.usd;
      document.getElementById('Ethereum').textContent=`$${ethereum}`;
      var bitcoin =data.bitcoin.usd;
      document.getElementById('btc').textContent=`$${bitcoin}`;
      var  litecoin =data.litecoin.usd;
      document.getElementById('ltc').textContent=`$${litecoin}`;
      var xrp=data.ripple.usd;
      document.getElementById('xrp').textContent=`$${xrp}`;
      var cardano=data.cardano.usd;
      document.getElementById('ada').textContent=`$${cardano}`;
      var doge=data.dogecoin.usd;
      document.getElementById('doge').textContent=`$${doge}`;
      
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
