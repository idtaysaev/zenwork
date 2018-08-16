<template>
	<content-section
		id="create-space"
		:title="title"
		:link="link"
		class="create-space">
		<p>
			Designate a workspace at home for those late nights. This can be anywhere you have access to a flat surface and adequate lighting that allows you to concentrate — a desk, your kitchen table, a reading chair, just not your bed! This helps your mind and body understand when you’re in working mode and allows you to more effectively transition to "home" mode when you’re done.
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
			title: "Create Some Space",
			link: "#"
		}
	}
}
</script>

<style lang="scss">
.create-space {
	background-image: url(../../../assets/img/create-space-background.png);
}
</style>

