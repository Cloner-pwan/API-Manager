class fetcher {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    async checkIfFetched(){
        let respond = await fetch(this.endpoint);
        if (respond.status === 200) {
            console.log(`The endpoint fetched successfully ! ${respond.status}`);
            console.log(`Endpoint: ${this.endpoint}`);
        } else {
            console.log(`could not fetch the endpoint ! Error: ${respond.status}`);
            console.log(`Endpoint: ${this.endpoint}`);
        }
    }

}

let fetchapi = new fetcher("https://official-joke-api.appspot.com/random_ten");
fetchapi.checkIfFetched();


// https://official-joke-api.appspot.com/random_ten