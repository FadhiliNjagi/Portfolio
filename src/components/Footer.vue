<template>
    <div class="footer text-center d-flex flex-column justify-content-center">
        <div class="d-flex flex-row justify-content-center social-media-icons">
            <a href="https://instagram.com/fadhili_njagi"><b-icon icon="instagram" font-scale="1.8" class="mr-3" title="Instagram: @fadhili_njagi"></b-icon></a>
            <a href="https://github.com/FadhiliNjagi"><b-icon icon="github" font-scale="1.8" class="mr-3" title="Github: @FadhiliNjagi"></b-icon></a>
            <a href="https://twitter.com/Fadhili76817909"><b-icon icon="twitter" font-scale="1.8" class="mr-3" title="Twitter: @Fadhili76817909"></b-icon></a>
            <a href="mailto:fadhilinjagi@gmail.com"><b-icon icon="envelope" font-scale="1.8" title="Email: fadhilinjagi@gmail.com"></b-icon></a>
        </div>
        <p class="mt-1">Fadhili Njagi &copy; {{ new Date().getFullYear() }}<br/>
        Kitengela, Nairobi Kenya. <br/>
        Email: fadhilinjagi@gmail.com
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    background-color: #CFD8DC;
    height: fit-content;
    margin-top: 50px;
    padding: 20px 0px;
}
body.dark .footer {
    background-color: #282828;
}
</style>