module.exports = {
    css: {
		loaderOptions: {
			sass: {
				data: `
          @import "@/assets/scss/utils/_variables.scss";
          @import "@/assets/scss/utils/_mixins.scss";
        `
			}
		}
	},

    pwa: {
      themeColor: '#fa7875',
      msTileColor: '#ffffff'
    }
}