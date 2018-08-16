<template>
	<main>
		<banner/>
		<app-content/>
		<subscribe/>
	</main>
</template>

<script>
import Banner from "@/components/sections/home/Banner.vue"
import AppContent from "@/components/layout/AppContent.vue"
import Subscribe from "@/components/sections/home/Subscribe.vue"

export default {
	components: {
		Banner,
		AppContent,
		Subscribe
	}
}
</script>
