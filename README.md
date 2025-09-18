# API Manager

![npm version](https://img.shields.io/npm/v/JSfetcher-cloner)
![license](https://img.shields.io/badge/license-MIT-green)
![status](https://img.shields.io/badge/status-active-success)

A lightweight JavaScript library for managing API requests with ease. Includes a base `fetcher` class and an extended `ApiManager` class for advanced API operations.

---

## 📖 Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Example Usage](#example-usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Installation

Install via npm:

```bash
npm install JSfetcher-cloner
```

---

## ✨ Features

- **Two main classes**  
  - `fetcher` — handles basic fetch requests.  
  - `ApiManager` — inherits from `fetcher`, so you can use all `fetcher` methods plus additional API management features.  

- **Lightweight and flexible** – suitable for small projects or prototyping.
- **Open source** – contributions and feature requests are welcome.
- **Type-safe ID handling** – supports both string and numeric IDs automatically.

---

## 💻 Example Usage

```javascript
import { ApiManager } from "JSfetcher-cloner";

const api = new ApiManager("endpoint");

// Fetch all data
const data = await api.GET();
console.log(data);

// Add a new item
await api.POST({ id: "12", type: "general", setup: "Hello", punchline: "World" });

// Delete an item
await api.DELETE_byId("12");
```

---

## 🤝 Contributing

We welcome contributions!  
If you’d like to add new methods, fix bugs, or improve documentation:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
