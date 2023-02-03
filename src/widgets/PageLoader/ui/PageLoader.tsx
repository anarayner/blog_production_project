import { classNames } from '@/shared/lib/classNames/classNames';
import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames('page__loader', {}, [className])}>
        <div className="lds-circle">
            <div />
        </div>
    </div>
);
