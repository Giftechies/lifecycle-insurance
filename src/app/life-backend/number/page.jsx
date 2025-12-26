import NumberForm from "./component/numberform";
import { getNumber } from "../../../actions/number.action";
import { DatabaseBackupIcon } from "lucide-react";


export default async function NumberPage() {
  const {data} = await getNumber();

  return (
  <NumberForm initialData={data} />
  );
}