import SlideContainer from "@/components/SlideContainer";
import Slide01Intro from "@/lib/slides/01-intro";
import Slide02Motivation from "@/lib/slides/02-motivation";
import Slide03Overview from "@/lib/slides/03-overview";
import Slide04DDPMExplained from "@/lib/slides/04-ddpm-explained";
import Slide05Probabilistic from "@/lib/slides/05-probabilistic";
import Slide06ProjectGoal from '@/lib/slides/06-project-goal';
import Slide07Forward from '@/lib/slides/07-forward';
import Slide08VizForward from '@/lib/slides/08-viz-forward';
import Slide09VizForwardGif from '@/lib/slides/09-viz-forward-gif';
import Slide10Reverse from '@/lib/slides/10-reverse';
import Slide11UNet from '@/lib/slides/11-unet';
import Slide12Training from '@/lib/slides/12-training';
import Slide13VizReverse from '@/lib/slides/13-viz-reverse';
import Slide14VizReverseGif from '@/lib/slides/14-viz-reverse-gif';
import Slide15Evaluation from '@/lib/slides/15-evaluation';
import Slide16MathematicalFormulas from '@/lib/slides/15b-mathematical-formulas';
import Slide17Results from '@/lib/slides/16-results';
import Slide18Comparison from '@/lib/slides/17-comparison';
import Slide19Merci from '@/lib/slides/18-merci';
import { TOTAL_SLIDES } from "@/lib/slides-config";

const SLIDE_COMPONENTS: Record<number, React.ComponentType> = {
  1: Slide01Intro,
  2: Slide02Motivation,
  3: Slide03Overview,
  4: Slide04DDPMExplained,
  5: Slide05Probabilistic,
  6: Slide06ProjectGoal,
  7: Slide07Forward,
  8: Slide08VizForward,
  9: Slide09VizForwardGif,
  10: Slide10Reverse,
  11: Slide11UNet,
  12: Slide12Training,
  13: Slide13VizReverse,
  14: Slide14VizReverseGif,
  15: Slide15Evaluation,
  16: Slide16MathematicalFormulas,
  17: Slide17Results,
  18: Slide18Comparison,
  19: Slide19Merci,
};

export function generateStaticParams() {
  return Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
    id: String(i + 1),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SlidePage({ params }: PageProps) {
  const { id } = await params;
  const slideId = parseInt(id, 10);

  const SlideComponent = SLIDE_COMPONENTS[slideId];

  if (!SlideComponent) {
    return (
      <SlideContainer slideNumber={1}>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-neon-secondary text-2xl">Slide non trouvée</p>
        </div>
      </SlideContainer>
    );
  }

  return (
    <SlideContainer slideNumber={slideId}>
      <SlideComponent />
    </SlideContainer>
  );
}
