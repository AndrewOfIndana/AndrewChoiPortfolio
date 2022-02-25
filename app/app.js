import * as MODEL from "./model.js";

function init() {
    $(".projectNav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Project";
        e.preventDefault();
        MODEL.getPageContent(contentID);
    });
}
$(document).ready(function () {
    init();
    MODEL.getPageContent("aProject");
});