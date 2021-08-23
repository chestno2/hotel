import { format } from 'date-fns/esm';
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Search() {
   const router = useRouter();
   
    // data is passed through query

   const {location,startDate,endDate,  noofGuest} = router.query
   const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
//    because it is coming in string
   const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
   const range =`${formattedStartDate}-${formattedEndDate}` 
   return (
        <div>
            <Header  />
            <main className=" flex  " >
                <section className=" flex-grow pt-14 px-4 " >
                    <p>300+ stays -{range}-  {noofGuest}   guests</p>
                    <h1 className=" text-3xl font-semibold mt-2 mb-6 " >Stay in {location} </h1>
                
                <div className=" hidden lg:inline-flex mb-5 space-x-5 text-gray-800 whitespace-nowrap " >
                         <p className="button " >Cancellation Flexibility</p>
                         <p className="button " > Type of Place</p>
                         <p className="button " >Price</p>
                         <p className="button " >Room And Beds</p>
                         <p className="button " >More filters</p>
                </div>

                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search
