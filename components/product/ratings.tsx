'use client';

import { useEffect, useState } from 'react';

export function Ratings({
  handle
}: {
  handle: string;
}) {

  const [productRating, setRating] = useState(0);

  useEffect(() => {

    const fetchRatings = async () => {
      const response = await fetch(`/api/product-rating/${handle}`);
      const { rating } = await response.json();
      setRating(rating);
    };

    fetchRatings();

  }, [handle]);

  return (
    <p title={`User rating: ${productRating} out of 5`}>{"⭐".repeat(productRating)}</p>
  );
}
