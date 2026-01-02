<script>
	import song from '$lib/assets/ses.mp3';
	import cover from '$lib/assets/cover.webp';
	import coverpp from '$lib/assets/coverpp.webp';

	import html from '$lib/assets/html.webp';
	import css from '$lib/assets/css.webp';
	import js from '$lib/assets/js.webp';
	import svelteIcon from '$lib/assets/svelte.webp';
	import node from '$lib/assets/node.webp';
	import c from '$lib/assets/C.webp';
	import php from '$lib/assets/php.webp';
	import mysql from '$lib/assets/mysql.webp';

	let audio;
	let playing = false;
	let progress = 0;
	let duration = 0;
	let volume = 0.2;

	function toggleMusic() {
		playing ? audio.pause() : audio.play();
		playing = !playing;
	}

	function resetMusic() {
		audio.currentTime = 0;
	}

	function forward() {
		audio.currentTime = Math.min(audio.currentTime + 10, duration);
	}

	function rewind() {
		audio.currentTime = Math.max(audio.currentTime - 10, 0);
	}

	function updateProgress() {
		progress = audio.currentTime;
		duration = audio.duration || 0;
	}

	function seek(e) {
		audio.currentTime = e.target.value;
	}

	function setVolume(e) {
		volume = e.target.value;
		audio.volume = volume;
	}

	function format(t) {
		if (!t) return '0:00';
		const m = Math.floor(t / 60);
		const s = Math.floor(t % 60).toString().padStart(2, '0');
		return `${m}:${s}`;
	}

	const skills = [
		{ name: 'HTML', icon: html },
		{ name: 'CSS', icon: css },
		{ name: 'JavaScript', icon: js },
		{ name: 'Svelte', icon: svelteIcon },
		{ name: 'Node.js', icon: node },
		{ name: 'C', icon: c },
		{ name: 'PHP', icon: php },
		{ name: 'MySQL', icon: mysql }
	];
</script>

<section class="contactWrap" aria-labelledby="contact-title">

	<h2 id="contact-title" class="sr-only">İletişim ve Teknolojiler</h2>

	<!-- LEFT -->
	<article class="profileCard">

		<div
			class="avatar"
			style="background-image:url({coverpp})"
			aria-hidden="true"
		></div>

		<div class="identity">
			<h3>Yakup Döğer</h3>
			<span class="domain">yakupie.com</span>
		</div>

		<p class="bio">
			I am currently studying <strong>Statistics at Fırat University</strong> and have been
			involved in the web development world since a very young age.
			<br /><br />
			I enjoy building modern, clean, and interactive web interfaces,
			focusing on <strong>coding</strong>, <strong>mathematical thinking</strong>,
			and <strong>modern UI design</strong>.
		</p>

		<!-- 🎵 PLAYER -->
		<div class="musicPlayer" aria-label="Müzik oynatıcı">

			<audio
				bind:this={audio}
				src={song}
				preload="none"
				aria-label="Müzik oynatıcı"
				on:loadedmetadata={() => {
					audio.volume = volume;
					updateProgress();
				}}
				on:timeupdate={updateProgress}
				on:ended={() => (playing = false)}
			></audio>

			<div class="songInfo">
				<span class="artist">Teoman</span><br />
				<span class="title">Sevdim Seni Bir Kere</span>
			</div>

			<div class="playerTop">
				<img
					class="coverImg"
					src={cover}
					alt="Albüm kapağı"
					width="72"
					height="72"
					loading="lazy"
				/>

				<div class="playerControls">

					<button
						type="button"
						aria-label="10 saniye geri sar"
						on:click={rewind}
					>
						<i class="fa-solid fa-backward" aria-hidden="true"></i>
					</button>

					<button
						type="button"
						aria-label="Şarkıyı başa sar"
						on:click={resetMusic}
					>
						<i class="fa-solid fa-backward-step" aria-hidden="true"></i>
					</button>

					<button
						type="button"
						class="play"
						aria-label={playing ? 'Müziği durdur' : 'Müziği oynat'}
						on:click={toggleMusic}
					>
						<i
							class={`fa-solid ${playing ? 'fa-pause' : 'fa-play'}`}
							aria-hidden="true"
						></i>
					</button>

					<button
						type="button"
						aria-label="10 saniye ileri sar"
						on:click={forward}
					>
						<i class="fa-solid fa-forward" aria-hidden="true"></i>
					</button>

					<div class="volumeWrap">
						<i class="fa-solid fa-volume-high" aria-hidden="true"></i>

						<label class="sr-only" for="volume">Ses seviyesi</label>
						<input
							id="volume"
							type="range"
							min="0"
							max="1"
							step="0.01"
							value={volume}
							on:input={setVolume}
						/>
					</div>

				</div>
			</div>

			<div class="progressWrap">
				<span>{format(progress)}</span>

				<input
					class="progressBar"
					type="range"
					min="0"
					max={duration}
					value={progress}
					aria-label="Şarkı ilerlemesi"
					on:input={seek}
				/>

				<span>{format(duration)}</span>
			</div>

		</div>
	</article>

	<!-- RIGHT -->
	<aside class="techPanel" aria-labelledby="tech-title">
		<h4 id="tech-title">Tech Stack</h4>
		<p class="techSub">Tools & languages I actively use</p>

		<div class="techCloud" role="list">
			{#each skills as s}
				<div class="techChip" role="listitem">
					<img
						src={s.icon}
						alt={`${s.name} logosu`}
						width="18"
						height="18"
						loading="lazy"
					/>
					<span>{s.name}</span>
				</div>
			{/each}
		</div>
	</aside>

</section>

<style>
/* === SR ONLY === */
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}

:root{
	--bg-dark: rgba(10,10,18,.85);
	--border-soft: rgba(155,100,255,.25);
	--purple: #9b6bff;
	--text-main: #f2efff;
	--text-muted: rgba(242,239,255,.6);
}

.contactWrap{
	max-width:1100px;
	margin:6rem auto;
	display:grid;
	grid-template-columns: minmax(0, 1.4fr) minmax(320px, 360px);
	gap:2rem;
	padding:0 1.5rem;
	font-family:'Inter', sans-serif;
	color:var(--text-main);
}

/* LEFT */
.profileCard{
	background:var(--bg-dark);
	border:1px solid var(--border-soft);
	border-radius:18px;
	padding:2rem;
	display:flex;
	flex-direction:column;
	gap:1.4rem;
}

.avatar{
	width:72px;
	height:72px;
	border-radius:16px;
	background-size:cover;
	background-position:center;
}

.bio{
	color:rgba(242,239,255,.75);
	line-height:1.65;
}

/* PLAYER */
.musicPlayer{
	border:1px solid rgba(155,100,255,.35);
	border-radius:16px;
	padding:1rem;
	display:flex;
	flex-direction:column;
	gap:.9rem;
}

.playerTop{
	display:flex;
	align-items:center;
	gap:1rem;
}

.coverImg{
	width:72px;
	height:72px;
	border-radius:14px;
	object-fit:cover;
}

.playerControls{
	display:flex;
	align-items:center;
	gap:.6rem;
	flex-wrap:wrap;
}

.playerControls button{
	width:42px;
	height:42px;
	border-radius:50%;
	background:transparent;
	border:.1rem solid rgba(242,239,255,.6);
	color:white;
	cursor:pointer;
}

.playerControls .play{
	width:48px;
	height:48px;
}

.volumeWrap{
	display:flex;
	align-items:center;
	gap:.4rem;
}

.progressWrap{
	display:flex;
	align-items:center;
	gap:.6rem;
	font-size:.7rem;
	color:var(--text-muted);
}

.progressBar{
	flex:1;
	height:3px;
	background:rgba(255,255,255,.15);
	border-radius:999px;
}

/* RIGHT */
.techPanel{
	background:var(--bg-dark);
	border:1px solid rgba(155,100,255,.25);
	border-radius:22px;
	padding:2rem;
}

.techCloud{
	display:flex;
	flex-wrap:wrap;
	gap:.8rem;
}

.techChip{
	display:flex;
	align-items:center;
	gap:.6rem;
	padding:.55rem .9rem;
	border-radius:999px;
	background:rgba(255,255,255,.04);
	border:1px solid rgba(155,100,255,.25);
	font-size:.8rem;
}
/* ========================= */
/* RESPONSIVE */
/* ========================= */

@media (max-width: 900px){
	.contactWrap{
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}

	.techPanel{
		max-width: 100%;
	}
}

@media (max-width: 600px){
	.contactWrap{
		margin: 4rem auto;
		padding: 0 1rem;
	}

	.profileCard,
	.techPanel{
		padding: 1.5rem;
	}

	.playerTop{
		flex-direction: column;
		align-items: flex-start;
	}

	.coverImg{
		width: 64px;
		height: 64px;
	}

	.playerControls{
		justify-content: flex-start;
	}

	.playerControls button{
		width: 38px;
		height: 38px;
	}

	.playerControls .play{
		width: 44px;
		height: 44px;
	}

	.volumeWrap input{
		width: 90px;
	}

	.bio{
		font-size: .9rem;
	}
}

@media (max-width: 420px){
	.avatar{
		width: 60px;
		height: 60px;
	}

	.identity h3{
		font-size: 1.05rem;
	}

	.techChip{
		font-size: .75rem;
		padding: .45rem .75rem;
	}

	.techChip img{
		width: 16px;
		height: 16px;
	}
}

</style>
