import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface IArrowButtonProps {
	onClick?: OnClick;
	isOpen?: boolean;
}

export const ArrowButton = (props: IArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${props.isOpen ? styles.container_open : ""}`}
			onClick={props.onClick}>
			<img src={arrow} alt='иконка стрелочки' className={`${styles.arrow} ${props.isOpen ? styles.arrow_open : ""}` } />
		</div>
	);
};