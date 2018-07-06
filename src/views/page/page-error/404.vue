<template lang="html">
    <div class="noauth">
        <div class="noauth-content">
            <i class="icon anticon icon-rocket1"></i>
            <h3>404</h3>
            <p>您的页面不见了～～</p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.noauth {
    line-height: 1.2;
    color: #37474f;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.noauth-content {
    padding: 20px;
    text-align: center;
    i {
        font-size: 130px;
        color: #76838f;
    }
    h3 {
        margin-top: 32px;
        margin-bottom: 12px;
        font-size: 18px;
    }
    p {
        margin-bottom: 30px;
        text-transform: uppercase;
        color: #76838f;
        font-size: 14px;
    }
}
</style>
