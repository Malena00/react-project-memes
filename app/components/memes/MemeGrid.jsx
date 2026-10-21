import MemeCard from './MemeCard';

export default function MemeGrid({ memes }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg: grid-cols-3">
            {memes.map((meme) => (<MemeCard key={meme.id} meme={meme} />
            ))}
        </div>
    )
}