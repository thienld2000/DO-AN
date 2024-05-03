import React from 'react';
// import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


import './Intro.css';

const Intro = () => {
  // const [playVideo, setPlayVideo] = React.useState(false);
  // const vidRef = React.useRef();
  
  const iframeTitle = "video marketting";
  return (
    <div className="app__video ">
      <iframe tittle={iframeTitle} src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FYakimono.com.vn%2Fvideos%2F1227037101009052%2F&show_text=false&width=476&t=0"  scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
    </div>
  );
};

export default Intro;
