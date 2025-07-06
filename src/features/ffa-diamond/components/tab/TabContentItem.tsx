import Image from "next/image";

import steve from '@/config/assets/png/steve.png';
import styles from './tab.module.css';
import { FfaUsersItemInterface } from "../../interfaces";

type Props = {
    data: FfaUsersItemInterface;
}

const TabContentItem = ({ data }:Props):JSX.Element => {

    const kdr = data.kills / data.deaths;
    const formattedKDR = parseFloat(kdr.toFixed(2));

    return (
        <div className={ `animate-fadeIn ${styles.tabContentBodyItem}` }>
            <p>
                <Image src={ steve } alt="steve head" />
                { data.name }
            </p>
            <p>{ data.kills }</p>
            <p>{ data.deaths }</p>
            <p>{ data.killStreak }</p>
            <p>{ data.deaths !== 0 ? formattedKDR : '0' }</p>
        </div>
    )
}

export { TabContentItem }