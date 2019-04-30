const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`Thank you for submitting your form with Fleming Properties! We will be intouch with you right away with your Instant Cash Offer`);
});



