export default interface Restaurant {
  id: string;
  image_url: string;
  name: string;
  price: string;
  rating: number;
  review_count: number;
  location: {
    city: string;
    country: string;
  };
  display_phone: string;
}
