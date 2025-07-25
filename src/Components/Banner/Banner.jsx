import { Link } from "react-router";


const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center md:gap-40 items-center bg-[#1e293b] md:h-[450px]'>
            <div>
                <img className="w-full" src="/Screenshot_2025-07-18_205709-removebg-preview.png" alt="" />
            </div>
            <div className=" md:space-y-14 p-3">
                <div className="md:space-y-6 mb-5">
                    <h1 className="text-[28px] md:text-5xl font-extrabold uppercase">Everything you neeed</h1>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase">All in one Place !!</h2>
                </div>

                <Link to='/products'><button className="btn bg-orange-600 ">Explore now</button></Link>
                
            </div>
            
        </div>
    );
};

export default Banner;