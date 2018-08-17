<template>
	<app-section
		class="banner"
		small>
		<div class="banner-container">
			<h1 v-animate>
				How to Work From Home and<br class="lg-only"> Get Stuff Done
			</h1>
			<p v-animate="500">
				An ever-increasing number of contractors and full-time employees are working from home or daydreaming about working from home.
			</p>
			<p
				v-animate="1000"
				class="tip">
				Sign up now to receive our daily tips
			</p>
			<subscribe-form v-animate="1200"/>
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
.banner {
	padding-top: 5em;
	background: url("../../../assets/img/banner-background.png") center, url("../../../assets/img/banner-decor.png") bottom left;
	background-size: auto 100%, auto;
	background-repeat: no-repeat;
	@include respond-to(small) {
		padding-top: 8em;
		background-position: top right, bottom left;
	}
	@include respond-to(x-large) {
		padding-top: 14.4em;
		background-size: auto 92%, auto;
	}

}
.banner-container {
	max-width: 510px;
	background-color: rgba(white, 0.8);
	box-shadow: 0 31px 38px $color-shadow;
	border-radius: $border-radius;
	padding: 1em;
	@include respond-to(x-small) {
		padding: 2em;
	}
	@include respond-to(x-large) {
		background-color: transparent;
		padding: 0;
		box-shadow: none;
	}
}
.tip {
	font-size: $font-size-large;
}
</style>
