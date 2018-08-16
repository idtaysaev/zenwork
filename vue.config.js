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
	}
}