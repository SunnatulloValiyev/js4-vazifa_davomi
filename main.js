const card1 = document.createElement("div");
const img = document.createElement("img");
const card2 = document.createElement("div");
const fullName = document.createElement("h2");
const country = document.createElement("h4");
const job = document.createElement("p");
const card3 = document.createElement("div")
const webPages = document.createElement("ul")


const web_Pages = [
    { name: "GitHub", url: "https://github.com/SunnatulloValiyev" },
    { name: "Frontend Mentor", url: "https://www.frontendmentor" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram./valiyev.o17" }
];

for (let i = 0; i < web_Pages.length; i++) {
    const li_page = document.createElement("li");
    const a_page = document.createElement("a");

    a_page.textContent = web_Pages[i].name;
    a_page.href = web_Pages[i].url;
    a_page.target = "_blank";

    li_page.appendChild(a_page);
    li_page.setAttribute("class", "li_page");

    webPages.appendChild(li_page);
}

webPages.setAttribute("class", "pages");
card1.setAttribute("class", "card1");

img.setAttribute("src", "./photos/profile-pic.png");
img.setAttribute("class", "avatar");

card2.append(fullName, country);
card2.setAttribute("class", "card2")
fullName.setAttribute("class", "fullName");
fullName.textContent = "Jessica Randall";
country.setAttribute("class", "country");
country.textContent = "London, United Kingdom";

job.setAttribute("class", "text");
job.textContent = '"Front-end developer and avid reader."';



card1.append(img, card2, job, card3, webPages);
document.body.appendChild(card1);