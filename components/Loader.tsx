import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LoaderProps {
  animationData: any;
}

const Loader: React.FC<LoaderProps> = ({ animationData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        anim.destroy();
      };
    }
  }, [animationData]);

  return (
    <div className="flex items-center justify-center bg-[#0A192F]">
      <div ref={containerRef} className="w-full h-screen" />
    </div>
  );
};

export default Loader;
