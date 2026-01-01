<script>
</script>

<div class="mainPage">
    <div class="mainPageWrapper">
        <div class="headerArea">
            <div class="headerAreaText" data-lcp>
                Building data driven interfaces.
            </div>
        </div>

        <div class="textArea">
            <div class="textAreaText">
                Interactive statistics, thoughtful UI, modern frontend.
            </div>
        </div>

        <div class="buttonsArea">
            <button class="exploreButton">
                Explore more
            </button>

            <button class="buyCoffeeButton">
                ☕ Buy me a coffee
            </button>
        </div>
    </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');

.mainPage{
    min-height: 90vh;
    min-height: 90svh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 3;
}




.mainPageWrapper{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
}

.headerArea{
    width: 100%;
    display: flex;
    justify-content: center;
}

.headerAreaText{
    width: 70%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 5.2rem;
    line-height: 1.1;
    font-weight: 800;
    color: rgb(241, 239, 255);
    letter-spacing: -1.2px;
}

.textArea{
    width: 100%;
    display: flex;
    justify-content: center;
}

.textAreaText{
    width: 60%;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.55;
    color: rgba(241, 239, 255, 0.75);
}

.buttonsArea{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 0.8rem;
}

.exploreButton,
.buyCoffeeButton{
    padding: 0.9rem 2.1rem;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(6px);
    transition: background 0.15s ease, transform 0.15s ease;
}

.exploreButton{
    background: rgba(255, 255, 255, 0.08);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.exploreButton:hover{
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-1px);
}

.buyCoffeeButton{
    background: rgba(123, 75, 179, 0.22);
    color: white;
    border: 1px solid rgba(123, 75, 179, 0.45);
}

.buyCoffeeButton:hover{
    background: rgba(123, 75, 179, 0.35);
    transform: translateY(-1px);
}

@media (max-width: 1200px){
    .mainPageWrapper{
        width: 75%;
    }

    .headerAreaText{
        font-size: 4.4rem;
        width: 80%;
    }

    .textAreaText{
        width: 70%;
    }
}

@media (max-width: 900px){
    .mainPageWrapper{
        width: 85%;
    }

    .headerAreaText{
        font-size: 3.6rem;
        width: 90%;
    }

    .textAreaText{
        width: 85%;
        font-size: 1rem;
    }
}

@media (max-width: 600px){
    .mainPage{
        min-height: 90vh;
        padding: 0;
        display: flex;
        align-items: center;
    }

    .mainPageWrapper{
        width: 90%;
        gap: 1.2rem;
    }

    .headerAreaText{
        width: 100%;
        font-size: 2.6rem;
        line-height: 1.15;
        letter-spacing: -0.6px;
    }

    .textAreaText{
        width: 100%;
        font-size: 0.95rem;
    }

    .buttonsArea{
        flex-direction: column;
        align-items: center;
        gap: 0.9rem;
    }

    .exploreButton,
    .buyCoffeeButton{
        width: auto;
        min-width: 220px;
        padding: 0.8rem 1.8rem;
    }
}

</style>
