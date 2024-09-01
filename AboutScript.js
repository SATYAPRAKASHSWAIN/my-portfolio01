function displaySkills() {
  document.getElementsByClassName("pie-cntr")[0].style.cssText =
    "display: flex !important";
  document.getElementsByClassName("skill-btn")[0].style.cssText =
    "display: none !important";
  let sub = document.getElementsByClassName(" subjects");
  sub[0].setAttribute(
    "title",
    "Java Basics\nClass and Objects\nOOPS Concept\nException Handling\nStrings and Arrays\nCollection Frameworks\nMultithreading\nServlet and JSP\nHybernate Framework\nSpringboot Framework"
  );
  sub[1].setAttribute(
    "title",
    "Python Basics\nDatatypes and Methods\nFunctions\nPacking and Modules\nDjango\nFastAPI\nSQLAlchemy\nREST Framework\nSMTP\nCelery\nKafka"
  );
  sub[2].setAttribute(
    "title",
    "Basic Concept of C#\nClass and Object\nProgrammings"
  );
  sub[3].setAttribute(
    "title",
    "Tags and Attributes\nCharacter Entity\nList and Table\nMedia Management\nForms"
  );
  sub[4].setAttribute("title", "Designing\nResponsiveness\nAnimation");
  sub[5].setAttribute(
    "title",
    "Functions\nObject Handling\nDOM\nBOM\nArrays, Strings and it's methods\nEvent Handling\nHosting"
  );
}
function current() {
  window.location = "https://maps.app.goo.gl/wLvKt4yEKjAfexHk6";
}
function permanent() {
  window.location = "https://goo.gl/maps/fgAokNgPJCim3dk28";
}
language = document.getElementsByClassName("l-box");
language[0].onmouseover = () => {
  language[0].innerText = "ODIA";
};
language[0].onmouseout = () => {
  language[0].innerText = "ଓଡିଆ";
};
language[1].onmouseover = () => {
  language[1].innerText = "HINDI";
};
language[1].onmouseout = () => {
  language[1].innerText = "हिन्दी";
};
