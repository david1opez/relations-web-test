import Searchbar from '@/components/searchbar/Searchbar';
import styles from './llamadas.module.css';

export default function Llamadas({ id }: { id:string }) {
    return (
        <div className={styles.container}>
            <Searchbar/>
        </div>
    );
}
