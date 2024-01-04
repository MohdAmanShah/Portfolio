
export async function RenderProjects() {
    let object = await fetch('./Projects/project.json')
    object = await object.text();
    object = JSON.parse(object);
    let projects = document.getElementsByClassName('projects')[0]
    let html = "";
    for (var i = 0; i < object.projects.length; ++i) {
        html += `<div class="project">
            <div class="projectposter">
                <img src="${object.projects[i].imageurl}" width="100px" />
            </div>
            <div class="details">
                <h2 class="projectName">${object.projects[i].name}</h2>
                <p class="projectDesp">${object.projects[i].description}</p>
            </div>
        </div>`;
    }
    projects.innerHTML = html;
}