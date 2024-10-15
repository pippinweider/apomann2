import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { QuizStepBack } from "../components/CustomIcons";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { Input } from "../components/Input";
import { steps } from "../utilities/consts";
import cn from "classnames";
import useViewportHeight from "../utilities/useViewportHeight";

const QuizStepSimple = ({
  question,
  answerEvent,
  goBack,
  answer,
  stepIndex,
  toggleExplanation,
  customStyle,
}) => {
  return (
    <div
      className="flex flex-col h-screen items-center pb-10 pt-14 px-5 relative"
      style={customStyle}
    >
      <div className="flex flex-1 flex-col md:w-10/12 overflow-y-auto scrollbar-none">
        <div className="flex flex-col justify-center items-center gap-4 py-20 md:pt-28 md:pb-48 md:landscape:bottom-48">
          <QuizStepBack
            className="-translate-x-1/2 absolute cursor-pointer left-1/2 top-20 md:top-24 z-10"
            onClick={goBack}
          />
          <h3 className="font-semibold text-lg md:text-2xl text-titleColor">
            {question}
          </h3>
          <button
            className="text-gray500 text-sm underline bg-offwhite"
            onClick={toggleExplanation}
          >
            Erklärung
          </button>
        </div>
        <div className="absolute bottom-6 landscape:bottom-6 md:bottom-10 md:landscape:bottom-28 left-1/2 -translate-x-1/2 flex gap-8 flex-col md:flex-row landscape:flex-row items-center">
          <button
            className={cn(
              "button button--text font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black w-48",
              {
                "bg-black text-white":
                  typeof answer !== "undefined" && answer == true,
                "bg-offwhite text-black hover:bg-gray100":
                  typeof answer == "undefined" || answer == false,
              }
            )}
            onClick={() => answerEvent(true)}
          >
            Ja
          </button>
          <button
            className={cn(
              "button button--text font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black w-48",
              {
                "bg-black text-white":
                  typeof answer !== "undefined" && answer == false,
                "bg-offwhite text-black hover:bg-gray100":
                  typeof answer == "undefined" || answer == true,
              }
            )}
            onClick={() => answerEvent(false)}
          >
            Nein
          </button>
        </div>
      </div>
    </div>
  );
};

const QuizStepSelect = ({
  question,
  options,
  answerEvent,
  goBack,
  selected,
  itemKey,
  stepIndex,
  setCurrentStep,
  toggleExplanation,
  customStyle,
}) => {
  return (
    <div
      className="flex flex-col h-screen items-center pb-10 pt-14 px-5 relative"
      style={customStyle}
    >
      <div className="flex flex-1 flex-col md:w-10/12 overflow-y-auto scrollbar-none">
        <div className="flex flex-col justify-center items-center gap-4 py-20 md:pt-28 md:pb-48 md:landscape:bottom-48">
          <QuizStepBack
            className="-translate-x-1/2 absolute cursor-pointer left-1/2 top-20 md:top-24 z-10"
            onClick={goBack}
          />
          <h3 className="font-semibold text-lg md:text-2xl text-titleColor">
            {question}
          </h3>
          <button
            className="text-gray500 text-sm underline bg-offwhite"
            onClick={toggleExplanation}
          >
            Erklärung
          </button>
          <div
            className={cn(
              "gap-x-8 flex flex-col justify-center pt-10 bg-offwhite",
              {
                "grid grid-cols-1 md:grid-cols-2": options.length > 6,
                "flex flex-col justify-center md:w-1/2": options.length <= 6,
              }
            )}
          >
            {options.map((option, i) => (
              <div
                key={`${itemKey}-o-${i}`}
                className="flex flex-row gap-4 items-center border-t-1 border-gray400 relative text-base py-5 px-10 text-left cursor-pointer"
                onClick={() => answerEvent(option, i)}
              >
                <div className="w-4 h-4 md:w-6 md:h-6 md:p-1 rounded-full border-1 border-gray-300 peer-checked:border-green peer-checked:bg-white p-0.5 shrink-0">
                  {((selected || []).indexOf(option) > -1 ||
                    ((selected || []).length == 0 && i == 0)) && (
                    <div className="w-full h-full bg-green rounded-full peer-checked:bg-green"></div>
                  )}
                </div>
                {option}
              </div>
            ))}
          </div>
        </div>

        <Button
          type="text"
          className="whitespace-nowrap absolute bottom-6 landscape:bottom-6 md:bottom-10 md:landscape:bottom-28 left-1/2 -translate-x-1/2 text-black font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black hover:bg-gray100 bg-offwhite"
          onClick={() => setCurrentStep(stepIndex + 1)}
        >
          Bestätigen
        </Button>
      </div>
    </div>
  );
};

const QuizStepPrompt = ({
  question,
  answerEvent,
  goBack,
  buttonText,
  stepIndex,
  toggleExplanation,
  customStyle,
}) => {
  return (
    <div
      className="flex flex-col h-screen items-center pb-10 pt-14 px-5 relative"
      style={customStyle}
    >
      <div className="flex flex-1 flex-col md:w-10/12 overflow-y-auto scrollbar-none gap-5 items-center">
        <div className="flex flex-col justify-center items-center gap-4 py-20 md:pt-28 md:pb-48 md:landscape:bottom-48">
          <QuizStepBack
            className="-translate-x-1/2 absolute cursor-pointer left-1/2 top-20 md:top-24 z-10"
            onClick={goBack}
          />
          <h3 className="font-semibold text-lg md:text-2xl text-titleColor">
            {question}
          </h3>
          <button
            className="text-gray500 text-sm underline bg-offwhite"
            onClick={toggleExplanation}
          >
            Erklärung
          </button>
        </div>
      </div>
      <Button
        type="text"
        className="whitespace-nowrap absolute bottom-6 landscape:bottom-6 md:bottom-10 md:landscape:bottom-28 left-1/2 -translate-x-1/2 text-black font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black hover:bg-gray100 bg-offwhite"
        onClick={() => answerEvent(true)}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const QuizStepBMI = ({
  question,
  answerEvent,
  goBack,
  buttonText,
  step,
  stepIndex,
  toggleExplanation,
  customStyle,
}) => {
  const [values, setValues] = useState({ cm: "", kg: "" });

  const onInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div
      className="flex flex-col h-screen items-center pb-10 pt-14 px-5 relative"
      style={customStyle}
    >
      <div className="flex flex-1 flex-col md:w-10/12 overflow-y-auto scrollbar-none gap-5 items-center">
        <div className="flex flex-col justify-center items-center gap-4 py-20 md:pt-28 md:pb-48 md:landscape:bottom-48">
          <QuizStepBack
            className="-translate-x-1/2 absolute cursor-pointer left-1/2 top-20 md:top-24 z-10"
            onClick={goBack}
          />
          <h3 className="font-semibold text-lg md:text-2xl text-titleColor">
            {question}
          </h3>
          <button
            className="text-gray500 text-sm underline bg-offwhite"
            onClick={toggleExplanation}
          >
            Erklärung
          </button>
          <div className="flex flex-col gap-4 w-full md:w-8/12 pt-10 justify-center">
            <Input
              onChange={(e) => onInputChange("cm", e.target.value)}
              label={step.cmLabel}
              type="number"
              suffix="CM"
            />
            <Input
              onChange={(e) => onInputChange("kg", e.target.value)}
              label={step.kgLabel}
              type="number"
              suffix="KG"
            />
          </div>
        </div>
      </div>
      <Button
        type="text"
        className="whitespace-nowrap absolute bottom-6 landscape:bottom-6 md:bottom-10 md:landscape:bottom-28 left-1/2 -translate-x-1/2 text-black font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black hover:bg-gray100 bg-offwhite"
        onClick={() => answerEvent(true)}
        disabled={!(values.cm && values.kg)}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const QuizStepConfirmation = ({
  question,
  answerEvent,
  goBack,
  itemKey,
  step,
  stepIndex,
  buttonText,
  toggleExplanation,
  customStyle,
}) => {
  return (
    <div
      className="flex flex-col h-screen items-center pb-10 pt-14 px-5 relative"
      style={customStyle}
    >
      <div className="flex flex-1 flex-col md:w-10/12 overflow-y-auto scrollbar-none gap-5 items-center">
        <div className="flex flex-col justify-center items-center gap-4 py-20 md:pt-28 md:pb-48 md:landscape:bottom-48">
          <QuizStepBack
            className="-translate-x-1/2 absolute cursor-pointer left-1/2 top-20 md:top-24 z-10"
            onClick={goBack}
          />
          <h3 className="font-semibold text-lg md:text-2xl text-titleColor">
            {question}
          </h3>
          <button
            className="text-gray500 text-sm underline bg-offwhite"
            onClick={toggleExplanation}
          >
            Erklärung
          </button>
          <div className="flex pt-10 flex-col gap-4 items-start justify-center text-left w-full">
            {step.items.map((option, i) => (
              <div key={`${itemKey}-o-${i}`} className="font-base">
                {option}
              </div>
            ))}
          </div>
        </div>
        <Button
          type="text"
          className="whitespace-nowrap absolute bottom-6 landscape:bottom-6 md:bottom-10 md:landscape:bottom-28 left-1/2 -translate-x-1/2 text-black font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black hover:bg-gray100 bg-offwhite"
          onClick={() => answerEvent(true)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const ProgressBar = ({ currentStep, steps }) => {
  const progress = (currentStep / steps) * 100;
  return (
    <div className="fixed top-0 h-14 w-full bg-offwhite z-10">
      <div
        className="bg-progress duration-500 transition-all z-0 h-full"
        style={{ width: `${progress}%` }}
      ></div>
      <h2 className="z-10 text-titleColor py-4 uppercase font-bold text-base absolute top-1/2 right-1/2 translate-x-1/2 transform -translate-y-1/2 px-2 montserrat">
        Apomann
      </h2>
    </div>
  );
};

export default function Quiz() {
  const [scope, animate] = useAnimate();
  const [popupClosed, setPopupClosed] = useState(true);
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const goBack = () => {
    let newCurrentStep = currentStep - 1;
    if (newCurrentStep < 0) {
      newCurrentStep = 0;
    }
    setCurrentStep(newCurrentStep);
  };

  const answerEvent = (step, answer, answerIndex = false) => {
    let answerContent = answer;

    if (step.type === "select" && step.multiple) {
      if (!answers[currentStep]) {
        answerContent = [answer];
      } else if (answers[currentStep].indexOf(answer) > -1) {
        answerContent = answers[currentStep].filter((a) => a !== answer);
      } else {
        answerContent = [...answers[currentStep], answer];
      }

      if (answerIndex === 0) {
        answerContent = [answer];
      } else {
        answerContent = answerContent.filter((a) => a !== step.options[0]);
      }

      setAnswers({
        ...answers,
        [currentStep]: answerContent,
        goNext: false,
      });
      return;
    } else if (step.type === "select") {
      answerContent = [answer];
      setAnswers({
        ...answers,
        [currentStep]: answerContent,
        goNext: false,
      });
      return;
    }

    if (currentStep === steps.length) {
      setAnswers({
        ...answers,
        [currentStep]: answerContent,
        goNext: false,
      });
      return;
    }

    setAnswers({
      ...answers,
      [currentStep]: answerContent,
      goNext: true,
    });
  };

  const getStepEl = (
    step,
    i,
    setCurrentStep,
    toggleExplanation,
    customStyle
  ) => {
    if (i === 0)
      return (
        <motion.div
          key={`step-${i}`}
          initial={{ translateY: "100%" }}
          animate={{ translateY: 0 }}
          exit={{ translateY: "100%" }}
          transition={{
            type: "easeOut",
            duration: 0.5,
            delay: 0.5,
          }}
          className="flex flex-col items-center pb-10 pt-14 px-5 relative"
          style={customStyle}
        >
          <div className="flex flex-1 flex-col items-center md:w-1/2 overflow-y-auto scrollbar-none">
            <div className="flex flex-col justify-center items-center gap-4 landscape:pt-4 py-20 md:pt-28 md:pb-48 md:landscape:pt-20 md:landscape:bottom-48">
              <QuizStepBack
                className="-translate-x-1/2 absolute cursor-pointer left-1/2 top-20 md:top-24 z-10 invisible"
                onClick={goBack}
              />
              <h2 className="font-semibold text-2xl text-titleColor">
                Jetzt Deine Online-Diagnose starten
              </h2>
              <div className="text-titleColor font-normal text-base flex flex-col gap-4 text-center">
                <p>
                  Medikamente für die Behandlung von Erektile Dysfuntkion sind
                  rezeptpflichtigund bedürfen ärztliche Verschreibung.
                </p>
                <p>
                  Der Diagnose-Prozess findet mit dem nachfolgende Fragebogen
                  komplett online statt und dauert nur wenige Minuten. Du musst
                  mit niemandem sprechen.
                </p>
                <p>
                  Deine Angaben sind bei uns in sicheren Händen. Nur der
                  behandelnde Arzt hat Zugriff auf Deine medizinischen Angaben.
                </p>
              </div>
            </div>
          </div>
          <Button
            type="text"
            className="whitespace-nowrap absolute bottom-6 landscape:bottom-6 md:bottom-10 md:landscape:bottom-28 left-1/2 -translate-x-1/2 text-black font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black hover:bg-gray100 bg-offwhite"
            onClick={() => setCurrentStep(i + 1)}
          >
            Jetz starten
          </Button>
        </motion.div>
      );

    if (i === steps.length - 1)
      return (
        currentStep === i && (
          <motion.div
            key={`step-${i}`}
            initial={{ translateY: "100%" }}
            animate={{ translateY: 0 }}
            exit={{ translateY: "100%" }}
            transition={{
              type: "easeOut",
              duration: 0.5,
              delay: 0.5,
            }}
            className="flex flex-col h-screen items-center pb-10 pt-14 px-5 relative"
            style={customStyle}
          >
            <div className="flex flex-1 flex-col items-center md:w-1/2 overflow-y-auto scrollbar-none">
              <div className="flex flex-col justify-center items-center gap-4 py-20 md:pt-28 md:pb-48 md:landscape:bottom-48">
                <QuizStepBack
                  className="-translate-x-1/2 absolute cursor-pointer left-1/2 top-20 md:top-24 z-10"
                  onClick={goBack}
                />
                <h2 className="font-semibold text-2xl text-titleColor">
                  Vielen Dank für Ihre Antworten
                </h2>
                <div className="text-titleColor font-normal text-base flex flex-col gap-4 text-center">
                  Aufgrund Ihrer Angaben qualifizieren Sie sich für die weitere
                  Behandlung. Als nächstes werden Sie Zahlungsseite
                  weitergeleitet, um den Prozess abzuschließen.
                </div>
              </div>
              <a
                className="whitespace-nowrap absolute bottom-6 landscape:bottom-6 md:bottom-10 md:landscape:bottom-28 left-1/2 -translate-x-1/2 text-black font-semibold text-xl md:text-2xl border rounded-md py-6 landscape:py-6 md:py-8 px-14 md:px-16 border-black hover:bg-opacity-hover"
                href="https://tracker.cmclicks000.com/click.php?key=bcetixzy6o9hugqqpxzn"
              >
                Zum bezhalung
              </a>
            </div>
          </motion.div>
        )
      );

    switch (step.type) {
      case "simple":
        return (
          <QuizStepSimple
            key={`quiz-step-${i}`}
            question={(step || {}).question}
            answerEvent={(answer) => answerEvent(step, answer)}
            goBack={goBack}
            answer={answers[i]}
            step={step}
            stepIndex={i}
            toggleExplanation={toggleExplanation}
            customStyle={customStyle}
          />
        );
      case "select":
        return (
          <QuizStepSelect
            key={`quiz-step-${i}`}
            itemKey={`quiz-step-${i}`}
            question={(step || {}).question}
            options={(step || {}).options || []}
            answerEvent={(answer, answerIndex) =>
              answerEvent(step, answer, answerIndex)
            }
            selected={answers[i]}
            goBack={goBack}
            stepIndex={i}
            setCurrentStep={setCurrentStep}
            toggleExplanation={toggleExplanation}
            customStyle={customStyle}
          />
        );
      case "prompt":
        return (
          <QuizStepPrompt
            key={`quiz-step-${i}`}
            question={(step || {}).question}
            answerEvent={(answer) => answerEvent(step, true)}
            currentStep={currentStep}
            goBack={goBack}
            buttonText={(step || {}).buttonText}
            step={step}
            stepIndex={i}
            toggleExplanation={toggleExplanation}
            customStyle={customStyle}
          />
        );
      case "bmi":
        return (
          <QuizStepBMI
            key={`quiz-step-${i}`}
            question={(step || {}).question}
            answerEvent={(answer) => answerEvent(step, answer)}
            currentStep={currentStep}
            goBack={goBack}
            buttonText={(step || {}).buttonText}
            step={step}
            stepIndex={i}
            toggleExplanation={toggleExplanation}
            customStyle={customStyle}
          />
        );
      case "confirmation":
        return (
          <QuizStepConfirmation
            key={`quiz-step-${i}`}
            itemKey={`quiz-step-${i}`}
            question={(step || {}).question}
            answerEvent={() => answerEvent(step, true)}
            currentStep={currentStep}
            goBack={goBack}
            buttonText={(step || {}).buttonText}
            step={step}
            stepIndex={i}
            toggleExplanation={toggleExplanation}
            customStyle={customStyle}
          />
        );
      default:
        return null;
    }
  };

  const animateStep = (step) => {
    let newTransform = { translateY: 0 };
    if (step > 0) {
      newTransform = { translateY: step * window.innerHeight * -1 };
    }

    animate(
      scope.current,
      {
        translateY: newTransform.translateY,
      },
      {
        ease: "easeInOut",
        duration: 0.8,
      }
    );
  };

  useEffect(() => {
    animateStep(currentStep);
    if (currentStep >= steps.length) {
      router.push("/checkout");
    }
  }, [currentStep]);

  useEffect(() => {
    if (answers.goNext === false) return;
    setCurrentStep(currentStep + 1);
    setAnswers({
      ...answers,
      goNext: false,
    });
  }, [answers]);

  const [showExplanation, setShowExplanation] = useState(false);
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
    setPopupClosed(!!showExplanation);
  };
  useViewportHeight();
  return (
    <div
      className="overflow-hidden overscroll-none bg-offwhite w-full text-center flex flex-col"
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      <ProgressBar currentStep={currentStep} steps={steps.length} />
      <div key={`quiz-steps`} className="flex flex-col" ref={scope}>
        {steps.map((step, i) =>
          getStepEl(step, i, setCurrentStep, toggleExplanation, {
            height: "calc(var(--vh, 1vh) * 100)",
          })
        )}
      </div>
      <Modal
        customClass="md:w-full bottom-0 top-auto p-8 md:p-16 justify-center"
        isOpen={showExplanation}
        onClose={toggleExplanation}
        position="absolute"
        showClose={true}
        isHalfHeight={true}
      >
        {steps[currentStep]?.explanation}
      </Modal>
    </div>
  );
}
