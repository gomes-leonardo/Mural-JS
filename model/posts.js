module.exports = {

    posts: [
     {   id: "adsasd",
        title: "Teste do mural",
        description: "Descrição teste"
     }

],




    getAll(){
        return this.posts
    },

    newPost(title,description){

        this.posts.push({id: generateID(),title: title ,description: description })
    }


}

function generateID(){

    return Math.random().toString(36).substring(2, 9)
}