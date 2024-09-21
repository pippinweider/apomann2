import FeaturedProduct from "../components/FeaturedProduct";
import FeaturedProducts from "../components/FeaturedProducts";
import { products } from "../utilities/consts";
import { isMobile } from "../utilities/global";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { Accordion, AccordionItem } from "./Accordion";
import { CloseIcon } from "./CustomIcons";

export const Products = ({
  windowAvailable,
  setCartError,
  setCartVisible,
  cartState,
}) => {
  const [currentProduct, setCurrentProduct] = useState(false);

  return (
    <div
      id="produkte"
      className="bg-navy flex flex-col md:h-screen md:items-center justify-center text-white font-semibold py-10 px-5 md:p-0 scroll-mt-14 md:scroll-m-0"
    >
      <h5 className="text-xs">ENTDEKEN</h5>
      <h3 className="text-2xl md:text-3xl font-semibold mb-8">
        Medikamente gegen erektile Dysfunktion
      </h3>
      {windowAvailable && (
        <>
          {isMobile() ? (
            <div className="flex flex-col gap-12">
              {products.map((product, i) => (
                <FeaturedProduct
                  key={`featured-product--${i}`}
                  cartError={setCartError}
                  setCartVisible={setCartVisible}
                  product={product}
                  cartState={cartState}
                  setCurrentProduct={setCurrentProduct}
                />
              ))}
            </div>
          ) : (
            <FeaturedProducts
              setCartVisible={setCartVisible}
              setCartError={setCartError}
              products={products}
              cartState={cartState}
              setCurrentProduct={setCurrentProduct}
            />
          )}
          <Modal
            isOpen={currentProduct}
            onClose={() => setCurrentProduct(false)}
            customProps={{
              initial: { translateX: "100%" },
              animate: { translateX: 0 },
              exit: { translateX: "100%" },
            }}
            customClass="w-full md:w-1/3"
          >
            <div className="overflow-y-scroll p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-titleColor text-3xl">
                    {currentProduct.title}
                  </h2>
                  <span className="text-gray500 text-sm font-normal">
                    {currentProduct.subtitle}
                  </span>
                </div>
                <Button type="text" onClick={() => setCurrentProduct(false)}>
                  <CloseIcon />
                </Button>
              </div>
              <p className="font-normal mt-7 text-titleColor text-sm">
                {currentProduct.description}
              </p>
              <div className="grid-cols-2 grid text-titleColor my-14">
                {((currentProduct || {}).sellingPoints || []).map((point) => (
                  <div className="flex flex-col mb-5">
                    <span className="font-bold text-2xl">{point.value}</span>
                    <span className="text-sm font-normal">{point.title}</span>
                  </div>
                ))}
              </div>
              <div className="text-titleColor">
                <h3 className="font-semibold text-md mb-5">VIAGRA FAQs</h3>
                <Accordion>
                  {((currentProduct || {}).faqs || []).map((faq, i) => (
                    <AccordionItem
                      key={`product-${currentProduct.tag}-${i}`}
                      title={faq.question}
                    >
                      {faq.answer}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};
