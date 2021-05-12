data = `./data.json`;
function projectData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", data, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      // console.log(data);
      const projectData = JSON.parse(this.responseText);
      let output = "";
      projectData.forEach(function (project) {
        output += `
        <li>
          <img src="${project.image}" alt="">
          <a href="${project.demolink}" target="_blank" class="demolink">View Demo</a>
          <a href="${project.gitrepo}"  target="_blank" class="gitrepo">View Git Repo</a>
        </li>
          `;
      });

      document.getElementById("data-list").innerHTML = output;
    }
  };
  xhr.send();
}
projectData();
