/**
 * Project: lifeplanner-webapp
 * File: empjis
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */

import Image from "@/components/ui/image";

export default function Emojis() {
    return (
        <div className={'flex justify-between items-center gap-8'}>
            <div className={'rounded-full flex items-center justify-center bg-gradient-warning h-20 w-20'}>
                <Image
                    src={'/emojis/winking-face.png'}
                    alt={'winking-face'}
                    width={40}
                    height={40}
                />
            </div>
            <div className={'rounded-full flex items-center justify-center bg-gradient-success h-28 w-28'}>
                <Image
                    src={'/emojis/thinking-emoji.gif'}
                    alt={'thinking-emoji'}
                    width={70}
                    height={70}
                />
            </div>
            <div className={'rounded-full flex items-center justify-center bg-gradient-primary h-20 w-20'}>
                <Image
                    src={'/emojis/laughing-emoji.png'}
                    alt={'laughing-emoji'}
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
}
