// StaticData/HowItWorks.js
import { BsQrCodeScan } from "react-icons/bs";
import { MdTableBar } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import { FaRectangleList } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export const HowItWorks = [
    {
        id: 1,
        title: "Scan QR Code",
        icon: BsQrCodeScan,
        description:
            "Scan the QR code placed on your restaurant table using your phone's camera. No app installation is required."
    },
    {
        id: 2,
        title: "Table Detected Automatically",
        icon: MdTableBar,
        description:
            "After scanning, your table number is automatically detected from the QR code and saved, making checkout faster and error-free."
    },
    {
        id: 3,
        title: "Browse the Menu",
        icon: MdMenuBook,
        description:
            "Explore categories, search your favorite dishes, view meal details, and add items to your cart."
    },
    {
        id: 4,
        title: "Review & Checkout",
        icon: IoMdCart,
        description:
            "Review your selected dishes, choose Dine In or Take Away, and confirm your order. Your table number is already filled in automatically."
    },
    {
        id: 5,
        title: "Place Your Order",
        icon: BiSolidDish,
        description:
            "Submit your order with a single click. Your order is instantly sent to the restaurant kitchen for preparation."
    },
    {
        id: 6,
        title: "Track Your Order",
        icon: FaRectangleList,
        description:
            "Track your order status from Order Placed to Ready to Serve, so you always know what's happening."
    }
];

export const DirectVisitSteps = [
    {
        id: 1,
        icon: CiGlobe,
        title: "Open Website",
        description:
            "If you visit the website directly without scanning a QR code, you can still place an order."
    },
    {
        id: 2,
        title: "Browse the Menu",
        icon: MdMenuBook,
        description:
            "Explore categories, search your favorite dishes, view meal details, and add items to your cart."
    },
    {
        id: 3,
        title: "Review & Checkout",
        icon: IoMdCart,
        description:
            "Review your selected dishes, choose Dine In or Take Away, and confirm your order."
    },
    {
        id: 4,
        title: "Enter Table Number",
        icon: MdTableBar,
        description:
            "Simply enter your table number manually before place an order."
    },
    {
        id: 5,
        title: "Place Your Order",
        icon: BiSolidDish,
        description:
            "Submit your order with a single click. Your order is instantly sent to the restaurant kitchen for preparation."
    },
    {
        id: 6,
        title: "Track Your Order",
        icon: FaRectangleList,
        description:
            "Track your order status from Order Placed to Ready to Serve, so you always know what's happening."
    }
];

export const ChangeTableSteps = [
    {
        id: 1,
        title: "Need a Different Table?",
        description:
            "Moved to another table before ordering? No worries."
    },
    {
        id: 2,
        title: "Update Table Number",
        description:
            "Open the checkout page, tap 'Change Table', enter the new table number, and save it."
    },
    {
        id: 3,
        title: "Continue Ordering",
        description:
            "Your new table number is updated instantly, and all future orders will be linked to your new table."
    }
];

export const Features = [
    {
        title: "No App Required",
        description: "Works directly in your mobile browser."
    },
    {
        title: "QR-Based Ordering",
        description: "Scan and start ordering instantly."
    },
    {
        title: "Automatic Table Detection",
        description: "Table number is detected automatically from the QR code."
    },
    {
        title: "Manual Table Entry",
        description: "Customers can still order by entering their table number manually."
    },
    {
        title: "Change Table Anytime",
        description: "Update your table number during checkout if you change seats."
    },
    {
        title: "Order Tracking",
        description: "Monitor your order status until it is served."
    }
];