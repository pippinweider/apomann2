import Image from "next/image";
import Button from "./Button";
import { CartItem } from "./CartItem";
import { Input } from "./Input";
import { useRouter } from "next/router";
import cn from "classnames";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { ZipRegExp, EmailRegExp } from "../utilities/consts";

export const schema = yup.object().shape({
  vorname: yup.string().required("Required"),
  nachname: yup.string().required("Required"),
  plz: yup.string().matches(ZipRegExp, "Zip is invalid").required("Required"),
  stadt: yup.string().required("Required"),
  adresse: yup.string().required("Required"),
  adresszusatz: yup.string().required("Required"),
  email: yup
    .string()
    .matches(EmailRegExp, "Invalid email")
    .required("Required"),
});

export default function Cart({ setCartVisible, fadeCart, cartState }) {
  const {
    cart: { items },
    removeFromCart,
    updateCustomer,
  } = cartState || {};
  const router = useRouter();
  // Use Formik hook

  const formik = useFormik({
    initialValues: {
      vorname: cartState.cart.customer.vorname || "",
      nachname: cartState.cart.customer.nachname || "",
      plz: cartState.cart.customer.plz || "",
      stadt: cartState.cart.customer.stadt || "",
      adresse: cartState.cart.customer.adresse || "",
      adresszusatz: cartState.cart.customer.adresszusatz || "",
      email: cartState.cart.customer.email || "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      updateCustomer(values);
      fadeCart(false);
      router.push("/quiz");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <div
        className={cn("bg-gray-50 py-10 px-5 md:order-1 md:flex-1", {
          "text-titleColor flex flex-col items-start h-1/2-screen md:min-h-screen mb-5 md:mb-0 ":
            items.length === 0,
        })}
      >
        {items.length === 0 ? (
          <>
            <h3 className="text-2xl font-bold">Ihre Waren</h3>
            <h3 className="md:mt-4 md:mb-2">Ihr Warenkorb ist leer</h3>
            <Button
              type={"link"}
              onClick={() => setCartVisible(false)}
              className="text-gray500 mt-auto md:mt-0"
            >
              Zurück zum Produkt
            </Button>
          </>
        ) : (
          items.map((item) => (
            <CartItem
              key={`cart-item-${item.id}`}
              product={item}
              removeFromCart={removeFromCart}
            />
          ))
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "relative px-5 py-10 flex flex-col gap-8 md:flex-1 md:items-end justify-center overflow-y-scroll",
          {
            "pointer-events-none select-none": items.length === 0,
          }
        )}
      >
        {items.length === 0 && (
          <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-xs z-10"></div>
        )}
        <div className="md:w-10/12">
          <h5 className="font-bold text-2xl text-titleColor">Kontakt</h5>
          <div className="flex flex-col gap-2 my-5 md:grid-cols-2 md:grid">
            <Input
              name="nachname"
              error={touched.nachname && errors.nachname}
              label="Name"
              type="text"
              value={values.nachname}
              onChange={handleChange}
            />
            <Input
              name="vorname"
              error={touched.vorname && errors.vorname}
              label="Vorname"
              type="text"
              value={values.vorname}
              onChange={handleChange}
            />
            <Input
              name="email"
              error={touched.email && errors.email}
              label="Email"
              type="text"
              className="md:col-span-2"
              onChange={handleChange}
              value={values.email}
              wrapperClassName="col-span-2"
            />
          </div>
        </div>
        <div className="md:w-10/12">
          <h5 className="flex flex-col md:flex-row font-bold md:items-center justify-between text-2xl gap-4 text-titleColor">
            Lieferung
            <div className="text-xs font-normal text-gray500 flex gap-2">
              <Image src="/dhl.svg" alt="DHL logo" width={33} height={12} />
              Versand nach Deutschland MIT DHL
            </div>
          </h5>
          <div className="flex flex-col gap-2 my-5">
            <Input
              name="adresse"
              error={touched.adresse && errors.adresse}
              label="Strasse"
              type="text"
              value={values.adresse}
              onChange={handleChange}
            />
            <Input
              name="adresszusatz"
              error={touched.adresszusatz && errors.adresszusatz}
              label="Hausnummer"
              type="text"
              value={values.adresszusatz}
              onChange={handleChange}
            />
            <Input
              name="plz"
              error={touched.plz && errors.plz}
              label="PLZ"
              type="text"
              value={values.plz}
              onChange={handleChange}
            />
            <Input
              name="stadt"
              error={touched.stadt && errors.stadt}
              label="Berlin"
              type="text"
              value={values.stadt}
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
        <div className="flex items-center justify-between md:w-10/12">
          <Button
            type={"link"}
            onClick={() => setCartVisible(false)}
            className="text-gray500 hidden md:block"
          >
            Zurück zum Produkt
          </Button>
          <Button
            className="bg-navy hover:bg-darkNavy rounded-xl flex-1 md:flex-none md:py-4 md:px-14 text-base text-white py-5"
            type="submit"
          >
            Weiter
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
  );
}
