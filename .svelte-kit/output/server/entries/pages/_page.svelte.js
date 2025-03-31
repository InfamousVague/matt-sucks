import "clsx";
/* empty css                                               */
import { f as attr, e as escape_html, h as bind_props, i as attr_style, j as stringify, k as ensure_array_like } from "../../chunks/index.js";
import { h as fallback } from "../../chunks/utils.js";
function Intro($$payload) {
  $$payload.out += `<div id="intro" class="svelte-138hl0a"><div class="left svelte-138hl0a"><p class="heading svelte-138hl0a">Your Next <span class="gradient-text">Software Engineer</span></p> <p class="subtext svelte-138hl0a">I am a versatile developer with a strong track record <b>leading fast-moving startups</b> from zero to launch, crafting beautiful and intuitive <b>user interfaces</b>, and building powerful <b>web and desktop apps</b>.</p></div> <div class="right svelte-138hl0a"><div id="about"></div> <img src="/splash.png" alt="" class="svelte-138hl0a"></div></div>`;
}
function Work($$payload, $$props) {
  let title = fallback($$props["title"], "Work Title");
  let description = fallback($$props["description"], "Description");
  let position = fallback($$props["position"], "Position");
  let photo = fallback($$props["photo"], "");
  let date = fallback($$props["date"], "");
  $$payload.out += `<div class="work svelte-1dbpiam"><div class="left svelte-1dbpiam"><img${attr("src", photo)} alt="work_photo" class="svelte-1dbpiam"></div> <div class="right align-right svelte-1dbpiam"><p class="title svelte-1dbpiam">${escape_html(title)} <span class="position gradient-text svelte-1dbpiam">${escape_html(position)}</span></p> <p class="date svelte-1dbpiam">${escape_html(date)}</p> <p class="description">${escape_html(description)}</p></div></div>`;
  bind_props($$props, { title, description, position, photo, date });
}
function Works($$payload) {
  let satellite = {
    title: "Satellite.im",
    date: "2021 - 2025",
    description: `Over the span of four years I played a key role in turning the company from an idea into a real, working product. 
            Under my leadership we raised $10.5 million in funding, lead a team of over 30 people, and stayed hands-on with development as the lead engineer. 
            My team built a fully decentralized chat platform that runs without servers, putting user privacy and control first. From managing people to shipping 
            product, I've been involved every step of the way.`,
    position: "CEO & Lead Developer",
    photo: "/satellite.png"
  };
  let lootsafe = {
    title: "LootSafe",
    date: "2017 - 2019",
    description: `As CEO and Founder of LootSafe, LLC​, a blockchain gaming startup, I led the creation of a platform that enabled game developers 
        to tokenize in-game assets (pre NFT) on the blockchain. I drove the vision and product development for LootSafe, aiming to give players true ownership of digital items. 
        Under my leadership, the team built a game development platform that allows developers to easily create, decentralize, and manage game assets on the public blockchain​.`,
    position: "Founder & CEO",
    photo: "/lootsafe.png"
  };
  let shapeshift = {
    title: "ShapeShift",
    date: "2016 - 2017",
    description: `During arguably the most rapid growth period of crypto to date I helped further the Prism platform in 
        addition to building other tools within ShapeShift, a well-known cryptocurrency exchange platform. Specifics can be requested in person 
        but to respect company policies will be omitted online.`,
    position: "Software Engineer",
    photo: "/shapeshift.png"
  };
  let youtube = {
    title: "JeromeASF (YouTube)",
    date: "2016 - 2021",
    description: `JeromeASF is a popular online gaming content brand, and in this role I produced gaming-related video content and streams. 
        This required creating charismatic and engaging content, loosely managing a community of viewers, and collaborating on entertainment projects 
        under the JeromeASF umbrella. This role continued for many years during after work hours – I leveraged my gaming passion and on-camera skills to build an audience. 
        While not an engineering position, my work as a content creator demonstrates my versatility, as well as my ability to engauge with millions of people publicly.`,
    position: "Content Creator",
    photo: "/youtube.png"
  };
  $$payload.out += `<div id="works" class="svelte-1ks1s8w"><div id="history"></div> <h1 class="svelte-1ks1s8w">Notable History</h1> `;
  Work($$payload, {
    title: satellite.title,
    description: satellite.description,
    position: satellite.position,
    photo: satellite.photo,
    date: satellite.date
  });
  $$payload.out += `<!----> `;
  Work($$payload, {
    title: lootsafe.title,
    description: lootsafe.description,
    position: lootsafe.position,
    photo: lootsafe.photo,
    date: lootsafe.date
  });
  $$payload.out += `<!----> `;
  Work($$payload, {
    title: shapeshift.title,
    description: shapeshift.description,
    position: shapeshift.position,
    photo: shapeshift.photo,
    date: shapeshift.date
  });
  $$payload.out += `<!----> `;
  Work($$payload, {
    title: youtube.title,
    description: youtube.description,
    position: youtube.position,
    photo: youtube.photo,
    date: youtube.date
  });
  $$payload.out += `<!----></div>`;
}
function Skill($$payload, $$props) {
  let skill = fallback($$props["skill"], "");
  const availableColors = [
    "#FFCBE1",
    "#D6E5BD",
    "#F9E1A8",
    "#BCD8EC",
    "#DCCCEC",
    "#FFDAB4",
    "#ffcaaf",
    "#ffd97d",
    "#90f1ef",
    "#d4a373",
    "#d6f5e3",
    "#9affda",
    "#9872ff",
    "#e1737e",
    "#d5edb5",
    "#efd2ff",
    "#edf1ef",
    "#faf3dd"
  ];
  function getPastel() {
    return availableColors[Math.floor(Math.random() * availableColors.length)];
  }
  $$payload.out += `<div class="skill svelte-6g61uz"${attr_style(`background-color: ${stringify(getPastel())};`)}><p class="svelte-6g61uz">${escape_html(skill)}</p></div>`;
  bind_props($$props, { skill });
}
function Skillcloud($$payload, $$props) {
  let skills = fallback($$props["skills"], () => [], true);
  const each_array = ensure_array_like(skills);
  $$payload.out += `<div id="skillcloud" class="svelte-wu6yg3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let skill = each_array[$$index];
    Skill($$payload, { skill });
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { skills });
}
function _page($$payload) {
  Intro($$payload);
  $$payload.out += `<!----> `;
  Skillcloud($$payload, {
    skills: [
      "JavaScript",
      "CSS",
      "Rust",
      "React",
      "Svelte",
      "Python",
      "Vue",
      "NodeJS",
      "SCSS",
      "Leadership",
      "Product Owner",
      "Scrum",
      "Video Editing",
      "Content Creation",
      "Solidity",
      "Unit Testing",
      "GIT",
      "Figma",
      "UI/UX",
      "Adobe Suite",
      "Hiring & Interviews"
    ]
  });
  $$payload.out += `<!----> `;
  Works($$payload);
  $$payload.out += `<!----> <div id="work"></div> <div id="contact"></div>`;
}
export {
  _page as default
};
