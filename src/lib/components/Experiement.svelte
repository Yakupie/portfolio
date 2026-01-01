<script>
    import web1 from '$lib/assets/web1.png';
	import web2 from '$lib/assets/web2.png';
	import web3 from '$lib/assets/web3.png';

	let expSlider;
	let projSlider;

	function scroll(el, dir) {
		if (!el) return;
		el.scrollBy({ left: dir * 300, behavior: 'smooth' });
	}

	const experiences = [
		{ title: "Component Development", desc: "Reusable ve temiz UI component’leri geliştiriyorum.", badge: "UI" },
		{ title: "Svelte UI Development", desc: "Modern ve performanslı Svelte arayüzleri.", badge: "Svelte" },
		{ title: "Responsive Design", desc: "Tüm ekranlar için uyumlu tasarım.", badge: "Responsive" },
		{ title: "Modern UI Systems", desc: "Minimal ve sürdürülebilir tasarım dilleri.", badge: "Design" },
		{ title: "Terminal Apps (C)", desc: "C ile terminal tabanlı araçlar.", badge: "C / CLI" },
		{ title: "System Logic", desc: "Temel sistem ve dosya işlemleri.", badge: "Logic" }
	];
const projects = [
	{
		title: "Anizm.net",
		desc: "Popüler bir online anime izleme platformu için modern ve kullanıcı dostu bir website geliştirdim.",
		image: web1
	},
	{
		title: "Portfolio",
		desc: "Kendi portfolyomu modern UI prensipleri ve minimal tasarım diliyle oluşturdum.",
		image: web2
	},
	{
		title: "RPM Manager",
		desc: "Open source bir Java library’sinin resmi websitesini tasarlayıp geliştirdim.",
		image: web3
	}
];

</script>

<section class="wrapper">

	<section class="section purple">
		<header class="header">
			<div>
				<h2>Tecrübeler</h2>
				<p>Odaklandığım teknik alanlar</p>
			</div>

			<div class="arrows">
				<button on:click={() => scroll(expSlider, -1)}>‹</button>
				<button on:click={() => scroll(expSlider, 1)}>›</button>
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

	<section class="section green">
		<header class="header">
			<div>
				<h2>Projeler</h2>
				<p>Tamamlanan çalışmalar</p>
			</div>

			<div class="arrows">
				<button on:click={() => scroll(projSlider, -1)}>‹</button>
				<button on:click={() => scroll(projSlider, 1)}>›</button>
			</div>
		</header>

		<div class="slider" bind:this={projSlider}>
			{#each projects as proj}
				<div class="card project">
					<div
						class="image"
						style="background-image:url('{proj.image}')"
					></div>
					<h3>{proj.title}</h3>
					<p>{proj.desc}</p>
				</div>
			{/each}
		</div>
	</section>

</section>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Inter:wght@400;500&display=swap');

/* ===== LAYOUT ===== */
.wrapper{
    padding:4rem 1.5rem;
    display:flex;
    flex-direction:column;
    gap:4.5rem;
}

/* ===== SECTION ===== */
.section{
    max-width:980px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:1.6rem;
}

/* ===== HEADER ===== */
.header{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
}

.header h2{
    font-family:'Montserrat', sans-serif;
    font-size:1.55rem;
    font-weight:500;
    color:#f1efff;
}

.header p{
    margin-top:.35rem;
    font-family:'Inter', sans-serif;
    font-size:.9rem;
    color:rgba(241,239,255,.55);
}

/* ===== ARROWS ===== */
.arrows{
    display:flex;
    gap:.4rem;
}

.arrows button{
    width:32px;
    height:32px;
    border-radius:50%;
    background:rgba(255,255,255,.06);
    border:1px solid rgba(255,255,255,.14);
    color:#fff;
    cursor:pointer;
}

/* ===== SLIDER ===== */
.slider{
    display:flex;
    gap:1.4rem;
    overflow-x:auto;
    scroll-snap-type:x mandatory;

    contain: layout paint;
    overscroll-behavior-x: contain;
}

/* ===== CARD ===== */
.card{
    min-width:260px;
    position:relative;
    background:rgba(10,10,18,.65);
    border-radius:16px;
    padding:1.6rem 1.4rem 1.6rem;
    backdrop-filter:blur(12px);
    scroll-snap-align:start;

    will-change: transform;
    transform: translateZ(0);

    transition: transform 180ms ease;
}

.card:hover{
    transform: translateY(-4px);
}

/* ===== BADGE ===== */
.badge{
    position:absolute;
    top:14px;
    right:14px;
    font-family:'Inter', sans-serif;
    font-size:.65rem;
    padding:.25rem .55rem;
    border-radius:999px;
    background:rgba(123,75,179,.18);
    color:#d7c7ff;
}

/* ===== TEXT ===== */
.card h3{
    font-family:'Montserrat', sans-serif;
    font-size:1rem;
    font-weight:500;
    color:#f1efff;
}

.card p{
    margin-top:.4rem;
    font-family:'Inter', sans-serif;
    font-size:.85rem;
    line-height:1.6;
    color:rgba(241,239,255,.6);
}

/* ===== PROJECT IMAGE ===== */
.project .image{
    height:180px;
    border-radius:14px;
    margin-bottom:1rem;
    background-size:cover;
    background-position:center;
}

/* ===== THEMES ===== */
.purple .card{
    border:1px solid rgba(123,75,179,.25);
}
.purple .card:hover{
    box-shadow:0 16px 40px rgba(123,75,179,.25);
}

.green .card{
    border:1px solid rgba(70,180,120,.25);
}
.green .card:hover{
    box-shadow:0 16px 40px rgba(70,180,120,.25);
}

/* ===== RESPONSIVE ===== */
@media (max-width:900px){
    .arrows{ display:none; }

    .section{
        align-items:center;
    }

    .header{
        text-align:center;
        max-width:520px;
        width:100%;
        justify-content:center;
    }

    .slider{
        flex-direction:column;
        align-items:center;
        overflow:visible;
        scroll-snap-type:none;
    }

    .card{
        width:100%;
        max-width:520px;
    }
}

@media (max-width:520px){
    .wrapper{
        padding:3rem 1.2rem;
        gap:4rem;
    }

    .header h2{
        font-size:1.35rem;
    }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce){
    .card{
        transition:none;
    }
}
</style>
