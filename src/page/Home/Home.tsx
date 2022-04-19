import { Header } from '../../components';
import React from 'react';
import styles from './Home.module.scss';
const Home = (): JSX.Element => {
	return (
		<div className={styles.home}>
			<Header />
		</div>
	);
};

export default Home;
