// Subtitle Component

import scss from './subtitle.module.scss';

export default function Subtitle({ children }: { children: React.ReactNode }) {
	return <div className={scss.subtitle}>{children}</div>;
}
