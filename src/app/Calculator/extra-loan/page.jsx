
import Banner from "../../Components/Banner/Banner"
export default function Loan(){
    return(
        <>
        <Banner title='Loan CalCulator'/>
  <div className=" max-w-[min(1000px,90%)] h-[700px] max-h-[min(700px,90%)] p-4 mx-auto ">
  <iframe
    src="https://lifecycle.gettrail.com/Calculator/Term/ea3bdf6b-580e-4621-ba3c-293f25de2e19"
    className="w-full h-full border-none"
    allowFullScreen
  ></iframe>
</div>        
        </>

    )
}