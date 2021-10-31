<template>
    <div id="nav" class="d-flex flex-row justify-content-end align-items-stretch">
        <b-icon icon="list" font-scale="1.7" class="w3-bar-item drawer-icon align-self-center" @click="toggleMainNav()"></b-icon>
        <span class="logo align-self-center">Fadhili Njagi</span>
        <div class="d-flex flex-row quick-action-btns justify-content-end">
            <span class="w3-button" @click="scrollTo('ice-breaker')">About Me</span>
            <span class="w3-button mr-2" @click="scrollTo('projects')">My work</span>
            <a href="mailto:fadhilinjagi@gmail.com"><span class="secondary-btn w3-button">Contact Me</span></a>
        </div>
        <div class="d-flex flex-row align-items-center justify-content-end theme-switch">
            <b-icon icon="sun" class="mr-2 mt-1" font-scale="1.5" variant="secondary">Light mode</b-icon>
            <b-form-checkbox switch size="lg" v-model="checked"></b-form-checkbox>
            <b-icon icon="moon" class="ml-0 mt-1" font-scale="1.4">Light mode</b-icon>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    },
    methods: {
        scrollTo(id){
            document.getElementById(id).scrollIntoView(
                {behavior: 'smooth'}
            )
        }
    },
    watch: {
        checked() {
            if (this.checked == false) {
                document.body.classList.remove('dark')
                document.body.classList.add('light')
            }
            else {
                document.body.classList.remove('light')
                document.body.classList.add('dark')
            }
        }
    }
}
</script>

<style scoped>
#nav {
    color: inherit;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
    z-index: 5;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: sticky;
    top: 0;
}
body.dark #nav {
    background-color: #282828;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.secondary-btn {
    padding: 6px 14px;
    border-radius: 50px;
    background-color: #303F9F;
    color: white;
}
.logo {
    font-size: 17px;
    width: max-content;
    justify-self: start !important;
}
.quick-action-btns span {
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}
.quick-action-btns {
    align-items: center;
    display: none !important;
    margin-left: 15px;
    flex-grow: 3;
}
.drawer-icon {
    margin-right: 3px;
    height: 80%;
    padding: 8px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
}
.theme-switch {
    flex-grow: 2;
}
@media only screen and (min-width: 600px) {
    .drawer-icon {
        display: none;
    }
    .quick-action-btns {
        display: flex !important;
    }
    .drawer-icon {
        margin-right: 8px;
    }
    #nav {
        padding: 0 4vw;
    }
    .logo {
        font-size: 23px;
    }
}
</style>