import styles from './CardWeapon.module.css';
import weapons from 'assets/json/weapons.json';
import WeaponCard from "components/WeaponCard";

export default function CardWeapon(){
    return(
        <>
            <div className={styles.card_weapon}>
            <h2 className={styles.weapon_title}>Armas</h2>
            </div>

                <ul className={styles.weapons}>
                    {weapons.map((weapon) => (
                        <li key={weapon.id}>
                            <WeaponCard weapon={weapon}/>
                        </li>
                    ))}
                </ul>
        </>
    )
}