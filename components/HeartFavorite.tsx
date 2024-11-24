"use client"

import { useUser } from "@clerk/nextjs";
import * as lucideReact from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface HeartFavoriteProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartFavorite = ({ product, updateSignedInUser }: HeartFavoriteProps) => {
  const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
        setLoading(true);
        const res = await fetch("/api/users");

        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        if (data && Array.isArray(data.wishlist)) {
            setIsLiked(data.wishlist.includes(product._id));
        } else {
            console.error("Wishlist data is missing or not an array");
            setIsLiked(false);
        }
    } catch (err) {
        console.log("[users_GET]", err);
        setIsLiked(false);
    } finally {
        setLoading(false);
    }
};


  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updatedUser = await res.json();
        setIsLiked(updatedUser.wishlist.includes(product._id));
        updateSignedInUser && updateSignedInUser(updatedUser);
      }
    } catch (err) {
      console.log("[wishlist_POST]", err);
    }
  };

  return (
    <button onClick={handleLike}>
      <lucideReact.Heart fill={`${isLiked ? "red" : "white"}`} />
    </button>
  );
};

export default HeartFavorite;
