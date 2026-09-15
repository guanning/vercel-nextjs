import { StaticImageData } from "next/image";
import Image from "next/image";

interface IProps{
    imgUrl: StaticImageData;
    altText: string;
    context: string;
}

export default function PageComponent(props:IProps) {
    return (
      <div className="h-screen relative">
        <div className="absolute inset-0 -z-10">
          <Image src={props.imgUrl} alt={props.altText} fill  style={{objectFit: "cover"}}/>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>
        </div>
        <div className="flex justify-center pt-48">
          <h1 className="text-white text-6xl">{props.context}</h1>
        </div>
      </div>
    );
  }