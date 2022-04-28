import { PropTypes, Container, Label } from 'common';
import { ClearFilterButton } from 'common/components/Button';
import { LoadingIcon } from 'common/components/icons';
import { DebouncedInputStyled } from './Filter.styled';

export const Filter = ({
  isFetching,
  value,
  onChangeFilter,
  onClearFilter,
}) => (
  <>
    <Container>
      <Label label="Find contact by name or phone" htmlFor="filter" />
    </Container>

    <Container>
      <div style={{ display: 'flex', gap: 12, position: 'relative' }}>
        <Label label="Filter">
          <DebouncedInputStyled
            type="text"
            name="filter"
            value={value}
            onChange={onChangeFilter}
            debounceTimeout={300}
          />
        </Label>

        <ClearFilterButton display="if" onClick={onClearFilter}>
          Clear filter
        </ClearFilterButton>

        {isFetching && <LoadingIcon width={36} />}
      </div>
    </Container>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};
