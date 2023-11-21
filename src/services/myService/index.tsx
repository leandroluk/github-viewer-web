import { type IMyService } from './types';

const sleep = async (ms = 1000) => {
  await new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

export const myService: IMyService = {
  getMyProfile: async (data) => {
    console.log(data);
    await sleep();
    return {
      id: 'id',
      email: 'email',
      createdAt: new Date(),
      _github: {
        name: 'name',
        login: 'leandroluk',
        followersCount: 123,
        followingCount: 123,
        publicReposCount: 123,
        bio: 'bio',
        email: 'email',
        twitterUsername: 'twitterUsername',
        company: 'company',
        blogUrl: 'blogUrl',
      },
    };
  },
};
