<template>
	<footer class="footer">
		<container>
			<div class="footer-layout">
				<div
					v-animate
					class="footer-content">
					<logo no-gradient/>
					<p>
						We provide resource for companies that see remote work as an opportunity, from hiring to training to managing distributed teams. We are focused on providing expert insight, best practices, and valuable support for organizations exploring or already embracing a remote team as a significant portion of their workforce.
					</p>
				</div>
				<footer-links v-animate="300"/>
				<social-links v-animate="400"/>
			</div>
			<p
				v-animate="500"
				class="copyright">
				&copy; 2018 Zenwork. All rights reserved.
			</p>
		</container>
	</footer>
</template>

<script>
import Logo from "@/components/elements/Logo.vue"
import FooterLinks from "@/components/elements/FooterLinks.vue"
import SocialLinks from "@/components/elements/SocialLinks.vue"

export default {
	components: {
		Logo,
		FooterLinks,
		SocialLinks
	}
}
</script>

<style lang="scss">
.footer {
	padding: 2.2em 0;
	background: url("../../assets/img/footer-decor-1.png") no-repeat bottom left;
	background-size: auto 100%;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		z-index: -1;
		bottom: 0;
		right: 0;
		width: 723px;
		height: 551px;
		background: url("../../assets/img/footer-decor-2.png") no-repeat bottom right;
	}
}
.footer-layout {
	text-align: center;
	margin-bottom: 2em;
	.logo {
		margin: 0 auto 2.3em;
		width: 175px;
	}
	@include respond-to(medium) {
		margin-bottom: 4.3em;
		text-align: left;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		.logo {
			margin-left: 0;
		}
		.footer-links {
			margin: 0 2em;
		}
	}
	@include respond-to(large) {
		padding-right: 110px;
	}
	.footer-links {
		margin-bottom: 2em;
		@include respond-to(medium) {
			margin-bottom: 0;
		}
	}
}
.footer-content {
	max-width: 650px;
	margin: 0 auto 2em;
	font-size: $font-size-x-small;
	@include respond-to(medium) {
		margin: 0;
	}
}
.copyright {
	text-align: center;
	@include respond-to(medium) {
		text-align: left;
	}
}
</style>
