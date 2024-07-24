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
    text: "servicesItems1"
  },
  {
    icon: two,
    text: "servicesItems2"
  },
  {
    icon: three,
    text: "servicesItems3"
  },
  {
    icon: four,
    text: "servicesItems4"
  }
];
