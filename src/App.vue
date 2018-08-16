<template>
	<div id="app">
		<app-header/>
		<app-main/>
		<app-footer/>
	</div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader.vue"
import AppMain from "./components/layout/AppMain.vue"
import AppFooter from "./components/layout/AppFooter.vue"

export default {
	components: {
		AppHeader,
		AppMain,
		AppFooter
	}
}
</script>
