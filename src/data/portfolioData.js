import wedding1_1 from "../assets/weddings/wedding1_1.jpg";
import wedding1_2 from "../assets/weddings/wedding1_2.jpg";
import wedding1_3 from "../assets/weddings/wedding1_3.jpg";
import wedding1_4 from "../assets/weddings/wedding1_4.jpg";

import Singleportrait1_1 from "../assets/portraits/single/single1_1.jpg";
import Singleportrait1_2 from "../assets/portraits/single/single1_2.jpg";
import Singleportrait1_3 from "../assets/portraits/single/single1_3.jpg";

import Familyportrait1 from "../assets/portraits/family/family1_1.jpg";

import product1_1 from "../assets/products/product1_2.jpg";
import product1_2 from "../assets/products/product1_2.jpg";
import product1_3 from "../assets/products/product1_3.jpg";

import corporate1_1 from "../assets/corporateevents/corporate1_1.jpg";
import corporate1_2 from "../assets/corporateevents/corporate1_2.jpg";
import corporate1_3 from "../assets/corporateevents/corporate1_3.jpg";

import editIndoor1_1 from "../assets/photoedits/indoor/indoor1_1.jpg";
import editIndoor1_2 from "../assets/photoedits/indoor/indoor1_2.jpg";
import editIndoor1_3 from "../assets/photoedits/indoor/indoor1_3.jpg";

import editOutdoor1_1 from "../assets/photoedits/outdoor/outdoor1_1.jpg";
import editOutdoor1_2 from "../assets/photoedits/outdoor/outdoor1_2.jpg";
import editOutdoor1_3 from "../assets/photoedits/outdoor/outdoor1_3.jpg";

import children1_1 from "../assets/children/children1_1.jpg";
import children1_2 from "../assets/children/children1_2.jpg";
import children1_3 from "../assets/children/children1_3.jpg";
const portfolioItems = [
    {
        id: 1,
        title: "Grand Nigerian Wedding",
        category: "Weddings",
        images: [wedding1_1, wedding1_2, wedding1_3],
        description:
            "Capturing the vibrant colors and joyous moments of a traditional Nigerian wedding."
    },
    {
        id: 2,
        title: "Single Portrait",
        category: "Portraits",
        images: [Singleportrait1_1, Singleportrait1_2, Singleportrait1_3
        ],
        description:
            "Professional studio session capturing a vibrant personality."
    },
    {
        id: 3,
        title: "Children Portrait",
        category: "Portraits",
        images: [children1_1,children1_2,children1_3],
        description:
            "Professional studio session capturing a Ever lovely Children."
    },
    {
        id: 4,
        title: "E-commerce Product Showcase",
        category: "Product Photography",
        images: [product1_1, product1_2, product1_3],
        description:
            "High-quality images designed to highlight product details for online stores."
    },
    {
        id: 5,
        title: "Corporate Event Coverage",
        category: "Corporate Events",
        images: [corporate1_1, corporate1_2, corporate1_3],
        description:
            "Comprehensive photography for conferences, seminars, and corporate gatherings."
    },
    {
        id: 6,
        title: "Advanced Photo Retouching",
        category: "Photo Editing",
        images: [
            editIndoor1_1,
            editIndoor1_2,
            editIndoor1_3,
            editOutdoor1_1,
            editOutdoor1_2,
            editOutdoor1_3
        ],
        description:
            "Bringing out the best in every image with professional retouching techniques."
    },
    // {
    //     id: 7,
    //     title: "Traditional Engagement",
    //     category: "Weddings",
    //     image: "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Engagement",
    //     description:
    //         "Documenting the beauty and cultural richness of traditional engagement ceremonies."
    // },
    {
        id: 8,
        title: "Family Photoshoot",
        category: "Portraits",
        image: Familyportrait1,
        description:
            "Creating timeless memories with heartfelt family portraits."
    },
    // {
    //     id: 9,
    //     title: "Brand Launch Event",
    //     category: "Corporate Events",
    //     image: "https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Launch",
    //     description:
    //         "Capturing the excitement and energy of brand new product launches."
    // },
    // {
    //     id: 10,
    //     title: "Fashion Editorial Editing",
    //     category: "Photo Editing",
    //     image: "https://via.placeholder.com/600x400/FFFF33/333333?text=Fashion+Edit",
    //     description:
    //         "Elevating fashion photography with expert color grading and retouching."
    // },
    // {
    //     id: 11,
    //     title: "Food Photography",
    //     category: "Product Photography",
    //     image: "https://via.placeholder.com/600x400/33FFFF/333333?text=Food",
    //     description:
    //         "Appetizing images for menus, websites, and culinary publications."
    // }
];

export default portfolioItems;
