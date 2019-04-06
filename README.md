# independent units communication
A game with two independent units – the players – communicating with each other using an API.

## Concept
When a player starts, it starts a random (whole) number and sends it to the second player as an approach of starting the game. The receiving player can now always choose between adding one of {-1,0,1} to get to a number that is divisible by 3. Divide it by three. The resulting whole number is then sent back to the original sender.
the security layer does not reflect the player. it is just a security demonstration to access the platform.


![Login flow](docs/1st.gif "Login flow")


say it is a game people from the same department can access.

default route of the app is `/login` as long there is no saved `access_token` in the cookies

* if there is an `access_token` we validate it via setting up the socket connection to the back-end.
* if it failed we return `401` to remove the `access_token` from the cookie then we redirect to the `/login` page.
* if success we setup the socket connection to emit and receive messages then we redirect to the `/players` list page.

### User Journey from the `/players` page to `/game` page where the game accur

* `/players` page suppose to list all connected clients (ideally via another tab in the browser or same browser).
* if there is only one connected client (player); the list will be empty (telling there is no player at the moment).
* when another client (player) connect successfully to the back-end, the `/players` page list it (the new player).

#### so now we assume that there is three players connected. meaning on every client's `/players` page there is two players listed (the player won't see him/herself in the list)

* when a `playerI` clicks on a `playerII` from the list; it turns to `invite for a game form` with an `input` field for the init number` and `send button` to submit.
* when `playerI` submit an invitation; the `playerII` on the list turns to the pending state.
* `playerII` gets a popup of the invitation including the init number. with `accept` or `reject` options.
* if `playerII` accepted the invitation; both players gets flagged as `in-game` status and disappear from the `/players` page. so now it is clear that the `/players` page shows only the non `in-game` status players. and there will be one player left in the list as we started with 3 players.
* if `playerII` rejected the game; `playerI` can see the `rejected` sign as the last response from `playerII` and it turns to the ready state again where it can be invited for a game.

so a single player obj could be

``` javascript
  {
    id: "socket_generated_ID",
    status: "in-game" || "pending" || "rejected"
  }
```
