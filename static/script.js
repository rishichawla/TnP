function fillDepartments(departments) {
    const insert = document.getElementById("departments");

    let articles = "";
    for (let i in departments) {
        const imageURL = departments[i].imageURL;
        const pageURL = departments[i].pageURL;
        const branchName = departments[i].branchName;
        const establishmentYear = departments[i].establishmentYear;

        articles +=
            `<div class="col-md-4 col-sm-6" style="padding-bottom: 5%">
            <article class="post style2 column clearfix">
                <div class="featured-post">
                    <img src="` + imageURL + `" alt="image">
                </div>
                <div class="content-post">
                    <h2 class="title-post"> <a href="` + pageURL + `">` +
            branchName
            + `</a> </h2>
                    <p>Established in ` + establishmentYear + `</p>
                    <a href="` + pageURL + `" class="readmore">READ MORE</a>
                </div>
            </article>
        </div>`
    }

    insert.innerHTML = articles;
}