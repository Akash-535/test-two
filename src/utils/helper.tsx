import sliderImgOne from "../../public/assets/images/first-image.webp";
import sliderImgTwo from "../../public/assets/gif/gif-1.gif";
import sliderImgThree from "../../public/assets/images/slider-img-three.webp";
import sliderImgFour from "../../public/assets/gif/gif-2.gif";
import {
  SliderFirstIcon,
  SliderFourthIcon,
  SliderSecondIcon,
  SliderTextFour,
  SliderTextOne,
  SliderTextThree,
  SliderTextTwo,
  SliderThirdIcon,
} from "./Icons";

export const DATA_TABLE = ["Name", "Email", "Phone", "Password", "Delete data"];

export const NEW_SWIPER_LIST = [
  {
    image: sliderImgOne,
    textIcon: <SliderTextOne />,
    heading: "AI Chatbots don’t create enterprse-grade",
    spanText: "apps",
    description:
      "Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
  {
    image: sliderImgTwo,
    textIcon: <SliderTextTwo />,
    heading: "AI Chatbots don’t create enterprse-grade",
    description:
      "Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
  {
    image: sliderImgThree,
    textIcon: <SliderTextThree />,
    heading: "AI Chatbots don’t create enterprse-grade",
    description:
      "Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
  {
    image: sliderImgFour,
    textIcon: <SliderTextFour />,
    heading: "AI Chatbots don’t create enterprse-grade",
    description:
      "Bootstrap end to end application package including architecture, tests, infrastructure and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
];

export const SLIDER_ICON_LIST = [
  <SliderFirstIcon />,
  <SliderSecondIcon />,
  <SliderThirdIcon />,
  <SliderFourthIcon />,
];
