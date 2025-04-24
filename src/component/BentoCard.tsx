import { ReactNode } from "react";
import { cn } from "tailwind-cn";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
};

const BentoCard = ({ children, className }: BentoCardProps) => {
  return <div className={cn(`${className} rounded-xl`)}>{children}</div>;
};

export default BentoCard;
