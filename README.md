# scheduler

A Discord bot for sending automated messages two pre designated channels. 
Currently in use for a Black Desert Online boss timer, the bot can be modified to send any matter of automated messages.


All you need to do is add your embeds into the Schedule folder and update the Cron jobs in the index.js file.
The jobs will action depending on the system time of the bot, currently there seems to be an issue with node-cron causing the timezone function to not work.



Bot written in discord.js 
