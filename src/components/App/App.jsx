import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import { Profile } from 'components/Profile/Profile';
import { Section } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'FriendsList/FriendsList';

export const App = () => {
    return (
        <Section>
            <Profile data={user} />
            <Statistics title="Upload stats" stats={data}/>
            <FriendsList friends={friends} />
        </Section>
    );
};
