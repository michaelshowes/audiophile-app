// Overline Component

import scss from './overline.module.scss';

export default function Overline({ children }: { children: React.ReactNode }) {
	return <div className={scss.overline}>{children}</div>;
}
