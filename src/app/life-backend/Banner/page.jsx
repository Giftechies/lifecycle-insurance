import BannerForm from "./component/BannerForm";
import {getHomeBanner} from "../../../actions/homeBanner.action";


export default async function HeroPage() {
    const {data} = await getHomeBanner();

    return(
        <BannerForm initialData={data} />
    )
}