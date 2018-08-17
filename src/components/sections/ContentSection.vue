<template>
	<app-section
		class="content-section"
		small>
		<div class="card">
			<h2
				v-animate
				class="card-title"
				v-html="title"/>
			<div
				v-animate="200"
				class="card-content">
				<slot/>
			</div>
			<p v-animate="100">
				<a
					:href="link"
					:title="title"
					class="card-link">
					Read more
					<svg
						class="card-link-arrow"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="37"
						height="23"
						viewBox="0 0 37 23">
						<defs>
							<path
								id="8wf5a"
								d="M1161 3222.5l-11.33 11.38-2-2 7.93-7.96h-15.86v-2.84h15.86l-7.93-7.96 2-2zm-37-1.42h8.1v2.84h-8.1z"/>
						</defs>
						<g transform="translate(-1124 -3211)">
							<use
								class="card-link-arrow-fill"
								fill="#fa7875"
								xlink:href="#8wf5a"/>
						</g>
					</svg>
				</a>
			</p>
		</div>
	</app-section>
</template>

<script>
import AppSection from "./AppSection"
export default {
	components: {
		AppSection
	},
	props: {
		title: {
			type: String,
			required: true
		},
		link: {
			type: String,
			default: undefined
		}
	}
}
</script>

<style lang="scss">
.content-section {
	background-position: center;
	background-size: auto 100%;
	padding: 3em 0;
	@include respond-to(x-small) {
		padding: 5em 0;
		background-position: right center;
		background-size: auto 80%;
	}
	@include respond-to(small) {
		padding: 7.3em 0;
		background-size: auto 100%;
	}
}
.card {
	padding: 1em;
	@include respond-to(x-small) {
		padding: 2em;
	}
	@include respond-to(small) {
		padding: 4em;
	}
  background-color: rgba(white, 0.8);
  box-shadow: 0 31px 38px $color-shadow;
	border-radius: $border-radius;
	max-width: 650px;
}
.card-content {
	margin-bottom: 3.2em;
}
.card-link {
	text-transform: uppercase;
	font-weight: bold;
	display: inline-flex;
	align-items: center;

	&:hover {
		.card-link-arrow {
			transform: translate3d(8px, 0, 0);
		}
		.card-link-arrow-fill {
			fill: $color-primary;
		}
	}

}
.card-link-arrow {
	margin-left: 1em;
	transition: transform 0.3s ease-in-out;
}
.card-link-arrow-fill {
	transition: fill 0.3s;
}
</style>
