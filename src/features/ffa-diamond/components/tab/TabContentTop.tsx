import { FfaUsersItemInterface, Icategories } from "../../interfaces";
import { TabContentTopItem } from './TabContentTopItem';

import styles from './tab.module.css';

type Props = {
    category: Icategories;
}

const TabContentTop = ({ category }:Props):JSX.Element => {
    return (
        <div className={ styles.tabContentTop }>
            {food.map((data, i) => (
                <TabContentTopItem data={ data } i={ i } key={ i } />
            ))}
        </div>
    )
}

/**
 * ==============   Data   ================
 */

const food: FfaUsersItemInterface[] = [
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Rompepitas',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Killer',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Sqmmo',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'Hakeka',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Emy',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Bbyad',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'deep',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
    {
        id:          1,
        uuid:        '2',
        name:        'Jhosuapp',
        dateCreated: 'string',
        last_online: 'string',
        kitData:     'string',
        kills:       10,
        deaths:      10,
        killStreak:  10,
        bestStreak:  10,
        time:        'string',
        weather:     false,
        killsVisibility: 'string',
    },
]


export { TabContentTop }