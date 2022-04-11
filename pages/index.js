import React from 'react';
import Link from 'next/link';
const index = () => {
	return (
		<div>
			{/* routing or server side rendering */}
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
				<li>
					<Link href='/logIn'>LogIn</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
			</ul>
			<h1>This is home page</h1>
		</div>
	);
};

export default index;
