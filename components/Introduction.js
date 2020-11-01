import { useRouter } from "next/router";
import { stepsData } from "../utils/utils";
import Button from "./Button";

export default function Introduction() {
  const router = useRouter();
  return (
    <div className="banner-div lg:px-8 px-5 bg-orange-500">
      <div className="w-1/2 h-64 flex flex-col justify-around">
        <h1 className="text-orange-900 lg:text-4xl text-3xl">Petfinder</h1>
        <p className="text-white font-medium lg:text-2xl text-xl mt-5 pr-6">
          ¿Perdiste a tu mascota o encontraste a una?
        </p>
        <p className="text-white font-medium lg:text-2xl text-xl mb-5 pr-6">
          Publicala y contactate por Whatsapp con la otra persona
        </p>
        <div className="lg:w-3/5 flex-wrap flex justify-between">
          <Button
            spaced
            variant="secondary"
            onClick={() => router.push("/api/login")}
          >
            Iniciar sesión
          </Button>
          <Button
            spaced
            variant="secondary"
            onClick={() => router.push("/home")}
          >
            Explorar
          </Button>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-2/5 lg:bg-cover bg-contain flex flex-col items-center justify-around"
        style={{ background: "url('/pattern-asset.png')" }}
      >
        {stepsData.map(({ image, text }, idx) => {
          return (
            <div className="flex flex-col items-center" key={text}>
              <div
                className={`lg:w-24 lg:h-24 w-20 h-20 rounded-full my-1 border-solid border-4 ${
                  idx == 1 ? "border-orange-900" : "border-orange-100"
                }`}
                style={{
                  background: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
              <p className="text-orange-900 font-bold text-lg text-center">
                {text}
              </p>
              {idx < stepsData.length - 1 && (
                <div className="border-dashed border-orange-900 border-r-8 w-0 h-10 my-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
