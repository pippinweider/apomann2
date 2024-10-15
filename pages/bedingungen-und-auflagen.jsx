import { useState } from "react";
import { StickyNav } from "../components/StickyNav";
import { CartErrorModal } from "../components/CartErrorModal";
import { Footer } from "../components/Footer";
import AnimatedBlock from "../components/AnimatedBlock";

export default function BedingungenUndAuflagen({ setCartVisible, cartState }) {
  const [cartError, setCartError] = useState(false);

  const closeCartError = () => {
    setCartError(false);
  };

  const reviewCart = () => {
    setCartError(false);
    setCartVisible(true);
  };

  return (
    <>
      <StickyNav setCartVisible={setCartVisible} cartState={cartState} />
      <div className="flex flex-col items-center py-11 bg-beige min-h-screen">
        <AnimatedBlock className="flex flex-col w-10/12 text-titleColor">
          <h3 className="text-3xl font-bold">Bedingungen und Auflagen</h3>
          <div className="py-7">
            <ol className="flex flex-col gap-4">
              <li>
                <div className="font-bold text-xl mb-4">1. Geltungsbereich</div>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
                Bestellungen und die Nutzung der Dienstleistungen, die über
                unsere Website durchgeführt werden. Unsere Leistungen richten
                sich ausschließlich an Verbraucher im Sinne des § 13 BGB, die
                ihren Wohnsitz in Deutschland haben.
              </li>
              <li>
                <div className="font-bold text-xl mb-4">
                  2. Vertragsabschluss
                </div>
                <ol className="flex flex-col gap-2">
                  <li>
                    2.1. Durch das Absenden einer Bestellung auf unserer Website
                    gibt der Kunde ein verbindliches Angebot zum Abschluss eines
                    Kaufvertrages ab.
                  </li>
                  <li>
                    2.2. Der Vertrag kommt erst durch unsere Bestätigung per
                    E-Mail zustande.
                  </li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">
                  3. Voraussetzungen für die Nutzung
                </div>
                <ol className="flex flex-col gap-2">
                  <li>3.1. Der Kunde muss mindestens 18 Jahre alt sein.</li>
                  <li>
                    3.2. Für den Kauf von verschreibungspflichtigen Medikamenten
                    ist eine gültige ärztliche Verordnung erforderlich. Diese
                    kann entweder durch eine Online-Konsultation auf unserer
                    Plattform ausgestellt werden oder durch die Einsendung eines
                    Rezeptes.
                  </li>
                  <li>
                    3.3. Der Kunde erklärt sich damit einverstanden, korrekte
                    Angaben zu seiner Gesundheit zu machen und gegebenenfalls
                    medizinische Fragebögen vollständig auszufüllen.
                  </li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">4. Leistungen</div>
                <ol className="flex flex-col gap-2">
                  <li>
                    4.1. Wir bieten Zugang zu telemedizinischen Beratungen sowie
                    den Kauf von Medikamenten an.
                  </li>
                  <li>
                    4.2. Verschreibungspflichtige Medikamente werden nur bei
                    Vorliegen einer ärztlichen Verordnung ausgeliefert.
                  </li>
                  <li>
                    4.3. Die Entscheidung über die Ausstellung einer Verordnung
                    obliegt dem konsultierten Arzt und kann nach eigenem
                    Ermessen verweigert werden.
                  </li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">
                  5. Preise und Zahlungsbedingungen
                </div>
                <ol className="flex flex-col gap-2">
                  <li>
                    5.1. Alle Preise sind Endpreise inklusive der gesetzlichen
                    Mehrwertsteuer.
                  </li>
                  <li>
                    5.2. Die Zahlung erfolgt per Kreditkarte, PayPal oder
                    anderen auf unserer Website angebotenen Zahlungsmethoden.
                  </li>
                  <li>5.3. Der Kaufpreis ist sofort fällig.</li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">6. Lieferung</div>
                <ol className="flex flex-col gap-2">
                  <li>
                    6.1. Die Lieferung erfolgt ausschließlich innerhalb
                    Deutschlands.
                  </li>
                  <li>
                    6.2. Die Lieferzeit beträgt in der Regel 1-3 Werktage.
                  </li>
                  <li>
                    6.3. Sollte ein bestelltes Produkt nicht verfügbar sein,
                    werden wir den Kunden unverzüglich informieren.
                  </li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">7. Widerrufsrecht</div>
                <ol className="flex flex-col gap-2">
                  <li>
                    7.1. Verbrauchern steht das gesetzliche Widerrufsrecht zu.
                  </li>
                  <li>
                    7.2. Ausschluss des Widerrufsrechts: Das Widerrufsrecht
                    besteht nicht bei der Lieferung von versiegelten Produkten,
                    die aus Gründen des Gesundheitsschutzes oder der Hygiene
                    nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung
                    nach der Lieferung entfernt wurde. Dies gilt insbesondere
                    für Medikamente.
                  </li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">8. Haftung</div>
                <ol className="flex flex-col gap-2">
                  <li>
                    8.1. Wir haften unbeschränkt für Vorsatz und grobe
                    Fahrlässigkeit sowie für Schäden aus der Verletzung des
                    Lebens, des Körpers oder der Gesundheit.
                  </li>
                  <li>
                    8.2. Für einfache Fahrlässigkeit haften wir nur bei der
                    Verletzung wesentlicher Vertragspflichten, deren Erfüllung
                    die ordnungsgemäße Durchführung des Vertrages erst
                    ermöglicht und auf deren Einhaltung der Kunde regelmäßig
                    vertrauen darf (Kardinalpflichten).
                  </li>
                  <li>
                    8.3. Die Haftung ist in diesen Fällen auf den
                    vorhersehbaren, vertragstypischen Schaden begrenzt.
                  </li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">9. Datenschutz</div>
                Die Verarbeitung der personenbezogenen Daten erfolgt gemäß
                unserer Datenschutzerklärung.
              </li>
              <li>
                <div className="font-bold text-xl mb-4">
                  10. Streitbeilegung
                </div>
                <ol className="flex flex-col gap-2">
                  <li>
                    10.1. Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      className="text-blue-500"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    .
                  </li>
                  <li>
                    10.2. Wir sind nicht verpflichtet, an einem
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen, sind hierzu
                    jedoch bereit.
                  </li>
                </ol>
              </li>
              <li>
                <div className="font-bold text-xl mb-4">
                  11. Schlussbestimmungen
                </div>
                <ol className="flex flex-col gap-2">
                  <li>
                    11.1. Es gilt das Recht der Bundesrepublik Deutschland.
                  </li>
                  <li>
                    11.2. Sollten einzelne Bestimmungen dieser AGB ganz oder
                    teilweise unwirksam sein oder werden, bleibt die Wirksamkeit
                    der übrigen Bestimmungen unberührt.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </AnimatedBlock>
      </div>
      <Footer />
      <CartErrorModal
        cartError={cartError}
        reviewCart={reviewCart}
        closeCartError={closeCartError}
      />
    </>
  );
}
