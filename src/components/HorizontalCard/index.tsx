import styles from './styles.module.scss';
interface CardProps{
    title:string;
    img:string;
}
export function HorizontalCard({title,img}:CardProps) {
    return (
        <div className={styles.card}>
            <img src={img} />
            <div>
                <h2>{title}</h2>
                <button>See Recipe</button>
            </div>
        </div>
    )
}