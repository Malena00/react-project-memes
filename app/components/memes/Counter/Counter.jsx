'use client';

import { useState } from 'react';
import Image from 'next/image';
import { pluralize } from '@/utils/strings';
import styles from './Counter.module.css'

export default function Counter() {
    const [touch, setTouches] = useState(0);

    function incrementTouch() {
        setTouches(touch + 1);
    }

    function resetTouch() {
        setTouches(0);
    }

    return (
        <div className={`mt-16 ${styles.counterWrapper}`}>
            <div className={styles.counterIncrementWrapper}>
                <button type="button" onClick={incrementTouch} className={styles.imageButton} aria-label="Не нажимай меня, ха">
                    <Image src="/memes/liloStich/stich.png" alt="Стич" width={200} height={240} priority className={styles.counterImage}/>
                </button>
                <p className={styles.counterText}>Тронула меня. <strong>{touch}{' '}{pluralize(touch, 'раз', 'раза', 'раз')}</strong> Тронула!</p>
            </div>
            <div className={styles.counterResetWrapper}>
                <button type="button" onClick={resetTouch} className={styles.imageButton} aria-label="Нажми меня">
                    <Image src="/memes/liloStich/lilo.png" alt="Лило" width={200} height={240} priority className={styles.counterImage}/>
                </button>
                <p className={styles.counterText}>Не трогала!</p>
            </div>
        </div>
    );
}