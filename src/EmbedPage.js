import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import './EmbedPage.css'; // Assuming you have corresponding CSS

function EmbedPage() {
  return (
    <div className="embedPage">
      <Header />
      <div className="embedPage__content">
        <iframe
          width="768"
          height="432"
          src="https://miro.com/app/live-embed/uXjVNssdqHU=/?moveToViewport=-22942,6743,11277,5778&embedId=587225674122"
          frameBorder="0"
          scrolling="no"
          allow="fullscreen; clipboard-read; clipboard-write"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default EmbedPage;
