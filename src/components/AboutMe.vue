<template>
    <div id="ice-breaker">
        <h2>Overview</h2>
        <p>In a world where technology changes and advances so fast it leaves our heads spinning, mother nature's rule applies now more than ever: "Adapt or die".<br/>Computers have become more potent than ever, but only software can really unlock the immense potential therein. 
            With software developers lies the power to create, the capability to give life to artifacts that can solve problems, take businesses to the next level, and add convenience to our daily lives.</p>
        <h2>Who am I</h2>
        <div class="background-section mt-3">
            <div class="image-of-me-container w3-card-2">
                <img :src="require('@/assets/images/me.png')" alt="Photo of Fadhili Njagi" class="image-of-me">
                <p class="text-center"><b>Fadhili Njagi</b><br/>Software Developer</p>
            </div>
            <div class="background-description">
                <p>My name is Baraka Fadhili Njagi. I am 20 years old as of 2021. I currently reside in Kitengela.<br/>I am a full-stack web developer. I am currently pursuing Bsc. Computer Science at the University of Nairobi. I will graduate in 2023.</p>
                <p>I have been passionate about computers since I was young. I felt a pull towards them I could not fully comprehend.
                    In my last two years of high school, I started learning how to code. I learnt mostly HTML, CSS and a little JavaScript.<br/>
                    Being intrigued by software develpment, I chose to pursue a career in Computer Science. I have not regreted that choice ever since.<br/>
                </p>
                <p>I have been programming web apps for two years now. I am also passionate about Data Science, Cybersecurity and Artificial Intelligence.<br/></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#ice-breaker {
    margin: 40px 5vw;
}
#ice-breaker p {
    font-size: 16px;
}
.image-of-me {
    height: 280px;
    margin-bottom: 10px;
    /* border-radius: 2px; */
    background-color: #CFD8DC;
    /* box-shadow: var(--image-shadow); */
}
.image-of-me-container {
    width: fit-content;
    max-width: 90vw;
    margin: auto;
}
.background-description {
    margin-top: 10px;
}
@media only screen and (min-width: 600px) {
    /* .image-of-me {
        height: 350px;
    } */
    .background-section {
        display: flex;
        flex-direction: row;
    }
    .background-description {
        margin-left: 20px;
        margin-top: 0px;
    }
}
</style>