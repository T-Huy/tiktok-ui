import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e8d35122e135e942c73ff5b746bcdc2e.jpeg?lk3s=a5d48078&nonce=92275&refresh_token=97cd7ded73abc29194e3b65de55ccf35&x-expires=1728925200&x-signature=3ialBr0gNBKDuhrVjUa2YgtbDSg%3D&shp=a5d48078&shcp=81f88b70" alt="Ảnh"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
