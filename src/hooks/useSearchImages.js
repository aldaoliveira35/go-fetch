import { useState, useEffect } from "react";

import { searchImages } from "../api-clients/dog-api-client";

export function useSearchImages(isEnabled = true, breedId) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchImages() {
      try {
        setLoading(true);

        const response = await searchImages(abortController.signal, breedId);

        if (response) {
          const formattedResponse = response.map((image) => {
            const breed = image.breeds.map((breed) => breed.name).join(" / ");

            return {
              id: image.id,
              image: image.url,
              breed: breed || "Unknown Breed",
            };
          });
          setLoading(false);
          setImages(formattedResponse);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (isEnabled) {
      fetchImages();
    }

    return () => {
      abortController.abort();
    };
  }, [isEnabled, breedId]);

  return { images, loading };
}
