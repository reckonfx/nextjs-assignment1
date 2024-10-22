import Link from "next/link";
import Image from "next/image";
export default function Nav(){
    return(
        <nav className="flex items-center justify-between bg-black ">
        {/* left div */}
        <div className="m-5 ">
            
            <h1 className="text-white text-3xl">Party<span className="text-green-300 ml-3 font-serif">Sharty</span></h1>
            <h2 className="text-pink-300">You <span className="text-green-300">Celebrate</span> <span className="text-lg text-yellow-300">|</span> <span className="text-red-400">We</span> Decorate</h2>
        </div>
        {/* right div */}
        <div>
            <ul className="flex gap-6 p-4 text-white font-bold mr-5 text-l ">
                <li className="hover:bg-green-500 rounded-md"><Link href={"/"}>Home</Link></li>
                <li className="hover:bg-yellow-500 rounded-md"><Link href={"/Services"}>Services</Link></li>
                <li className="hover:bg-red-500 rounded-md"><Link href={"/Gallery"}>Gallery</Link></li>
                <li className="hover:bg-blue-500 rounded-md"><Link href={"/Packages"}>Packages</Link></li>
                <li className="hover:bg-orange-600 rounded-md "><Link href={"/ContactUs"}>Contact Us</Link></li>
            </ul>
        </div>
        {/* conact div */}
        <div className="flex items-center gap-3 mr-5">
            <div><Image src={"/phone.jpeg"} alt="Phone Logo" width={50} height={50} className="rounded-3xl"></Image></div>
            <p className="text-red-100 font-bold text-xl">+00923002166934</p>
        </div>
        
        </nav>
    )
}