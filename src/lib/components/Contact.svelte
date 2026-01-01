<script>
    // 🎵 MUSIC
    import song from '$lib/assets/ses.mp3';
    import cover from '$lib/assets/cover.jpg';
    import coverpp from '$lib/assets/coverpp.jpg';

    // 🧠 SKILLS
    import html from '$lib/assets/html.png';
    import css from '$lib/assets/css.png';
    import js from '$lib/assets/js.png';
    import svelteIcon from '$lib/assets/svelte.png';
    import node from '$lib/assets/node.png';
    import c from '$lib/assets/c.png';
    import php from '$lib/assets/php.png';
    import mysql from '$lib/assets/mysql.png';

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
        if (!t) return "0:00";
        const m = Math.floor(t / 60);
        const s = Math.floor(t % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    const skills = [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
        { name: "Svelte", icon: svelteIcon },
        { name: "Node.js", icon: node },
        { name: "C", icon: c },
        { name: "PHP", icon: php },
        { name: "MySQL", icon: mysql }
    ];
</script>

<section class="contactWrap">

    <!-- LEFT -->
    <div class="profileCard">

        <div class="avatar" style="background-image:url({coverpp})"></div>

        <div class="identity">
            <h3>Yakup Döğer</h3>
            <span class="domain">yakupie.com</span>
        </div>

        <p class="bio">
            I am currently studying <strong>Statistics at Fırat University</strong> and have been
            involved in the web development world since a very young age.
            Over the years, I have continuously improved myself in both
            <strong>mathematics</strong> and <strong>programming</strong>.
            <br /><br />
            I enjoy building modern, clean, and interactive web interfaces,
            focusing on the intersection of <strong>coding</strong>,
            <strong>mathematical thinking</strong>, and <strong>modern UI design</strong>.
        </p>

        <!-- 🎵 PLAYER -->
        <div class="musicPlayer">

<audio
	bind:this={audio}
	src={song}
	on:loadedmetadata={() => {
		audio.volume = volume;
		updateProgress();
	}}
	on:timeupdate={updateProgress}
	on:ended={() => (playing = false)}
></audio>


            <div class="songInfo">
                <span class="artist">Teoman</span><br>
                <span class="title">Sevdim Seni Bir Kere</span>
            </div>

            <div class="playerTop">
                <img class="coverImg" src={cover} alt="cover" />

                <div class="playerControls">
                    <button on:click={resetMusic}>
                        <i class="fa-solid fa-backward-step"></i>
                    </button>

                    <button class="play" on:click={toggleMusic}>
                        <i class={`fa-solid ${playing ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>

                    <div class="volumeWrap">
                        <i class="fa-solid fa-volume-high"></i>
                        <input
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
                    on:input={seek}
                />

                <span>{format(duration)}</span>
            </div>

        </div>
    </div>

    <!-- RIGHT -->
    <div class="techPanel">
        <h4>Tech Stack</h4>
        <p class="techSub">Tools & languages I actively use</p>

        <div class="techCloud">
            {#each skills as s}
                <div class="techChip">
                    <img src={s.icon} alt={s.name} />
                    <span>{s.name}</span>
                </div>
            {/each}
        </div>
    </div>

</section>

<style>

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
    align-items:start;
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

.songInfo .artist{
    font-size:.75rem;
    color:var(--text-muted);
    letter-spacing:.12em;
    text-transform:uppercase;
}

.songInfo .title{
    font-size:1rem;
    font-weight:600;
}

.playerTop{
    display:flex;
    align-items:center;
    gap:1rem;
}

.coverImg{
    width:72px;
    height:72px;
    min-width:72px;
    max-width:72px;
    flex:0 0 72px;
    border-radius:14px;
    object-fit:cover;
}

.playerControls{
    display:flex;
    align-items:center;
    gap:.8rem;
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
    appearance:none;
    background:rgba(255,255,255,.15);
    border-radius:999px;
}

.progressBar::-webkit-slider-thumb{
    appearance:none;
    width:10px;
    height:10px;
    border-radius:50%;
    background:var(--purple);
}

/* RIGHT */
.techPanel{
    width:100%;
    max-width:360px;
    justify-self:center;
    background:var(--bg-dark);
    border:1px solid rgba(155,100,255,.25);
    border-radius:22px;
    padding:2rem;
    box-sizing:border-box;
}

.techPanel h4{
    font-size:1.1rem;
    margin-bottom:.3rem;
}

.techSub{
    font-size:.75rem;
    color:var(--text-muted);
    margin-bottom:1.4rem;
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
    transition:.25s ease;
}

.techChip img{
    width:18px;
    height:18px;
}

.techChip:hover{
    transform:translateY(-3px) scale(1.05);
    background:rgba(155,100,255,.18);
}

/* RESPONSIVE */
@media (max-width:900px){
    .contactWrap{
        grid-template-columns:1fr;
    }

    .techPanel{
        margin:0 auto;
        max-width:420px;
    }
}
@media (max-width:600px){

    .profileCard{
        padding:1.4rem;
    }

    .playerTop{
        flex-direction:column;
        align-items:center;
        text-align:center;
    }

    .coverImg{
        width:90px;
        height:90px;
        border-radius:18px;
    }

    .playerControls{
        justify-content:center;
        flex-wrap:wrap;
        gap:.7rem;
    }

    .playerControls button{
        width:38px;
        height:38px;
    }

    .playerControls .play{
        width:44px;
        height:44px;
    }

    .progressWrap{
        font-size:.65rem;
    }

    .techCloud{
        gap:.6rem;
    }

    .techChip{
        font-size:.75rem;
        padding:.45rem .75rem;
    }
}

</style>
