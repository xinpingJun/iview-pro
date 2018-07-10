<template>
    <main class="main-view">
        <slot></slot>
    </main>
</template>

<style lang="scss" scoped>
    .main-view {
        position: relative;
        background: #f1f4f5;
        min-height: calc(100vh - 38px - 64px);
        box-sizing: border-box;
        padding: 20px 20px;
        margin-right: auto;
        margin-left: auto;
        &>.ivu-card{
          min-height: calc(100vh - 38px - 64px - 40px);
        }
    }
</style>
