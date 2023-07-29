import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "mah" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptionnal" },
  };

  if (rating < 3) return null;
  return <Image {...emoji[rating]} boxSize={25} />;
};

export default Emoji;
