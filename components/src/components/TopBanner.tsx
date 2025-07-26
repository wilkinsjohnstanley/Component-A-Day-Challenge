import React, {useState} from "react";

const TopBanner: React.FC = () => {
    const [visible, setVisible] = useState(true);
    if(!visible) return null;
    return (
        <div className="w-full bg-red-600 text-white text-sm md:text-base py-2 px-4 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md">
            <span>ONLINE EXCLUSIVE 🇺🇸 SAVE 10% OFF ALL MADE IN USA ITEMS!</span>
            <button
             className="text-white text-xl font-bold leading-none hover:text-gray-200 transition"
                onClick={()=> setVisible(false)}
                aria-label="X"
            >
  &times;
            </button>
        </div>
    );

}

export default TopBanner;