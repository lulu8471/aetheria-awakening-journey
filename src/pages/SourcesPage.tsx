import React from "react";
import "./SourcesPage.css";

export default function SourcesPage() {
  return (
    <div className="sources-page-container">
      <h1>資源與引用來源</h1>
      <ul className="sources-list">
        <li>
          《覺醒之旅》官方小說連結：
          <a href="https://lishi.bookresource.qq.com/book/1039726357/" target="_blank" rel="noopener noreferrer">
            https://lishi.bookresource.qq.com/book/1039726357/
          </a>
        </li>
        <li>
          《覺醒之旅》世界觀資料網站：
          <a href="https://czbooks.net/n/ui1hce" target="_blank" rel="noopener noreferrer">
            https://czbooks.net/n/ui1hce
          </a>
        </li>
        <li>
          艾瑟利亞七國世界觀說明書（來源：專案內部資料集）
          <p className="note">本頁內容包含國家設定、節慶描述、角色資訊、地圖與插圖，均依專案內 PDF 檔案進行整合。</p>
        </li>
      </ul>
    </div>
  );
}
