window.addEventListener('load', function (e) {
    const url = 'http://localhost:3000/people'

    let sendRequest = (url) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    document.querySelector('.btn').addEventListener('click', function () {
        sendRequest(url)
            .then(res => {
                return res.json() // massivga aylantirdik
            }).then(res => {
                res.forEach((user) => {
                    let div = document.createElement('div')

                    div.classList.add('user')
                    let num = ''

                    let icon = ''
                    if (user.gender === 'female') {
                        icon = '<i class="fas fa-venus"></i>'
                    } else {
                        icon = '<i class="fas fa-mars"></i>'
                    }

                    num = user.number

                    div.innerHTML = `
                    <div class="card">
                        <img src="${user.photo}" alt="png
                        " class="account_img">
                        <img src="${user.photo}" alt="png" class="card_img">
                        <div class="name">${user.name} ${user.surname}</div>
                        <div class="gender">${icon}</div>
                        <div class="like"><i class="far fa-heart"></i></div>
                        <input type="submit" value="number" class="number">
                        <span style="display: none;" class="num">${num}</span>
                        <div class="count">${user.like}</div>
                        <div class="save"><i class="fas fa-bookmark"></i></div>
                    </div>
                `
                    let app = document.querySelector('.app');

                    app.append(div)
                })
            }).then(() => {
                document.querySelectorAll('.number').forEach((btn, index) => {
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.num')[index].style = 'inline-block'
                        document.querySelectorAll('.number')[index].style.display = 'none'
                    })
                })
            })

        // document.querySelector('.btn').disabled = true
        document.querySelector('.btn').remove()
    })




});