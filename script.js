document.addEventListener("DOMContentLoaded", 
function(e){
    let configID=document.querySelector("#id i")
    let idText=document.querySelector("#id span")

    configID.addEventListener("click",
    function(e){
        idText.textContent=prompt("새로운 아이디를 입력하세요")
    })

    let profileEditButton = document.querySelector("#profile_info button")
    let username = document.querySelector("#username")
    let userinfo = document.querySelector("#userinfo")
    let profileDetail = document.querySelector("#profileDetail")
    let changing = false

    profileEditButton.addEventListener("click",
    function(e){
        if(changing){
            let _username = username.querySelector("input").value
            let _userinfo = userinfo.querySelector("input").value
            let _profileDetail = profileDetail.querySelector("input").value

            username.innerHTML = _username
            userinfo.innerHTML = _userinfo

            if (_profileDetail.startsWith("http")){
                _profileDetail = "<a  href="+ _profileDetail + ">" + _profileDetail + "</a>"
            }

            profileDetail.innerHTML = _profileDetail
            e.target.textContent ="프로필 편집"
            changing = false
        }
        else{
            let _username = username.textContent
            let _userinfo= userinfo.textContent
            let _profileDetail= profileDetail.textContent

            username.innerHTML = "<input value=" + _username + "></input>"
            userinfo.innerHTML = "<input value=" + _userinfo + "></input>"
            profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"

            e.target.textContent = "프로필 편집 완료"
            changing = true
        }
    }) 

        let profile_pic = document.querySelector("#profile_pic .circle_pic")
        profile_pic.addEventListener("mouseover",
            function (e) {
                e.target.style.filter = "grayscale(50%)"
            })

        profile_pic.addEventListener("mouseleave",
            function (e) {
                e.target.style.filter = "grayscale(0%)"
            })

        profile_pic.addEventListener("click",
            function (e) {
                profile_pic.setAttribute("src", prompt("원하는 프로필 이미지의 url를 입력하세요"))
            })
    })