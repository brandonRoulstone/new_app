import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Define the type for the Card data
interface CardType {
  url: string;
  title: string;
  id: number;
}

// Props type for the Card component
interface CardProps {
  card: CardType;
}

const ParallaxCarousel: React.FC = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

export const ReverseParallaxCarousel: React.FC = ( ) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
}

const HorizontalScrollCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-grid-lg-not-animated">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      {/* <div className="text-9xl absolute text-white font-black bg-transparent backdrop-blur-sm">
        ENABLING YOUR VISION
      </div> */}
    </section>
  );
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-screen sm:w-[30rem] w-[20rem] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default ParallaxCarousel;

const cards: CardType[] = [
  {
    url: "https://cdn-images.imagevenue.com/8f/97/b0/ME1902KN_o.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://cdn-images.imagevenue.com/20/f6/49/ME1902KR_o.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://cdn-images.imagevenue.com/df/29/94/ME1902KU_o.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://cdn-images.imagevenue.com/d8/b3/d9/ME1902KX_o.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://cdn-images.imagevenue.com/8a/93/01/ME1902MN_o.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://cdn-images.imagevenue.com/eb/6a/b1/ME1902MP_o.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://cdn-images.imagevenue.com/41/e7/11/ME1902MQ_o.png",
    title: "Title 7",
    id: 7,
  },
];
