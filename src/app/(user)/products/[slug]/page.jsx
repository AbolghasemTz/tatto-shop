import AddToCart from "./AddToCart";

import ContentInfo from "./ContentInfo";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import { getOneProductsBySlug, getProducts } from "@/services/ProductServices";
export const dynamic = "force-static";
// export const dynamicParams = false;

async function page({ params }) {
  const { slug } = params;
  const { product } = await getOneProductsBySlug(slug);

  return (
    <div className="z-[20] min-h-screen bg-gray-50">
      <ContentInfo product={product} />

      {/* sticky bottom in mobile */}
      <div className="md:hidden fixed flex items-center justify-between left-0 right-0 bottom-0 w-full bg-white shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] px-4 py-2 gap-x-4">
        <AddToCart product={product} />
        <div className="text-slate-800 flex flex-col items-end">
          <span className="font-bold">
            {product.offPrice
              ? toPersianNumberWithComma(product.offPrice)
              : toPersianNumberWithComma(product.price)}
          </span>
          <span className="text-gray-400 text-sm">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default page;

export async function generateStaticParams() {
  const { products } = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
