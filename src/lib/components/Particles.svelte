<script>
    import { onMount, onDestroy } from 'svelte';

    let canvas;
    let ctx;
    let rafId;
    let particles = [];
    let running = false;
    let dpr = 1;

    function resize() {
        if (!canvas || typeof window === 'undefined') return;

        dpr = window.devicePixelRatio || 1;

        const w = window.innerWidth;
        const h = window.innerHeight;

        canvas.width  = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);

        canvas.style.width  = w + 'px';
        canvas.style.height = h + 'px';

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width / dpr,
            y: Math.random() * canvas.height / dpr,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.4 + 0.6
        };
    }

    function draw() {
        if (!running) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x <= 0 || p.x >= canvas.width / dpr) p.vx *= -1;
            if (p.y <= 0 || p.y >= canvas.height / dpr) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,120,200,0.45)';
            ctx.fill();
        }

        rafId = window.requestAnimationFrame(draw);
    }

    function handleVisibility() {
        if (document.hidden) {
            running = false;
            window.cancelAnimationFrame(rafId);
        } else {
            running = true;
            rafId = window.requestAnimationFrame(draw);
        }
    }

    onMount(() => {
        // 🔒 SSR GUARD
        if (typeof window === 'undefined') return;

        ctx = canvas.getContext('2d', { alpha: true });
        resize();

        const count = window.innerWidth < 768 ? 10 : 22;
        particles = Array.from({ length: count }, createParticle);

        running = true;
        rafId = window.requestAnimationFrame(draw);

        window.addEventListener('resize', resize, { passive: true });
        document.addEventListener('visibilitychange', handleVisibility);
    });

    onDestroy(() => {
        if (typeof window === 'undefined') return;

        running = false;
        window.cancelAnimationFrame(rafId);
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', handleVisibility);
    });
</script>

<canvas bind:this={canvas} class="particleCanvas" />

<style>
.particleCanvas{
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
}
</style>
