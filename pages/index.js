import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import LargeCard from '../Components/LargeCard';
import MediumCard from '../Components/MediumCard';
import SmallCard from '../Components/SmallCard';

export default function Home({exploreData,cardData}) {
  return (
    <div className="">
      <Head>
        <title> Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
       <Header/>
            {/* Banner */}
      <Banner/>

      <main className=" max-w-7xl mx-auto px-8 sm:px-16 " >
        <section className="pt-6 " >
          <h2 className=" text-4xl font-semibold pb-5" >Explore Nearby</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"  >    
       {/* Pull Data from an api */}
         {exploreData?.map(({img,location,distance})=>(
         <SmallCard image={img} distance={distance} location={location} />
         ))}
         </div>
        </section>
        <section>
        <h2 className=" text-4xl font-semibold py-8 " >Live Anywhere</h2>
          <div className=" flex scrollbar-hide  space-x-3 overflow-scroll " >
          
        {cardData?.map(({img,title})=>(
             <MediumCard key={img} img={img} title={title} />
        ))}
        </div>
        </section>
        <LargeCard img="https://links.papareact.com/4cj"
        title="The Greatest Outdoor"
        description="Wishlist Curated by airbnb"
        buttontext=" Get Inspired"
         />
      </main>
    </div>
  )
}
export async function getStaticProps()
{

  const exploreData =await  fetch("https://links.papareact.com/pyp")
  .then((res)=>res.json()
  );
 const cardData = await fetch("https://links.papareact.com/zp1").then((res)=>res.json())
  return {
    props:{
           exploreData,
           cardData
    }
  }



}