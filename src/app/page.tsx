export default function Home() {
  return (
    <div className="bg-[#252B42] w-full flex flex-col justify-center items-center">
      {/*Navbar*/}
      <div className="w-[1322px] h-[91px]">
        <nav className="w-full h-full relative">
          <div id="icons&btn" className="w-[815px] h-[58px] absolute top-4 left-[364px]">
            <div id="btns" className="w-[189px] h-[52px] absolute top-[3px] left-[626px] flex gap-[45px] items-center ">
              <button id="nav-item" className="w-[41px] h-[22px]">
                <a href="" className="text-white text-sm leading-[22px] tracking-[0.2px] text-right">Login</a>
              </button>
              <div id="nav-item" className="w-[214px] h-[52px] ">
                <button className="w-[110px] h-[52px] rounded-[5px] bg-[#23A6F0] py-[15px] px-[25px] font-bold text-sm leading-[22px] tracking-[0.2px] text-white"><span className="w-[60px] inline-block whitespace-nowrap">JOIN US</span></button>
              </div>
            </div>

            <div id="icons" className="w-[275px] h-6 absolute top-[17px] flex gap-[17px]">
              <ul className="flex gap-[17px] text-white">
                <li>
                  <a href="" className="text-sm leading-6 tracking-[0.2px] font-bold text-center">Home</a>
                </li>
                <li>
                  <a href="" className="text-sm leading-6 tracking-[0.2px] font-bold text-center">Product</a>
                </li>
                <li>
                  <a href="" className="text-sm leading-6 tracking-[0.2px] font-bold text-center">Pricing</a>
                </li>
                <li>
                  <a href="" className="text-sm leading-6 tracking-[0.2px] font-bold text-center">Contact</a>
                </li>
              </ul>
            </div>

          </div>
          <div id="navbar-brand" className="w-[187px] h-[58px] absolute top-[17px] left-[136px]">
            <h3 className="text-2xl tracking-[0.1px] font-bold text-white absolute top-[13px]">Brand Name</h3>
          </div>
        </nav>
      </div>

      <div className="w-[1046px] h-[1028px] flex flex-col justify-center items-center py-20 gap-20">
        {/*main conent */}
        <div className="w-[701px] h-[496px]">
          <div className="w-[699px] h-[496px] py-10 flex flex-col gap-10 items-center justify-center">
            <h5 className="text-[#23A6F0] text-[16px] font-bold leading-6 text-center tracking-[0.1px]">
              Welcome
            </h5>
            <h1 className="text-white text-[58px] font-bold text-center leading-[80px] tracking-[0.2px]">
              Selling on the <br /> internet like a pro
            </h1>
            <h4 className="w-[536px] h-[60px] text-white text-center font-normal text-xl tracking-[0.2px] leading-8">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            {/*buttons*/}
            <div className="flex gap-[10px]">
              <button className="w-[193px] h-[52px] bg-[#23A6F0] py-[15px] px-10 rounded-[5px] text-[14px] font-bold text-center leading-[22px] tracking-[0.2px] text-white">
                <span className="inline-block w-[113px] h-[22px] whitespace-nowrap">
                  Get Quote Now
                </span>
              </button>
              <button className="w-[162px] h-[52px] text-[14px] font-bold leading-[22px] tracking-[0.2px] px-10 py-[15px] border rounded-[5px] text-[#23A6F0] text-center border-[#23A6F0]">
                <span className="inline-block w-[82px] h-[22px] whitespace-nowrap ">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
        {/*cards */}
        <div className="w-[1046px] h-[292px] flex gap-[30px]">
          <div className="w-[328px] h-[292px]">
            <div
              id="card"
              className="py-[35px] px-10 bg-white w-full h-full flex flex-col gap-5"
            >
              <div
                id="box"
                className="w-[70px] h-[76px] py-[22px] px-[19px] rounded-[10px] bg-[#FFDCD1]"
              ></div>
              <h5 className="text-base font-bold tracking-[0.1px] text-[#252B42]">
                training Courses
              </h5>
              <div id="line" className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="text-sm font-normal tracking-[0.2px] text-[#737373]">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
          <div className="w-[329px] h-[292px]">
            <div
              id="card"
              className="py-[35px] px-10 bg-white w-[328px] h-[292px] flex flex-col gap-5"
            >
              <div
                id="box"
                className="w-[70px] h-[76px] py-[22px] px-[19px] rounded-[10px] bg-[#B9EAA8]"
              ></div>
              <h5 className="text-base font-bold tracking-[0.1px] text-[#252B42]">
                2,769 online courses
              </h5>
              <div id="line" className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="text-sm font-normal tracking-[0.2px] text-[#737373]">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
          <div className="w-[329px] h-[292px]">
          <div
              id="card"
              className="py-[35px] px-10 bg-[#23A6F0] w-[328px] h-[292px] flex flex-col gap-5"
            >
              <div
                id="box"
                className="w-[70px] h-[76px] py-[22px] px-[19px] rounded-[10px] bg-[#FFFFFF]"
              ></div>
              <h5 className="text-base font-bold tracking-[0.1px] text-[#FFFFFF]">
                training Courses
              </h5>
              <div id="line" className="w-[50px] h-[2px] bg-[#FFFFFF]"></div>
              <p className="text-sm font-normal tracking-[0.2px] text-[#FFFFFF]">
                The gradual accumulation of information about atomic and
                small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
