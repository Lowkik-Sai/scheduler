# scheduler

A Discord bot for sending automated messages two pre designated channels. 
Currently in use for a Black Desert Online boss timer, the bot can be modified to send any matter of automated messages, to automated commands, just update the cron jobs respectively.

Make sure to add your token and the channel ID into the botconfig.json file.

All you need to do is add your embeds into the Schedule folder and update the Cron jobs in the index.js file.
The jobs will action depending on the system time of the bot, currently there seems to be an issue with node-cron causing the timezone function to not work.



Bot written in discord.js 


time and date format in the cron job are as follows cron.schedule('minute hour date month dayoftheweek', () => {}

dayoftheweek is a number 0-7 0 and 7 are Sunday, Monday is 1 the rest follow suit. To use multiple days sperate with a comma. e.g 1,2,3 will run a job on monday, tuesday, wednesday. 
