import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Search() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <Header />
            <main className=" flex  " >
                <section className=" flex-grow pt-14 px-4 " >
                    <p>300+ stays for 5 numbers of guests</p>
                    <h1 className=" text-3xl font-semibold mt-2 mb-6 " >Stay in Mars</h1>
                
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
