import Link from 'next/link';
import Image from 'next/image';

export default function MemeCard({ meme }) {
    return (
        <Link 
            href={`/memes/${meme.id}`} 
            className="block overflow-hidden rounded-xl border p-4 transition hover:scale-[1.02]"
        >
            <Image 
                src={meme.image}
                alt={meme.title}
                width={400}
                height={200}
                className="mb-3 aspect-square w-full rounded-lg object-cover"
            />
            <h2 className="text-xl font-bold">{meme.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{meme.description}</p>
        </Link>
    );
}