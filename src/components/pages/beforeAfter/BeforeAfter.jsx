import { ComparisonSlider } from "react-comparison-slider";
import cc from "./icon.png";
import "./beforeAfter.scss";
import Frame1 from "./Frame1.png";
import Frame2 from "./Frame2.png";

function BeforeAfter() {
  return (
    <div className="max-w-lg border border-black">
      <ComparisonSlider
        defaultValue={50}
        handleBefore={<div className="bg-white w-1 bottom-0 h-full"></div>}
        handleAfter={<div className="bg-white w-1 bottom-0 h-full"></div>}
        itemOne={
          <img
            className="w-full object-cover"
            src="https://res.cloudinary.com/dspq4okwt/image/upload/c_scale,q_auto:eco,w_1000/v1626805349/photo-1548041347-390744c58da6_mvsu0f.jpg"
          />
        }
        itemTwo={
          <img
            className="w-full object-cover"
            src="https://res.cloudinary.com/dspq4okwt/image/upload/c_scale,e_grayscale,q_auto:eco,w_1000/v1626805349/photo-1548041347-390744c58da6_mvsu0f.jpg"
          />
        }
        aspectRatio={16 / 9}
      />
    </div>
  );
}

export default BeforeAfter;
