import Card from "../../components/Card"; // Assuming Card component is in the same directory
import { productList } from "../../data/productList"; // Assuming productList is in the same directory

function Page() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {productList.map((product) => (
          <Card key={product.id} card={product} />
        ))}
      </div>
    </>
  );
}

export default Page;
