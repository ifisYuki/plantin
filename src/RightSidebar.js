import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  // Replace with your own navigation or window.location logic
  const handleAdClick = () => {
    // For example, navigate to another route or open a new link
    window.open('https://miro.com/app/board/uXjVNssdqHU=/?share_link_id=567759179591', '_blank');
  };

  return (
    <div className="rightSidebar">
      <div className="rightSidebar__news">
        <h2>PlantIn News</h2>
        <ul>
        <a 
          href="https://yukizhuyue.com/wp-content/uploads/2024/03/arabidopsis_tweet.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arabidposis News from 🌐 -&gt;
        </a>
        </ul>
      </div>
      
      <div className="rightSidebar__ad">
        <img src="https://yukizhuyue.com/wp-content/uploads/2024/03/Ad.png" alt="Ad" className="rightSidebar__adImage" />
        <div className="rightSidebar__adContent">
          <button onClick={handleAdClick} className="rightSidebar__adButton">Join us for Transformation</button>
        </div>
      </div>
      
      {/* ...other sidebar content */}
    </div>
  );
}

export default RightSidebar;
