'use client'
  
import axios from 'axios'
import { useEffect,useState } from 'react'


export default function caseStudy(){


  // useEffect(()=>{
  //   async function fetchinsurance() {

  //     try {
  //       const res = await axios.get("http://192.168.1.3/ramanlaravel/public/api/pages/case-study")
  //       setdata(res.data)
  //       console.log(res.data)
      
        
  //     } catch (error) {
  //       console.log("fetching data is failed",error)
  //     }
  //     finally{
  //       setLoading(false)
  //     }
      
  //   }
  //   fetchinsurance();
  // },[])

  if(loading){
    return(
      <>
      <Header title='Insurence'/>
      <main  className="max-w-[1600px] m-auto text-center py-20">
        <p>loading...</p>
      </main>
      
      </>
    )
  }
   if (!data) {
    return (
      <main className="max-w-[1600px] m-auto text-center py-20">
        <Header title="Insurance" />
        <p>Failed to load data.</p>
      </main>
    );
  }

    return (
    <main className="max-w-[1600px] m-auto">
      <Header title={data.title} />
      
      {/* Inject the HTML content from the API */}
      <section
        className="px-4 py-6 bg-[#F7F4FB] lg:p-[3rem] max-w-[1600px] mx-auto leading-7 tracking-wider"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
  

}