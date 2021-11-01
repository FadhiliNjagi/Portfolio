<template>
    <div class="w3-container showcase-wrapper">
        <section class="showcase w3-container d-flex flex-column justify-content-center" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require('@/assets/images/computer_setup1.jpg')}`}">
            <div class="showcase-content d-flex flex-column align-self-center">
                <h1 class="w3-text-shadow w3-animate-opacity">Hello, I'm Fadhili.</h1>
                <hr>
                <p class="mt-2">
                    I am a full-stack web developer living in Nairobi, Kenya.<br/>
                    I am also a Bsc. Computer science student at the University of Nairobi (graduating 2023).
                </p>
                <div class="d-flex flex-row justify-content-center mb-3 social-media-icons">
                    <a href="https://instagram.com/fadhili_njagi"><b-icon icon="instagram" font-scale="1.8" class="mr-3" title="Instagram: @fadhili_njagi"></b-icon></a>
                    <a href="https://github.com/FadhiliNjagi"><b-icon icon="github" font-scale="1.8" class="mr-3" title="Github: @FadhiliNjagi"></b-icon></a>
                    <a href="https://twitter.com/Fadhili76817909"><b-icon icon="twitter" font-scale="1.8" class="mr-3" title="Twitter: @Fadhili76817909"></b-icon></a>
                    <a href="https://www.linkedin.com/in/fadhili-njagi-b50251189/"><b-icon icon="linkedin" font-scale="1.8" title="LinkedIn: Fadhili Njagi"></b-icon></a>
                </div>
                <a href="mailto:fadhilinjagi@gmail.com"><button class="w3-button w3-large contact-me-btn">Hire Me</button></a>
            </div>
            <div class="learn-more-btn align-self-center justify-self-end" @click="scrollToWelcome()">
                <p>Learn more</p>
                <b-icon icon="chevron-down" font-scale="1.3"></b-icon>
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
    /* padding: 300px 100px 100px 0px; */
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
    /* padding-bottom: 0px;
    max-width: fit-content;
    margin: auto; */
    margin-bottom: 10px;
    text-align: center;
    margin-top: 200px;
}
.contact-me-btn {
    background-color: #3F51B5;
    max-width: fit-content;
    margin: auto;
}
.learn-more-btn:hover {
    cursor: pointer;
}
.showcase-content {
    height: fit-content;
    text-align: center;
    margin-top: 100px;
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
    /* .showcase {
        padding: 0px 0px;
    } */
}
</style>