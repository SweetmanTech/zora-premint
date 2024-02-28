const parseLogEntries = (logEntries) => {
  const response = {} as any;

  logEntries.forEach((log) => {
    // Extract topics[2] - the `to` address, remove leading zeros, and ensure it's in a standard Ethereum address format
    const buyerAddress = '0x' + log.topics[2].substring(26);

    // If the buyerAddress already exists in the response, increment the count, otherwise initialize it
    if (response[buyerAddress]) {
      response[buyerAddress].editions += 1; // Increment the count for this buyerAddress
    } else {
      response[buyerAddress] = {
        buyer: buyerAddress,
        editions: 1, // Initialize the count for this new buyerAddress
      };
    }
  });

  // Update totalCreatorReward based on the count of editions for each buyerAddress
  Object.keys(response).forEach((buyerAddress) => {
    const count = response[buyerAddress].editions;
    response[buyerAddress].totalCreatorReward = (BigInt(count) * 333000000000000n).toString();
  });

  return response;
};

export default parseLogEntries;
