import React from 'react';
import Link from 'next/link';
const contact = () => {
	return (
		<div>
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
			<h1>This is contact page</h1>
		</div>
	);
};

export default contact;
