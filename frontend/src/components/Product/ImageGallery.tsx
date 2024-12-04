import React from "react";

interface ImageGalleryProps {
  images: string[];
  activeImageURL: string;
  onImageChange: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  activeImageURL,
  onImageChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <ul className="flex md:flex-col gap-1 order-2 md:order-1">
        {images?.map((imageUrl, index) => (
          <li
            key={`thumb-${index}`}
            onMouseEnter={() => onImageChange(imageUrl)}
            onClick={() => onImageChange(imageUrl)}
            className={`w-[74px] h-[74px] p-1 cursor-pointer bg-[#f5f5f5] ${
              activeImageURL === imageUrl ? "border-2 border-[#2874f0]" : ""
            }`}>
            <img
              src={imageUrl}
              alt={`thumb-${index}`}
              className="w-full h-full"
            />
          </li>
        ))}
      </ul>
      <div className="w-full h-[448px] order-1 md:order-2 bg-[#f5f5f5]">
        <img
          src={activeImageURL}
          alt="Active product image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
