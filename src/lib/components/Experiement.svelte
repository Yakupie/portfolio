<script>
	import web1 from '$lib/assets/web1.png';
	import web2 from '$lib/assets/web2.png';
	import web3 from '$lib/assets/web3.png';

	let expSlider;
	let projSlider;

	function scroll(el, dir) {
		if (!el) return;
		el.scrollBy({ left: dir * 320, behavior: 'smooth' });
	}

	const experiences = [
		{ title: 'Component Development', desc: 'Reusable ve temiz UI component’leri geliştiriyorum.', badge: 'UI' },
		{ title: 'Svelte UI Development', desc: 'Modern ve performanslı Svelte arayüzleri.', badge: 'Svelte' },
		{ title: 'Responsive Design', desc: 'Tüm ekranlar için uyumlu tasarım.', badge: 'Responsive' },
		{ title: 'Modern UI Systems', desc: 'Minimal ve sürdürülebilir tasarım dilleri.', badge: 'Design' },
		{ title: 'Terminal Apps (C)', desc: 'C ile terminal tabanlı araçlar.', badge: 'C / CLI' },
		{ title: 'System Logic', desc: 'Temel sistem ve dosya işlemleri.', badge: 'Logic' }
	];

	const projects = [
		{
			title: 'Anizm.net',
			desc: 'Modern ve kullanıcı dostu bir anime platformu.',
			image: web1
		},
		{
			title: 'Portfolio',
			desc: 'Minimal UI prensipleriyle oluşturulmuş kişisel site.',
			image: web2
		},
		{
			title: 'RPM Manager',
			desc: 'Open source Java projesi için resmi website.',
			image: web3
		}
	];
</script>

<section class="wrapper">
	<!-- EXPERIENCES -->
	<section class="section purple">
		<header class="header">
			<div>
				<h2>Tecrübeler</h2>
				<p>Odaklandığım teknik alanlar</p>
			</div>

			<div class="arrows">
				<button aria-label="Önceki" on:click={() => scroll(expSlider, -1)}>‹</button>
				<button aria-label="Sonraki" on:click={() => scroll(expSlider, 1)}>›</button>
			</div>
		</header>

		<div class="slider" bind:this={expSlider}>
			{#each experiences as exp}
				<div class="card">
					<span class="badge">{exp.badge}</span>
					<h3>{exp.title}</h3>
					<p>{exp.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- PROJECTS -->
	<section class="section green">
		<header class="header">
			<div>
				<h2>Projeler</h2>
				<p>Tamamlanan çalışmalar</p>
			</div>

			<div class="arrows">
				<button aria-label="Önceki" on:click={() => scroll(projSlider, -1)}>‹</button>
				<button aria-label="Sonraki" on:click={() => scroll(projSlider, 1)}>›</button>
			</div>
		</header>

		<div class="slider" bind:this={projSlider}>
			{#each projects as proj}
				<div class="card project">
					<img
						src={proj.image}
						alt={proj.title}
						width="320"
						height="180"
						loading="lazy"
						decoding="async"
					/>
					<h3>{proj.title}</h3>
					<p>{proj.desc}</p>
				</div>
			{/each}
		</div>
	</section>
</section>

<style>

.wrapper {
	padding: 4rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 4.5rem;
}

.section {
	max-width: 980px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}

.header h2 {
	font-family: 'Montserrat', sans-serif;
	font-size: 1.55rem;
	font-weight: 600;
	color: #f1efff;
}

.header p {
	margin-top: 0.35rem;
	font-family: 'Inter', sans-serif;
	font-size: 0.9rem;
	color: rgba(241, 239, 255, 0.55);
}

.arrows {
	display: flex;
	gap: 0.4rem;
}

.arrows button {
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.14);
	color: #fff;
	cursor: pointer;
}

.slider {
	display: flex;
	gap: 1.4rem;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
}

.card {
	min-width: 260px;
	position: relative;
	background: rgba(10, 10, 18, 0.65);
	border-radius: 16px;
	padding: 1.6rem;
	scroll-snap-align: start;
	transition: transform 0.18s ease;
	backdrop-filter: blur(12px);
}

.card:hover {
	transform: translateY(-4px);
}

.badge {
	position: absolute;
	top: 14px;
	right: 14px;
	font-family: 'Inter', sans-serif;
	font-size: 0.65rem;
	padding: 0.25rem 0.55rem;
	border-radius: 999px;
	background: rgba(123, 75, 179, 0.18);
	color: #d7c7ff;
}

.card h3 {
	font-family: 'Montserrat', sans-serif;
	font-size: 1rem;
	font-weight: 500;
	color: #f1efff;
}

.card p {
	margin-top: 0.4rem;
	font-family: 'Inter', sans-serif;
	font-size: 0.85rem;
	line-height: 1.6;
	color: rgba(241, 239, 255, 0.6);
}

/* PROJECT IMAGE */
.project img {
	width: 100%;
	height: 180px;
	object-fit: cover;
	border-radius: 14px;
	margin-bottom: 1rem;
	display: block;
}

/* THEMES */
.purple .card {
	border: 1px solid rgba(123, 75, 179, 0.25);
}
.green .card {
	border: 1px solid rgba(70, 180, 120, 0.25);
}

/* RESPONSIVE */
@media (max-width: 900px) {
	.arrows {
		display: none;
	}
	.slider {
		flex-direction: column;
		overflow: visible;
	}
	.card {
		width: 100%;
		max-width: 520px;
	}
}
</style>
