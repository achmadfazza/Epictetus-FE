import Link from 'next/link';
import InfoPost from './InfoPost';
export default function CardPost({ thumbnail, ...infoPost }) {
	return (
		<article>
			<Link href='/Detail'>
				<a>
					<img src={thumbnail} alt='' className='w-full rounded mb-4' />
				</a>
			</Link>
			<InfoPost {...infoPost} />
		</article>
	);
}
