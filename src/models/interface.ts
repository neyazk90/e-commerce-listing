export interface iCardProps {
    image: string; 
    title: string; 
    price: string | number; 
    category: string; 
    rating?: number | string;
    customStyles?: React.CSSProperties; 
    onCardClick?: () => void; 
}

export interface iTitleProps {
    heading: string; 
    subHeading?: string; 
    color?: string; 
    bold?: boolean; 
    headingElement?: keyof JSX.IntrinsicElements; 
    subHeadingElement?: keyof JSX.IntrinsicElements; 
}

export interface iProduct {
    id: number;
    title: string; 
    image: string;
    category: string;
    price: number;
    description?: string;
    rating: {
      rate: number; 
      count: number; 
    };
}
export interface iProductModalProps {
    selectedProduct: iProduct;
    closeModalHandler: () => void;
  }