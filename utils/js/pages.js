const headHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Team Page</title>
</head>
<body>
    <header style="background-color: salmon;">
        <h1 class="text-center" style='padding: 100px; color: azure;'>Team Page</h1>
    </header>
    <main class='container'>
        <div class="row">`

const endHTML = `
        </div>
    </main>

</body>
</html>
`

function createCards(member) {
    if (member.school) {
        var role = 'Intern'
        var other = `School: ${member.school}`
        var other2 = ''
        var emoji = '128187'
    } else if (member.office) {
        var role = 'Manager'
        var other = `Office Number: ${member.office}`
        var other2 = ''
        var emoji = '127894'
    } else if (member.github) {
        var role = 'Engineer'
        var other = `Github: ${member.github}`
        var other2= member.github
        var emoji = '128208'
    }
    var name = member.name
    var email = member.email
    var id = member.id

    const card = `
                <div class="card text-center col-lg-6 mb-4 mx-auto" style="width: 18rem; margin-right: 10px;">
                    <div class="card-body">
                        <h5 class="card-title" style="background-color: lightskyblue; padding:10px; margin: 0px;">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted" style="background-color: lightskyblue; padding:10px"><i>&#${emoji}</i>${role}</h6>
                        <p class="card-text">ID: ${id} </p>
                        <ul style="list-style-type: none; margin-left: -15%">
                            <li>
                                <a href="mailto:${email}" class="card-link">Email: ${email}</a>
                            </li>
                            <li>
                                <a href="${other2}" class="card-link">${other}</a>
                            </li>
                        </ul>
                    </div>
                </div>`
    return card
}

module.exports = {createCards, headHTML, endHTML}

