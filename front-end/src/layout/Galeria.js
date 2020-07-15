import React from "react";
import ImageGallery from "react-image-gallery";

const Galeria = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      originalAlt: "img1",
      thumbnailAlt: "img1",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      originalAlt: "img2",
      thumbnailAlt: "img2",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      originalAlt: "img3",
      thumbnailAlt: "img3",
    },
  ];
  return (
    <div className="Galeria">
      <div className="curve" id="curve-gal">
        <div className="container">
          <h2>Galeria</h2>
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
