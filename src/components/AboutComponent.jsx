import { useTranslation } from "react-i18next";

function AboutComponent() {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-flow-row p-2 sm:p-5">
      <div className="w-full top">
        <span className="font-bold text-xl underline decoration-blue-600 underline-offset-2">
          About
        </span>
      </div>
      <div className="main w-full items-center justify-center flex">
        <div className=" sm:w-3/5 shadow-md p-3 rounded-md text-lg" style={{textAlign: 'center'}}>
          {t("introName")}
          <span className="font-bold underline decoration-blue-500 underline-offset-2">
            Vernsz
          </span>{" "}
          {t("about")}
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
