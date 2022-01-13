<template>
    <footer>
        <div class="container">
            <p class="madeBy">Made by Kashif Arif with Vue.js</p>
            <p class="version">v1.2.0</p>
        </div>
    </footer>
</template>

<style lang="scss">
footer{
    text-align: center;
    padding:rem(20px) 0;
    // background:var(--black);
    border-top:2px solid var(--black);
    p{
        font-family:$default-font;
         font-weight:500;
        font-size:rem(28px);
        line-height:1;
        &.madeBy{
            color:var(--white);
            letter-spacing: 1px;
            margin-bottom:rem(10px);
        }
        &.version{
            color:var(--primary);
            font-weight:600;
            margin:0;
        }
    }
}
</style>
