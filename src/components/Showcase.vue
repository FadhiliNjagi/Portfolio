<template>
    <div class="w3-container showcase-wrapper">
        <section class="showcase w3-container d-flex align-items-end justify-content-center" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require('@/assets/images/computer_setup1.jpg')}`}">
            <div class="showcase-content">
                <h1 class="w3-text-shadow w3-animate-opacity">Hello, I'm Fadhili.</h1>
                <hr>
                <p class="mt-2">
                    I am a full-stack web developer living in Nairobi, Kenya.<br/>
                    I am also a Bsc. Computer science student at the University of Nairobi (graduating 2023).
                </p>
                <div class="d-flex flex-row justify-content-center mb-3 social-media-icons">
                    <a href="https://instagram.com/fadhili_njagi"><b-icon icon="instagram" font-scale="1.8" class="mr-3" title="Instagram: @fadhili_njagi"></b-icon></a>
                    <a href="https://github.com/FadhiliNjagi"><b-icon icon="github" font-scale="1.8" class="mr-3" title="Github: @FadhiliNjagi"></b-icon></a>
                    <a href="https://twitter.com/Fadhili76817909"><b-icon icon="twitter" font-scale="1.8" title="Twitter: @Fadhili76817909"></b-icon></a>
                </div>
                <button class="w3-button w3-large learn-more-btn" @click="scrollToWelcome()">Learn more</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToWelcome() {
            document.getElementById('ice-breaker').scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style>
.showcase {
    background: no-repeat;
    background-position: center;
    background-size: cover;
    height: calc(100vh - 50px);
    max-width: 1500px;
    padding: 300px 100px 100px 100px;
    top: 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: #ffffff;
}
.showcase-wrapper {
    background-color: #263238;
}
.showcase h1 {
    font-size: 40px;
    font-weight: 700;
}
.showcase hr {
    width: 100px;
    margin: auto;
    border-width: 3px;
    border-color: #3F51B5;
}
.learn-more-btn {
    background-color: #3F51B5;
}
.showcase-content {
    text-align: center;
}
.showcase-content p {
    font-size: 18px;
}
.social-media-icons > * {
    cursor: pointer;
}
.social-media-icons a:hover {
    color: #3F51B5;
}
@media only screen and (min-width: 500px) {
    .showcase {
        padding: 250px 100px;
    }
}
</style>