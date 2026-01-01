<script>
	// ileride props eklenebilir
</script>

<section class="codeCardWrapper reveal">
	<div class="codeCardLayout">

		<!-- PROFILE -->
		<div class="profileSide reveal-item">
			<div class="profileImage"></div>

			<div class="profileText">
				<div class="profileName">Yakup Döğer</div>
				<div class="profileTitle">Web Developer</div>
			</div>
		</div>

		<!-- CODE CARD -->
		<div class="codeCard reveal-item">
			<div class="codeHeader">
				<span class="dot red"></span>
				<span class="dot yellow"></span>
				<span class="dot green"></span>
				<span class="title">overview.ts</span>
			</div>

			<pre class="codeBody"><code>
<span class="keyword">export const</span> <span class="variable">developer</span> = &#123;
  <span class="property">name</span>: <span class="string">'Yakup Döğer'</span>,
  <span class="property">title</span>: <span class="string">'Web Developer'</span>
&#125;;

<span class="keyword">export const</span> <span class="variable">overview</span> = &#123;
  <span class="property">education</span>: &#123;
    <span class="property">school</span>: <span class="string">'Fırat Üniversitesi'</span>,
    <span class="property">department</span>: <span class="string">'Statistics'</span>
  &#125;,

  <span class="property">stack</span>: <span class="string">'HTML, CSS, JavaScript, Svelte.js, C, Node.js, PHP, MySQL'</span>
&#125;;
			</code></pre>
		</div>

	</div>
</section>

<style>
* {
	box-sizing: border-box;
}

/* ===== WRAPPER ===== */
.codeCardWrapper {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 4rem 1.2rem;
}

/* ===== LAYOUT ===== */
.codeCardLayout {
	display: grid;
	grid-template-columns: minmax(200px, 220px) 1fr;
	gap: 2rem;
	max-width: 980px;
	width: 100%;
}

/* ===== PROFILE ===== */
.profileSide {
	background: rgba(10, 10, 18, 0.6);
	border-radius: 18px;
	border: 1px solid rgba(123, 75, 179, 0.25);
	backdrop-filter: blur(12px);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.9rem;

	padding: 1.8rem 1.2rem;
}

.profileImage {
	width: 96px;
	height: 96px;
	border-radius: 50%;
	background: url('https://github.com/yakupie.png') center / cover no-repeat;
	border: 2px solid rgba(123, 75, 179, 0.55);
}

.profileText {
	text-align: center;
}

.profileName {
	font-family: 'Montserrat', sans-serif;
	font-size: 1.25rem;
	font-weight: 600;
	color: #f1efff;
}

.profileTitle {
	font-family: 'Montserrat', sans-serif;
	font-size: 0.85rem;
	color: rgba(241, 239, 255, 0.6);
	margin-top: 0.15rem;
}

/* ===== CODE CARD ===== */
.codeCard {
	background: rgba(10, 10, 18, 0.88);
	border-radius: 16px;
	border: 1px solid rgba(123, 75, 179, 0.35);
	box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(12px);
	overflow: hidden;
}

/* HEADER */
.codeHeader {
	height: 30px;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0 1.1rem;
	background: rgba(255, 255, 255, 0.035);
	border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
}
.red {
	background: #ff5f56;
}
.yellow {
	background: #ffbd2e;
}
.green {
	background: #27c93f;
}

.title {
	margin-left: 0.7rem;
	font-family: 'JetBrains Mono', monospace;
	font-size: 0.8rem;
	color: rgba(241, 239, 255, 0.55);
}

/* CODE */
.codeBody {
	margin: 0;
	padding: 1.3rem 1.6rem;
	font-family: 'JetBrains Mono', monospace;
	font-size: 0.88rem;
	line-height: 1.55;
	color: rgba(241, 239, 255, 0.85);

	overflow-x: auto;
}

/* SYNTAX */
.keyword {
	color: #c792ea;
}
.variable {
	color: #82aaff;
}
.property {
	color: #7fdbca;
}
.string {
	color: #ecc48d;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
	.codeCardLayout {
		grid-template-columns: 1fr;
	}

	.profileSide {
		flex-direction: row;
		justify-content: flex-start;
		gap: 1.2rem;
		padding: 1.2rem 1.4rem;
	}

	.profileText {
		text-align: left;
	}

	.profileImage {
		width: 64px;
		height: 64px;
	}
}

@media (max-width: 520px) {
	.codeCardWrapper {
		padding: 3rem 0.9rem;
	}

	.codeBody {
		font-size: 0.82rem;
		padding: 1.2rem 1.3rem;
	}

	.profileName {
		font-size: 1.1rem;
	}
}
</style>
