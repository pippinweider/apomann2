import { CloseIcon } from "../components/CustomIcons";
import Modal from "../components/Modal";
import Button from "../components/Button";

export const CartErrorModal = ({ cartError, closeCartError, reviewCart }) => (
  <Modal isOpen={cartError} onClose={closeCartError}>
    <div className="overflow-y-scroll p-10 flex flex-col gap-8 flex-1 justify-center text-center">
      <button className="absolute p-5 right-0 top-0" onClick={closeCartError}>
        <CloseIcon />
      </button>
      Da es sich um rezeptpflichtige Medikamente handelt, kann nur ein Produkt
      pro Vorgang bestellt werden. Bitte überprüfe Deinen Warenkorb.
      <Button type={"link"} onClick={reviewCart}>
        Zum Warenkorb
      </Button>
    </div>
  </Modal>
);
