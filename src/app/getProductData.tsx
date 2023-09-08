import { client } from "./lib/sanityClient"

export default async function getProductData() {
  const res = await client.fetch(`*[_type== 'product']{
      title,
      description,
      price,
      image
    }`);
  return res
}

