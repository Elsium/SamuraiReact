import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.nav__main}>
				<p><a href="#" className={style.nav_ref}>
					<svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
						<path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>Profile</span>
				</a></p>
				<p><a href="#" className={style.nav_ref}>
					<svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
						<path d="M12 19C12 14.8 9.2 12 5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M19 19C19 10.6 13.4 5 5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M5 19.01L5.01 18.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>News</span>
				</a></p>
				<p><a href="#" className={style.nav_ref}>
					<div className={style.item}>
						<p>1</p>
						<svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
							<path d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z" stroke="currentColor" stroke-width="1.5"/>
						</svg>
					</div>
					<span>Messages</span>
				</a></p>
				<p><a href="#" className={style.nav_ref}>
					<svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
						<path d="M20 14V3L9 5V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M17 19H18C19.1046 19 20 18.1046 20 17V14H17C15.8954 14 15 14.8954 15 16V17C15 18.1046 15.8954 19 17 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M6 21H7C8.10457 21 9 20.1046 9 19V16H6C4.89543 16 4 16.8954 4 18V19C4 20.1046 4.89543 21 6 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>Music</span>
				</a></p>
			</div>
			<p className={style.nav__settings}>
			<a href="#" className={style.nav_ref}>
				<svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
					<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<span>Settings</span>
			</a></p>
		</nav>
	);
}
export default Navbar;