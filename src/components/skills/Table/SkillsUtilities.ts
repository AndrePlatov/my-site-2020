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
  "Solution Architecture": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU8ELx6pIRpU2_5fWGE8p2r-jyuCefmcHteWNwsfceSRZ_SoSC&usqp=CAU"
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