<template>
	<section class="section">
		<container :class="{small : small}">
			<slot/>
		</container>
	</section>
</template>

<script>
export default {
	props: {
		small: {
			type: Boolean,
			default: false
		}
	}
}
</script>


<style lang="scss">
.section {
	padding: 4em 0;

	background-repeat: no-repeat;
}
</style>
