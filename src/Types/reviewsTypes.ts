export interface ReviewsProps {
  reviews: SingleReview[];
}

export interface SingleReview {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
  prevPerson?: () => void;
  nextPerson?: () => void;
}
