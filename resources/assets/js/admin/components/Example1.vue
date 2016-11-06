<template>
    <div class="container animated fadeInRight">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component1</div>

                    <div class="panel-body">
                        I'm an example component!{{message}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                message:'hello world'
            }
        },
        mounted() {
            console.log('Component ready.')
        }
    }
</script>
