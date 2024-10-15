import { useState } from "react";
import { StickyNav } from "../components/StickyNav";
import { CartErrorModal } from "../components/CartErrorModal";
import { Footer } from "../components/Footer";
import AnimatedBlock from "../components/AnimatedBlock";

export default function Deutschland({ setCartVisible, cartState }) {
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
          <h3 className="text-3xl font-bold mb-4">Datenschutzerklärung</h3>
          Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Diese
          Datenschutzerklärung erläutert, wie wir Ihre Daten erheben,
          verarbeiten und schützen, wenn Sie unsere Website nutzen und unsere
          Dienstleistungen in Anspruch nehmen. Wir halten uns dabei an die
          Vorgaben der Datenschutz-Grundverordnung (DSGVO) und anderer geltender
          Datenschutzvorschriften.
          <div className="py-7">
            <ol className="flex flex-col gap-4">
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">
                  1. Verantwortlicher
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    Der Verantwortliche für die Datenverarbeitung auf dieser
                    Website ist:
                  </div>
                  <div>Apomann GmbH Zweigstelle Berlin</div>
                  <div>Schönhauser Allee 9</div>
                  <div>10119 Berlin</div>
                  <div>+493087482903</div>
                </div>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">
                  2. Erhebung und Speicherung personenbezogener Daten
                </div>
                <div className="mb-4">
                  Wir erheben und speichern personenbezogene Daten, wenn Sie
                  unsere Website besuchen oder unsere Dienstleistungen nutzen.
                  Zu den personenbezogenen Daten gehören:
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-8 mb-4">
                  <li>
                    <b>Stammdaten</b> (z. B. Name, Adresse, E-Mail-Adresse,
                    Telefonnummer)
                  </li>
                  <li>
                    <b>Gesundheitsdaten</b> (z. B. Angaben zu Symptomen,
                    ärztliche Verordnungen, Rezepte)
                  </li>
                  <li>
                    <b>Zahlungsdaten</b>Zahlungsdaten (z. B. Bankverbindung,
                    Kreditkartendaten)
                  </li>
                  <li>
                    <b>Nutzungsdaten</b>Nutzungsdaten (z. B. IP-Adresse,
                    Browserinformationen, Zugriffszeiten)
                  </li>
                </ul>
                <div className="mb-4">Die Erhebung dieser Daten erfolgt:</div>
                <ul className="flex flex-col gap-2 list-disc pl-8">
                  <li>Bei der Registrierung auf unserer Website.</li>
                  <li>
                    Im Rahmen der medizinischen Beratung oder beim Ausfüllen von
                    Gesundheitsfragebögen.
                  </li>
                  <li>
                    Bei der Bestellung von Medikamenten und anderen Produkten.
                  </li>
                  <li>
                    Automatisch beim Besuch unserer Website (z. B. durch
                    Cookies).
                  </li>
                </ul>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">
                  3. Zweck der Datenverarbeitung
                </div>
                <div className="mb-4">
                  Ihre personenbezogenen Daten werden für folgende Zwecke
                  verarbeitet:
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-8 mb-4">
                  <li>
                    <b>Bereitstellung unserer Dienstleistungen</b>: Um
                    medizinische Beratungen anzubieten und die Lieferung von
                    Medikamenten sicherzustellen.
                  </li>
                  <li>
                    <b>Vertragsabwicklung</b>: Zur Durchführung des
                    Vertragsverhältnisses, einschließlich der Bearbeitung von
                    Bestellungen und Zahlungen.
                  </li>
                  <li>
                    <b>Erfüllung rechtlicher Verpflichtungen</b>: Zur Einhaltung
                    gesetzlicher Anforderungen, insbesondere in Bezug auf die
                    Dokumentation von Gesundheitsdaten und
                    Medikamentenverordnungen.
                  </li>
                  <li>
                    <b>Werbung und Marketing</b>: Gegebenenfalls nutzen wir Ihre
                    Daten, um Ihnen Informationen über ähnliche Produkte und
                    Dienstleistungen zukommen zu lassen, wenn Sie dem zugestimmt
                    haben.
                  </li>
                </ul>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">
                  4. Rechtsgrundlage der Verarbeitung
                </div>
                <div className="mb-4">
                  Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf
                  folgenden Rechtsgrundlagen:
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-8 mb-4">
                  <li>
                    <b> Art. 6 Abs. 1 lit. a DSGVO</b> (Einwilligung): Wenn Sie
                    uns Ihre Einwilligung zur Verarbeitung Ihrer
                    Gesundheitsdaten oder für Marketingzwecke erteilen.
                  </li>
                  <li>
                    <b>Art. 6 Abs. 1 lit. b DSGVO</b> (Vertragserfüllung): Um
                    den Vertrag über die Bereitstellung unserer Dienstleistungen
                    zu erfüllen.
                  </li>
                  <li>
                    <b>Art. 6 Abs. 1 lit. c DSGVO</b> (rechtliche
                    Verpflichtung): Zur Erfüllung gesetzlicher Pflichten,
                    insbesondere im Bereich der Arzneimittelsicherheit.
                  </li>
                  <li>
                    <b>Art. 6 Abs. 1 lit. f DSGVO</b> (berechtigte Interessen):
                    Um unsere Website und Dienstleistungen zu optimieren und zu
                    sichern.
                  </li>
                </ul>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">
                  5. Weitergabe von Daten
                </div>
                <div className="mb-4">
                  Ihre personenbezogenen Daten werden nicht an Dritte
                  weitergegeben, es sei denn:
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-8 mb-4">
                  <li>Sie haben Ihre ausdrückliche Einwilligung erteilt.</li>
                  <li>
                    Die Weitergabe ist zur Durchführung des Vertrages
                    erforderlich (z. B. Weitergabe an Versanddienstleister).
                  </li>
                  <li>
                    Wir sind gesetzlich dazu verpflichtet (z. B. an
                    Aufsichtsbehörden, Ärzte oder Apotheken).
                  </li>
                  <li>
                    Die Datenverarbeitung erfolgt durch Auftragsverarbeiter, die
                    wir sorgfältig ausgewählt haben und mit denen wir
                    entsprechende Verträge gemäß Art. 28 DSGVO abgeschlossen
                    haben.
                  </li>
                </ul>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">6. Speicherdauer</div>
                <div className="mb-4">
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie
                  dies für die Erfüllung der vertraglichen oder gesetzlichen
                  Verpflichtungen erforderlich ist. Die Speicherdauer richtet
                  sich nach den jeweiligen gesetzlichen Aufbewahrungsfristen,
                  insbesondere im Gesundheits- und Arzneimittelrecht. Sobald die
                  Aufbewahrungsfristen abgelaufen sind, werden die Daten
                  gelöscht.
                </div>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">7. Cookies</div>
                <div className="mb-4">
                  Unsere Website verwendet Cookies, um die
                  Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen
                  bereitzustellen. Cookies sind kleine Textdateien, die auf
                  Ihrem Gerät gespeichert werden. Sie können die Speicherung von
                  Cookies in den Einstellungen Ihres Browsers verhindern oder
                  einschränken, was jedoch zu Funktionseinschränkungen führen
                  kann.
                </div>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">8. Ihre Rechte</div>
                <div className="mb-4">
                  Sie haben nach der DSGVO folgende Rechte in Bezug auf die
                  Verarbeitung Ihrer personenbezogenen Daten:
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-8 mb-4">
                  <li>
                    <b>Recht auf Auskunft</b>: Sie können Auskunft darüber
                    verlangen, welche personenbezogenen Daten wir von Ihnen
                    verarbeiten.
                  </li>
                  <li>
                    <b>Recht auf Berichtigung</b>: Sie haben das Recht, die
                    Berichtigung unrichtiger oder unvollständiger Daten zu
                    verlangen.
                  </li>
                  <li>
                    <b>Recht auf Löschung</b>: Sie können die Löschung Ihrer
                    personenbezogenen Daten verlangen, sofern die gesetzlichen
                    Voraussetzungen erfüllt sind.
                  </li>
                  <li>
                    <b>Recht auf Einschränkung der Verarbeitung</b>: Sie haben
                    das Recht, die Verarbeitung Ihrer Daten unter bestimmten
                    Bedingungen einzuschränken.
                  </li>
                  <li>
                    <b>Recht auf Widerspruch</b>: Sie können der Verarbeitung
                    Ihrer Daten jederzeit widersprechen, wenn die Verarbeitung
                    auf einem berechtigten Interesse beruht.
                  </li>
                  <li>
                    <b>Recht auf Datenübertragbarkeit</b>: Sie haben das Recht,
                    Ihre Daten in einem maschinenlesbaren Format zu erhalten
                    oder an einen anderen Verantwortlichen übertragen zu lassen.
                  </li>
                  <li>
                    <b>Recht auf Widerruf der Einwilligung</b>: Sie können Ihre
                    erteilte Einwilligung zur Datenverarbeitung jederzeit
                    widerrufen, ohne dass die Rechtmäßigkeit der bis zum
                    Widerruf erfolgten Verarbeitung berührt wird.
                  </li>
                </ul>
                <div className="flex flex-col gap-4">
                  <div>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:</div>
                  <div>support@apomann.de</div>
                  <div>Apomann GmbH Zweigstelle Berlin</div>
                  <div>Schönhauser Allee 9</div>
                </div>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">9. Datensicherheit</div>
                <div className="mb-4">
                  Wir setzen technische und organisatorische Maßnahmen ein, um
                  Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu
                  schützen. Dies umfasst Verschlüsselungstechnologien und
                  regelmäßige Sicherheitsüberprüfungen.
                </div>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4">
                  10. Änderungen der Datenschutzerklärung
                </div>
                <div className="mb-4">
                  Wir behalten uns das Recht vor, diese Datenschutzerklärung
                  jederzeit zu ändern, um sie an aktuelle rechtliche
                  Anforderungen oder an Änderungen unserer Leistungen
                  anzupassen. Die jeweils aktuelle Version ist auf unserer
                  Website verfügbar.
                </div>
              </li>
              <li className="border-b-1 pb-4">
                <div className="font-bold text-xl mb-4"> 11. Kontakt</div>
                <div className="mb-4">
                  Wenn Sie Fragen zum Datenschutz oder zu Ihren Rechten haben,
                  können Sie uns jederzeit unter folgenden Kontaktdaten
                  erreichen:
                </div>
                <div className="flex flex-col gap-4">
                  <div>Apomann GmbH Zweigstelle Berlin</div>
                  <div>Schönhauser Allee 9</div>
                  <div>10119 Berlin</div>
                  <div>+493087482903</div>
                  <div>support@apomann.de</div>
                </div>
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
