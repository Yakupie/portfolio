<script>
	import web1 from '$lib/assets/web1.webp';
	import web2 from '$lib/assets/web2.webp';
	import web3 from '$lib/assets/web3.webp';

	let expSlider;
	let projSlider;

	function scroll(el, dir) {
		if (!el) return;
		el.scrollBy({ left: dir * 320, behavior: 'smooth' });
	}

	const experiences = [
		{
			title: 'Component Development',
			desc: 'Reusable ve temiz UI component’leri geliştiriyorum.',
			badge: 'UI'
		},
		{
			title: 'Svelte UI Development',
			desc: 'Modern ve performanslı Svelte arayüzleri.',
			badge: 'Svelte'
		},
		{
			title: 'Responsive Design',
			desc: 'Tüm ekranlar için uyumlu tasarım.',
			badge: 'Responsive'
		},
		{
			title: 'Modern UI Systems',
			desc: 'Minimal ve sürdürülebilir tasarım dilleri.',
			badge: 'Design'
		},
		{
			title: 'Terminal Apps (C)',
			desc: 'C ile terminal tabanlı araçlar.',
			badge: 'C / CLI'
		},
		{
			title: 'System Logic',
			desc: 'Temel sistem ve dosya işlemleri.',
			badge: 'Logic'
		}
	];
const projects = [
	{
		title: 'Anizm.net',
		desc: 'Popüler bir anime izleme platformu. Kullanıcı deneyimi, performans ve modern arayüz odağında web sitesinin tasarımı ve geliştirilmesi tarafımca gerçekleştirilmiştir.',
		image: web1
	},
	{
		title: 'Portfolio',
		desc: 'Minimal UI prensipleriyle geliştirilen, projeleri ve teknik yetkinlikleri sade ve etkili bir şekilde sunmayı amaçlayan kişisel web sitesi.',
		image: web2
	},
	{
		title: 'RPM Manager',
		desc: 'Açık kaynaklı bir Java projesi için hazırlanmış, dokümantasyon ve proje tanıtımını merkezine alan resmi web sitesi.',
		image: web3
	}
];


</script>

<section class="wrapper reveal" aria-labelledby="exp-title">

	<!-- EXPERIENCES -->
	<section
		class="section purple reveal-item"
		aria-labelledby="exp-title"
	>
		<header class="header">
			<div>
				<h2 id="exp-title">Tecrübeler</h2>
				<p>Odaklandığım teknik alanlar</p>
			</div>

			<div class="arrows" aria-hidden="false">
				<button
					type="button"
					aria-label="Önceki tecrübeler"
					on:click={() => scroll(expSlider, -1)}
				>
					‹
				</button>
				<button
					type="button"
					aria-label="Sonraki tecrübeler"
					on:click={() => scroll(expSlider, 1)}
				>
					›
				</button>
			</div>
		</header>

		<div
			class="slider"
			bind:this={expSlider}
			role="list"
			aria-label="Tecrübeler listesi"
		>
			{#each experiences as exp}
				<article class="card" role="listitem">
					<span class="badge">{exp.badge}</span>
					<h3>{exp.title}</h3>
					<p>{exp.desc}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- PROJECTS -->
	<section
		class="section green reveal-item"
		aria-labelledby="proj-title"
	>
		<header class="header">
			<div>
				<h2 id="proj-title">Projeler</h2>
				<p>Tamamlanan çalışmalar</p>
			</div>

			<div class="arrows">
				<button
					type="button"
					aria-label="Önceki projeler"
					on:click={() => scroll(projSlider, -1)}
				>
					‹
				</button>
				<button
					type="button"
					aria-label="Sonraki projeler"
					on:click={() => scroll(projSlider, 1)}
				>
					›
				</button>
			</div>
		</header>

		<div
			class="slider"
			bind:this={projSlider}
			role="list"
			aria-label="Projeler listesi"
		>
			{#each projects as proj}
				<article class="card project" role="listitem">
					<img
						src={proj.image}
						alt={`${proj.title} proje görseli`}
						width="320"
						height="180"
						loading="lazy"
						decoding="async"
					/>
					<h3>{proj.title}</h3>
					<p>{proj.desc}</p>
				</article>
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

/* SECTIONS */
.section {
	max-width: 980px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
}

/* HEADER */
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

/* ARROWS */
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

/* SLIDER */
.slider {
	display: flex;
	gap: 1.4rem;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	padding-bottom: 0.4rem;
}

/* CARD */
.card {
	min-width: 260px;
	position: relative;
	background: rgba(10, 10, 18, 0.65);
	border-radius: 16px;
	padding: 1.6rem;
	scroll-snap-align: start;
	backdrop-filter: blur(12px);
	transition: transform 0.18s ease;
}

.card:hover {
	transform: translateY(-4px);
}

/* BADGE */
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

/* TEXT */
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

/* PROJECT */
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

/* ========================= */
/* RESPONSIVE – NO OVERFLOW */
/* ========================= */

@media (max-width: 900px) {
	.wrapper {
		padding: 3rem 1rem;
	}

	.section {
		max-width: 100%;
		width: 100%;
	}

	.header {
		align-items: flex-start;
		gap: 1rem;
	}

	.arrows {
		display: none;
	}

	.slider {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.2rem;
		overflow: hidden; /* 🔑 sağ taşmayı keser */
		padding-bottom: 0;
	}

	.card {
		width: 80%;
		min-width: unset;   /* 🔑 slider’dan kalan min-width iptal */
		max-width: 100%;
	}
}

@media (max-width: 480px) {
	.card {
		padding: 1.3rem;
	}

	.project img {
		height: 160px;
	}

	.header h2 {
		font-size: 1.35rem;
	}

	.header p {
		font-size: 0.8rem;
	}
}

</style>
