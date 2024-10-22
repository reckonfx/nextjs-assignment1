import Image from "next/image"
import Link from "next/link"
export default function Footer(){
    return(
        <footer className="flex items-center justify-between p-1 px-4 bg-black text-white">
            {/* logo div */}
            <div>
                <ul className="flex gap-3 ">
                    <li><Link href="https://www.facebook.com" target="_blank"><Image src={"/facebook-icon-free-png.webp"} alt={"facebook-image"} width={50} height={50}></Image></Link></li>
                    <li><Link href="https://www.youtube.com" target="_blank"><Image src={"/youtube.png"} alt={"Youtube-image"} width={50} height={50}></Image></Link></li>
                    <li><Link href="http://www.tiktok.com" target="_blank"><Image src={"/tiktok-icon.webp"} alt={"tiktok-image"} width={50} height={50}></Image></Link></li>
                    <li><Link href="https://instagram.com" target="_blank"><Image src={"/insta-logo.png"} alt={"Insta-image"} width={50} height={50}></Image></Link></li>
                </ul>

            </div>
            {/* Address Div */}
            <address className="text-center">
                <h1 >Address</h1>
                Shop No 13,14 Kiran Palace, <br />
                Sector 15/a-1, Bufferzone <br />
                North Nazimabad , Karachi, Pakistan.
            </address>
            {/* Phone div */}
            <div>
            <h1>Phone Number</h1>
            <p>00923002166934</p>
            </div>
            {/* Email Div */}
            <div>
                <h1>Email Address</h1>
                <p>Reckonfx@gmail.com</p>
            </div>
        </footer>
    )
}