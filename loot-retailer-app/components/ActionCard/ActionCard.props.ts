export type ActionCardProps = {
  imageHeight: string;
  cardContent: React.ReactNode;
  cardValue: string;
  currentValue: string;
  setValue: (value: string) => void;
  height?: string;
};
