import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { formatMoney } from "../utilities/global";
import AnimatedBlock from "../components/AnimatedBlock";

const FeaturedProduct = ({
  product,
  setCartVisible,
  cartState,
  setCartError,
  setCurrentProduct,
}) => {
  const { addToCart } = cartState || {};
  let dosageOption = product.options[0];
  let sizeOption = product.options[1];

  const [currentOption, setCurrentOption] = useState({
    dosage: dosageOption.values[1].name,
    packSize: sizeOption.values[0].name,
  });

  let currVariant = product.variants.find(
    (variant) =>
      variant.dosage == currentOption.dosage &&
      variant.packSize == currentOption.packSize
  );
  let sizeVariants = product.variants.filter(
    (variant) => variant.dosage == currentOption.dosage
  );

  const updateOption = (key, value) => {
    setCurrentOption({
      ...currentOption,
      [key]: value,
    });
  };

  const addProductToCart = () => {
    let status = addToCart({
      image: product.thumbnail,
      title: product.title,
      //   variantTitle: `${currVariant.dosage}mg / ${currVariant.packSizeValue} St.`,
      dosage: currVariant.dosage,
      packSize: currVariant.packSizeValue,
      price: currVariant.price,
    });
    if (status == false) {
      setCartError(true);
    } else {
      setCartVisible(true);
    }
  };

  let shortSellPoints = product.sellingPoints.slice(0, 2);

  return (
    <AnimatedBlock className="bg-white rounded-2xl px-8 py-5 shadow-md">
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="text-titleColor flex-1">
          <div className="flex gap-2 md:flex-col items-end md:items-start flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold">{product.title}</h2>
            <div className="text-gray500 text-sm font-normal leading-7">
              {product.subtitle}
            </div>
            <Button
              type={"link"}
              className="md:hidden underline text-sm ml-auto leading-7"
              onClick={() => setCurrentProduct(product)}
            >
              Mehr erfahren
            </Button>
          </div>
          <div className="flex mt-7 mb-5 md:mb-0">
            {shortSellPoints.map((point) => (
              <div
                className="flex-1 text-sm"
                key={`short-sell-point-${point.value}`}
              >
                <div className="font-bold ">{point.value}</div>
                <div className="font-normal">{point.title}</div>
              </div>
            ))}
          </div>

          <Button
            type={"link"}
            className="hidden md:block mt-5 underline text-sm"
            onClick={() => setCurrentProduct(product)}
          >
            Mehr erfahren
          </Button>

          <Image
            src={product.images[0]}
            alt={product.title}
            width={450}
            height={450}
          />
        </div>
        <div className="flex-1">
          <div
            className="border-t border-gray500 pt-3 pb-8 text-titleColor flex flex-col gap-4"
            data-size
          >
            <div className="font-semibold text-xs uppercase">
              Dosierung wählen
            </div>
            <div className="flex gap-2">
              {dosageOption.values.map((value, i) => {
                let active = currentOption.dosage == value.name;
                return (
                  <div
                    key={`dosage-${i}`}
                    className={`rounded-full py-1 px-5 border text-gray500 font-normal text-sm ${
                      active
                        ? "bg-accent100 border-2 border-accent400 featured-product__select-option--active"
                        : "border-gray300"
                    }`}
                    onClick={() => updateOption("dosage", value.name)}
                  >
                    {active}
                    <input
                      type="radio"
                      name="dosage"
                      id={`dosage-${i}`}
                      value={value.name}
                      defaultChecked={active}
                      className="hidden"
                    />
                    <label
                      htmlFor={`dosage-${i}`}
                      className={active ? "font-bold text-accent700" : ""}
                    >
                      {value.name}
                      {dosageOption.suffix}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="text-gray500 font-normal">
              {product.options[0].values.map((value, i) => {
                return (
                  <p
                    key={`product-option-${i}`}
                    className={`text-gray500 text-sm ${
                      currentOption.dosage == value.name ? "block" : "hidden"
                    }`}
                  >
                    {value.description}
                  </p>
                );
              })}
            </div>
          </div>
          <div
            className="border-t border-gray500 pt-3 pb-8 text-titleColor flex flex-col gap-4"
            data-size
          >
            <div className="font-semibold text-xs uppercase">
              Packungsgröße wählen
            </div>
            <div className="flex justify-between gap-2 text-titleColor">
              {sizeVariants.map((variant, i) => {
                let pricePerUnit = Math.round(
                  variant.price / variant.packSizeValue
                );
                let active = variant.packSize == (currVariant || {}).packSize;
                return (
                  <div
                    key={`variant-${i}`}
                    className={`border-1 overflow-hidden rounded-2xl flex-1 font-normal text-sm ${
                      active ? "text-accent700 border-2 border-accent400" : ""
                    }`}
                    onClick={() => updateOption("packSize", variant.packSize)}
                  >
                    <input
                      type="radio"
                      name={`size-${i}`}
                      id={`size-${i}`}
                      defaultChecked
                      className="hidden"
                    />
                    <label htmlFor={`size-${i}`}>
                      <div
                        className={`py-1 px-2  ${
                          active ? "bg-accent200 font-bold" : "bg-gray100"
                        }`}
                      >
                        {variant.packSize}
                      </div>
                      <div
                        className={`py-2 px-3 flex flex-col gap-4 font-semibold ${
                          active ? "bg-accent100" : "bg-white"
                        }`}
                      >
                        <div className="">{variant.packSizeValue} St.</div>
                        <div className="">
                          <div>{formatMoney(variant.price)}</div>
                          <div className="font-normal text-xs">
                            {formatMoney(pricePerUnit)} / 1 St.
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="text-gray500 font-normal">
              {product.options[1].values.map((value, i) => {
                return (
                  <p
                    key={`product-option-${i}`}
                    className={`text-gray500 text-sm ${
                      currentOption.packSize == value.name ? "block" : "hidden"
                    }`}
                  >
                    {value.description}
                  </p>
                );
              })}
            </div>
          </div>
          <div
            className="w-full md:w-auto inline-flex items-center justify-center rounded-xl px-10 py-4 text-base bg-navy cursor-pointer"
            onClick={addProductToCart}
          >
            Bestellen
          </div>
        </div>
      </div>
    </AnimatedBlock>
  );
};

export default FeaturedProduct;
