import React from 'react';
import service from '../assets/service.PNG'

const Services = () => {
    return (
        <div className='bg-accent'>
            <p className='py-24 font-semibold text-black lg:text-4xl sm:text-xl md:text-2xl mx-10'>Light defines spatial experience, as it falls and reflects. As design consultants, Kaash - light engineers aims to elevate this experience with sustainable and human-centric light planning.</p>
            <div className='py-16'>
            <p className='mx-10 text-black font-semibold lg:text-4xl sm:text-2xl md:text-2xl'>Services customized to your need</p>
            <p className='mx-10 text-black'>Light + Sustainability + Technology</p>
            </div>
            <div className='mx-10 text-center text-black bg-white rounded-lg'>
                <p className='font-medium py-5'>
                Designing with <span className='text-primary'>light</span> for people, their space and its architecture
                </p>
                <h1 className='lg:text-5xl md:text-2xl sm:text-xl'>
                HUMAN-CENTRIC LIGHTING
                </h1>
                <div className='grid justify-items-center pb-10'>
                <img  src={service}/>
                </div>
            </div>

    <section className="max-w-full px-48 py-20 ">
      <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
        <div className='flex-1'>
          <h1 className="text-4xl font-semibold text-black">SUSTAINABILITY</h1>
          <p className="py-16 font-semibold text-black">Reducing <span className='text-primary'>LIGHT CARBON</span> of cities and <br/> buildings with our sustainable solutions <br/> to create a healthier planet and its ecosystem</p>
        </div>
        <div className="flex-1">
        <h1 className="text-4xl font-semibold text-black">TECHNOLOGY</h1>
        <p className="py-16 font-semibold text-black">Maximising potential of <span className='text-primary'>LIGHT <br/> TECHNOLOGY</span> with inclusive <br/> designs to build future proof <br/> smart infrastructure.</p>
        </div>
      </div>
    </section>




    <section className="max-w-full px-26 py-20 bg-neutral text-white">
      <div className='py-20 px-10'>
        <h1 className='lg:text-5xl sm:text-2xl font-semibold'>Project processes to create an ideal space</h1>
        <p className='font-semibold pt-2'>Design + Planning + Execution</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10 gap-5">
        <div className='flex-1 bg-secondary rounded-lg text-center py-20'>
          <h1 className="text-4xl font-semibold text-white">DESIGN CYCLE</h1>
          <p className='py-10'>Starting from a clean slate to an immersive experience of light and everything in between.</p>
          <p>Vision <span className='text-primary'>|</span> Function <span className='text-primary'>|</span> Concept</p>
          <div className='grid justify-items-center py-5'>
          <img className='w-96' src='https://www.kaash.eu/gallery_gen/04f8c04fbcdee73fff8001ca4408f636.png'/>
          </div>
          <p className='hover:font-bold'>Know your solution</p>
        </div>
        <div className="flex-1 bg-secondary rounded-lg text-center py-20">
        <h1 className="text-4xl font-semibold text-white">LIGHT SCIENCE</h1>
        <p className='py-10'>Starting from a clean slate to an immersive experience of light and everything in between.</p>
        <p>Scenes <span className='text-primary'>|</span>  Calculations <span className='text-primary'>|</span> Engineering</p>
        <div className='grid justify-items-center py-5'>
        <img className='w-96' src='https://www.kaash.eu/gallery_gen/72fdf679615ec0c3d6076ad39fdefaac.png'/>
        </div>
        <p className='hover:font-bold'>Know about critical parameters</p>
        </div>
      </div>
    </section>



        </div>
    );
};

export default Services;