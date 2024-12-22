<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Knowable

**Knowable** is a mobile learning application inspired by Duolingo, designed to provide an interactive and fun way to learn a specific topic or skill. This application is currently under development and leverages the following technologies:

## Tech Stack

### Frontend:

- **React Native**: Enables cross-platform compatibility for Android and iOS devices.

### Backend:

- **NestJS**: A robust Node.js framework for scalable backend API development.
- **GraphQL**: Ensures efficient and flexible communication between the frontend and backend.
- **TypeORM**: Manages database interactions with an ORM approach.
- **PostgreSQL**: A relational database for efficient data storage and retrieval.

---

## Project Architecture

The application follows a clean and modular architecture:

1. **Frontend (React Native)**:

   - Serves as the user-facing interface for Android and iOS devices.
   - Communicates with the backend via GraphQL APIs.

2. **Backend (NestJS)**:

   - Handles business logic and API routing.
   - Ensures secure and scalable operations.
   - Integrates with TypeORM for structured database interactions.

3. **Database (PostgreSQL)**:
   - Stores user data, progress, and application content.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Features

- User authentication and profile management.
- Cross-platform compatibility (iOS and Android).
- Interactive and engaging learning modules.
- Real-time updates and data synchronization.
- Scalable backend with efficient data handling.

```bash
$ npm install
```

## Running the app

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL (latest version)

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/knowable.git
   ```

2.  ``` npm install ```

3. ``` npm run start:dev ```

## generating modules

nest g resource <name>

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Commit Guide 

chore: update <NAME>  – if it’s a structural update or cleanup.
feat: add new fields to <NAME>  – if you added new fields.
fix: correct data types in <NAME>  – if it’s fixing data types or validations.
refactor: optimize relationships in <NAME> if it's refactor



