import Image from "next/image";
import Link from "next/link";

interface CardProps {
  card: {
    id: number;
    title: string;
    price: string;
    image: string;
  };
}

const Card = ({ card }: CardProps) => (
  <div
    className="bg-black text-white rounded-lg shadow-lg m-4 flex-shrink-0 transform transition-transform hover:scale-105 border-2 border-gray-700"
    style={{ width: "300px" }}
  >
    <Image
      src={card.image}
      alt={card.title}
      width={500}
      height={700}
      className="w-full max-h-56 object-cover w-full "
    />
    <div className="p-6">
      <h2 className="font-bold text-2xl mb-2">{card.title}</h2>
      <p className="text-lg font-bold mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6Z"
          />
        </svg>

        {card.price}
      </p>
      <Link
        href={`productlist/productdetails`}
        className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded w-full block text-center"
      >
        View More
      </Link>
    </div>
  </div>
);

export default Card;
