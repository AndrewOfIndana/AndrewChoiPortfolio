var aBoardGameSection = `
  <h2>This is Missle Crisis<h2>
`;
var cUnrealLevelSection = `
  <h2>This is my level<h2>
`;
var dGameDesignIdeasSection = `
  <h2>These are my 10 game design Ideas<h2>
`;
var eMemorySection = `
  <h2>This is a working game of memeory<h2>
`;
var fprogrammingProjectSection = `
  <h2>This is Seeds N' Scrap<h2>
`;

export function getPageContent(pageID) {
    $("#app").html(eval(pageID));
}