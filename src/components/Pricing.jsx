// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Pricing = () => {
  const { pricing } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="pricing">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2
          className="title flex md:justify-start justify-end"
          data-aos="fade-down"
        >
          {pricing.title}
        </h2>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {pricing.pricing_content.map((price, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={price.logo}
                  alt="..."
                  className="w-10 h-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{price.name}</h6>
                {price.prices &&
                  price.prices.map((p, idx) => (
                    <div key={idx}>
                      {p.min && p.label ? (
                        <div>
                          <div className="flex justify-between">
                            {p.min && <span>{p.min}</span>}

                            <span>{p.price}</span>
                          </div>
                          <p>
                            {p.label && (
                              <span className="text-xs pt-1 tracking-tighter">
                                {p.label}
                              </span>
                            )}
                          </p>
                        </div>
                      ) : (
                        <div className="flex justify-between">
                          {p.min && <span>{p.min}</span>}

                          {p.label && (
                            <span className="text-xs pt-1 tracking-tighter">
                              {p.label}
                            </span>
                          )}
                          <span>{p.price}</span>
                        </div>
                      )}
                    </div>
                  ))}
                {/* <div
                  onClick={() => {
                    setSelectSkill(price);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(pricing.icon)}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
