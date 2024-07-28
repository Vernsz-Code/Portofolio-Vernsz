import { useTranslation } from "react-i18next";
import { GiAchievement } from "react-icons/gi";

function RewardComponent() {
  const { t } = useTranslation();
  return (
    <div id="reward" className="w-full p-2 sm:p-5 grid grid-flow-row gap-3">
      <span className="w-full font-bold text-xl underline decoration-blue-500 underline-offset-2">
        {t("rewardTitle")}
      </span>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3">
        <div className="w-full bg-blue-600 text-white rounded-md p-3 grid grid-flow-col gap-3 shadow-2xl">
          <div className="w-full grid grid-flow-row">
            <span className="font-bold w-full">LKS - 2024</span>
            <span className="w-full">{t("reward-1")}</span>
          </div>
          <div className="w-full flex items-center justify-center">
            <GiAchievement className=" text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardComponent;
