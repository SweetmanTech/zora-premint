export const getPayerFromTransaction = async (transactionHash: string, endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        jsonrpc: '2.0',
        method: 'eth_getTransactionByHash',
        params: [transactionHash],
      }),
    });
    const data = await response.json();
    return data.result.from;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error fetching transaction:', err);
    return '';
  }
};
