<script>
	let menuOpen = false;
	import avatar from '$lib/assets/gitpp.webp';

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<nav class="navbar" aria-label="Main navigation">
	<div class="navbarWrapper">
		<div class="navbarProfileArea">
			<button
				class="navbarProfilePicture"
				aria-label="Go to home"
				type="button"
				style="background-image: url({avatar});"
			></button>
		</div>

		<div class="navbarUlArea">
		<ul
	id="main-menu"
	class:open={menuOpen}
	role="menubar"
>
	<li role="none">
	<a role="menuitem" href="#overview" on:click={() => (menuOpen = false)}>
		Overview
	</a>
</li>

<li role="none">
	<a role="menuitem" href="#experiments" on:click={() => (menuOpen = false)}>
		Experiments
	</a>
</li>

<li role="none">
	<a role="menuitem" href="#contact" on:click={() => (menuOpen = false)}>
		Contact
	</a>
</li>

</ul>

		</div>

		<div class="navbarButtonArea">
			<button
				class="hamburger"
				aria-label="Open menu"
				aria-controls="main-menu"
				aria-expanded={menuOpen}
				type="button"
				on:click={toggleMenu}
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>
	</div>
</nav>

<style>
.navbar{
	width: 100%;
	height: clamp(72px, 10vh, 96px);
	display: flex;
	justify-content: center;
	align-items: center;
}

.navbarWrapper{
	width: 95%;
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;
}

.navbarProfileArea{
	width: 12%;
	min-width: 72px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.navbarProfilePicture{
	width: 70px;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	cursor: pointer;
	border: none;
}

.navbarUlArea{
	width: 76%;
	display: flex;
	justify-content: center;
}

.navbarUlArea ul{
	display: flex;
	gap: 4rem;
	list-style: none;
}

.navbarUlArea ul li a{
	text-decoration: none;
	color: white;
	font-family: "Inter", sans-serif;
	font-size: 1.1rem;
	font-weight: 300;
	letter-spacing: 0.1rem;
}

.navbarButtonArea{
	width: 12%;
	min-width: 72px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.hamburger{
	display: none;
	flex-direction: column;
	gap: 5px;
	background: none;
	border: none;
	cursor: pointer;
}

.hamburger span{
	width: 24px;
	height: 2px;
	background: white;
	border-radius: 2px;
}

/* FOCUS VISIBLE */
:global(button:focus-visible),
:global(a:focus-visible){
	outline: 2px solid #9b6bff;
	outline-offset: 3px;
}

@media (max-width: 900px){
	.navbarUlArea ul{
		gap: 2.2rem;
	}

	.navbarUlArea ul li a{
		font-size: 1rem;
	}
}

@media (max-width: 700px){
	.navbarWrapper{
		justify-content: space-between;
	}

	.navbarUlArea{
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background: rgba(10, 10, 20, 0.95);
		backdrop-filter: blur(12px);
	}

	.navbarUlArea ul{
		flex-direction: column;
		gap: 2rem;
		padding: 2rem 0;
		display: none;
	}

	.navbarUlArea ul.open{
		display: flex;
	}

	.hamburger{
		display: flex;
	}

	.navbarProfilePicture{
		width: 50px;
	}
}
</style>
