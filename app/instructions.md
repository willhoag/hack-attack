Hacker Game (working title)
===========================

Story
---------------------------
Corporation XYZ has been up to no good, gathering data from their competitor 
unsuspecitingly.  You and your fellow hackers have been employeed separately to 
gain access to XYZ's data servers, extract the data, and expose their acts to
the authorities.


How To Play
---------------------------
### Goal
You want hack more servers and gather more data than your opponent, before the end of the game.


### Setup
- Each player is given 10 botservers cards to perform hacks.
- Create 3 decks, 10 cards each of "admin cards".  These represent the _target servers_ to be attacked


### Players Turn
**1) Networking:**
On a player's turn, they must wire their botservers to attack the target servers

- To "network" create multiple stacks of your botserver cards
- After wiring, the attacks begin.

**2) Attacking:**
Attacking consists of guessing the admin password to gain access to data.

- For each network, choose a server to attack.
  - Wiring botservers can be wired directly to a target server, or chained for safer attacks.
  - A player can connect/attack a server with multiple networks *Limit of 3 connections.*
- 3 connections allow a faster hack, 1 connection a slower hack
  - For the attack, another player shuffles and draws cards from the "brute force" deck, keeping them in the order drawn (this creates a random number)
  - 1 connection = 3 cards (10 guesses)
  - 2 connection = 2 cards (5 guesses)
  - 3 connections = 1 card (3 guesses)
- The current player must guess the value, with the allotted guesses allowed.
- The other player must inform the current player if the value is either correct, higher or lower.
- The number of guesses determines the amount of "data" extracted from the server (must figure out some good math)

> I'm not completely comfortable with this yet... still working out the data point scheme

**3) Admin:**
After each attack, the player draws cards from the admin deck 

- After the attack, the number of connections on that server, determines the number of cards must be drawn from the "Admin deck".
- The more cards drawn, the more dangerous it is for the hacker

> Admin Cards contain both good and bad things for hackers, but mostly bad.


### Game End
The game can end in one of 3 ways:

1. All the servers have gone offline.  The player with the most *data* wins.
2. A player obtains 10 pieces of data.
3. A player is identified by the test server admin.



More Info
---------------------------
### Game Pieces
__bot server__: 
A single computer used to network and attack the target servers

__network__:
A chain of "bot servers" which allow your identity to be obscured

__target server__:
A server in which the players are trying to obtain *data*.

__data__:
Data is the reward for hacking a target server successfully.  Additional data can be earned from the admin deck.


### Admin Cards
Each target server has it's own deck.  Once the deck runs out, that server goes
offline.  Drawn cards are kept by the player, unless the card says otherwise.

- GOOD: Gained extra data (user holds card)
- GOOD: Inside info acquired. (discard during hacking phase to get an extra hacking guess)
- NEUTRAL: Admin changed password, no data accessed. (user holds card)
- BAD: Hack detected, connected botservers are reported and shutdown. (discarded publicly)
- BAD: Hack detected, connected botservers are reported and shutdown. (discarded publicly)


### Brute Force Cards
These cards are used to determine a secret password for the server being attack. Each card has a number 0-9.

- Each attack will generate a new password to be discovered.
- The number of cards used is determined by the number of botservers attacking.


