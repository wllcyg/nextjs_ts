import Link from "next/link";
import {useRouter} from 'next/router'
export default function Home() {
    const router = useRouter()

    const goOtherPage = () => {
//        router.push('/about')
        router.push({
            pathname: '/blogs/[id]',
            query: {
                id: 222,
                type:'edit'
            }
        })

    }
    return (
        <main>
            <div>
                <Link href='/about'>about</Link>
                {/*//使用另一种方式跳转*/}
                <Link href={{
                    pathname: '/blogs/[id]',
                    query: {
                        id: '12'
                    }
                }}>about</Link>
                <button onClick={goOtherPage}>GO About</button>
            </div>
        </main>
    )
}
