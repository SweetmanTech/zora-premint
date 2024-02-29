const getEthPrice = async () => {
  let response;
  try {
    response = await fetch(
      `https://min-api-v2.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=${process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY}`,
    );
    response = await response.json();
  } catch (ex) {
    response = { data: false };
    console.error(ex);
  }
  return response;
};

export default getEthPrice;
