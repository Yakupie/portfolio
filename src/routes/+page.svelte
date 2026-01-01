<script>
	import { onMount } from 'svelte';

	import Navbar from '$lib/components/Navbar.svelte';
	import MainPage from '$lib/components/MainPage.svelte';
	import PageCard from '$lib/components/pageCard.svelte';
	import Experiement from '$lib/components/Experiement.svelte';
	import Contact from '$lib/components/Contact.svelte';

	import { gsap } from 'gsap';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMount(() => {
		if (typeof window === 'undefined') return;

		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

		gsap.from('.navbar', {
			y: -40,
			opacity: 0,
			duration: 0.8
		});

		gsap.utils.toArray('.section').forEach(el => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 85%',
					once: true
				},
				y: 40,
				opacity: 0,
				duration: 0.8
			});
		});
	});
</script>

<!-- HERO -->
<div class="container hero">
	<!-- 🔥 LCP IMAGE -->
<img
	class="heroBg"
	src="/assets/background.webp"
	alt=""
	loading="eager"
	fetchpriority="high"
/>


	<Navbar />
	<MainPage />
</div>

<div class="container section">
	<PageCard />
</div>

<div class="container section">
	<Experiement />
</div>

<div class="container section">
	<Contact />
</div>

<style>
.container > *:not(.heroBg) {
	position: relative;
	z-index: 2;
}

:global(*) {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

/* HERO */
.hero {
	height: 95vh;
	position: relative;
	overflow: hidden;
}

/* 🔥 HERO IMAGE (LCP FIX) */
.heroBg {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
	filter: brightness(0.4);
}

.hero::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 140px;
	background: linear-gradient(
		to bottom,
		rgba(7,7,13,0),
		rgba(7,7,13,.6),
		#07070d
	);
	z-index: 1;
}

/* SECTIONS */
.section {
	min-height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background:
		radial-gradient(
			1200px 600px at 50% -280px,
			rgba(123,75,179,.14),
			transparent 72%
		),
		linear-gradient(
			180deg,
			#05050b 0%,
			#080812 50%,
			#05050b 100%
		);
}

/* GLOBAL BG */
:global(html, body) {
	background:
		radial-gradient(
			1400px 700px at 50% -300px,
			rgba(123,75,179,.18),
			transparent 70%
		),
		linear-gradient(
			180deg,
			#05050b 0%,
			#080812 50%,
			#05050b 100%
		);
}

/* SCROLLBAR */
:global(::-webkit-scrollbar) {
	width: 10px;
}
:global(::-webkit-scrollbar-track) {
	background: #05050b;
}
:global(::-webkit-scrollbar-thumb) {
	background: linear-gradient(180deg, #3a2a5e, #211338);
	border-radius: 999px;
	border: 2px solid #05050b;
}
</style>
