import InfoPost from './InfoPost';
import Link from 'next/link';

export default function FeaturedPost() {
	return (
		<article>
			<div className='flex -mx-4 lg:items-center items-start flex-wrap'>
				<div className='px-4 lg:w-8/12 md:w-7/12 w-full mb-4 md:mb-0'>
					<Link href='/Detail'>
						<a>
							<img src='/featured-thumbnail.png' alt='' className='rounded-xl w-full' />
						</a>
					</Link>
				</div>
				<div className='lg:w-4/12 md:w-5/12 w-full px-4'>
					<InfoPost
						category='UI Design'
						date='July 2, 2021'
						title='Understanding color theory: the color wheel and finding complementary colors'
						shortDescription='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. '
						authorAvatar='/author-1.png'
						authorName='Leslie Alexander'
						authorJob='UI Designer'
					/>
				</div>
			</div>
			<hr className='border-white/10 mt-10' />
		</article>
	);
}
