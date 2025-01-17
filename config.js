module.exports = {
	/* The token of your Discord Bot */
	token: "NzM0NTU5MTEyNDM5NzkxNjE2.XxTdkA.indDRBhIBf-npJj8c4ix3S1PV_E",
	/* For the support server */
	support: {
		id: "713831965589241888", // The ID of the support server
		logs: "722475288134680576", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "!", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "DarkPheonix" // And the default footer for the embeds
	},
	defaultLanguage: "english", // The default language for the new servers
	botname: "Kodak", // The name of the bot
	/* Bot's owner informations */
	owner: {
		id: "681869871730130962", // The ID of the bot's owner
		name: "DarkPheonix#0124" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended)
		sentryDSN: "https://52d9d60344b14704815e84650c323479@o422470.ingest.sentry.io/534909"
	},
	/* The others utils links */
	others: {
		github: "None", // Founder's github account
		donate: "not one yet" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "{serversCount} Servers",
			type: "LISTENING"
		},
		{
			name: "MidnightMC",
			type: "PLAYING"
		},
                {
			name: "Kodak",
			type: "LISTENING"
		}
	],
	/* Language configuration */
	languages: [
		{
			name: "en-US",
			nativeName: "English",
			moment: "en",
			defaultMomentFormat: "MMMM Do YYYY",
			default: true,
			aliases: [
				"English",
				"en",
				"en-us",
				"en_us",
				"en_US"
			]
		},
		{
			name: "fr-FR",
			nativeName: "Français",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "fr",
			default: false,
			aliases: [
				"French",
				"français",
				"francais",
				"fr",
				"fr_fr"
			]
		},
		{
			name: "es-ES",
			nativeName: "Español",
			defaultMomentFormat: "MMM Do, YYYY",
			moment: "es",
			default: false,
			aliases: [
				"Spanish",
				"es",
				"es_es"
			]
		}
	]
};
