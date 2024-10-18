import Image from "next/image";
import Button from "./Button";
import { formatMoney } from "../utilities/global";

export function CartItem({ product, removeFromCart }) {
  return (
    <div className="md:w-10/12 flex flex-col gap-5">
      <div className="text-titleColor flex justify-between">
        <h3 className="text-2xl font-bold">Dein Warenkorb</h3>
        {removeFromCart && (
          <Button
            type="text"
            onClick={() => removeFromCart(product)}
            className="underline"
          >
            Entfernen
          </Button>
        )}
      </div>
      <div className="flex items-center">
        <Image width={83} height={84} src={product.image} alt={product.title} />
        <div className="flex-1 flex gap-2 items-end px-5 text-sm">
          <h3 className="font-bold">{product.title}</h3>
          <p className="text-gray500">{`${product.dosage} ml`}</p>
          <p className="text-gray500">{`${product.packSize} St.`}</p>
        </div>
        <p className="font-bold">{formatMoney(product.price)}</p>
      </div>
      <div className="border-b border-t flex flex-col gap-2 py-4 text-titleColor">
        <div className="flex justify-between">
          <span>Zwischensumme</span>
          <p className="font-semibold">{formatMoney(product.price)}</p>
        </div>
        <div className="flex justify-between">
          <span>Liefergebühr</span>
          <p className="font-semibold">{formatMoney(0)}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-xl">Total</span>
        <p className="font-extrabold text-2xl">{formatMoney(product.price)}</p>
      </div>
    </div>
  );
}
