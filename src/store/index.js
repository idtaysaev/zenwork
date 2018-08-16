import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		baseLinks: [
			{
				title: "About",
				link: "#"
			},
			{
				title: "Find Remote Jobs",
				link: "#"
			},
			{
				title: "Post Remote",
				link: "#"
			},
			{
				title: "Jobs",
				link: "#"
			},
			{
				title: "Blog",
				link: "#"
			}
		]
	}
})
