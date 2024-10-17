import EmblaCarousel from '@/components/embla-carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';


const OPTIONS: EmblaOptionsType = { loop: true, dragFree: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => {
  return (
    <>
      Home
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}


export default Home;
