export type SNSProvider = 'twitter' | 'github' | 'linkedIn';

type ProfileCreatorParam<T extends SNSProvider> = {
  name: string;
  avatarSrc: string;
  primarySns?: T;
  sns?:
  Partial<Omit<Record<SNSProvider, string>, T>>
  & Pick<Record<SNSProvider, string>, T>;
};

export type ProfileCreator = <T extends SNSProvider>(
  param: ProfileCreatorParam<T>
) => ProfileCreatorParam<T>;
