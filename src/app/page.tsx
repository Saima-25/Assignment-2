import Cards from "./components/cards";
import Nav from "./components/nav";
export default function Home() {
  return (
    <div>
      <div
        className=" w-[1440px] h-[1132px] top-[-590px] left-[-720px]
      bg-[#252B42] "
      >
        <Nav />
        <div className=" container w-[1800px] h-[1028px] top-[104px] left-[197px] pt-[80px] pb-[80px] gap-[80px] flex flex-row justify-center">
          <div className=" row w-[701px] h-[496px] flex flex-row justify-evenly">
            <div className="main content w-[699px] h-[496px] pt-[40px] pb-[40px] gap-[40px] ">
              <h5 className="w-[77px] h-[24px] font-montserrat font-[700] text-[16px] leading-[24px] tracking-tight text-[#23A6F0] pl-[250px] ml-[80px]">
                Welcome
              </h5>

              <h1 className="w-[542px] h-[160px] font-montserrat font-[700] text-[58px] leading-[80px] tracking-tight text-center text-[#FFFFFF] ml-[80px]">
                Selling on the internet like a pro
              </h1>
              <h4 className="w-[536px] h-[60px] mt-10 font-montserrat font-[400] text-[20px] leading-[30px] tracking-tight ml-[80px] text-center text-[#FFFFFF]">
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </h4>
              <div className="cta w-[365px] h-[52px] gap-[10px] flex justify-evenly pl-[90px] mt-10 ml-[80px]">
                <div className="button rounded-[5px] mud w-[193px] h-[52px]  pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] bg-[#23A6F0]">
                  <button className="w-[113px] h-[22px]  font-montserrat font-[700] text-[14px] leading-[22px] tracking-tight text-center text-[#FFFFFF]">
                    Get Quote Now
                  </button>
                </div>

                <div className="Button Mud w-[162px] h-[52px] rounded-[5px] border-1 border-solid text-[#23A6F0] ring-1 ring-inset p-[15px] gap-[10px] flex justify-center">
                  <button className="w-[200px] h-[22px] font-montserrat font-[700] text-[14px] leading-[22px] tracking-tight text-center text-[#23A6F0]">
                    Learn More
                  </button>
                </div>
              </div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
