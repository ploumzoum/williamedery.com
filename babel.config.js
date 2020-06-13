const path = require("path")
module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			"@": path.resolve("src"),
		},
	},
	publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
}
