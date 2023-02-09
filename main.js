


$(document).ready(function () {

    const endPoint = "https://api.github.com/users/franciscofbc"

    fetch(endPoint)
        .then(function (resposta) {
            return resposta.json()
        }).then(function (json) {

            $("#name").text(json.name)
            $("#username").text(json.login)
            $("#avatar").attr("src", json.avatar_url)
            $("#followers").text(json.followers)
            $("#following").text(json.following)
            $("#repos").text(json.public_repos)
            $("#link").attr("href", json.html_url)

        }).catch(function (erro) {
            console.log(erro)
        }).finally(function () {

        })
})

