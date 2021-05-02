import type { ProfileCreator } from '@/types/author';

const createProfile: ProfileCreator = (param) => param;

export const authorProfile = createProfile({
  name: '신권철',
  avatarSrc: 'https://miro.medium.com/fit/c/56/56/1*2p_VtjKxp3-KjieddlBYnw.jpeg',
  primarySns: 'github',
  sns: {
    twitter: 'KwonCharles_',
    github: 'kwoncharles',
  },
});
