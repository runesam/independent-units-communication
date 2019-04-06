# independent units communication
A game with two independent units – the players – communicating with each other using an API.

## Concept
When a player starts, it starts a random (whole) number and sends it to the second player as an approach of starting the game. The receiving player can now always choose between adding one of {-1,0,1} to get to a number that is divisible by 3. Divide it by three. The resulting whole number is then sent back to the original sender.
the security layer does not reflect the player. it is just a security demonstration to access the platform.

## Login flow
<img height="500" alt="Login flow]" src="docs/1st.gif">

#### Client Side.

##### The app routes include two main Routes
- PrivateRoute
- PublicRoute

The behaviour of the PrivateRoute is it renders the targeted component of the user is logged in and redirect to the PublicRoute if not logged in.

The default PublicRoute renders the `Login` component.

##### The Login component is a form on it's submit the user credentials to the server via 'http' request to get a valid JWT.

after successfull login the App redirects to the root Route `/` and renders the `players` components and init the socket connection.

#### Server Side.
##### There are some pre saved users in JSON file to simulate DB.

here they are
| username  | password |
| ------------- | ------------- |
| runesam  | rogina003  |
| sameh  | rogina003  |



## Run The APP

#### Node is Needed
[Node.js](https://nodejs.org/en/)

#### Dependency manager
install `yarn` package manager globally
[Yarn](https://yarnpkg.com/lang/en/docs/install/)

#### Recommended IDE
[VSCode](https://code.visualstudio.com/)

#### Install `eslint` to follow code quality
[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Clone the Repo
clone the repo `git clone git@github.com:runesam/independent-units-communication.git`

then navigate to the project root dir `cd independent-units-communication`

### client
- navigate to the client dir `cd client`
- install dependencies via `yarn`
- init the client server via `yarn serve`
  - default client server port is defiend in `.env` file as `3000`.


### server
- navigate to the client dir `cd server`
- install dependencies via `yarn`
- init the client server via `yarn start`
  - default server port is defiend in `.env` file as `5000`.


## alternative
```shell
  ./execute.sh
```

## Game flow
<img height="500" alt="Login flow]" src="docs/1st.gif">

## Find in the App

### client
- Redux as state manager
- custom middleware
- axios
- socket.io
- redux form
- material UI
- jest

### server
- express
- socket.io
- jwt
- bcrypt

## TODO
### code base
- app is only designed for mobile. responsive to be implemented
- full unit test
- integration test
- include the jwt in the socket messages to be validated
- implement tests for the backend
- enhance message listener

### game
- remove players from players list when they are in a game so they don't receive invites
- break the game in case one of players left the game.
- `Both players should be able to play automatically without user input. One of the players should optionally be adjustable by a user.` not really clear. but to be done :)

