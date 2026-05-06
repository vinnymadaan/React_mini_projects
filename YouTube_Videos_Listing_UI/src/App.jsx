import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [video, setVideo] = useState([])
  const [currentVideo, setCurrentVideo] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchVideos = () => {
  setLoading(true)

  fetch("https://api.freeapi.app/api/v1/public/youtube/videos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const videoArray = data.data.data

      setVideo(videoArray)

      const randomIndex = Math.floor(Math.random() * videoArray.length)
      setCurrentVideo(videoArray[randomIndex])

      setLoading(false)
    })
  }
  
  useEffect(() => {
    fetchVideos()
  }, [])


  return (

  <div className="container">
    <h1 className="heading">🎬 YouTube Video</h1>

    {loading ? (
      <div className="skeleton">
        <div className="skeleton-box skeleton-img"></div>
        <div style={{ width: "100%" }}>
          <div className="skeleton-box skeleton-text"></div>
          <div className="skeleton-box skeleton-text"></div>
          <div className="skeleton-box skeleton-text"></div>
        </div>
      </div>
    ) : (
      <div className="video-card">
        <div className="thumbnail">
          <img src={currentVideo?.items?.snippet?.thumbnails?.high?.url} alt="thumbnail" />
        </div>

        <div className="video-info">
          <h2 className="video-title">
            {currentVideo?.items?.snippet?.title}
          </h2>

          <p className="video-desc">
            {currentVideo?.items?.snippet?.description?.slice(0, 120)}...
          </p>

          <p className="channel">
            {currentVideo?.items?.snippet?.channelTitle}
          </p>
        </div>
      </div>
    )}

    <button onClick={fetchVideos} className="btn">
      Next Video
    </button>
  </div>
  )
}

export default App
