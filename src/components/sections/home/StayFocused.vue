<template>
	<content-section
		id="stay-focused"
		:title="title"
		:link="link"
		class="stay-focused">
		<p>
			In addition to your workload, you probably also have a to-do list that includes going grocery shopping, washing the dishes, and doing laundry. And it’s probably making you sweat just thinking about how you’ll manage to get everything done. My advice: Compartmentalize. Prioritize the urgent to-do (your work project), and let yourself off the hook with the others.
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
			title: "Stay Focused<br> on Work",
			link: "#"
		}
	}
}
</script>

<style lang="scss">
.stay-focused {
	background-image: url(../../../assets/img/stay-focused-background.png);
}
</style>
