function shortenLink() {
  let inputUrl = document.getElementById("amazonLink").value;

  if (!inputUrl.includes("amazon.com") && !inputUrl.includes("amazon.co.uk")) {
    alert("Please enter a valid Amazon URL.");
    return;
  }

  // Extract the Amazon ASIN from the URL
  let match = inputUrl.match(/\/dp\/([A-Z0-9]{10})/);
  if (!match) {
    alert("Invalid Amazon URL format.");
    return;
  }

  let asin = match[1];

  // Generate a clean Amazon short link
  let shortUrl = `https://www.amazon.com/dp/${asin}/`;

  document.getElementById("shortenedLink").innerHTML = `Shortened Link: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}
