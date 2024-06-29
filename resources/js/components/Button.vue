<script setup>

</script>

<template>

        <button class="btn-hover color-7 ">
           <slot />
        </button>

</template>

<style scoped>
.btn-hover {

    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:focus {
    outline: none;
}

.btn-hover.color-7 {
    background-image: linear-gradient(to right, #3DA29C, #3F5FBB, #C41271, #CDA42C);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
}
</style>
