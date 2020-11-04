import { useEffect } from "react";
import { mapImagesForSlider } from "../utils/utils";
import ImageGallery from "react-image-gallery";

export default function ImagesModal({ imagesForSlider, setImagesForSlider }) {
  const closeModal = () => setImagesForSlider([]);
  const handleKeyDown = (e) => e.key === "Escape" && closeModal();

  useEffect(() => {
    if (imagesForSlider.length) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return document.removeEventListener("keydown", handleKeyDown);
  }, [imagesForSlider]);

  return (
    <>
      {imagesForSlider.length ? (
        <div className="fixed w-full flex justify-center items-center pb-24 h-screen bg-orange-100 bg-opacity-75">
          <button
            className="border-2 border-orange-500 shadow-md hover:shadow-inner py-1 px-4 rounded-sm text-orange-500 font-bold lg:text-2xl text-xl absolute right-0 top-0 lg:mr-6 mr-2 lg:mt-0 mt-16 z-10"
            onClick={closeModal}
          >
            X
          </button>
          <ImageGallery
            autoPlay={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showNav={true}
            items={mapImagesForSlider(imagesForSlider, "imgSlider")}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
