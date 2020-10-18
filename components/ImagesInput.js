import { mapImagesForSlider } from "../utils/utils";
import ImageGallery from "react-image-gallery";

export default function ImagesInput({ images, setImages }) {
  return (
    <div className="flex flex-col items-center">
      <label className="flex flex-col items-center cursor-pointer py-2">
        <div className="py-2 w-64 text-center font-bold border border-solid border-orange-900 text-orange-900 transition-all duration-300 hover:bg-orange-200 hover:bg-opacity-50">
          Agregar imágenes +
        </div>
        <input
          className="hidden"
          onChange={(e) => setImages(Array.from(e.target.files))}
          type="file"
          multiple
        />
      </label>
      <div
        className="flex items-center justify-around p-2 text-orange-900"
        style={{ fontSize: 120 }}
      >
        {images.length ? (
          <ImageGallery
            autoPlay={true}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            showNav={false}
            items={mapImagesForSlider(images, "imgInput")}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
