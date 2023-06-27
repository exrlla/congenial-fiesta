import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Ellie from '../../girl_image.jpeg'

// type Props = {
//     posts: string
//     subreddit: string
// }

// const Posts: FunctionComponent<Props> = ({posts, })


export default function FriendIcon() {
    return(
        <div>
            <Image alt="" src={Ellie}></Image>
        </div>
    )
}