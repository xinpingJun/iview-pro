<template>
    <Card>
        <div  slot="title">按钮</div>
        <div class="buttons">
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
            <br><br>
            <Button type="primary" shape="circle" icon="ios-search"></Button>
            <Button type="primary" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle">Circle</Button>
            <br><br>
            <Button type="ghost" shape="circle" icon="ios-search"></Button>
            <Button type="ghost" icon="ios-search">Search</Button>
            <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
            <Button type="ghost" shape="circle">Circle</Button>
            <br><br>
            <Button type="primary" size="large">Large</Button>
            <Button type="primary">Default</Button>
            <Button type="primary" size="small">Small</Button>
            <br><br>
            <Button type="primary" shape="circle" size="large">Large</Button>
            <Button type="primary" shape="circle">Default</Button>
            <Button type="primary" shape="circle" size="small">Small</Button>
            <br><br>
            <Button type="success" long>SUBMIT</Button>
            <br><br>
            <Button type="error" long>DELETE</Button>
        </div>
    
    </Card>
</template>

<script>
    import Panel from '@/components/panel'
    export default {
        components: {
            Panel
        }
    }
</script>

<style lang="scss">
    .buttons .ivu-btn {
        margin-right: 10px;
        margin-bottom: 10px;
    }
</style>
