import { useEffect, useState } from "react";

export default function ToTheTopButton() {
    const [scrolled, setScrolled] = useState('hidden');
    useEffect( () => {
        const onScroll = (e) => window.scrollY > 100 ? setScrolled('block') : setScrolled('hidden');
        window.addEventListener('scroll', onScroll);
    }, [])
    const styles = {
        after: "sticky bottom-[1%] left-[1%] w-10 h-3/4 p-2.5 rounded bg-lightPrimary text-lightBg dark:bg-scndBg/90 dark:text-white"
    }

    function handleClick() {
        window.scroll(0,0);
    }

    return (
        <button onClick={handleClick} className={styles.after + ' ' + scrolled}>^</button>
    )
} 