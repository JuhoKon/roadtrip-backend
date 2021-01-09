<h1 align="center">Welcome to roadtrip-planner backend 👋</h1>
<p>

  <a href="https://github.com/JuhoKon/roadtrip-backend#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuhoKon/roadtrip-backend/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Backend for a web application for planning and creating roadtrips.

### 🏠 [Homepage](https://github.com/JuhoKon/roadtrip-backend)

### ✨ [Demo](https://roadtrip-planner-gis.herokuapp.com/)

## About

This is a backend-server (Express.js) for Roadtrip-planner.
Frontend is available: [here](https://github.com/JuhoKon/roadtrip-front).

For the time being, a demo is available at: [here](https://roadtrip-planner-gis.herokuapp.com/).

## Setup

You need two API keys from Google Maps API for Places, Directions and Maps.

Create .env file with following variables:

- REACT_APP_API_KEY (frontend API key, used for loading Google Maps in React)
- API_KEY (unrestricted API key, used for Google API )

## Install

```sh
yarn install
```

## Usage

```sh
yarn run watch
```

## Deployment

Copy React-build files to the `build`-folder. Then:

```sh
yarn run build
yarn run serve
```

Enter `http://localhost:8080/` and the application should be running.

## Author

👤 **Juho Kontiainen**

- Github: [@JuhoKon](https://github.com/JuhoKon)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JuhoKon/roadtrip-backend/issues). You can also take a look at the [contributing guide](https://github.com/JuhoKon/roadtrip-backend/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Juho Kontiainen](https://github.com/JuhoKon).<br />
This project is [ISC](https://github.com/JuhoKon/roadtrip-backend/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
