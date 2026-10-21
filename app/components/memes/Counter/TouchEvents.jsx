'use Client';

import Image from 'next/image';
import styles from './TouchEvents.module.css';
import { touchEvents } from '@data/touchEvents';
import { event } from 'next/dist/build/output/log';

export default function TouchEvents( {touch} ) {
    const activeEvents = touchEvents.filter(
        (event) => touch >= event.at
    );

    return (
        <div>
            
        </div>
    );
}