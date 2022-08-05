function search() {
    searchContent = searchContent.value;
    window.location.href = `https://cn.bing.com/search?q=${searchContent}`;
}

// 搜素功能
let searchContent = document.getElementById('searchContent');
let searchButton = document.getElementById('searchButton');
searchContent.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') { search() }
});
searchButton.addEventListener('click', search);