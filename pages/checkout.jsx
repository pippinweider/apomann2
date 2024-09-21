"use client";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Image from "next/image";
import { StickyNav } from "../components/StickyNav";
import useCartState from "../utilities/cart";
import Link from "next/link";
import { useFormik } from "formik";
import cn from "classnames";
import { CartItem } from "../components/CartItem";

export default function CheckoutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const cartState = useCartState();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      cardholder: "",
      card: "",
      expyre: "",
      code: "",
      name: cartState?.cart?.customer?.nachname || "",
      surname: cartState?.cart?.customer?.vorname || "",
      postal: cartState?.cart?.customer.plz || "",
      city: cartState?.cart?.customer.stadt || "",
      street: cartState?.cart?.customer.adresse || "",
      streetTwo: cartState?.cart?.customer.adresszusatz || "",
    },
  });

  const { errors, touched, values, handleChange } = formik;

  useEffect(() => {
    // Set a timer for 3 seconds
    const timer = setTimeout(() => {
      // setMessage('3 seconds have passed!');
      document.body.classList.add("no-scroll");
      setIsOpen(true);
    }, 3000);

    // Cleanup function to clear the timer if the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <StickyNav setCartVisible={null} cartState={cartState} />
      <div className="min-h-screen bg-white flex flex-col md:flex-row">
        <div
          className={cn("bg-gray-50 py-10 px-5 md:order-1 md:flex-1", {
            "text-titleColor flex flex-col items-start h-1/2-screen md:min-h-screen mb-5 md:mb-0 ":
              cartState?.cart?.items?.length === 0,
          })}
        >
          {!!cartState?.cart?.items?.length &&
            cartState?.cart?.items?.map((item) => (
              <CartItem
                key={`cart-item-${item.id}`}
                product={item}
                removeFromCart={null}
              />
            ))}
        </div>
        <form
          initialValues={{
            cardholder: "",
            card: "",
            expyre: "",
            code: "",
            name: cartState?.cart?.customer.nachname,
            surname: cartState?.cart?.customer.vorname,
            postal: cartState?.cart?.customer.plz,
            city: cartState?.cart?.customer.stadt,
            street: cartState?.cart?.customer.adresse,
            streetTwo: cartState?.cart?.customer.adresszusatz,
          }}
          onSubmit={null}
          className="px-5 py-10 flex flex-col gap-8 md:flex-1 md:items-end justify-center overflow-y-scroll"
        >
          <div className="md:w-10/12">
            <h5 className="font-bold text-2xl text-titleColor flex flex-row items-center justify-between flex-wrap gap-4">
              Informationen zur Bezahlung
              <div className="flex gap-2 justify-center right-5 flex-wrap">
                <Image
                  src="/master.svg"
                  width={38}
                  height={24}
                  alt="Master Card"
                />
                <Image src="/visa.svg" width={38} height={24} alt="Visa" />
                <Image src="/klarna.svg" width={38} height={24} alt="Klarna" />
                <Image src="/paypal.svg" width={38} height={24} alt="Paypal" />
              </div>
            </h5>
            <div className="flex flex-col gap-2 my-5">
              <Input
                name="cardholder"
                type="text"
                label="Kartenhalter"
                value={values.cardholder}
                onChange={handleChange}
              />

              <Input
                name="card"
                type="text"
                label="Kartennummer"
                value={values.card}
                onChange={handleChange}
              />

              <div className="md:grid-cols-2 md:grid md:gap-2">
                <Input
                  name="expyre"
                  type="phone"
                  label="MM/YYYY"
                  value={values.expyre}
                  onChange={handleChange}
                />
                <Input
                  name="code"
                  type="phone"
                  label="Sicherheitcode"
                  value={values.code}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="md:w-10/12">
            <h5 className="flex flex-col md:flex-row font-bold md:items-center justify-between text-2xl gap-4 text-titleColor flex-wrap">
              Rechnungsadresse
              <div className="text-xs font-normal text-gray500 flex gap-2 whitespace-nowrap">
                <input
                  type="radio"
                  name="delivery_address"
                  defaultChecked={true}
                  className="accent-green hidden peer"
                />
                <div className="w-4 h-4 rounded-full border-1 border-gray-300 peer-checked:border-green peer-checked:bg-white p-0.5">
                  <div className="w-full h-full bg-green rounded-full peer-checked:bg-green"></div>
                </div>
                <p>Gleiche wie die Lieferadresse</p>
              </div>
            </h5>
            <div className="flex flex-col gap-2 my-5">
              <Input
                name="city"
                error={touched.city && errors.city}
                label="Berlin"
                type="text"
                value={values.city}
                onChange={handleChange}
              />

              <Input
                name="postal"
                type="text"
                label="PLZ"
                value={values.postal}
                onChange={handleChange}
              />
              <Input
                name="street"
                error={touched.street && errors.street}
                label="Strasse"
                type="text"
                value={values.street}
                onChange={handleChange}
              />
              <Input
                name="streetTwo"
                error={touched.streetTwo && errors.streetTwo}
                label="Hausnummer"
                type="text"
                disabled={true}
                value={values.streetTwo}
                onChange={handleChange}
              />
              <Input
                name="land"
                error={touched.land && errors.land}
                label="Land"
                type="text"
                disabled={true}
                value={values.land}
                defaultValue="Deutschland"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end md:w-10/12">
            <Button
              className="bg-navy rounded-xl flex-1 md:flex-0 md:flex-none md:py-4 md:px-14 text-base text-white py-5"
              disabled={true}
            >
              Bezahlen
            </Button>
          </div>
          <div className="flex-1 text-sm text-gray500 text-center flex md:items-end md:gap-8 flex-col md:flex-row md:w-10/12 md:text-left">
            <div className="text-sm mt-7 md:hidden">
              Alle Rechte vorbehalten © 2024 Deutchland
            </div>
            <Link href="/deutschland" onClick={() => setCartVisible(false)}>
              Deutschland
            </Link>
            <Link
              href="/bedingungen-und-auflagen"
              onClick={() => setCartVisible(false)}
            >
              Bedingungen und Auflagen
            </Link>
          </div>
        </form>
      </div>

      <Modal
        isOpen={isOpen}
        customProps={{
          transition: {
            ease: "easeInOut",
            duration: 0.3,
          },
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        showClose={false}
        customClass="md:w-full"
      >
        <>
          <div className="bg-white sticky top-0 z-10 p-4 flex justify-center items-center w-full">
            <Link
              href="/"
              className="text-titleColor text-lg uppercase font-bold tracking-wider montserrat"
            >
              Apomann
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center w-10/12 text-center">
            <Image
              src={"/500.png"}
              width={550}
              height={235}
              alt={"error"}
              className="w-auto max-h-1/2-screen"
            />
            <h4 className="text-titleColor text-2xl md:text-3xl font-semibold my-3 md:my-8">
              Sorry, unser Fehler!
            </h4>
            <p className="text-sm md:text-base">
              Wir haben ein Serverproblem. Bitte versuchen Sie es später noch
              einmal.
            </p>
          </div>
          <div className="w-10/12 flex flex-col md:flex-row justify-between p-5 text-gray400 text-xs md:text-sm md:gap-8 text-center md:text-left">
            <div className="">Alle Rechte vorbehalten © 2024 Deutchland</div>
            <div className="flex md:gap-8 flex-col md:flex-row">
              <Link href="/deutschland">Deutschland</Link>
              <Link href="/bedingungen-und-auflagen">
                Bedingungen und Auflagen
              </Link>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
}
