Hack Attack
===========================

Story
---------------------------
Corporation XYZ has been up to no good, gathering data from people's phone records 
unsuspectingly.  You and your fellow hackers have been employed separately to 
gain access to XYZ's data servers, extract the data, and expose their acts to
the authorities.  See who can hack the most data, before the server's go offline.


How To Play
---------------------------
### Goal
Gain access to servers and gather more data than your opponent, before the end of the game.


### Setup
1. Build Servers
    - Create 3 decks, 10 cards each of "server cards".  These represent the _servers_ to be attacked
    - "Set Password" on each server, by drawing 3 "password cards" (this creates a 3 digit random number)
2. Distribute Computers
    - Each player is given 20 computers cards to perform attacks.

### Players Turn
**1) Networking:**
On a player's turn, they must wire their computers to attack the servers

- Player uses computer cards to choose their attacks on the available servers.
- Limit of 3 connections per server. 

**2) Attacking:**
Attacking consists of guessing the admin password to gain access to data. For each server connected to, the player must attempt to find the admin password. The number of connections will determine the amount of guesses allowed.
- Brute Force Attack:
  - 1 connection => 2 guesses
  - 2 connection => 4 guesses
  - 3 connections => 6 guesses
- The current player must guess the value, with the allotted guesses allowed.
- The current player is informed if the value is either correct, higher or lower.
- If admin password is found
    - then obtain data points equal to the number network connection (2 connections, 2 data points)
    - the password is then reset
- If guess limit reached, player must draw multiple server cards equal to the number of connections.

> The results of guessing are also seen by the other players.  This makes it easier for them to continuing hacking the server, after your turn.

**3) Admin:**
When a attack fails the player must draw from the server deck.  Sometimes good things happen, but mostly bad.

- A player who fails a attack must draw multiple server cards equal to the number of their connections to that server.

> The more cards drawn, the more dangerous it is for the hacker


### Game End
The game can end in one of 3 ways:

1. All the servers have gone offline.  The player with the most data wins.
2. A player obtains 20+ pieces of data.
3. A player loses all their computers, losing the game.


More Info
---------------------------
### Game Terms
__computer__: 
A single computer used to network and attack the servers

__server__:
A server in which the players are trying to obtain data.

__admin password__:
The secret password that must be guessed to gain access to the server's data.

__data__:
Data is the reward for hacking a server's admin password successfully.  Occasionally, additional data can be secretly earned from the server deck.


### Computer Cards
Computer Cards are what a player uses to hack a server.  The more computers used, the more guesses you have to find the admin password, but also risk having all those computers blocked.


### Server Cards
Each server has it's own deck (15 cards).  Once the deck runs out, that server goes
offline.  Drawn cards are kept by the player, unless the card says otherwise.

#### Helpful
- __Data Breach__ (4):
Gain a data card (user holds card)

- __Inside Job__ (1):
You've found a friend on the inside helping you with the hack. (discard during attack phase to get an extra hacking guess)

#### Harmful
- __Invalid Password__ (3):
Admin changed password, no data accessed. (user holds card)

- __Hack Detected!!!__ (6):
Hack detected, connected computers are blocked and reported to the authorities. (play immediately)

- __Server Offline__ (1):
Server went offline.  Please remove server from play. (play immediately)


### Password Cards
These cards are used to set a secret password for each server. Each card has a number 0-9.

- A server's password is reset once it has been discovered, choosing 3 new cards from the password deck. (or if "invalid password" server card is drawn)


