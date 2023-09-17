import Image from "next/image";

const UserWeatherDayCard = ({ day, index , data, naturalWateringThreshold}: { day: string, index : number , data : any, naturalWateringThreshold:number}) => {

  
  const today = new Date();
  // Sunday - Saturday : 0 - 6
  const todayISO = (today.getUTCDay() + 6) % 7;



  return (
    <div className={`flex flex-col p-2 rounded-md  bg-blue-50 bg-opacity-25  ${index === todayISO && "border-solid border-2 border-gray-300"}`}>
      <div className="relative h-20 w-20 my-3 mx-auto object-contain">
        <Image
          src={  data?.icon ? `https:${data?.icon}` : `/logo.svg`
        }
          alt="Plant Picture"
          fill
          sizes="100%"
          priority
          className="object-contain border-2 border-gray-400 border-b-blue-500  p-1 rounded-full bg-white opacity-85 "
        />
      </div>

      <div className="flex flex-start mt-6">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">{day}</h2>
      </div>
      <p className="flex mt-2 text-[32px] font-extrabold">

        <span className="self-start text-[14px] font-semibold text-gray-600 italic">
          {data?.desc ? `${data?.desc}`: "Wait For It"}
        </span>
      </p>
      <p className="flex mt-2 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold text-gray-600 italic mr-2">
        {typeof data?.precip === "number" ? "Precip. :" : ""}
        </span>

        <span className="self-start text-[14px] font-semibold text-gray-600 italic">
        {typeof data?.precip === "number" ? `${data?.precip} mm`: ""}
        </span>
      </p>
      <p className="flex mt-2 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold text-gray-600 italic mr-2">
          {data?.temp ? "Temp. :" : ""}
        </span>

        <span className="self-start text-[14px] font-semibold text-gray-600 italic">
        {data?.temp ? `${data?.temp} °C`: ""}
        </span>
      </p>
      <div className="relative h-10 w-10 my-3 mx-auto object-contain rounded-full border-2  border-gray-400  opacity-95">
        <Image
          src={typeof data?.precip === "number" && data?.precip >= naturalWateringThreshold ? `/water.svg` :  `/noWater.svg`}
          alt="Drop of Water Picture"
          fill
          sizes="100%"
          priority
          className="object-contain border p-1 rounded-full bg-white"
        />
      </div>

    </div>
  );
};

export default UserWeatherDayCard;
