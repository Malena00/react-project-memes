import { notFound} from 'next/navigation';
import Link from 'next/link';
import { memes } from '../../data/memes';
import Counter from '../../components/memes/Counter/Counter';

export default async function MemePage({ params }) {
    const { slug } = await params;
    const meme = memes.find((item) => item.id === slug);

    if (!meme) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl p-6">
            <Link 
                href="/"
                className="mb-6 inline-block underline"
            >
                ← Все мемы
            </Link>
            <h1 className="mb-6 text-center text-2xl font-bold">{meme.title}</h1>
            <Counter />
        </main>
    )
}