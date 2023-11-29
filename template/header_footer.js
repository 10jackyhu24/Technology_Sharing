// html
const headerHtml = document.createElement('header');
headerHtml.innerHTML = `
<div class="header">
    <div class="header_button" onclick="linkTo('FuJen_Web')">輔仁大學校網</div>
    <div class="header_button" onclick="linkTo('Information_Engineering_Web')">資訊工程系網</div>
    <div class="header_button" style="text-align:right;" onclick="linkTo('Login_Register')">登入/註冊</div>
</div>
`;

const footerHtml = document.createElement('footer');
footerHtml.innerHTML = `
    <div class="footer">
        版權所有 blahblahblah。
        建議使用最新版瀏覽器訪問本網站。
    </div>
`;

// import css
const headerCss = document.createElement('style');
headerCss.innerHTML = `
.header {
    background-color: rgb(46, 142, 239);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.header_button {
    margin: 0 10px;
    font-size: 28px;
    cursor: pointer;
}

.header_button:hover {
    background-color: rgb(77, 158, 240);
}
`;

const footerCss = document.createElement('style');
footerCss.innerHTML = `
.footer {
    background-color: rgb(46, 142, 239);
    width: 100%;
    height: 50px;
    bottom: 0;
    padding-bottom: 20px;
}
`;

// JS
const headerJs = document.createElement('script');
headerJs.innerHTML = `
function linkTo(element) {
    if (element == 'FuJen_Web') {
        window.open('https://www.fju.edu.tw/');
    }
    else if (element == 'Information_Engineering_Web') {
        window.open('http://140.136.251.139/DepartmentCSIE/layout/oneblue/vvindex.jsp');
    }
    else if (element == 'Login_Register') {
        alert('目前系統暫未開放此功能~');
    }
}
`;

// insert element in html
document.head.appendChild(headerCss);
document.head.appendChild(footerCss);
document.body.insertBefore(headerHtml, document.body.firstChild);
document.body.appendChild(footerHtml);
document.body.appendChild(headerJs);