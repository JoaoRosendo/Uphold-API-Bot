# Uphold API Bot
Using the Uphold API, the price of several cryptocurrency pairs (BTC-USD and ETH-USD) is checked every 5 seconds. A new alert is generated if the deviation from the price at the last alert is bigger than 0.01%.
# How to use
To run this program, you must install Node.js. 

After installing Node.js and downloading this repository, you can run it by opening a terminal in the repository's path and entering the command "node .".

The program runs in an infinite loop, and if the condition is verified, an alert is printed to the console identifying the pair and the deviation percentage.
