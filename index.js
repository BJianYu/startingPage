function search() {
    searchContent = searchContent.value;
    window.location.href = `https://cn.bing.com/search?q=${searchContent}`;
}

function write() {
    if (!haveWrite) {
        haveWrite = true;
        writeContent.readOnly = true;
        writeButton.innerText = '删除';
    } else {
        haveWrite = false;
        writeContent.readOnly = false;
        writeContent.value = ''; // 清空输入框
        writeButton.innerText = '记录';
    }
    window.localStorage.setItem('haveWrite', haveWrite);
    window.localStorage.setItem('writeContent', writeContent.value);
}


/* 搜素功能 */
// 获取DOM对象
let searchContent = document.getElementById('searchContent');
let searchButton = document.getElementById('searchButton');
// 事件监听（keydown"Enter"、click）
searchContent.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') { search(); }
});
searchButton.addEventListener('click', search);

/* 记录功能 */
// 默认未写入
let haveWrite = false;
// 获取DOM对象
let writeContent = document.getElementById('writeContent');
let writeButton = document.getElementById('writeButton');
// 从localStorage中获取是否已记录和记录的文本
if (localStorage.getItem('haveWrite') == 'true') {
    haveWrite = true;
    writeContent.value = localStorage.getItem('writeContent');
    writeContent.readOnly = true;
    writeButton.innerText = '删除';
}
// 事件监听（keydown"Enter"、click）
writeContent.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') { write(); }
});
writeButton.addEventListener('click', write);