import React, { useState } from 'react';
import './Feed.css';
import Post from './Post';
import Quiz from './Quiz';

function Feed() {
  // This would be replaced with your actual data fetching logic
  const postsData = [
    {
      id: 1,
      name: 'Boechera',
      message: 'Is this #arabidopsis? In streets of #Dusseldorf.  Flowers are weird @Francois_Parcy @NascArabidopsis https://t.co/On3reu8ZaH',
      description: 'Arabidopsis lover',
      imageUrl: 'https://yukizhuyue.com/wp-content/uploads/2024/03/1-1.png', // Replace with your image URL
    },
    {
        id: 2,
        name: 'Yuki',
        message: 'Unlocking the beauty of Arabidopsis with genetics🌸Various floral morphs and color variations found in segregants of my hybrid A.thaliana roses. Comment your favorite (A-F) and I will give it an upgrade 🧬',
        description: 'hi',
        imageUrl: 'https://yukizhuyue.com/wp-content/uploads/2024/03/4.jpg', // Replace with your image URL
      },
  ];

  // Pagination state and logic (if you have a lot of posts)
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts you want to show per page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalNumberOfPages = Math.ceil(postsData.length / postsPerPage); // Example total number of pages

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // You may need to fetch new posts if they are not already loaded
  };

  return (
    <div className="feed">
      {/* The Quiz component is always rendered at the top of the feed */}
      <Quiz />

      {/* Display posts for the current page */}
      {currentPosts.map((post) => (
        <Post 
          key={post.id}
          name={post.name}
          description={post.description}
          message={post.message}
          imageUrl={post.imageUrl} // Ensure your Post component can accept and display images
        />
      ))}

      {/* Pagination controls, only display if there are more pages */}
      {totalNumberOfPages > 1 && (
        <div className="feed__pagination">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          )}
          {currentPage < totalNumberOfPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Feed;