import clsx from 'clsx';
import Avatar from '../icon/avatar';
import styles from './AuthorCard.module.css';

export default function AuthorCard({
  profileSrc,
  name,
  sns,
  className,
}: {
  name: string;
  profileSrc?: string;
  sns?: {
    accountName: string;
    href: string;
  };
  className?: string;
}) {
  return (
    <div
      className={clsx('flex items-center justify-between', className)}
      style={{ width: 'fit-content' }}
    >
      {profileSrc ? (
        <img
          className={styles.authorImg}
          src={profileSrc}
          alt={`${name} profile`}
        />
      ) : (
        <Avatar className={styles.authorIcon} />
      )}
      <div className="flex flex-col justify-between ml-2">
        <span className="text-gray-700 font-semibold leading-none cursor-default">
          {name}
        </span>
        {sns ? (
          <a
            className="leading-none"
            target="_blank"
            href={sns.href}
            rel="noreferrer noopener"
          >
            <span className="block mt-2 text-blue-500 text-sm leading-none">
              @
              {sns.accountName}
            </span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
