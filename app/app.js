import * as MODEL from "./model.js";

function init() {
    $(".projectList a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Section";
        e.preventDefault();
        MODEL.getPageContent(contentID);
    });
}
$(document).ready(function () {
    init();
    MODEL.getPageContent("aBoardGameSection");
});