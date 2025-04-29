import styles from './callComponent.module.css';

// COMPONENTS
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

// UTILS
import { calcDuration, parseDate } from '@/utils/dateUtils';

// TYPES
import { CallComponentProps } from './callComponent.interface';

export default function CallComponent({ call, onClick }: CallComponentProps) {
    return (
        <div className={styles.container}>
            {/* Icono de teléfono */}
            <div className={styles.icon}>
                <Icon name="phone" size={24} color="#6CCDEA" />
            </div>

            {/* Título y asistentes */}
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{call?.title || "Discusión sobre diseño de dashboard"}</h3>
                <p className={styles.attendees}>
                    <Icon name="user" size={14} color="#6CCDEA"  /> Asistentes: {call?.attendees?.join(", ") || "Rosalinda Vazquez, Irma Galindo, Antonio Mellado"}
                </p>
            </div>

            {/* Fecha y duración */}
            <div className={styles.durationContainer}>
                <p className={styles.metaItem}>
                    <Icon name="calendar" size={16} color="#6CCDEA"  /> Fecha: {parseDate(call?.startDate)}
                </p>
                <p className={styles.metaItem}>
                    <Icon name="clock" size={16} color="#6CCDEA"  /> Duración: {calcDuration(call?.startDate, call?.endDate)}
                </p>
            </div>

            {/* Botón de detalles */}
            <Button text="Ver detalles" onClick={() => onClick(call?.id || "")} />
        </div>
    );
}