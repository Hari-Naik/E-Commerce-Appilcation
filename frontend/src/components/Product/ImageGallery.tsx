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
    <div className="flex flex-col lg:flex-row gap-2">
      <ul className="flex lg:flex-col gap-1 order-2 lg:order-1">
        {images?.map((imageUrl, index) => (
          <li
            key={`thumb-${index}`}
            onMouseEnter={() => onImageChange(imageUrl)}
            onClick={() => onImageChange(imageUrl)}
            className={`w-[74px] h-[74px] flex items-center justify-center p-1 cursor-pointer bg-[#f5f5f5] ${
              activeImageURL === imageUrl ? "border-2 border-[#2874f0]" : ""
            } p-2`}>
            <img
              src={imageUrl}
              alt={`thumb-${index}`}
              className="w-full h-full object-contain"
            />
          </li>
        ))}
      </ul>
      <div className="w-full aspect-square max-h-[448px] flex items-center justify-center order-1 lg:order-2 bg-[#f5f5f5] p-10">
        <img
          src={activeImageURL}
          alt="Active product image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
