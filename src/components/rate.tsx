import { Star, StarHalf } from "lucide-react";

interface RateProps {
    rating: number
}

export function Rate ({
    rating
}: RateProps) {
    const fullStars = Math.floor(rating);
    const halfStars = (rating % 1) !== 0 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStars);

    // Instrinct element means start with a capital letter
    const MyStarHalf = () => {
        return (
            <div
                key={Math.random()}
                className="flex items-center relative"
            >
                <Star size={20} fill="#e2e8f0" strokeWidth={0.2} />
                <StarHalf className="absolute right-0" size={20} fill="#ffc633" strokeWidth={0.2} />
            </div>
        )
    }
    
    const stars = [
        Array(fullStars).fill(<Star size={20} fill="#ffc633" strokeWidth={0.2} />),
        Array(halfStars).fill(<MyStarHalf />),
        Array(emptyStars).fill(<Star size={20} fill="#e2e8f0" strokeWidth={0.2} />)
    ]
    
    return (
        <div
            className="flex items-center gap-0.5"
        >
            {stars}
        </div>
    )
}