import { BiLinkAlt, BiCurrentLocation, BiLogoTwitter, BiSolidBuildings } from "react-icons/bi"

import { InfoItem, InfoItemProps } from 'components/User/InfoItem';
import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<
  LocalGithubUser,
  'blog' | 'company' | 'location' | 'twitter'
> { }


export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <BiCurrentLocation color='4B6A9B' size={50} />,
      text: location,
    },
    {
      icon: <BiLinkAlt color='4B6A9B' size={50} />,
      text: blog,
      isLink: true,
    },
    {
      icon: <BiLogoTwitter color='4B6A9B' size={50} />,
      text: twitter,
    },
    {
      icon: <BiSolidBuildings color='4B6A9B' size={50} />,
      text: company,
    },
  ]

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
}
