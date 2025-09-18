class fetcher {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  setEndpoint(endpoint) {
    this.endpoint = endpoint;
  }
  async checkIfFetched() {
    try {
      const response = await fetch(this.endpoint);

      if (!response.ok) {
        throw new Error(
          `Could not fetch the endpoint! Status: ${response.status}`
        );
      }

      console.log(
        `✅ Endpoint fetched successfully Status: ${response.status}`
      );
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${this.endpoint}`, error.message);
      return null;
    }
  }
  async request(method, headers, body) {
    let config = {
      method: method,
      headers: headers,
      body: body && typeof body === "object" ? JSON.stringify(body) : body,
    };
    let respons = await fetch(this.endpoint, config);
    return respons;
  }
  async requestJSON() {
    let respons = await fetch(this.endpoint);
    return await respons.json();
  }
}

class ApiManager extends fetcher {
  constructor(endpoint) {
    super(endpoint);
  }
  async GET() {
    try {
      let res = await fetch(this.endpoint);
      let status = res.status;
      return res.json();
    } catch (error) {
      console.error(`Could not fetch the endpoint ! ${error}`);
    }
  }
  async POST(body = {}) {
    let config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    let request = await fetch(this.endpoint, config);
    if (!request.ok) {
      throw new Error(`Could not POST ! Status: ${request.status}`);
    }
  }
  async DELETE_byId(id) {
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    let respond = await fetch(this.endpoint);
    let data = await respond.json();

    if (data.length === 0) {
      throw new Error("No items exist to delete!");
    }

    const firstIdType = typeof data[0].id;

    const convertedId =
      firstIdType === "string"
        ? String(id)
        : firstIdType === "number"
        ? Number(id)
        : null;

    if (convertedId === null) {
      throw new Error("Unsupported id type in dataset!");
    }

    const request = await fetch(`${this.endpoint}/${convertedId}`, config);

    if (!request.ok) {
      throw new Error(
        `DELETE failed for id ${convertedId}. Status: ${request.status}`
      );
    }

    console.log(`✅ Item with id ${convertedId} deleted successfully`);
    setTimeout(() => {
      console.clear();
    }, 3000);
  }
  // delete is not ready yet
  async DELETE(any) {
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    let respond = await fetch(this.endpoint);
    let data = await respond.json();

    if (data.length === 0) {
      throw new Error("No items exist to delete!");
    }
  }
  async PUT(body = {}, id) {
    let config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    let request = await fetch(`${this.endpoint}/${id}`, config);
    if (!request.ok) {
      throw new Error(`Could not PUT ! Status: ${request.status}`);
    }
  }
  // remains
  async PATCH(body = {}, id) {
    let config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    let request = await fetch(`${this.endpoint}/${id}`, config);
    if (!request.ok) {
      throw new Error(`Could not PATCH Status: ${request.status}`);
    }
  }
}

let api = new ApiManager();

api.setEndpoint("http://localhost:3000/jokes");
api.checkIfFetched();

let newJoke = {
  type: "General",
  setup: "say hello to the ?",
  punchline: "to the patch",
};
// await api.POST(newJoke);

// await api.DELETE_byId("11");

await api.PATCH(newJoke, 12);

let data = await api.GET();

data.forEach((element) => {
  console.log(element);
});

// https://official-joke-api.appspot.com/random_ten
// http://localhost:3000/jokes
