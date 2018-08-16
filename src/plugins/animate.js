import Vue from "vue"

Vue.directive("animate", {
	inViewport(el) {
		var rect = el.getBoundingClientRect()
		return !(rect.bottom < 0 || rect.right < 0 ||
			rect.left > window.innerWidth ||
			rect.top > window.innerHeight)
	},

	bind(el, binding) {
		el.classList.add("v-animate-before")
		el.$onScroll = function () {
			if (binding.def.inViewport(el)) {
				if (binding.value) {
					setTimeout(() => {
						el.classList.add("v-animate-enter")
						el.classList.remove("v-animate-before")
						binding.def.unbind(el, binding)
					}, binding.value);
				} else {
					el.classList.add("v-animate-enter")
					el.classList.remove("v-animate-before")
					binding.def.unbind(el, binding)
				}
			}
		}
		document.addEventListener("scroll", el.$onScroll)
	},

	inserted(el) {
		el.$onScroll()
	},

	unbind(el) {
		document.removeEventListener("scroll", el.$onScroll)
		delete el.$onScroll
	}
})
