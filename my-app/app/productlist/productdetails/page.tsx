import Image from "next/image";

const productData = {
  id: 1,
  product: "T-Shirt",
  description:
    "Crew neck, either short sleeve or long sleeve, regular fit, Hemline sits at hip, Pullover, Ribbed collar, Straight hemline, Machine washable, Imported, 100% cotton, polyester blend, organic, etc.",
  price: "$20.04",
  image: "/tshirt.png",
  material: "100% cotton, polyester blend, organic",
  brand: "Tommy Hilfiger",
  features: [
    "A minimalist design with a small embroidered logo on the chest for a touch of sophistication.",
    "Perfect for casual outings, layering, or lounging at home",
    "Embrace simplicity and comfort with a t-shirt that’s as stylish as it is practical.",
  ],
  availability: "In Stock",
  CareInstructions: [
    "Easy to care for.",
    "Simply machine wash cold and Tumble dry low..",
  ],
};

const ProductDetail = () => {
  return (
    <div className="product-detail bg-black text-white shadow-lg rounded-lg ">
      <div className="flex flex-col">
        <div className="flex">
          <div className="relative w-1/2  mb-6 border-solid border-r-2 border-zinc-500 p-5 m-5">
            <Image
              src={productData.image}
              alt={productData.product}
              layout="fill"
              objectFit="contain"
              className="rounded-lg w-full h-full"
            />
          </div>
          <div className="px-4 my-2">
            <h2 className="text-3xl font-bold mb-4">{productData.product}</h2>
            <p className="text-lg mb-4">{productData.description}</p>
            <p className="text-2xl font-bold mb-4">{productData.price}</p>
            <p className="text-md mb-4">
              <strong>Category:</strong> {productData.material}
            </p>
            <p className="text-md mb-4">
              <strong>Brand:</strong> {productData.brand}
            </p>
            <p className="text-md mb-4">
              <strong>Availability:</strong> {productData.availability}
            </p>
            <div className="mb-6">
              <strong>Features:</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                {productData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <strong>Care Instruction</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                {productData.CareInstructions.map((CareInstructions, index) => (
                  <li key={index}>{CareInstructions}</li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
