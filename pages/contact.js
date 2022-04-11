import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const contact = () => {
	return (
		<div>
			<Head>
				<title>Contact</title>
				{/* meta data is a SEO property */}
				<meta
					name='description'
					content='ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স '
				/>
				<meta
					name='keywords'
					content='Rabbil Hasan,Learn With Rabbil Hasan,Mobile App Development Tutorial Bangla, Web Development Tutorial Bangla, Software Development Tutorial Bangla,Laravel Tutorial bangla, React Tutorial Bangla, Android Tutorial Bangla, React Native Tutorial Bangla, Programming Tutorial Bangla, JavaScript Tutorial Bangla'
				/>
				<meta name='author' content='Rabbil Hasan' />

				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>

				<link rel='manifest' href='https://rabbil.com/manifest.json' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='application-name' content='রাব্বিল হাসান' />
				<meta
					name='apple-mobile-web-app-title'
					content='লার্ন উইথ রাব্বিল হাসান'
				/>
				<meta name='theme-color' content='#FF0000' />

				<meta property='og:site_name' content='Rabbil.com' />
				<meta property='og:url' content='' />
				<meta property='og:title' content='লার্ন উইথ রাব্বিল হাসান' />
				<meta
					property='og:description'
					content='ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স '
				/>
				<meta
					property='og:image'
					content='https://rabbil.com/storage/indexseo.png'
				/>
			</Head>
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
