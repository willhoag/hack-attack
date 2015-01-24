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

- For each botserver stack, choose a server to attack.
  - Wiring botservers can be wired directly to a target server, or chained for safer attacks.
- For each direct connection to a target server, an attack occurs.  Limit of 5 connections.
- 5 connections allow a faster hack, 1 connection a slower hack
  - For the attack, another player shuffles and draws cards from the "brute force" deck, keeping them in the order drawn (this creates a random number)
  - 1 connection = 5 cards
  - 2 connection = 4 cards
  - ...
  - 5 connections = 1 card
- The current player must guess the value
- The other player must inform the current player if the value is correct, higher or lower.
- The number of guesses determines the amount of "data" extracted from the server (must figure out some good math)

**3) Admin:**
After each attack, the player draws cards from the admin deck 

- After the attack, the number of connections on that server, determines the number of cards must be drawn from the "Admin deck".
- The more cards drawn, the more dangerous it is for the hacker

> Admin Cards contain both good and bad things for hackers


More Info
---------------------------
### Admin Cards
Each target server has it's own deck.  Once the deck runs out, that server goes
offline.  Drawn cards are kept by the player, unless the card says otherwise.

- Gained extra data (user holds card)
- Hack detected, connected botservers are reported and shutdown. (discarded publically)
- Admin changed password, no data found. (user holds card)


### Brute Force Cards
These cards are used to determine a secret password for the server being attack. Each card has a number 0-9.

- Each attack will generate a new password to be discovered.
- The number of cards used is determined by the number of botservers attacking.


