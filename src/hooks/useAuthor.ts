import type { SNSProvider } from '@/types/author';
import { authorProfile } from 'config/author';

type Result = typeof authorProfile & {
  getSNSHref: (username: string, sns: SNSProvider) => string | null;
};

const getSNSHref: Result['getSNSHref'] = (username: string, sns: SNSProvider) => {
  switch (sns) {
    case 'github':
      return `https://github.com/${username}`;
    case 'linkedIn':
      return `https://www.linkedin.com/in/${username}`;
    case 'twitter':
      return `https://twitter.com/${username}`;
    default:
      return null;
  }
};

export function useAuthor(): Result {
  return {
    ...authorProfile,
    getSNSHref,
  };
}
