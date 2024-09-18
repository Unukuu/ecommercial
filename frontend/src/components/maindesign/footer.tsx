import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#111111]">
      <div className="flex container m-auto justify-between items-center py-11 border-b-2">
        <div className="w-[41px] h-[35px]">
          <img src="/image/Vector.png" alt="" className="w-[41px] h-[35px]" />
        </div>
        <div className="flex justify-center items-center gap-9">
          <div className="flex items-center justify-center gap-5">
            <div className="w-12 h-12 rounded-full border text-white text-2xl flex justify-center items-center">
              <CiPhone />
            </div>
            <p className="text-white">(976) 7007-1234</p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="w-12 h-12 rounded-full border text-white text-2xl flex justify-center items-center">
              <MdOutlineMail />
            </div>
            <p className="text-white">contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center container m-auto py-11">
        <p className="text-white">© 2024 Ecommerce MN</p>
        <div className="text-white flex items-center gap-4 text-2xl">
          <FaFacebook />
          <BiLogoInstagramAlt />
          <FaXTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};
export default Footer;
