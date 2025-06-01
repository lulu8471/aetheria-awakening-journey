import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MapPage from "./pages/MapPage";
import CalendarPage from "./pages/CalendarPage";
import CharactersPage from "./pages/CharactersPage";
import TimelinePage from "./pages/TimelinePage";
import OverviewPage from "./pages/OverviewPage";
import SourcesPage from "./pages/SourcesPage";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/map">世界地圖</Link></li>
            <li><Link to="/calendar">星曆與節慶</Link></li>
            <li><Link to="/characters">角色資料庫</Link></li>
            <li><Link to="/overview">世界觀與國度</Link></li>
            <li><Link to="/timeline">重大事件年表</Link></li>
            <li><Link to="/sources">引用來源</Link></li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/sources" element={<SourcesPage />} />
          </Routes>
        </main>
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
