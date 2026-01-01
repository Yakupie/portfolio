<script>
	import { onMount } from 'svelte';

	import Navbar from '$lib/components/Navbar.svelte';
	import MainPage from '$lib/components/MainPage.svelte';
	import PageCard from '$lib/components/pageCard.svelte';
	import Experiement from '$lib/components/Experiement.svelte';
	import Contact from '$lib/components/Contact.svelte';

	onMount(async () => {
		if (typeof window === 'undefined') return;

		const { gsap } = await import('gsap');
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');

		gsap.registerPlugin(ScrollTrigger);

		// COMPONENT İÇİ ANİMASYON
		gsap.utils.toArray('.reveal').forEach(section => {
			const items = section.querySelectorAll('.reveal-item');

			gsap.from(items, {
				scrollTrigger: {
					trigger: section,
					start: 'top 80%',
					once: true
				},
				y: 40,
				opacity: 0,
				duration: 0.7,
				stagger: 0.15,
				ease: 'power2.out',
                clearProps: 'transform,opacity'
			});
		});
	});
</script>

<!-- HERO -->
<div class="container hero">
	<img
		class="heroBg"
		src="/assets/background.webp"
		alt=""
		width="1280"
		height="720"
		fetchpriority="high"
		loading="eager"
		decoding="async"
	/>

	<Navbar />
	<MainPage />
</div>

<!-- CONTENT -->
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

/* HERO */
.hero {
	position: relative;
	isolation: isolate;
	height: 95vh;
	overflow: hidden;
}

.heroBg {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
}

/* SECTIONS */
.section {
	min-height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

/* GLOBAL BG */
:global(html, body) {
	margin: 0;
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
    height: 5px;
}
:global(::-webkit-scrollbar-track) {
	background: #05050b;
}
:global(::-webkit-scrollbar-thumb) {
	background: linear-gradient(180deg, #3a2a5e, #211338);
	border-radius: 999px;
}
</style>
