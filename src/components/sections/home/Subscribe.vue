<template>
	<app-section class="subscribe">
		<div class="subscribe-layout">
			<div class="subscribe-info">
				<h2 
					v-animate 
					class="subscribe-title">
					Remote jobs waiting ahead!
				</h2>
				<p 
					v-animate="500" 
					class="subscribe-text">
					You'll get our latest and greatest jobs delivered to your inbox 1-2 times a week.
				</p>
			</div>
			<div 
				v-animate="1000" 
				class="subscribe-form-container">
				<subscribe-form/>
			</div>
		</div>
	</app-section>
</template>

<script>
import AppSection from "@/components/sections/AppSection"
import SubscribeForm from "@/components/elements/SubscribeForm.vue"
export default {
	components: {
		AppSection,
		SubscribeForm
	}
}
</script>

<style lang="scss">
.subscribe {
	padding: 3.6em 0;
}
.subscribe-layout {
	padding: 1em;
	border-radius: $border-radius;
	background-color: #322e57;
	background-image: url(../../../assets/img/subscribe-background.jpg);
	background-size: cover;
	color: white;
	line-height: 1.65;
	@include respond-to(x-small) {
		padding: 2em;

	@include respond-to(small) {
		padding: 4em;
	}}
	@include respond-to(medium) {
		padding: 4.8em 14.6%;
	}
	@include respond-to(large) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
.subscribe-title {
	font-weight: bold;
	font-size: $font-size-x-large;
	margin-bottom: 0.3em;
	@include respond-to(small) {
		font-size: $font-size-xxx-large;
	}
}
.subscribe-text {
	opacity: 0.7;
}
.subscribe-info {
	margin-bottom: 2em;
	@include respond-to(large) {
		max-width: 415px;
		margin-right: 2em;
		margin-bottom: 0;
	}
}
.subscribe-form-container {
	@include respond-to(large) {
		max-width: 505px;
	}
}
</style>
