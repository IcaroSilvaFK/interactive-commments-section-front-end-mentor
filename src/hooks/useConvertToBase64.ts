import { useRef, useState } from 'react';

export function useConvertToBase64() {
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function converToBase64() {
    if (!inputRef.current || !inputRef.current?.files) return;
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageBase64(fileReader.result as string);
    };

    fileReader.readAsDataURL(inputRef.current.files[0]);
    inputRef.current = null;
  }

  return {
    imageBase64,
    inputRef,
    converToBase64,
  };
}
