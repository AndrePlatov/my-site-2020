import { ISkill } from "../skillsData";

export function GenerateSkillsByTag(skills: ISkill[]) {
  let types: any = {};
  let skillsByTag: any[] = [];

  skills.forEach(skill => {
    skill.tags.split(",").map(tag => {
      types[tag.trim()] == undefined ? types[tag.trim()] = [skill] : types[tag.trim()].push(skill);
      // = [];
    });
  });

  for (const property in types) {
    skillsByTag.push({ type: property, skills: types[property] });
  }
  skillsByTag.map(tagSkills => {
    console.log(tagSkills.skills);
  });

  return skillsByTag;
}

export function GenerateSkillsByTechTag(skills: ISkill[]) {
  let types: any = {};
  let skillsByTag: any[] = [];

let imagelinks: any = {
  "DevOps": "https://images.ctfassets.net/xi2je6di2mcr/3wYozEIvVbeNPg0gHvXMfL/bc1089ed76ebf0fe0303d0713f5be48e/devops.png",
  "Cloud Solutions": "https://innovationatwork.ieee.org/wp-content/uploads/2019/09/bigstock-d-Rendering-Cloud-Computing-267217441_1024X684.jpg",
  "Foundation": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhPRE1IePdu2KvSw-0V48HcyMN2zWeFVBwKaJFsRa7yOPd2_YJ&usqp=CAU",
  "Solution Architecture": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU8ELx6pIRpU2_5fWGE8p2r-jyuCefmcHteWNwsfceSRZ_SoSC&usqp=CAU",
  "Backend":"https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
  "Frontend":"https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/11/attachment_92339071-e1541083138843.png?auto=format&q=60&fit=max&w=930",
  "Operations":"https://docs.microsoft.com/en-us/azure/azure-monitor/media/visualizations/dashboard.png",
  "Integration":"https://cdn.buttercms.com/ZQxorY1TQnKWLKf9H6QH",
  "Web Solutions":"https://tr4.cbsistatic.com/hub/i/r/2019/06/12/5bb131b4-fd3f-4c95-a964-1f31d943e1c9/resize/1200x/cf1308c77b2114cc2368bd502199e8e6/istock-970952920industrycloud1.jpg",
  "Data Management":"https://cdn2.iconfinder.com/data/icons/programming-50/64/206_programming-sql-data-database-512.png"
};

  skills.forEach(skill => {
    skill.techtags.split(",").map(tag => {
      if (tag != "") {
        types[tag.trim()] == undefined ? types[tag.trim()] = [skill] : types[tag.trim()].push(skill);
      }
    });
  });

  for (const property in types) {
    skillsByTag.push({ type: property, skills: types[property], imagelink: imagelinks[property] });
  }
  skillsByTag.map(tagSkills => {
    console.log(tagSkills.skills);
  });
  

  return skillsByTag;
}