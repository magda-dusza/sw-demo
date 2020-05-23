import * as React from 'react';
import { PersonCardAvatar } from './PersonCardAvatar';
import { PersonCardWrapper, PersonCardStyle } from './PersonCardStyle';
import { useHistory } from 'react-router-dom';
import { Person } from '../../../types/person';

export const PersonCard = (props: Props) => {
    const [person] = React.useState(props.person);
    const history = useHistory();
    const splittedUrl = props.person?.url?.split('/') || [];
    const id = splittedUrl[splittedUrl.length - 2];
    const goToDetails = () => {
        history.push(`/people/${id}`);
    };
    return (
        <PersonCardWrapper>
            <PersonCardStyle onClick={() => goToDetails()}>
                <PersonCardAvatar />
                <span>{person.name}</span>
            </PersonCardStyle>
        </PersonCardWrapper>
    );
};

interface Props {
    person: Person;
}
