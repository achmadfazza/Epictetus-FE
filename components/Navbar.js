import { useState } from 'react';
import Container from './Container';
import Link from 'next/link';

export default function Navbar() {
	const [dropDown, setDropDown] = useState(false);
	const [offCanvas, setOffCanvas] = useState(false);
	const [search, setSearch] = useState(false);
	const dropDownList = [
		{ Text: 'Internet', href: '/Posts' },
		{ Text: 'Books', href: '/Posts' },
		{ Text: 'Open Source', href: '/Posts' },
	];
	return (
		<nav className='py-10'>
			<Container>
				<div className='flex items-center'>
					<div className='w-3/12 lg:hidden'>
						<button
							onClick={() => {
								setOffCanvas(!offCanvas);
							}}>
							<img src='/burger-icon.svg' alt='burger-icon' />
						</button>
					</div>
					<div className='lg:w-2/12 w-6/12 '>
						<Link href='/'>
							<a className='flex items-center justify-center lg:justify-start'>
								<div className='w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-3 shadow-2xl'>E</div>
								Epictitus
							</a>
						</Link>
					</div>
					<div className='w-3/12 lg:hidden text-right'>
						<button onClick={() => setSearch(!search)}>
							<img src='/searchmobile-icon.svg' alt='box-icon' className='inline-block' />
						</button>
					</div>
					<div
						className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${
							offCanvas ? 'left-0' : '-left-full'
						}`}>
						<button
							className='absolute top-10 right-10 lg:hidden'
							onClick={() => {
								setOffCanvas(false);
							}}>
							<img src='x.svg' alt='' />
						</button>
						<ul className='lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0'>
							<li>
								<Link href='/Posts'>
									<a className='hover:underline'>UI Design</a>
								</Link>
							</li>
							<li>
								<Link href='/Posts'>
									<a className='hover:underline'>Front End</a>
								</Link>
							</li>
							<li>
								<Link href='/Posts'>
									<a className='hover:underline'>Back End</a>
								</Link>
							</li>
							<li className='relative'>
								<a className='hover:underline cursor-pointer flex items-center' onClick={() => setDropDown(!dropDown)}>
									Lainya
									<img src='search-icon.svg' alt='search-icon' />
								</a>
								{dropDown && (
									<ul className='absolute w-[200px] bg-gray-800 rounded shadow-xl mt-4'>
										{dropDownList.map(({ Text, href }) => (
											<li className='border-b border-white/5 hover:bg-gray-700/60 last:border-0 ' key={Text}>
												<Link href={href}>
													<a className='flex py-3 px-6'>{Text}</a>
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						</ul>
					</div>
					<div
						className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${
							search ? 'top-10' : '-top-40'
						}`}>
						<button className='absolute top-3 right-14 lg:hidden' onClick={() => setSearch(false)}>
							<img src='x.svg' alt='x-button' />
						</button>
						<input
							className='bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12'
							placeholder='Search...'
						/>
					</div>
				</div>
			</Container>
		</nav>
	);
}
