//list and list item.
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return
      <VideoListItem
        onVideoSelect ={props.onVideoSelect}
        key={video.etag} 
        video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;





































// __________________________________________________________
// import React from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from './components/search_bar';
//
// // Create new component. THis component should produce html
//
// const API_KEY = 'AIzaSyAZmBnATukmIX_lAdiTcFAuY0YJuzJdfvk';
//
// const App = () => {
//        return (
//          <div>
//            <SearchBar/>
//            </div>
//          );
//        }
//
//        ReactDOM.render( < App / > , document.querySelector(’.container'));
