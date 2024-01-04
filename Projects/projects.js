
export async function makeProjects() {
    let object = await fetch('./project.json')
    object = await object.text();
    object = JSON.parse(object);
    let projects = document.getElementsByClassName('projects')[0]
    let html = "";
    for (var i = 0; i < object.projects.length; ++i) {
        html += `<div class="projectcard">
            <div class="cardimage">
                <img src="${object.projects[i].imageurl}" width="100px" />
            </div>
            <div class="cardbody">
                <h2>${object.projects[i].name}</h2>
                <p>${object.projects[i].description}</p>
            </div>
        </div>`;
    }
    projects.innerHTML = html;
}