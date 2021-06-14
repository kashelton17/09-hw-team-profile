

function createCards(member) {
    if (member.school) {
        var role = 'Intern'
        var other = member.school
    } else if (member.office) {
        var role = 'Manager'
        var other = member.office
    } else if (member.github) {
        var role = 'Engineer'
        var other = member.github
    }
    var name = member.name
    var email = member.email
    var id = member.id

    const card = `<div class="card text-center col-lg-6 mb-4 mx-auto" style="width: 18rem; margin-right: 10px;">
                    <div class="card-body">
                        <h5 class="card-title" style="background-color: lightskyblue; padding:10px; margin: 0px;">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted" style="background-color: lightskyblue; padding:10px">${role}</h6>
                        <p class="card-text">ID: ${id} </p>
                        <ul style="list-style-type: none">
                            <li>
                                <a href="#" class="card-link">Email: ${email}</a>
                            </li>
                            <li>
                                <a href="#" class="card-link">${other}</a>
                            </li>
                        </ul>
                    </div>
                </div>`
    return card
}

module.exports = {createCards}
const Member = {
    name: 'katie',
    id: '2',
    email: 'katie@email.com',
    school: 'harvard'
}
