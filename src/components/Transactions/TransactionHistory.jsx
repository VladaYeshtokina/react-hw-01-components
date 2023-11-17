import PropTypes from 'prop-types';
import {
  Table,
  Title,
  TableRow,
  TableCell,
} from 'components/Transactions/Transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => 
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>        
        )}        
      </tbody>
    </Table>
  );
}


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

