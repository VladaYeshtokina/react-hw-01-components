import PropTypes from 'prop-types';
import { statsIcon } from 'utils';
import {
  SectionStats,
  Title,
  List,
  Item,
  Percentage,
  Icon,
} from 'components/Statistics/Statistics.styled';



export const Statistics = ({ title, stats }) => {    
  return (
    <SectionStats>
      <Title>{title}</Title>
      <List>
        {stats.map(({ id, percentage }, idx) => {
          const currentIcon = statsIcon(idx);
          return (
            <Item key={id}>
              <Icon>{currentIcon}</Icon>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </SectionStats>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

