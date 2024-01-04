export async function RenderSkills() {
  let object = await fetch("Aboutme\\Skills\\skills.json");
  object = await object.text();
  object = JSON.parse(object);
  let skills = document.getElementById("skills");
  let html = "";
  for (var i = 0; i < object.skills.length; ++i) {
    html += `<div class="skill">
            <div class="skillimagecontainer">
                <img class="skillimage" src="${object.skills[i].imageurl}" alt=""${object.skills[i].imageurl} />
            </div>
            <span class="skillname">${object.skills[i].name}</span>
        </div>`;
  }
  skills.innerHTML = html;
}
