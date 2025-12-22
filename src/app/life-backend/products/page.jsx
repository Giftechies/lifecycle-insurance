import DashboardHeader from "@/lib/DashboardHeader";
import { getProductData } from "@/actions/product.actions";
import ProductForm from "./components/ProductForm";

export default async function ProductsPage() {
  // const { data } = await getProductData();

  return (
    <>
      {/* <DashboardHeader text="Products Section" url="/life-backend" />
      <ProductForm initialData={data} /> */}
    </>
  );
}
