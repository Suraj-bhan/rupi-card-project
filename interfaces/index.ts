export interface OfferCardProps {
  title: { primary: string; secondary: string };
  content?: string;
  img: string;
  direction: "left" | "right";
}

export interface AppCardProps {
  title: { primary: string; secondary: string };
  content?: string;
  img: string;
}

export interface InfoCardProps {
  title: string;
  content?: string;
  img: string;
  secondaryImg?: string;
  direction: "left" | "right";
}
