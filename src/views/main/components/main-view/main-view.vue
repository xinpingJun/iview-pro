<template>
    <main class="main-view">
        <!-- 下个版本 -->
        <!-- <div class="main-view-loading">
        </div> -->

        <div class="view-content">
            <slot></slot>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .main-view {
        position: relative;
        background: #f1f4f5;
        .view-content {
            padding: 20px 20px;
            margin-right: auto;
            margin-left: auto;
        }
    }
</style>
