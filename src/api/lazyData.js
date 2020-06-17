const domain = 'https://jsonplaceholder.typicode.com/posts/1/comments'

export default{
    //共用api
    getLazyList(data){
            this.$http.get(domain)
             .then(function(res){
                 console.log(res)
             })
             .catch(function(res){
                 console.log("请求数据错误")
             })
    }
}
