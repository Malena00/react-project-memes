import { memes } from './data/memes';
import MemeGrid from './components/memes/MemeGrid';

export default function HomePage() {
    return (
        <main className="mx-auto max-w-6xl p-6">
            <h1 className="mb-6 text-center text-3xl font-bold">Выбери мем</h1>
            <MemeGrid memes={memes} />
        </main>
    )
}