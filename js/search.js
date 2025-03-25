// 定义文章数据
const articles = [
    { title: "海洋塑料污染", url: "protection-Plastic.html", content: "塑料污染已成为全球海洋生态系统面临的最严峻挑战之一。" },
    { title: "海平面上升", url: "protection-SeaLevel.html", content: "海平面上升是全球气候变化的一个显著标志，对沿海地区构成了严重的威胁。" },
    { title: "海洋酸化", url: "protection-Acid.html", content: "海洋酸化是全球气候变化引发的另一个严重问题。" },
    { title: "过度捕捞", url: "protection-Fishing.html", content: "过度捕捞是全球海洋生态系统面临的另一大威胁。" }
];

// 搜索函数
function searchArticles() {
    const searchInput = document.getElementById("searchInput");
    const keyword = searchInput.value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");

    resultsContainer.innerHTML = "";

    const results = articles.filter(article => {
        return article.title.toLowerCase().includes(keyword) || article.content.toLowerCase().includes(keyword);
    });

    if (results.length > 0) {
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.className = "search-result-card"; 
            resultElement.innerHTML = `
                <div class="card-content">
                    <h3><a href="${result.url}">${result.title}</a></h3>
                    <p>${result.content}</p>
                </div>
            `;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = "未找到相关文章。";
    }
}