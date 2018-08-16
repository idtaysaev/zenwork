<template>
	<ul class="footer-links">
		<li
			v-for="link in links"
			:key="link.title">
			<a
				:href="link.link"
				:title="link.title"
				class="footer-link">{{ link.title }}</a>
		</li>
	</ul>
</template>

<script>
export default {
	computed: {
		links() {
			return this.$store.state.baseLinks
		}
	}
}
</script>

<style lang="scss">
.footer-links {
	font-size: $font-size-small;
	font-weight: 500;

	li:not(:last-child) {
		margin-bottom: 0.5em;
	}
}
.footer-link {
	color: $color-primary;
	&:hover {
		color: $color-accent;
	}
}
</style>
