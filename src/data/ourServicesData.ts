import one from "@/images/service-item1.svg";
import two from "@/images/service-item2.svg";
import three from "@/images/service-item3.svg";
import four from "@/images/service-item4.svg";

interface Item {
  icon: string;
  text: string;
}

export const ourServicesData: Item[] = [
  {
    icon: one,
    text: "ServicesItems1"
  },
  {
    icon: two,
    text: "ServicesItems2"
  },
  {
    icon: three,
    text: "ServicesItems3"
  },
  {
    icon: four,
    text: "ServicesItems4"
  }
];
