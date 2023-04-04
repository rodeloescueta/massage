// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="bg-green-500 absolute h-full md:w-4/12 w-6/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute lg:top-[40%] top-[15%] lg:right-[-10%] right-[-30%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-6 px-6 pt-5" data-aos="fade-down">
          <div className="md:h-[20rem] h-[12rem] pr-10 flex justify-end md:justify-center">
            <img
              src={hero.image}
              data-aos="slide-up"
              alt="..."
              className="h-full"
            />
          </div>
          <h2 className="">{hero.title}</h2>
          <p className="text-right pt-4 text-slate-600">{hero.text}</p>
          <p className="text-right text-slate-600">{hero.cerial}</p>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center gap-5
            ${i === 1 ? " w-80" : " w-140"}  `}
              >
                <p className="md:text-3xl text-xs">{content.count}</p>
                <p>
                  {content.text} {i}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        {/* <div className="md:h-[47rem] h-15">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
