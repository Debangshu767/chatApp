import React from "react";

interface AvatarCollageProps {
  images: string[];
}

const AvatarCollage: React.FC<AvatarCollageProps> = ({ images }) => {
  const MAX_AVATARS = 4; // Maximum number of avatars to display
  const displayedImages = images.slice(0, MAX_AVATARS);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      }}
    >
      {displayedImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Participant ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            gridColumn: index % 2 === 0 ? "1 / 2" : "2 / 3",
            gridRow: index < 2 ? "1 / 2" : "2 / 3",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
};

export default AvatarCollage;
