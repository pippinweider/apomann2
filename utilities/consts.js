export const ZipRegExp = /^\d{5}(-\d{4})?$/;
export const EmailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]{0,63}(\.[^<>()[\]\\.,;:\s@"]{0,63})*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const products = [
  {
    title: "Viagra",
    subtitle: "Sildenafil",
    tag: "DER KLASSIKER",
    description:
      "Viagra enthält den Wirkstoff Sildenafil und wird zur Behandlung der erektilen Dysfunktion eingesetzt. Es verbessert die Durchblutung des Penis, was eine Erektion bei sexueller Erregung ermöglicht. Die Wirkung beginnt in der Regel innerhalb von 30 bis 60 Minuten und hält etwa 4 bis 6 Stunden an. Viagra kann einmal täglich nach Bedarf eingenommen werden.",
    images: ["/Viagra_Pfizer_50g.webp"],
    thumbnail: "/Viagra_Pfizer_50g.webp",
    options: [
      {
        name: "Dosage",
        key: "dosage",
        suffix: "mg",
        values: [
          {
            name: 25,
            description: "Ideal für Einsteiger und geringeren Bedarf.",
          },
          {
            name: 50,
            description: "Die Standarddosis für die meisten Anwender.",
          },
          {
            name: 100,
            description: "Für eine stärkere Wirkung bei Bedarf.",
          },
        ],
      },
      {
        name: "Pack size",
        key: "packSize",
        suffix: " St.",
        values: [
          {
            name: "Klein",
            description: "Ideal zum Ausprobieren.",
          },
          {
            name: "Mittel",
            description: "Perfekt für regelmäßigen Gebrauch.",
          },
          {
            name: "Gross",
            description: "Optimal für langfristigen Vorrat.",
          },
        ],
      },
    ],
    variants: [
      {
        dosage: 25,
        packSize: "Klein",
        packSizeValue: 12,
        price: 158.4,
      },
      {
        dosage: 50,
        packSize: "Klein",
        packSizeValue: 12,
        price: 241.5,
      },
      {
        dosage: 100,
        packSize: "Klein",
        packSizeValue: 12,
        price: 189,
      },
      {
        dosage: 25,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 316.8,
      },
      {
        dosage: 50,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 483,
      },
      {
        dosage: 25,
        packSize: "Gross",
        packSizeValue: 48,
        price: 633.5,
      },
      {
        dosage: 50,
        packSize: "Gross",
        packSizeValue: 48,
        price: 966,
      },
      {
        dosage: 100,
        packSize: "Gross",
        packSizeValue: 48,
        price: 378.1,
      },
    ],
    sellingPoints: [
      {
        title: "Wirkbeginn",
        value: "30' – 60'",
      },
      {
        title: "Wirksamkeit",
        value: "80%",
      },
      {
        title: "Wirkdauer",
        value: "2 – 4h",
      },
      {
        title: "Nebenwirkungen",
        value: "15%",
      },
    ],
    faqs: [
      {
        question: "Wie funktioniert Viagra?",
        answer:
          "Viagra erhöht die Durchblutung des Penis, was eine Erektion ermöglicht, wenn Sie sexuell erregt sind.",
      },
      {
        question: "Kann ich Viagra mit Alkohol einnehmen?",
        answer:
          "Es wird empfohlen, den Alkoholkonsum zu begrenzen, da Alkohol die Wirksamkeit von Viagra verringern kann.",
      },
      {
        question: "Brauche ich ein Rezept für Viagra?",
        answer:
          "Ja, Viagra ist verschreibungspflichtig und sollte nur unter ärztlicher Aufsicht eingenommen werden.",
      },
      {
        question: "Kann ich Viagra täglich einnehmen?",
        answer:
          "Viagra ist für die Einnahme nach Bedarf gedacht und sollte nicht häufiger als einmal täglich eingenommen werden.",
      },
      {
        question: "Wirkt Viagra sofort?",
        answer:
          "Viagra beginnt normalerweise innerhalb von 30 bis 60 Minuten zu wirken, es wirkt jedoch nur bei sexueller Erregung.",
      },
    ],
  },
  {
    title: "Sildenafil",
    subtitle: "Sildenafil",
    tag: "DER SPARFUCHS",
    description:
      "Sildenafil ist der aktive Wirkstoff in Viagra und dient der Behandlung der erektilen Dysfunktion. Es hilft, eine Erektion zu erreichen und aufrechtzuerhalten, indem es die Durchblutung des Penis erhöht. Die Wirkung tritt etwa 30 bis 60 Minuten nach der Einnahme ein und hält ungefähr 4 bis 6 Stunden an. Sildenafil wird nach Bedarf eingenommen, üblicherweise einmal täglich.",
    images: ["/Sildenafil_1A_50mg.webp"],
    thumbnail: "/Sildenafil_1A_50mg.webp",
    options: [
      {
        name: "Dosage",
        key: "dosage",
        suffix: "mg",
        values: [
          {
            name: 25,
            description: "Ideal für Einsteiger und geringeren Bedarf.",
          },
          {
            name: 50,
            description: "Die Standarddosis für die meisten Anwender.",
          },
          {
            name: 100,
            description: "Für eine stärkere Wirkung bei Bedarf.",
          },
        ],
      },
      {
        name: "Pack size",
        key: "packSize",
        suffix: " St.",
        values: [
          {
            name: "Klein",
            description: "Ideal zum Ausprobieren.",
          },
          {
            name: "Mittel",
            description: "Perfekt für regelmäßigen Gebrauch.",
          },
          {
            name: "Gross",
            description: "Optimal für langfristigen Vorrat.",
          },
        ],
      },
    ],
    variants: [
      {
        dosage: 25,
        packSize: "Klein",
        packSizeValue: 12,
        price: 50.8,
      },
      {
        dosage: 50,
        packSize: "Klein",
        packSizeValue: 12,
        price: 50.8,
      },
      {
        dosage: 100,
        packSize: "Klein",
        packSizeValue: 12,
        price: 56.6,
      },
      {
        dosage: 25,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 62.4,
      },
      {
        dosage: 50,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 65.8,
      },
      {
        dosage: 100,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 79.71,
      },
      {
        dosage: 50,
        packSize: "Gross",
        packSizeValue: 48,
        price: 131.6,
      },
      {
        dosage: 100,
        packSize: "Gross",
        packSizeValue: 48,
        price: 159.42,
      },
    ],
    sellingPoints: [
      {
        title: "Wirkbeginn",
        value: "30' – 60'",
      },
      {
        title: "Wirksamkeit",
        value: "80%",
      },
      {
        title: "Wirkdauer",
        value: "2 – 4h",
      },
      {
        title: "Nebenwirkungen",
        value: "15%",
      },
    ],
    faqs: [
      {
        question: "Ist Sildenafil dasselbe wie Viagra?",
        answer:
          "Ja, Sildenafil ist der Wirkstoff in Viagra und hat die gleiche Wirkung.",
      },
      {
        question: "Wie nehme ich Sildenafil richtig ein?",
        answer:
          "Nehmen Sie Sildenafil etwa eine Stunde vor dem Geschlechtsverkehr mit einem Glas Wasser ein.",
      },
      {
        question: "Beeinflusst Essen die Wirkung von Sildenafil?",
        answer:
          "Ja, eine fettreiche Mahlzeit kann die Wirkung von Sildenafil verzögern.",
      },
      {
        question: "Wie lange bleibt Sildenafil im Körper?",
        answer:
          "Sildenafil wirkt für etwa 4 bis 6 Stunden, kann jedoch bis zu 24 Stunden im Körper bleiben.",
      },
      {
        question: "Kann ich Sildenafil mit anderen Medikamenten einnehmen?",
        answer:
          "Informieren Sie Ihren Arzt über alle anderen Medikamente, die Sie einnehmen, um Wechselwirkungen zu vermeiden.",
      },
    ],
  },
  {
    title: "Cialis",
    subtitle: "Tadalafil",
    tag: "Die Langzeitlösung",
    description:
      "Cialis enthält den Wirkstoff Tadalafil und wird zur Behandlung der erektilen Dysfunktion verwendet. Es ermöglicht eine verbesserte Durchblutung des Penis und damit eine Erektion bei sexueller Erregung. Die Wirkung von Cialis beginnt nach etwa 30 Minuten und kann bis zu 36 Stunden anhalten, was eine größere Flexibilität bietet. Cialis kann täglich oder nach Bedarf eingenommen werden.",
    images: ["/Cialis_Lilly_10mg.webp"],
    thumbnail: "/Cialis_Lilly_10mg.webp",
    options: [
      {
        name: "Dosage",
        key: "dosage",
        suffix: "mg",
        values: [
          {
            name: 5,
            description: "Perfekt für tägliche Nutzung und moderate Wirkung.",
          },
          {
            name: 10,
            description: "Standarddosis für gelegentliche Nutzung.",
          },
          {
            name: 20,
            description: "Für stärkere Wirkung und gelegentlichen Gebrauch.",
          },
        ],
      },
      {
        name: "Pack size",
        key: "packSize",
        suffix: " St.",
        values: [
          {
            name: "Klein",
            description: "Ideal zum Testen.",
          },
          {
            name: "Mittel",
            description: "Perfekt für regelmäßigen Gebrauch.",
          },
          {
            name: "Gross",
            description: "Optimal für häufigere Nutzung.",
          },
        ],
      },
    ],
    variants: [
      {
        dosage: 5,
        packSize: "Klein",
        packSizeValue: 14,
        price: 67.5,
      },
      {
        dosage: 10,
        packSize: "Klein",
        packSizeValue: 12,
        price: 298.4,
      },
      {
        dosage: 20,
        packSize: "Klein",
        packSizeValue: 12,
        price: 268.6,
      },
      {
        dosage: 5,
        packSize: "Mittel",
        packSizeValue: 28,
        price: 127.3,
      },
      {
        dosage: 10,
        packSize: "Mittel",
        packSizeValue: 28,
        price: 596.9,
      },
      {
        dosage: 20,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 537.1,
      },
      {
        dosage: 5,
        packSize: "Gross",
        packSizeValue: 84,
        price: 299.6,
      },
      {
        dosage: 10,
        packSize: "Gross",
        packSizeValue: 48,
        price: 1193.7,
      },
      {
        dosage: 20,
        packSize: "Gross",
        packSizeValue: 48,
        price: 1074.3,
      },
    ],
    sellingPoints: [
      {
        title: "Wirkbeginn",
        value: "30'",
      },
      {
        title: "Wirksamkeit",
        value: "80%",
      },
      {
        title: "Wirkdauer",
        value: "36h",
      },
      {
        title: "Nebenwirkungen",
        value: "10-15%",
      },
    ],
    faqs: [
      {
        question: "Warum sollte ich Cialis statt Viagra wählen?",
        answer:
          "Cialis hat eine längere Wirkungsdauer von bis zu 36 Stunden, was mehr Flexibilität bietet.",
      },
      {
        question: "Wie nehme ich Cialis ein?",
        answer:
          "Cialis kann nach Bedarf mindestens 30 Minuten vor dem Geschlechtsverkehr eingenommen oder täglich in einer niedrigen Dosierung eingenommen werden.",
      },
      {
        question: "Kann ich Cialis täglich einnehmen?",
        answer:
          "Ja, es gibt eine niedrige tägliche Dosierung (5g), die eine spontane sexuelle Aktivität ermöglicht.",
      },
      {
        question: "Wie wirkt sich Nahrung auf Cialis aus?",
        answer: "Cialis kann unabhängig von den Mahlzeiten eingenommen werden.",
      },
      {
        question: "Wie unterscheidet sich Cialis von anderen ED-Medikamenten?",
        answer:
          "Cialis bietet eine längere Wirkungsdauer und die Möglichkeit einer täglichen Einnahme, was es einzigartig macht.",
      },
    ],
  },
  {
    title: "Tadalafil",
    subtitle: "Tadalafil",
    tag: "Die günstige Langzeitlösung",
    description:
      "Tadalafil ist der Wirkstoff in Cialis und wird zur Behandlung der erektilen Dysfunktion eingesetzt. Es hilft, eine Erektion zu erreichen und aufrechtzuerhalten, indem es die Durchblutung des Penis verbessert. Die Wirkung beginnt etwa 30 Minuten nach der Einnahme und kann bis zu 36 Stunden anhalten, was eine spontane sexuelle Aktivität ermöglicht. Tadalafil kann flexibel entweder täglich in niedriger Dosierung oder nach Bedarf eingenommen werden.",
    images: ["/Tadalafil_1A_10mg.webp"],
    thumbnail: "/Tadalafil_1A_10mg.webp",
    options: [
      {
        name: "Dosage",
        key: "dosage",
        suffix: "mg",
        values: [
          {
            name: 5,
            description: "Perfekt für tägliche Nutzung und moderate Wirkung.",
          },
          {
            name: 10,
            description: "Standarddosis für gelegentliche Nutzung.",
          },
          {
            name: 20,
            description: "Für stärkere Wirkung und gelegentlichen Gebrauch.",
          },
        ],
      },
      {
        name: "Pack size",
        key: "packSize",
        suffix: " St.",
        values: [
          {
            name: "Klein",
            description: "Ideal zum Testen.",
          },
          {
            name: "Mittel",
            description: "Perfekt für regelmäßigen Gebrauch.",
          },
          {
            name: "Gross",
            description: "Optimal für häufigere Nutzung.",
          },
        ],
      },
    ],
    variants: [
      {
        dosage: 5,
        packSize: "Klein",
        packSizeValue: 28,
        price: 50.8,
      },
      {
        dosage: 10,
        packSize: "Klein",
        packSizeValue: 12,
        price: 52.31,
      },
      {
        dosage: 20,
        packSize: "Klein",
        packSizeValue: 12,
        price: 63.11,
      },
      {
        dosage: 5,
        packSize: "Mittel",
        packSizeValue: 84,
        price: 112,
      },
      {
        dosage: 10,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 102.1,
      },
      {
        dosage: 20,
        packSize: "Mittel",
        packSizeValue: 24,
        price: 113.2,
      },
      {
        dosage: 10,
        packSize: "Gross",
        packSizeValue: 48,
        price: 204.2,
      },
      {
        dosage: 20,
        packSize: "Gross",
        packSizeValue: 48,
        price: 226.4,
      },
    ],
    sellingPoints: [
      {
        title: "Wirkbeginn",
        value: "30'",
      },
      {
        title: "Wirksamkeit",
        value: "80%",
      },
      {
        title: "Wirkdauer",
        value: "36h",
      },
      {
        title: "Nebenwirkungen",
        value: "10-15%",
      },
    ],
    faqs: [
      {
        question: "Ist Tadalafil dasselbe wie Cialis?",
        answer:
          "Ja, Tadalafil ist der Wirkstoff in Cialis und hat die gleiche Wirkung.",
      },
      {
        question: "Wie lange vor dem Sex sollte ich Tadalafil einnehmen?",
        answer:
          "Tadalafil sollte mindestens 30 Minuten vor dem Geschlechtsverkehr eingenommen werden.",
      },
      {
        question:
          "Kann ich Tadalafil nehmen, wenn ich andere gesundheitliche Probleme habe?",
        answer:
          "Sprechen Sie mit Ihrem Arzt, um sicherzustellen, dass Tadalafil sicher für Sie ist, insbesondere wenn Sie andere gesundheitliche Probleme haben.",
      },
      {
        question: "Wie oft kann ich Tadalafil einnehmen?",
        answer:
          "Tadalafil kann nach Bedarf oder täglich in einer niedrigeren Dosierung eingenommen werden.",
      },
      {
        question: "Was macht Tadalafil besonders?",
        answer:
          "Die lange Wirkungsdauer von bis zu 36 Stunden bietet mehr Flexibilität und Spontaneität im Vergleich zu anderen ED-Medikamenten.",
      },
    ],
  },
];

export const marqueeItems = [
  "Kostenfreie und schnelle Lieferung",
  "Klimaneutraler Lieferung",
  "Versand nach Deutschland",
];

export const navItems = [
  {
    title: "Prozess",
    section: "prozess",
  },
  {
    title: "Produkte",
    section: "produkte",
  },
  {
    title: "Fragen",
    section: "fragen",
  },
];

export const reviews = [
  {
    stars: 4,
    title: "SEHR GUT",
    description: "Brachte die Funken zurück!",
  },
  {
    stars: 4,
    title: "SEHR GUT",
    description: "Die Angst ist weg und der Spaß ist zurück.",
  },
  {
    stars: 4,
    title: "SEHR GUT",
    description: "Statt mir Gedanken zu machen, habe ich einfach Sex.",
  },
  {
    stars: 4,
    title: "SEHR GUT",
    description: "Einfach nur Danke!",
  },
];

export const faqs = [
  {
    question: "Was ist Erektile Dysfunktion (ED) und wie häufig tritt sie auf?",
    answer:
      "ED ist die Unfähigkeit, eine für den Geschlechtsverkehr ausreichende Erektion zu erreichen oder aufrechtzuerhalten. Sie ist weit verbreitet und betrifft bis zu 30% der Männer über 40 Jahre. ED kann Männer jeden Alters betreffen und ist oft ein normales, behandelbares Gesundheitsproblem.",
  },
  {
    question: "Ist Erektile Dysfunktion ein neues Phänomen?",
    answer:
      "Nein, ED ist kein neues Phänomen. Schon in der Antike gab es Berichte über Männer mit Erektionsproblemen. Antike Ärzte wie Hippokrates und Galen beschrieben Behandlungsmethoden für ED, was zeigt, dass dieses Problem schon seit Jahrtausenden existiert.",
  },
  {
    question: "Was sind die Hauptursachen für ED?",
    answer:
      "ED kann durch physische Ursachen wie Herz-Kreislauf-Erkrankungen, Diabetes und hormonelle Ungleichgewichte, psychische Faktoren wie Stress, Angst und Depression sowie durch ungesunde Lebensgewohnheiten wie Rauchen und übermäßigen Alkoholkonsum verursacht werden.",
  },
  {
    question: "Wie wird Erektile Dysfunktion behandelt?",
    answer:
      "Es gibt viele effektive Behandlungen für ED. Dazu gehören Medikamente wie Viagra, psychologische Beratung, Änderungen des Lebensstils wie Gewichtsreduktion und Raucherentwöhnung sowie physische Therapien. In einigen Fällen können mechanische Hilfsmittel oder chirurgische Eingriffe in Betracht gezogen werden. Sprechen Sie mit einem Arzt, um die beste Behandlung zu finden.",
  },
  {
    question: "Welche Medikamente stehen zur Behandlung von ED zur Verfügung?",
    answer:
      "Zu den häufigsten Medikamenten zur Behandlung von ED gehören PDE5-Hemmer wie Sildenafil (Viagra), Tadalafil (Cialis) und Vardenafil (Levitra). Diese Medikamente erhöhen die Blutzufuhr zum Penis und helfen, eine Erektion zu erreichen und aufrechtzuerhalten.",
  },
  {
    question: "Wie wirken diese Medikamente und wie werden sie eingenommen?",
    answer:
      "PDE5-Hemmer wirken, indem sie die Blutgefäße im Penis entspannen und erweitern, was den Blutfluss verbessert. Sie werden normalerweise 30 bis 60 Minuten vor dem Geschlechtsverkehr eingenommen. Eine sexuelle Stimulation ist notwendig, damit die Medikamente wirksam sind. Die Wirkungsdauer variiert: Sildenafil und Vardenafil wirken etwa 4-6 Stunden, während Tadalafil bis zu 36 Stunden wirksam sein kann.",
  },
  {
    question:
      "Gibt es Nebenwirkungen oder Risiken bei der Einnahme von ED-Medikamenten?",
    answer:
      "Wie bei allen Medikamenten können auch bei PDE5-Hemmern Nebenwirkungen auftreten. Die häufigsten sind Kopfschmerzen, Gesichtsrötung, Verdauungsstörungen, verstopfte Nase und Schwindel. Ernstere Nebenwirkungen wie Sehstörungen oder Priapismus (eine anhaltende, schmerzhafte Erektion) sind selten. Es ist wichtig, diese Medikamente nur nach Rücksprache mit einem Arzt einzunehmen, besonders bei bestehenden gesundheitlichen Problemen oder anderen Medikamenteneinnahmen.",
  },
  {
    question: "Sind die Medikamente zur Behandlung von ED sicher?",
    answer:
      "Ja, diese Medikamente sind sicher, wenn sie gemäß den Anweisungen eines Arztes eingenommen werden. Sie wurden umfassend getestet und von Gesundheitsbehörden zugelassen. Es ist jedoch wichtig, einen Arzt zu konsultieren, um sicherzustellen, dass sie für Ihre spezifische Gesundheitssituation geeignet sind und keine Risiken oder Wechselwirkungen bestehen.",
  },
];

export const steps = [
  "first",
  {
    question:
      "Haben Sie regelmässig Schwierigkeiten eine Erektion zu bekommen oder zu halten?",
    type: "simple",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Hast Du seit mehr als einem Jahr Schwierigkeiten mit der Erektion?",
    type: "simple",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Wie oft hast Du eine für die Penetration und Ausübung des Geschlechtakts ausreichende Erektion erreicht?",
    type: "select",
    options: [
      "(Fast) Nie",
      "Ein paar Mal (weniger als die Hälfte der Zeit)",
      "Manchmal (etwa die Hälfte der Zeit)",
      "Meistens (mehr als die Hälfte der Zeit)",
      "(Fast) Immer",
    ],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Wie oft kannst Du die Erektion während des Geschlechtsakts aufrechterhalten?",
    type: "select",
    options: [
      "(Fast) Nie",
      "Ein paar Mal (weniger als die Hälfte der Zeit)",
      "Manchmal (etwa die Hälfte der Zeit)",
      "Meistens (mehr als die Hälfte der Zeit)",
      "(Fast) Immer",
    ],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Wie zufrieden bist Du mit Deine Sexualleben auch ohne Unterstützung eines Medikaments (z. B. Viagra)?",
    type: "select",
    options: [
      "Kein Geschlechtsverkehr",
      "Überhaupt nicht zufrieden",
      "Eher weniger zufrieden",
      "Teilweise zufrieden",
      "Eher zufrieden",
      "Sehr zufriede",
    ],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Hast Du manchmal keine Probleme mit der Erektion? Beispielsweise beim morgendlichen Erwachen, beim Masturbieren oder beim Geschlechtsverkehr?",
    type: "simple",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Du solltest innerhalb des letzten Jahres einen Blutdrucktest gemacht haben um die folgenden Fragen zu beantworten. Am besten lässt Du regelmäßig Deinen Blutdruck durch Ärzte, Krankenpflegepersonal oder Apotheker messen.",
    type: "prompt",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
    buttonText: "Habe ich verstanden",
  },
  {
    question: "Wie lauten Deine aktuellen Blutdruckwerte?",
    type: "select",
    options: [
      "Niedrig - Unter 90/60",
      "Normal - Zwischen 90/60 - 140/90",
      "Hoch - Über 140/90",
    ],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Wir benötigen Deine Körpergröße und Dein Gewicht, um Deinen aktuellen BMI-Wert zu berechnen.",
    type: "bmi",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
    cmLabel: "Bitte gib Deine Größe in Zentimeter (cm) ein:",
    kgLabel: "Bitte gib Dein Gewicht in Kilogramm ein:",
    buttonText: "Bestätigen",
  },
  {
    question:
      "Trinkst Du regelmäßig größere Mengen Alkohol? (mehr als 1,5 Liter Bier oder 0,75 Liter Wein pro Tag)",
    type: "simple",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question: "Rauchst Du regelmäßig?",
    type: "simple",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Wurde bei Dir eine der folgenden Krankheiten oder medizinischen Ereignisse durch einen Arzt diagnostiziert? Bitte wähle Zutreffende aus.",
    type: "select",
    options: [
      "Keine der genannten Diagnosen.",
      "Allergien oder andere negative Reaktionen auf Medikamente gegen Erektionsstörung",
      "Herzinfarkt oder Herzschmerz (Angina Pectoris)",
      "Schlaganfall oder Mini-Schlaganfall (Transitorisch ischämische Attacke)",
      "Long-QT-Syndrom (Elektrische Herzerkrankung)",
      "Sehstörungen aufgrund von Kreislaufschwierigkeiten",
      "Erbliche Augenerkrankung wie eine Retinitis pigmentosa (RP)",
      "Nieren- oder Leberschäden",
      "Deformation oder Winkelung des Penis (Peyronie)",
      "Sichelzellenerkrankung, Leukämie oder Morbus Kahler (Multiples Myelom)",
      "Blutgerinnungsstörung (Hämophilie)",
      "Aktive oder peptische Magengeschwüre (Magenulkus)",
      "HIV, AIDS und damit verbundene Erkrankungen",
      "Creutzfeldt-Jakob-Krankheit und damit verbundene Erkrankungen (z. B. BSE, TSE)",
    ],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
    multiple: true,
  },
  {
    question: "Hast Du Diabetes?",
    type: "select",
    options: [
      "Nein",
      "Ja, Typ-1-Diabetes",
      "Ja, Typ-2-Diabetes",
      "Prädiabetes",
    ],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Nimmst Du aktuell eines der folgenden Medikamente ein? Bitte wähle Zutreffende aus.",
    type: "select",
    options: [
      "Keine der genannten Medikamente",
      "Andere Medikamente gegen Erektionsstörungen als Viagra/Sildenafil, Cialis/Tadalafil, Levitra/Vardenafil oder Spedra/Avanafil",
      "Nitrate gegen Herzerkrankungen wie zum Beispiel Glycerintrinitrat, Isosorbidmononitrat, Isosorbiddinitrat, GTN Spray/Gel oder Nicorandil",
      "Ritonavir, Indinavir oder Medizin gegen HIV",
      "Riociguat bei hohem Lungenblutdruck",
      "Ketoconazol, Itraconazol oder andere Anti-Pilz Medikamente",
      "Chemische ‚Partydrogen‘, insbesonders Amyl Nitrate (Poppers)",
      "Alpha-Blocker (werden zum Teil bei Bluthochdruck oder Prostatavergrößerung eingesetzt) wie zum Beispiel Alfuzosin, Doxazosin, Indoramin, Prazosin, Tamsulosin oder Terazosin",
      "Starke und moderate CYP3A4-Inhibitoren",
      "Erythromycin, Clarithromycin oder Telithromycin bei bakteriellen Infektionen",
      "Tacrolimus (u. A. nach Organtransplantationen)",
      "Nefazodon (Antidepressivum)",
    ],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
    multiple: true,
  },
  {
    question:
      "Wurde Dir durch einen Mediziner empfohlen, starke körperliche Anstrengungen zu vermeiden? Zum Beispiel wegen ernsthaften Herzerkrankungen oder Herzschmerz (Angina pectoris oder Instabile Angina)?",
    type: "simple",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    question:
      "Bitte gib das Geschlecht an, welches Dir bei Deiner Geburt zugeordnet wurde.",
    type: "select",
    options: ["Männlich", "Weiblich", "Intersexuell"],
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  {
    type: "confirmation",
    question:
      "Bitte bestätige, dass du alle Fragen wahrheitsgemäß beantwortest hast. Für aus falschen Angaben resultierende Gesundheitsfolgen übernehmen wir keine Haftung. Beachte außerdem folgendes:",
    items: [
      "Falls Deine Erektion 4 Stunden oder länger andauern sollte, empfehlen wir Dir umgehend einen Arzt aufzusuchen, um dauerhafte Schäden zu vermeiden.",
      "Nimm nicht mehrere Medikamente gegen Erektionsstörung gleichzeitig ein.",
      "Beachte eine Pause von mindestens 24 Stunden (bei Tadalafil / Cialis von 36 Stunden) zwischen zwei Einnahmen.",
      "Überschreite nicht die Dir vom Arzt verschriebene Dosis.",
    ],
    buttonText: "Ich verstehe und bestätige",
    explanation:
      "Diese Frage hilft uns zu verstehen, ob Du tatsächlich unter Erektionsproblemen leidest. Dies ist wichtig, um die richtige Behandlung für Dich zu finden.",
  },
  "last",
];
