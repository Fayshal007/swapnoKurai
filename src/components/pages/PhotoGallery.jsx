const images = [
  "/src/assets/logo.jpg",
  "/src/assets/image2.jpg",
  "/src/assets/image3.jpg",
  "/src/assets/image4.jpg",
  "/src/assets/image5.jpg",
  "/src/assets/image6.jpg",
];

const PhotoGallery = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
