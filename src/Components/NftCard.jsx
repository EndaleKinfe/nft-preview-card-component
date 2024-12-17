import eth from '/images/icon-ethereum.svg'
import icontime from "/images/icon-clock.svg"
import avator from "/images/image-avatar.png"
const NftCard = ({imgurl,}) => {
    return ( 
        <>
            <div className="mt-24
            xl:mt-24  2xl:mt-52  w-80  mx-auto bg-dark-blue-2 rounded-lg text-soft-blue flex flex-col justify-center shadow-xl shadow-slate-900 ">
                <div className="relative w-[17.5rem] h-60 rounded-lg bg-dark-blue-3 mx-auto my-5 overflow-hidden hover:before:absolute hover:after:absolute 
                hover:after:top-28 hover:after:left-28
                hover:after:z-40 
                hover:after:content-img hover:before:bg-cyan-pro hover:before:w-[17.5rem]
                hover:before:h-60 hover:before:top-0 hover:before:left-0 hover:before:opacity-50">
                    <img src={imgurl} className='object-center' alt="image of " />
                </div>
                <div className='text-left mx-auto w-64 font-nft'>
                    <h3 className="text-white mb-3 text-xl hover:text-cyan-pro">Equilbrium #3429</h3>
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                    <div className='flex justify-between my-3'>
                        <p className='text-cyan-pro flex items-center'><img src={eth} alt="" className='inline mr-2' /> <span>0.041ETH</span> </p>
                        <p className='flex items-center'><img src={icontime} alt="" className='inline mr-2' /><span>3 days left</span></p>
                    </div>
                    <div className='border-b-2  border-solid border-dark-blue-3'></div>
                    <div className='mt-3 mb-5 flex items-center '>
                        <img src={avator} className='border-solid border-white border-2 rounded-full w-10 mr-4' alt="" />
                        <p>Creation of <span className=' text-white hover:text-cyan-pro '>Jules Wyvern</span></p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default NftCard;