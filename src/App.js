import './App.css';
import ArtistInput from './components/ArtistInput';
import GeneratedSong from './components/GeneratedSong';
import "./index.css"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-full h-screen flex justify-center">
      <Routes>
          <Route path="/" element={<ArtistInput />} />
          <Route path="/results" element={<GeneratedSong />} />
       </Routes>
    </div>
  );
}

export default App;
