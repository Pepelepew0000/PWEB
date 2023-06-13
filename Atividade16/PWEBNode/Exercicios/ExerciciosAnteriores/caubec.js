function exibenaOrdem(mensagen,callback){
    console.log(mensagen)
    callback()
}

exibenaOrdem("Essa é a primeira mensagem ",function(){
    console.log("Essa é a segunda mensagem exibida na ordem")
})