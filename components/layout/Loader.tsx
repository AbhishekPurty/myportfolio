import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

interface LoaderProps {
  animationData: object;
  onComplete: () => void;
}

const LOADER_PLAYBACK_SPEED = 1.7;

const Loader: React.FC<LoaderProps> = ({ animationData, onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: AnimationItem | null = null;
    let removeCompleteListener: (() => void) | undefined;

    const handleComplete = () => {
      onComplete();
    };

    const initAnimation = async () => {
      const lottie = (await import("lottie-web")).default;

      if (!containerRef.current) return;

      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData,
      });
      animation.setSpeed(LOADER_PLAYBACK_SPEED);
      removeCompleteListener = animation.addEventListener("complete", handleComplete);
    };

    void initAnimation();

    return () => {
      removeCompleteListener?.();
      animation?.destroy();
    };
  }, [animationData, onComplete]);

  return (
    <div className="flex items-center justify-center bg-[#0A192F]">
      <div ref={containerRef} className="w-full h-screen" />
    </div>
  );
};

export default Loader;
