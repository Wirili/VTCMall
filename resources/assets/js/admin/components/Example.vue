<template>
    <div class="container animated fadeInRight">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="" class="control-label col-md-2">用户名：</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control input-sm" v-model="data.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-10 col-md-offset-2">
                                    <button class="btn btn-primary" v-on:click="submit">提交</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {extend} from '../lib/utils';
    export default {
        data:function(){
            return {
                data:{
                    name:'asdfasdf'
                },
                message:'hello world'
            }
        },
        methods:{
            getData:function(){
                this.$http.get('/user/edit/1').then(function (result) {
                    let data = result.data;
                    this._data = extend(this._data, data);
                });
            },
            submit:function(){
                this.$http.post('/user/store/'+this.$data.data.id,this.$data.data).then((result)=>{

                });
            }
        },
        created:function(){
            this.getData();
        },
        mounted:function() {
//            this.getData();
//            console.log('Component ready.');
        }
    }
</script>
