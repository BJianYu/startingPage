let searchContent = document.querySelector("#search")
searchContent.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        searchContents = searchContent.value;
        window.location.href = `https://cn.bing.com/search?q=${searchContents}`;
    }
})
