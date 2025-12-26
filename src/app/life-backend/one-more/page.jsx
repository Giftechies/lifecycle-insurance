import OneMoreForm from "./component/OneMoreForm";
import { getOneMore } from "../../../actions/oneMore.action";

export default async function OneMorePage() {
  const { data } = await getOneMore();
    
  return (
  <OneMoreForm initialData={data} />
  );
}