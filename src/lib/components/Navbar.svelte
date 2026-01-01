<script>
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<div class="navbar">
    <div class="navbarWrapper">
        <div class="navbarProfileArea">
            <div class="navbarProfilePicture"></div>
        </div>

        <div class="navbarUlArea">
            <ul class:open={menuOpen}>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Experiments</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div class="navbarButtonArea">
            <button
                class="hamburger"
                aria-label="Menu"
                aria-expanded={menuOpen}
                on:click={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');

.navbar{
    width: 100%;
    height: clamp(72px, 10vh, 96px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbarWrapper{
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

.navbarProfileArea{
    width: 12%;
    min-width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbarProfilePicture{
    width: 70px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: url(https://github.com/yakupie.png) center / cover no-repeat;
    cursor: pointer;
}

.navbarUlArea{
    width: 76%;
    display: flex;
    justify-content: center;
}

.navbarUlArea ul{
    display: flex;
    gap: 4rem;
    list-style: none;
}

.navbarUlArea ul li a{
    text-decoration: none;
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
}

.navbarButtonArea{
    width: 12%;
    min-width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hamburger{
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger span{
    width: 24px;
    height: 2px;
    background: white;
    border-radius: 2px;
}

@media (max-width: 900px){
    .navbarUlArea ul{
        gap: 2.2rem;
    }

    .navbarUlArea ul li a{
        font-size: 1rem;
    }
}

@media (max-width: 700px){
    .navbarWrapper{
        justify-content: space-between;
    }

    .navbarUlArea{
        position: absolute;
        top: 100%; /* 🔥 FIX */
        left: 0;
        width: 100%;
        background: rgba(10, 10, 20, 0.95);
        backdrop-filter: blur(12px);
    }

    .navbarUlArea ul{
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 0;
        display: none;
    }

    .navbarUlArea ul.open{
        display: flex;
    }

    .hamburger{
        display: flex;
    }

    .navbarProfilePicture{
        width: 50px;
    }
}
</style>
