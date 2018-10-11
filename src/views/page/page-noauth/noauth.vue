<template lang="html">
    <div class="noauth">
        <div class="noauth-content">
            <i class="icon anticon icon-meh"></i>
            <h3>没有权限</h3>
            <p>您没有权限访问此页面～～</p>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.noauth {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 64px - 36px);
}
.noauth-content {
    line-height: 1.2;
    color: #37474f;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
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
