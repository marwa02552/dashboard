import img1 from '../images/pro1.jpeg';
import img2 from '../images/prod2.avif';
import img3 from '../images/prod3.avif';
import img4 from '../images/prod4.webp';
import img5 from '../images/prod6.avif';

const productData = [
    {
        img: img1,
        id: "00123AB",
        product: "Product A",
        price: "1500",
        quantity: "30",
        sales: 280 // High sales (Green)
    },
    {
        img: img2,
        id: "00456CD",
        product: "Product B",
        price: "3200",
        quantity: "20",
        sales: 90 // High sales (Green)
    },
    {
        img: img3,
        id: "00789EF",
        product: "Product C",
        price: "4500",
        quantity: "10",
        sales: 25 // Medium sales (Yellow)
    },
    {
        img: img4,
        id: "00234GH",
        product: "Product D",
        price: "2000",
        quantity: "60",
        sales: 20 // Medium sales (Yellow)
    },
    {
        img: img5,
        id: "00567IJ",
        product: "Product E",
        price: "1800",
        quantity: "25",
        sales: 20 // Low sales (Red)
    },
    {
        img: img5,
        id: "00890KL",
        product: "Product F",
        price: "1800",
        quantity: "25",
        sales: 10 // Low sales (Red)
    }
];

const TestData = { productData };
export default TestData;
