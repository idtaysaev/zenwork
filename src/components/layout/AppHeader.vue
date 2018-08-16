<template>
	<header class="header">
		<container>
			<div class="header-layout">
				<logo/>
				<app-menu/>
			</div>
		</container>
	</header>
</template>

<script>
import Logo from "@/components/elements/Logo.vue"
import AppMenu from "./AppMenu.vue"

export default {
	components: {
		Logo,
		AppMenu
	}
}
</script>

<style lang="scss">
.header {
	position: fixed;
	z-index: 10;
	top: 2em;
	left: 0;
	width: 100%;
	background-color: transparent;
	@include respond-to(large) {
		top: 4.2em;
	}
}
.header-layout {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 0;
}
</style>
