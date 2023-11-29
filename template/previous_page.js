// html
const previousPageHtml = document.createElement('div');
previousPageHtml.innerHTML = `
<a class="previous_page_css" href="javascript:history.back()">
    上一頁
</a>
`;

// css
const previousPageCss = document.createElement('style');
previousPageCss.innerHTML = `
.previous_page_css {
    background-color: rgb(100, 100, 100);
    height: 50px;
    width: 100px;
    font-size: 28px;
    text-align: center;
    line-height: 50px;
    border-radius: 20px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    position: absolute;
    top: 50px;
}

.previous_page_css:hover {
    background-color: rgb(150, 150, 150);
}
`;

// insert element in html
document.head.appendChild(previousPageCss);
document.body.insertBefore(previousPageHtml, document.body.childNodes[1]);