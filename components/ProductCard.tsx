"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 bg-[#FFFFFF] shadow-lg shadow-gray-900/50 p-4 rounded-lg">
      <Link
        href={`/products/${product._id}`}
        className="w-[200px] flex flex-col gap-2"
      >
        <Image
          src={product.media[0]}
          alt="product"
          width={250}
          height={250}
          className="h-[200px] rounded-lg object-cover"
        />
        <div>
          <p className="text-base-bold">{product.title}</p>
          <p className="text-small-medium text-grey-2">{product.category}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-body-bold">₹{product.price}</p>
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
