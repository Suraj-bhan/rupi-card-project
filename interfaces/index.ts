export interface OfferCardProps {
  title: { primary: string; secondary: string };
  content?: string;
  img: string;
  direction: "left" | "right";
}
