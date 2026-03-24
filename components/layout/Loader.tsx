import { useEffect, useRef } from "react";

interface LoaderProps {
  animationData: object;
}

const Loader: React.FC<LoaderProps> = ({ animationData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: { destroy: () => void } | undefined;

    const initAnimation = async () => {
      const lottie = (await import("lottie-web")).default;

      if (!containerRef.current) return;

      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    };

    void initAnimation();

    return () => {
      animation?.destroy();
    };
  }, [animationData]);

  return (
    <div className="flex items-center justify-center bg-[#0A192F]">
      <div ref={containerRef} className="w-full h-screen" />
    </div>
  );
};

export default Loader;
