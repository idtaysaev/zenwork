<template>
	<div class="menu">
		<div
			:class="{active: menuActive}"
			class="menu-toggle"
			@click="toggleMenu()">
			<span/>
			<span/>
			<span/>
		</div>
		<nav 
			:class="{active: menuActive}" 
			class="menu-links">
			<transition-group
				tag="ul"
				mode="in-out"
				class="menu-links-list">
				<li
					v-for="link in linksShown"
					:key="link.title"
					class="menu-links-item">
					<a
						:href="link.link"
						class="menu-link">{{ link.title }}</a>
				</li>
			</transition-group>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menuActive: false,
			linksShown: []
		}
	},
	computed: {
		links() {
			return this.$store.state.baseLinks
		}
	},
	methods: {
		toggleMenu() {
			if (this.menuActive === true)
				this.closeMenu()
			else
				this.openMenu()
		},
		closeMenu() {
			this.menuActive = false
			this.linksShown = []
		},
		openMenu() {
			this.menuActive = true
			this.linksShown = []
			this.links.forEach((link, i) => {
				setTimeout(() => this.linksShown.push(link), 100 * i);
			})
		}
	}
}
</script>

<style lang="scss">
.menu {
	position: relative;
	text-align: right;
	white-space: nowrap;
}
.menu-toggle {
	font-size: 14px;
	width: 60px;
	height: 60px;
	padding: 14px 19px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: all 0.3s;
	box-shadow: 0 0 35px $color-shadow;
	background-color: $color-accent;
	background-image: linear-gradient(to bottom, rgba($color-accent, 0.4), rgba($color-primary, 0.4));
	border-radius: 50%;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
	span {
		width: 100%;
		display: block;
		position: relative;
		height: 3px;
		background-color: white;
		margin-bottom: 4px;
		transition: all 0.3s ease-in-out;
	}
	span:nth-child(2) {
		width: 70%;
	}
	span:last-child {
		transition-delay: 0.3s;
		margin-bottom: 0;
	}
	&.active {
		span:first-child {
			transform: translate3d(0, -8px, 0);
			opacity: 0;
		}
		span:nth-child(2) {
			width: 100%;
			transform: rotate(45deg);
		}
		span:last-child {
			transform: rotate(-45deg) translate3d(5px, -5px, 0);
		}
	}
}
.menu-links {
	display: none;
	&.active {
		display: block;
	}
	position: absolute;
	bottom: -1em;
	right: 0;
	transform: translate3d(0, 100%, 0);
}
.menu-links-item {
	&:not(:last-child) {
		margin-bottom: 1em;
	}
	&.v-enter-active {
		animation: 1s fadeIn both;
	}
}
.menu-link {
	display: inline-block;
	padding: 0.4em 2em;
	background-color: $color-accent;
	box-shadow: 0 0 20px $color-shadow;
	color: white;
	border-radius: 2em;

	&:hover {
		color: white;
		opacity: 0.8;
	}

	&:focus {
		color: white;
		opacity: 0.7;
	}
}
</style>
