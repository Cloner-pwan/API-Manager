class fetcher {
  #endpoint;
  constructor(endpoint) {
    this.#endpoint = endpoint;
  }

  async checkIfFetched() {
    try {
      const response = await fetch(this.#endpoint);
      if (!response.ok) {
        throw new Error(`Could not fetch the endpoint! Status: ${response.status}`)
      }
      console.log(`✅ Endpoint fetched successfully Status: ${response.status}`);
      return await response.json();
    } catch (error) {
        console.error(`Error fetching ${this.#endpoint}`, error.message);
        return null;
    }
  }
}

let fetchapi = new fetcher("https://official-joke-api.appspot.com/random_ten");
fetchapi.checkIfFetched();

// https://official-joke-api.appspot.com/random_ten
