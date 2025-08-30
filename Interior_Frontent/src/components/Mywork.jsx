import Work from './Work.jsx';
import img1 from '../assets/interiorWork/interior1.webp';
import img2 from '../assets/interiorWork/interior2.webp';
import img3 from '../assets/interiorWork/interior3.webp';
import img4 from '../assets/interiorWork/interior4.webp';
import img5 from '../assets/interiorWork/interior5.webp';
import img6 from '../assets/interiorWork/interior6.webp';
import img7 from '../assets/interiorWork/interior7.webp';
import img8 from '../assets/interiorWork/interior8.webp';
import img9 from '../assets/interiorWork/interior9.webp';
import img10 from '../assets/interiorWork/interior10.webp';
import img11 from '../assets/interiorWork/interior11.webp';
import img12 from '../assets/interiorWork/interior12.webp';

const Mywork = () => {
  const imagesArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  return (
    <Work images={imagesArr} />
  );
};

export default Mywork;
