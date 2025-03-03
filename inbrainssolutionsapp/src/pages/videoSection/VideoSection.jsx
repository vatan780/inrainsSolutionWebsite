import React from 'react'
import taabVideo from '../../video/taab_video.mp4'
import "./videoSection.css"

const VideoSection = () => {
    return (
        <>
            <div className="background-image-section">
                <div className="text-animation-section">
                    <div className="animation-heading">
                        <h1>We Deliver</h1>
                    </div>
                    <div className="animation-scroll-section">
                        <div className="scrolling-text">
                            <h1>Next-Gen App Development</h1>
                            <h1>Real Money Gaming Platforms</h1>
                            <h1>Thumb-Stopping Social Media Content</h1>
                        </div>

                    </div>
                </div>

                {/* <div className="video-container-section">
                    <div className="video"> 
                        <video controls >
                            <source src={taabVideo} type="video/mp4" />
                        </video>
                    </div>
                </div> */}
            </div>


        </>
    )
}

export default VideoSection
