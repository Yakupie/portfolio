<script>
    import { onMount, onDestroy } from 'svelte';

    import Navbar from '$lib/components/Navbar.svelte';
    import MainPage from '$lib/components/MainPage.svelte';
    import PageCard from '$lib/components/pageCard.svelte';
    import Experiement from '$lib/components/Experiement.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Particles from '$lib/components/Particles.svelte';

    import { gsap } from 'gsap';
    import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    let cleanups = [];

    function setupNavbarScroll() {
        const map = {
            overview: '.container',
            experiments: '.container3',
            contact: '.container4'
        };

        document.querySelectorAll('.navbarUlArea a').forEach(link => {
            const handler = e => {
                e.preventDefault();
                const key = link.textContent.trim().toLowerCase();

                gsap.to(window, {
                    duration: 1,
                    scrollTo: map[key],
                    ease: 'power3.out'
                });
            };

            link.addEventListener('click', handler);
            cleanups.push(() =>
                link.removeEventListener('click', handler)
            );
        });
    }

    function initialLoadAnimations() {
        gsap.from('.navbar', {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });

        gsap.from(
            ['.headerAreaText', '.textAreaText', '.buttonsArea button'],
            {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                delay: 0.3,
                ease: 'power3.out'
            }
        );
    }

    function scrollReveal(selector) {
        gsap.utils.toArray(selector).forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
    }

    onMount(() => {
        if (typeof window === 'undefined') return;

        setupNavbarScroll();
        initialLoadAnimations();

        scrollReveal('.profileSide');
        scrollReveal('.codeCard');
        scrollReveal('.card');
        scrollReveal('.techChip');
    });

    onDestroy(() => {
        cleanups.forEach(fn => fn());
        ScrollTrigger.getAll().forEach(t => t.kill());
    });
</script>




<div class="container hero">
    <Particles />
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
 .container > *:not(canvas){
    position: relative;
    z-index: 2;
}

:global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* HERO */
.hero{
    height:95vh;
    background:
        url($lib/assets/background.jpg),
        rgba(0,0,0,.75);
    background-position:center;
    background-size:cover;
    background-blend-mode:darken;
    position:relative;
}

.hero::after{
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:140px;
    background:linear-gradient(
        to bottom,
        rgba(7,7,13,0),
        rgba(7,7,13,.6),
        #07070d
    );
}

/* SECTIONS */
.section{
    min-height:60vh;
    display:flex;
    justify-content:center;
    align-items:center;
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

/* GLOBAL BACKGROUND */
:global(html, body){
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
:global(::-webkit-scrollbar) {
    width: 10px;
    height: 10px;
}

:global(::-webkit-scrollbar-track) {
    background: #05050b;
}

:global(::-webkit-scrollbar-thumb) {
    background: linear-gradient(
        180deg,
        #3a2a5e,
        #211338
    );
    border-radius: 999px;
    border: 2px solid #05050b;
}

:global(::-webkit-scrollbar-thumb:hover) {
    background: linear-gradient(
        180deg,
        #4a3475,
        #6b46a6
    );
}

</style>    