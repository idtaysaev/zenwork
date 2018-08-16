<template>
	<content-section
		id="quit-multitasking"
		:title="title"
		:link="link"
		class="quit-multitasking">
		<p>
			On a similar note, don’t try to fit in the fun stuff on an evening or weekend when you need to be working. If you’re trying to squeeze in writing a blog post during the commercial breaks of American Idol, chances are it won’t be that good, and you’ll end up spending more time on revising it later. Either commit to taking a break from work for some fun or getting everything done now so that you can enjoy yourself fully later.
		</p>
	</content-section>
</template>

<script>
import ContentSection from "@/components/sections/ContentSection"
export default {
	components: {
		ContentSection
	},
	data() {
		return {
			title: "Quit Multitasking",
			link: "#"
		}
	}
}
</script>

<style lang="scss">
.quit-multitasking {
	background-image: url(../../../assets/img/quit-multitasking-background.png);
}
</style>
