<template>
	<div class="content">
		<create-space/>
		<stay-focused/>
		<quit-multitasking/>
	</div>
</template>

<script>
import CreateSpace from "@/components/sections/home/CreateSpace.vue"
import StayFocused from "@/components/sections/home/StayFocused.vue"
import QuitMultitasking from "@/components/sections/home/QuitMultitasking.vue"

export default {
	components: {
		CreateSpace,
		StayFocused,
		QuitMultitasking
	}
}
</script>

<style lang="scss">
.content {
	.content-section:nth-child(2n-1) {
		@include respond-to(x-small) {
			background-position: center left;
		}
		.card {
			margin-left: auto;
		}
	}
}
</style>
