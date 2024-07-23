import one from "@/images/1.svg";
import two from "@/images/2.svg";
import three from "@/images/3.svg";
import four from "@/images/4.svg";

interface Item {
  icon: string;
  text: string;
  classBefore: string;
}

export const ourServicesData: Item[] = [
  {
    icon: one,
    text: "ServicesItems1",
    classBefore:
      "before:w-[170px] before:h-[2px] before:top-[50%] before:left-[-30%] before:[transform:rotate(146deg)]"
  },
  {
    icon: two,
    text: "ServicesItems2",
    classBefore:
      "before:w-[100px] before:h-[2px] before:top-[55%] before:left-[-22%] before:[transform:rotate(170deg)]"
  },
  {
    icon: three,
    text: "ServicesItems3",
    classBefore:
      "before:w-[100px] before:h-[2px] before:top-[15%] before:left-[-25%] before:[transform:rotate(25deg)]"
  },
  {
    icon: four,
    text: "ServicesItems4",
    classBefore:
      "before:w-[170px] before:h-[2px] before:top-[5%] before:left-[-30%] before:[transform:rotate(45deg)]"
  }
];
